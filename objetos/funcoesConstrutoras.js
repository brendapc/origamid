function Dom(element){
    this.grabElement = function () {
        return document.querySelector(element)   
    }

    this.addActive = function () {
        return this.grabElement().classList.add('active')
    }
}

const li = new Dom('li')