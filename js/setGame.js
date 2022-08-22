export default class HorseGame{
    constructor(){
        this.horseStart = ["JD","JC","JH","JS"]
        this.cardBack = "../img/backCard.jpg"
        
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
        // divCard.className = `r${i} c${j}`
        slowDownHourse.appendChild(divCard)
    }

    setBackCards(){//PUT THE STARTER CARDS IN PLACE
        this.cells.forEach(cards => {
            const [col,row] = this.coords(cards)
            for (let i = 0; i < 9; i++) {
                //SET THE BACK CARDS
                if( col == 0 && row == i) {
                    //DIV
                    let div = document.createElement('div')
                    cards.appendChild(div)

                    //BACK
                    let img = document.createElement('img')
                    img.src = this.cardBack
                    img.classList.add("frontCard")
                    cards.classList.add("backCard")
                    div.appendChild(img)

                    
                }
                //SET THE HORSES IN DOM
                if( col == i+1 && row == 0 ){
                    let img = document.createElement('img')
                    img.src = `https://deckofcardsapi.com/static/img/${this.horseStart[i]}.png`
                    cards.appendChild(img)
                }
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



