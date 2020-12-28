function Elements(element) {
    this.all = function () {
        return document.querySelectorAll(element)
    }
    this.addClass = function () {
        return this.all().forEach((current)=>{
            current.classList.add('active')
        })
    }
}

const li = new Elements('li')