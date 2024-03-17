let playerScore = 0;
let computerScore = 0;

$('.btn').click(function() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerChoice = $(this).data('choice');

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    $('#result').text(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);
    $('#playerScore').text(playerScore);
    $('#computerScore').text(computerScore);
});
