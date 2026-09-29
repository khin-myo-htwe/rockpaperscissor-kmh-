const scores = {
    win: 0,
    lose: 0
}

const game = {

    computerMove() {
        let computer;

        let random = Math.floor(Math.random() * 3) + 1;

        if (random === 1) {
            computer = 'rock';
        } else if (random === 2) {
            computer = 'paper';
        } else if (random === 3) {
            computer = 'scissor';
        }

        return computer;
    },

    finalResult(user) {

        let result;

        let computer = game.computerMove();


        if (user === 'rock' && computer === 'rock') {
            result = 'Tie';
        } else if (user === 'rock' && computer === 'paper') {
            result = 'You Lose';
        } else if (user === 'rock' && computer === 'scissor') {
            result = 'You Win';
        }

        if (user === 'paper' && computer === 'rock') {
            result = 'You Win';
        } else if (user === 'paper' && computer === 'paper') {
            result = 'Tie';
        } else if (user === 'paper' && computer === 'scissor') {
            result = 'You Lose';
        }

        if (user === 'scissor' && computer === 'rock') {
            result = 'You Lose';
        } else if (user === 'scissor' && computer === 'paper') {
            result = 'You Win';
        } else if (user === 'scissor' && computer === 'scissor') {
            result = 'Tie';
        }

        if (result === 'You Win') {
            scores.win += 1;
        } else if (result === 'You Lose') {
            scores.lose += 1;
        }


        document.getElementById('scores').innerHTML = `
        <p>You pick <img src="img/${user}.png" class="result">.
            Computer pick <img src="img/${computer}.png" class="result">.
            </p>
        <p>Result : ${result} </p>
        <p>Wins : ${scores.win} , Loses : ${scores.lose} .</p>
        `
    }

}



