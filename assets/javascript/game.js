        // Letter Array
        var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        

        // Variables with data values are declared
        var wins = 0;

        var losses = 0;

        var guessesLeft = 9;

        var guessesMade = [];

            // Game will start when user chooses any key of the alphabet
            document.onkeyup = function(event) {      
            

        // User guess is for any key that the user presses
        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Letter choices for user to pick
        var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            // if(options.indexOf(userGuess)>-1){

            // }

            if (userGuess === computerGuess) {
                    wins++;
                    numGuesses = 9;
                    guessChoices = [];
                }

            else if (userGuess != computerGuess && numGuesses >= 1) {
                    numGuesses --;
                    guessChoices.push(userGuess);
                }

            else {
                losses++;
                numGuesses = 9;
                guessChoices = [];
                
            }    
        

        }
        
        
  s