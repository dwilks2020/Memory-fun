
/*constants 
*/ 
const messegeEl = document.getElementById('message')
const cards = document.getElementsByClassName('card');
const board = document.getElementsByClassName('board');
const boardArray =Array.from(cards);

console.log(boardArray);
console.log(cards);
console.log(board);

messegeEl.textContent= ("Lets's Begin");

/* variables
*/


matches =0;
attempts =0;
firstPick=null;
secondPick =null;
win=false;

const values = ["A","A","B","B","C","C","D","D","E","E","F","F"];





//const shuffledValues = values.sort(() => Math.random() - 0.5);


{console.log(values[1]);
}


matchingPair=[
    ["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"]
];

/*
functions
renderCards(): Render the cards on the board.
flipCard(card): Handle card flipping logic.
checkMatch(): Check if two selected cards match.
resetPicks(): Reset the picks after an attempt.
updateAttempts(): Update the attempt count.
displayMessage(message): Display win/lose messages.


*/

// shuffleCards();
// flipCard(card) ;
// resetPicks();
// updateAttempts();
  
  //: //Shuffle the cards array.

init=() => {
matches =0;
attempts =0;
firstPick=null;
secondPick =null;
messegeEl.textContent= ("Let's go ");
shuffleArray(values);
console.log("game initialized","matches",matches=0,"attempts",attempts=0,);
assignValues(cards,values);

}

render=() => {
    updateBoard();
    updateMessage();
    }

    const updateBoard = () => {
    };
    
foundMatch=() => {

};


firstPick=()=>{
   
};

const handleClick = (event) => {
    const clickedCard = event.target;
    const index = Array.from(cards).indexOf(clickedCard);
    console.log('Clicked card index:', index);
    console.log(clickedCard.innerText)


  
    


};

//function to assign values to cards

const assignValues= (cards ,values)=>{
    if (cards.length === values.length)
        {console.log("Values initialized")
    }

    Array.from(cards).forEach((card, index) => {
        card.setAttribute('data-value', values[index]);
        
        card.textContent = values[index];

    });

    

};

/// function to randomize 


function shuffleArray(values) {
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
}


/*
event Listners 
*/
document.addEventListener('DOMContentLoaded', function() {
    init();
});

// click board 
boardArray.forEach(card => {
    card.addEventListener('click', handleClick);

});

