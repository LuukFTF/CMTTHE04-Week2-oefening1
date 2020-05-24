class Bubble {
    name : string = "bubble"
    element : HTMLElement
    posx : number
    posy : number


    constructor() {
        this.element = document.createElement(this.name)
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.element)

        this.element.addEventListener("click", () => this.click())

        this.initLocation()
        
        console.log(this.name + " created")
    }


    click() {
        this.kill()
    }

    kill() {
        this.element.remove()
    }

    initLocation(){
        this.posx = Math.random() * (window.innerWidth - this.element.clientWidth)
        this.posy = Math.random() * (window.innerHeight - this.element.clientHeight)
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}