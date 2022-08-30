import SetCardGame from "./setCardGame.js"
import HorseGame from "./setGame.js"
import { theCard } from "./setCardGame.js";

export default class PlayGame extends SetCardGame{
    constructor(){
        super()
        this.doesPass = {
            0 : [],
            1 : [],
            2 : [],
            3 : [],
            4 : [],
            5 : [],
            6 : [],
            7 : [],
        };
        this.whichCardShow = 0
        this.num = 0
    }

    showTheCardDeck(){
        this.getCards().then((res) => {
            const code = res.cards;
            for (let value of code) {
                if(this.horseStart.includes(value.code)) {
                    this.showTheCardDeck();
                    break;
                } 
                this.pullCard(res.cards[0]);
            }
        });
    };

    pullCard(res){
        const cardImg = res.image;
        this.cells.forEach(cards => {
            const [col,row] = this.coords(cards);
            if(col == "0" && row == "0"){
                    const img = document.querySelector('div>img');
                    img.src = cardImg;
                };
            });
        //WHEN PULL MOVE HORES
        setTimeout(() => {
            this.moveHorse(res, 1);
            this.checkStepBack(res);
        }, 0);//set the timer
    };

    moveHorse(res, move){
        const cardMark = document.querySelector(`.${res.suit}`);
        let [cardCol,cardRow] = this.coords(cardMark);
        cardMark.classList.toggle(`${res.suit}`);
        this.cells.forEach(cards => {
            //MOVE THE HORSE
            const [col,row] = this.coords(cards)
            if(col == cardCol && row == cardRow+move) {
                    let selected = cardMark.children[0]
                    cards.appendChild(selected)
                    cards.classList.toggle(`${res.suit}`);
                } 
            })
        };

    checkStepBack(res){
        let obj = this.doesPass
        for (const key in obj) {
            if(!obj[key].includes(res.suit)){
                obj[key].push(res.suit);

                if(obj[this.num].length == 4){
                    console.log("first")
                    this.num++ 
                    this.flipTheCard();
                    console.log(this.num)
                };
                break;
            }
            
        };
        // console.log(obj)
    };

    flipTheCard(){
        const flippers = [...document.querySelectorAll('.flipper')];
        let i = this.whichCardShow
        //ADD A SET TIME OUT
        if(flippers[i]){
            flippers[i].classList.add('showCard')
            this.oneStepBack(i)
            this.whichCardShow++
        }
    };
    
    oneStepBack(sel){
        this.moveHorse(theCard[sel], -1)
        this.deletArr(theCard[sel])
    };

    deletArr(res){
        console.log(res.suit)
        let obj = this.doesPass
        for (const key in obj) {
            if(!obj[key].includes(res.suit)){
                let position = obj[key-1].indexOf(res.suit)
                obj[key-1].splice( position, 1 )
                console.log(obj[key])
                console.log(res.suit, position)
                break;
            }
        };
        console.log(obj)
    };
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


// -----------TESTING-----------
//GAME
let btn = document.querySelector('button');
btn.addEventListener('click', () => startGame.showTheCardDeck())
// btn.addEventListener('click', () => startGame.winnerOrStop())
btn.addEventListener('click', () => startGame.inteto())

// START GAME
document.addEventListener('keyup', e => {
    if (e.code === 'Space') {
        startGame.showTheCardDeck()
    }
})

// const arr = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
// console.log(arr)

// arr.splice(2,1)
// console.log(arr)