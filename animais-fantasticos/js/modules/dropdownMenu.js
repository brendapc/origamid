export default function dropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(e =>{
            menu.addEventListener(e, handleClick)
        })
    })

    function handleClick(event){
        event.preventDefault()
        this.classList.toggle('active')
        console.log(this)
    }
}