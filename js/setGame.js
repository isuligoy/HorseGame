export default class HorseGame{
    constructor(){
        this.horseStart = ["JD","JC","JH","JS"]
        this.cardBack = "../img/backCard.jpg"
        this.moves = ["DIAMONDS","SPADES","HEARTS","CLUBS"]
        this.win = true
        this._deck_id = ""
    }

    setBoardGame(){
        for(let i=0; i < 5; i++) {
            for(let j=0; j < 10; j++) {
                this.boardCreate(i,j) 
            }
        }
        this.setBackCards()
    }

    boardCreate(i,j){
        let slowDownHourse = document.querySelector('.board')
        let divCard = document.createElement('div')
        divCard.setAttribute("col",`${i}`)
        divCard.setAttribute("row",`${j}`)
        divCard.classList.add("centerCard")
        slowDownHourse.appendChild(divCard)
    }

    setBackCards(){//PUT THE STARTER CARDS IN PLACE
        this.cells.forEach(cards => {
            const [col,row] = this.coords(cards)
            for (let i = 0; i < 8; i++) {
                //SET THE HORSES IN DOM
                if(col == i+1 && row == 0){
                    let img = document.createElement('img');
                    img.src = `https://deckofcardsapi.com/static/img/${this.horseStart[i]}.png`;
                    img.classList.add(this.moves[i]);
                    img.setAttribute("draggable","false");
                    cards.classList.toggle(`${this.moves[i]}`);
                    cards.appendChild(img);
                }
                //SET THE BACK CARDS
                if(col == 0 && row == i+1) {
                    //DIV-CONTAINER-FLIPPER
                    let div = document.createElement('div')
                    div.classList.add('flipper')
                    cards.appendChild(div)
                    //FRON&DIV-CONTAINTER-THECARD
                    let img = document.createElement('img')
                    img.src = this.cardBack
                    cards.classList.add("theCard")
                    img.classList.add("frontCard")//FRONT-IMG
                    img.setAttribute("draggable","false");
                    div.appendChild(img)
                }
            }
            //SET BACK-CARD-0,0
            if(col == 0 && row == 0){
                let img = document.createElement('img')
                img.src = this.cardBack
                cards.appendChild(img)
            }
            //SET BUTTON
            if(col == 0 && row == 9){
                let btn = document.createElement('button')
                btn.innerText = 'Start Game'
                cards.appendChild(btn)
            }
        })
    }
    
    get cells(){
        let cells = document.querySelectorAll("div>div")
        return cells
    }

    coords(x) {
        let row = Number(x.getAttribute('row')) 
        let col = Number(x.getAttribute('col'))
        return [col,row]
    }
}