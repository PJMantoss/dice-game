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

//Connect click event listener to Roll Dice button
rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if(Player1Turn){
        Player1Score += randomNumber;
        player1scoreboard.textContent = Player1Score;
    }
})