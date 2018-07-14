var winCount = 0;
var lossCount = 0;
var tieCount = 0;

var compGuessTable = ['r', 'p', 's']

document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {

        var compGuess = compGuessTable[Math.floor(Math.random() * compGuessTable.length)];

        document.getElementById('userGuessSpot').innerHTML = ('User Guess: ' + userGuess);
        document.getElementById('compGuessSpot').innerHTML = ('Comp Guess: ' + compGuess);
        if (userGuess === compGuess) {
            tieCount++;
            document.getElementById('tieSpot').innerHTML = ('Tie Count: ' + tieCount);
        } else if (
            userGuess === 'r' && compGuess === 's' ||
            userGuess === 'p' && compGuess === 'r' ||
            userGuess === 's' && compGuess === 'p'
        ) {
            winCount++;
            document.getElementById('winSpot').innerHTML = ('Win Count: ' + winCount);
        } else {
            lossCount++;
            document.getElementById('lossSpot').innerHTML = ('Loss Count: ' + lossCount);
        }
    }
}