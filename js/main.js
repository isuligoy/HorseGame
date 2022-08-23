import SetCardGame from "./setCardGame.js"
import HorseGame from "./setGame.js"
import { deck } from "./setCardGame.js"

export default class PlayGame extends SetCardGame{
    constructor(){
        super()
    }
    showTheCardDeck(){
        this.getCards().then(x => console.log(x.cards[0].code))
        // console.log(cardRequest)
    }

    oneStepBack(){
        let stepBack = 0
        let selectDiv = document.querySelectorAll('.theCard')
        console.log(selectDiv)
    }

    destre(){
        console.log(deck)
    }
}




// CREATE GAME AND START DE BOARD
const board = new HorseGame()
// START THE GAME
const prePlay = new SetCardGame()
// START GAME
const startGame = new PlayGame()

//SET BOARD
board.setBoardGame()
// BUTTOM TO START DE GAME
prePlay.getDeckCards()


//GAME
let btn = document.querySelector('button')
btn.addEventListener('click', () => startGame.showTheCardDeck())

// -----------TESTING-----------
// START GAME
startGame.oneStepBack()