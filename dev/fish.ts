class Fish {
    element : HTMLElement
    posx : number
    posy : number
    huedeg : number



    constructor() {
        this.element = document.createElement("fish")
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.element)

        this.element.addEventListener("click", () => this.kill())

        console.log("Fish was created!")
    }

    kill(){
        console.log("Aargh!")
    }

    move(){
        this.posx = Math.random() * window.innerWidth
        this.posy = Math.random() * window.innerHeight
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }

    changeColor(){
        this.huedeg = Math.random() * 360
        this.element.style.filter = `hue-rotate(${this.huedeg}deg)`
    }
}

for (let i = 0; i < 100; i++) {
let fish = new Fish()
fish.changeColor()
fish.move()
}
