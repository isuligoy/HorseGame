import SetCardGame from "./setCardGame.js"
import HorseGame from "./setGame.js"


export default class PlayGame extends SetCardGame{
    constructor(){
        super()
        this.win = true
    }

    //CHEEK IF WIN
    winnerOrStop(){
        while(this.win){
            this.showTheCardDeck()
        }
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
            if( col == "0" && row == "0"){
                    const img = document.querySelector('div>img')
                    img.src = cardImg 
                };
            });
        //WHEN PULL MOVE HORES
        setTimeout(() => {
            this.moveHorse(res)
        }, 2000);
        };

        moveHorse(res){
            const cardMark = [document.querySelector(`.${res.suit}`)];
            // cardMark.classList.toggle(`${res.suit}`);
            
            //MOVE THE HORSE
            const horses = [...document.querySelectorAll('.centerCard>img[class]')];


            cardMark.forEach(cards => {
                // const [col,row] = this.coords(cards);
                // if( cardMark ){
                //     col == "0" && row == "0"
                // };
            });

            for (const card of cardMark) {
                const col = card.getAttribute('col');
                const row = card.getAttribute('row');
                console.log(row)

                

                // card.appendChild(newMove)
            };
        }
    
        oneStepBack(){
            let stepBack = 0
            let selectDiv = document.querySelectorAll('.theCard')
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
