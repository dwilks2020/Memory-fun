/*constants 
*/ 
const messegeEl = document.getElementById('message')
const cards = document.getElementsByClassName('card');
const board = document.getElementsByClassName('board');
const boardArray =Array.from(cards);
const messegeEl2 = document.getElementById('message2')



const values = ["A","A","B","B","C","C","D","D","E","E","F","F"];

const matchingPair=[
    ["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"]];


/* variables************************************************************************
*/
matches =0;
attempts =0;
firstPick=null;
secondPick =null;
win=false;
CurrentCardValue ="";
firstCardPick=""
secondCardPick=""
let PlayerAttempts = ["","","","","","","","",""];





///

/*
*************************functions  *********************************************************************************
*/


  /*   ******/// Shuffle the cards array//*************** */

function init() {
    let matches = 0;
    let attempts = 0;
    let firstPick = null;
    let secondPick = null;
    let win = false;
    let PlayerAttempts = ["","","","","","","","",""];

    shuffleArray(values);
    console.log("game initialized", "matches", matches = 0, "attempts", attempts = 0);
    assignValues(cards, values);
     render();
}
/*
******************** (Render status updates) ********************************
*/
const render= () => {
    updateMessage();
    updateMessage2();

    };

    /* ********( update messages) *****************************************
*/


const updateMessage = () => {
    if (matches === 6) {
        messegeEl.textContent = "You win!!!";
    } else if (matches >= 4) {
        messegeEl.textContent = "You got this!";
    } else if (matches >= 2) {
        messegeEl.textContent = "Almost there!";
    } else if (matches >= 1) {
        messegeEl.textContent = "Keep going!";
    } else if (matches>=2) {
        messegeEl.textContent = "Let's Go"; 
    } else 
        messegeEl.textContent ="Think you got what it takes?";
    };

    const updateMessage2 = () => {
        if (attempts >= 8) {
            messegeEl2.textContent = "You lose!";
        } else {
            messegeEl2.textContent = `${8 - attempts} attempts`;
        }
    };
//****** (function to assign values to cards)  *****************************************************


const assignValues= (cards ,values)=>
    {


    boardArray.forEach((card, index) => {
        card.textContent = values[index];

    });

    
};

/// **************  function to randomize  *************************************************


function shuffleArray(values) {
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
}



/*  ************  (reset board) *******************/


function resetGame(){
   init();

}



  //*********** (handle click events)**************************
const handleClick = (event) => {

    const clickedCard = event.target;

    if (firstPick || secondPick);
    flipCard(clickedCard);



    if (!firstPick) {
        firstPick = clickedCard;
        CurrentCardValue = clickedCard.innerText;
    } else {
        secondPick = clickedCard;
        CurrentCardValue=clickedCard.innerText;

        checkForMatch();
    }
};

/* ************* (function to flip cards)  */

function flipCard(card) {
    card.classList.add('flipped');
    
}


/*   ************ (Unflip Cards) ******************/

function unFlip(card, delay = 500) {

    setTimeout(() => {
        card.classList.remove('flipped');
    }, delay); 

}
/* *************** (function check for match)*****************************************
*/
function checkForMatch() {
    if (firstPick && secondPick) {
        const firstCardValue = firstPick.innerText;
        const secondCardValue = secondPick.innerText;

        if (firstCardValue === secondCardValue) {
            matches++ && attempts++;
            console.log(matches,"you got a match");
            firstPick=null;
            secondPick=null;
            render();

        } else {
            attempts++;
            unFlip(firstPick);
            unFlip(secondPick);

        
        firstPick = null;
        secondPick = null;
    }}
}




/*
***************** (event Listners) ********************************************************************************
*/
document.addEventListener('DOMContentLoaded', function() {
    init();
});


// ********* click board ******************************************
boardArray.forEach(card => {
    card.addEventListener('click', handleClick);

});

document.getElementById('reset').addEventListener('click', resetGame);

        
