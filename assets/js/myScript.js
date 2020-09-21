// This code will run as soon as the page loads
window.onload = function () {

    // declare variables
    var choices = ['r', 'p', 's']
    var wins = 0;
    var loses = 0;
    var ties = 0;

    // reference elements ids
    var userText = document.getElementById('userText')
    var computerText = document.getElementById('computerText')
    var winsText = document.getElementById('winsText')
    var lossesText = document.getElementById('lossesText')
    var tiesText = document.getElementById('tiesText')

    $(".startDiv").show()
    $(".resultsDiv").hide()

    // create event listener evertime keyboard up detected
    document.onkeyup = function (e) {

        //grab value of keyboard and store in variable
        var userInput = e.key

        //computer picks random index from choices array
        var random = choices[Math.floor(Math.random() * choices.length)]

        console.log('Computer choice ', random)
        console.log('User choice ', userInput)

        // conditional confirming userInput is valid
        if (userInput === 'r' || userInput === 'p' || userInput === 's') {

            // conditional to check who won
            if (
                (random === 'r' && userInput === 's') ||
                (random === 's' && userInput === 'p') ||
                (random === 'p' && userInput === 'r')) {
                alert('You Lost!')
                loses++
            }
            else if (random === userInput) {
                alert('Tie!')
                ties++
            } else {
                alert('You Won!')
                wins++
            }

            $(".startDiv").hide()
            $(".resultsDiv").show()

            // update browser with game results
            userText.textContent = 'Your Choice: ' + userInput;
            computerText.textContent = "Computer's Choice: " + random;
            winsText.textContent = 'Wins: ' + wins;
            lossesText.textContent = 'Loses: ' + loses;
            tiesText.textContent = 'Ties: ' + ties;
        }
    }
}