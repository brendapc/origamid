export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((tooltip)=>{
        tooltip.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = createTooltip(this)
        tooltipBox.style.top = event.pageY + 'px'
        tooltipBox.style.left = event.pageX + 'px' //pageY e X do mouse

        this.addEventListener('mouseleave', onMouseLeave)
        //this.addEventListener('mousemove', onMouseMove)

        function onMouseLeave(params) {
            tooltipBox.remove()
            this.removeEventListener('mouseleave', onMouseLeave)
        }
    }


    function createTooltip(element) {
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerHTML = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}