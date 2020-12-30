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

        onMouseLeave.tooltipBox = tooltipBox

    }
    const onMouseLeave = {
        handleEvent(){ //tem que ser esse nome
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
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