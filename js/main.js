import HorseGame from "./setGame.js"

// START THE GAME
export default class StartGame extends HorseGame{
    constructor(){
        super()
        this.deck_id = ''
    }
    //GET NEW DECK OF CARDS SHUFFLED
    async getDeckCards(){
        try{
            const info = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            const data = await info.json()
            this.deck_id = data.deck_id
            this.getCards(8)
        }catch(err){
            throw new (err)
        }
    }

    async getCards(num=1){
        const card = await fetch(`https://www.deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=${num}`)
        let pullCard = await card.json()
        if(num == 8)  this.setGateCards(pullCard.cards)
        return pullCard
    }

    setGateCards(cardImg){
        let newCards = []
        for (let value of cardImg) {
            if(this.horseStart.includes(value.code)){
                cardImg.slice(cardImg[0].code,1)
                this.getCards().then((x)=>newCards.push(x.cards[0]))
            }else{
                newCards.push(value)
            }
        }
        //PUT CARDS IN DOM
        let div = document.querySelectorAll('.centerCard>div')
        let i = 0
        setTimeout(()=>{        
            div.forEach(cards => {
                    let img = document.createElement('img')
                    img.src = `${newCards[i].image}`
                    img.classList.add("backCard")
                    cards.appendChild(img)
                    i++
                }
        )},500)
    }

}








// CREATE GAME AND START DE BOARD
const board = new HorseGame()
// START THE GAME
const prePlay = new StartGame()


//SET BOARD
board.setBoardGame()
// BUTTOM TO START DE GAME
prePlay.getDeckCards()
