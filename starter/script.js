'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

//selecionou o botao check e adicionou um evento que espera o click
//quando o click acontecer, o javascript sozinho chama a função
document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value); //converteu o valor para Number pq todo input retorna string mesmo se for numero

    // se o input estiver vazio
    if(!guess){
        //document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');

    // se acertar o numero
    }else if(guess === secretNumber){
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // se o numero for maior    
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber? 'Too high!' : 'Too low!');
        
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost the game!');

            document.querySelector('.score').textContent = 0;
        }
    // }else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high!';
        
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game!';

    //         document.querySelector('.score').textContent = 0;
    //     }

    //  //se o numero for menor  
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too low!';
        
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game!';

    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

});