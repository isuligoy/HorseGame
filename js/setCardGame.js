import HorseGame from "./setGame.js"
import PlayGame from "./main.js"
let _deck_id
export let theCard

// START THE GAME
export default class SetCardGame extends HorseGame{
    constructor(){
        super()
    }
    //GET NEW DECK OF CARDS SHUFFLED
    async getDeckCards(){
        try{
            const info = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            const data = await info.json()
            _deck_id = data.deck_id
            // this._deck_id.push(data.deck_id)
            // this._deck_id = data.deck_id
            this.getCards(8)
        }catch(err){
            throw new (err)
        }
    }

    async getCards(num=1){
        const card = await fetch(`https://www.deckofcardsapi.com/api/deck/${_deck_id}/draw/?count=${num}`)
        let pullCard = await card.json()
        if(num == 8) this.setGateCards(pullCard.cards)
        return pullCard
    }
    
    setGateCards(cardImg){
        //LOOK IF YOU HAVE 2 OF THE SAME
        theCard = cardImg
        let newCards = []
        for (let value of cardImg) {
            if(this.horseStart.includes(value.code)){
                cardImg.slice(cardImg[0].code,1)
                this.getCards().then((x)=>newCards.push(x.cards[0]))
            }else{
                newCards.push(value)
            }
        }
        //PUT CARDS IN DOM - BACKCARD
        let div = document.querySelectorAll('.centerCard>div')
        let i = 0
        setTimeout(()=>{        
            div.forEach(cards => {
                    let img = document.createElement('img')
                    img.src = `${newCards[i].image}`
                    img.classList.add("backCard")//BACK-IMG
                    img.setAttribute("draggable","false");
                    cards.appendChild(img)
                    i++
                }
        )},700)
    }
}