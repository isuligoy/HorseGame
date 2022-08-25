import SetCardGame from "./setCardGame.js"
import HorseGame from "./setGame.js"


export default class PlayGame extends SetCardGame{
    constructor(){
        super()
        this.win = false
    }

    showTheCardDeck(){
        const horses = [...document.querySelectorAll('.centerCard>img[class]')];
        // const int = document.querySelector('.DIAMONDS>img');
        // const classRem = document.querySelector('.DIAMONDS')
        // classRem.classList.toggle("DIAMONDS");
        // const body = document.querySelector('.SPADES')
        // body.appendChild(int);
        // console.log(int)
        // console.log(body)

        this.getCards().then((res) => {
            const pres = res.cards[0].suit;
            const code = res.cards[0].code;
            this.horseStart.forEach(x=>{
                if(x == code) {
                    this.showTheCardDeck()
                } 
            })
            this.PullCard(res,code)
            console.log(code)// BORRAR
            
            // horses.forEach(horses => {
            //     if (horses.className === pres){
            //         // this.moveHorse
            //         console.log(horses.className);//BORRAR
            //     }
            // });
        });
    };

    PullCard(res, code){
        const cardImg = res.cards[0].image;
        this.cells.forEach(cards => {
            const [col,row] = this.coords(cards)
            if( col == "0" && row == "0"){
                    const img = document.querySelector('div>img')
                    img.src = cardImg 
                }
            }) 
            
        };

        moveHorse(){
        
        }
    
        oneStepBack(){
            let stepBack = 0
            let selectDiv = document.querySelectorAll('.theCard')
        }
    
        // canNotBe(){
        //     console.log("Similar")
        //         this.getCards().then((res) => {
        //             return res.cards[0].image
        //         }
        //     );
        // }
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
