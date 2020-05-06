(function () {

    let globalTooltip = null;

    function assignEvents(elements, type, event) {

        for (let i = 0; i < elements.length; i++) {

            elements[i].addEventListener(type, event, false);
        }
    }

    function createTooltip(text, options) {

        let tooltip = document.createElement("div");

        tooltip.className = "tooltip hidden";
        tooltip.appendChild(document.createTextNode(text));
        document.body.appendChild(tooltip);

        tooltip.style.left = options.x + (options.w / 2) - (tooltip.offsetWidth / 2) + "px";
        tooltip.style.top = (options.y - tooltip.offsetHeight - 10) + "px";

        tooltip.classList.remove("hidden");

        globalTooltip = tooltip;

    }

    function showTooltip(e) {

        let options = {
            w: e.target.offsetWidth,
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        };

        let text = e.target.getAttribute("title");
        createTooltip(text, options);
        e.target.removeAttribute("title");
    }

    function removeTooltip(e) {
        e.target.setAttribute("title", globalTooltip.textContent);
        globalTooltip.parentNode.removeChild(globalTooltip);
    }

    function init(elements) {
        assignEvents(elements, "mouseenter", showTooltip);
        assignEvents(elements, "mouseleave", removeTooltip);
    }

    window.t00ltip = init;
})();