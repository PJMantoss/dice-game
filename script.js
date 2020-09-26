//Game state variables
let Player1Score = 0, Player2Score = 0, Player1Turn = true;

//Variables to store ref to DOM Nodes
const player1Dice = document.getElementById('player1dice');
const player2Dice = document.getElementById('player2dice');
const player1scoreboard = document.getElementById('player1scoreBoard');
const player2scoreboard = document.getElementById('player2scoreBoard');
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

function showResetBtn(){
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

//Connect click event listener to Roll Dice button
rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if(Player1Turn){
        Player1Score += randomNumber;
        player1scoreboard.textContent = Player1Score;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove('active');
        player2Dice.classList.add('active');
        message.textContent = "Player 2 Turn";
    } else {
        Player2Score += randomNumber;
        player2scoreboard.textContent = Player1Score;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
        message.textContent = "Player 1 Turn";
    }

    if(Player1Score >= 20){
        message.textContent = "Player 1 won 🥳";
        showResetBtn();
    }else if(Player2Score >= 20){
        message.textContent = "Player 2 won 🎉";
        showResetBtn();
    }

    Player1Turn = !Player1Turn;

    // reset game
    resetBtn.addEventListener('click', function(){
        reset();
    })
})

//reset
function reset(){
    Player1Score = 0;
    Player2Score = 0;
    Player1Turn = true;
    player1scoreboard.textContent = 0;
    player2scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    message.textContent = "Player 1 Turn";
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
}