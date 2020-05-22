class Game {
    name : string = "Game"
    private elementAmount : number = 100
    private elementAmountShark : number = 10

    constructor() {

        for (let i = 0; i < this.elementAmount; i++)
            new Fish()

        for (let i = 0; i < this.elementAmount; i++)
            new Bubble()

        for (let i = 0; i < this.elementAmountShark; i++)
            new Shark()


    console.log(this.name + " created")
    }
} 

window.addEventListener("load", () => new Game())