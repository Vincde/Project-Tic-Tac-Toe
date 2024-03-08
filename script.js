const gameBoard = function(){

    const buttons = document.querySelectorAll('.game-board button');
    const results = document.querySelector('.results');

    const board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    
    const displayBoard = function(){
        for(let j = 0; j < buttons.length; j++){
            buttons[j].textContent = board[j];
        };
    };

    const modifyBoard = (symbol,position) =>{
        board[position] = symbol;
    };

    const verifyWhoWins = (player,secondaryPlayer) =>{

        if((board[0] === board[1] && board[1]=== board[2] && board[1] === player.symbol &&
            board[0] !== ' ' && board[1] !== ' ' && board[2] !== ' ') ||

        (board[3] === board[4] && board[4] === board[5] && board[4] === player.symbol &&
            board[3] !== ' ' && board[4] !== ' ' && board[5] !== ' ') ||

        (board[6] === board[7] && board[7] === board[8] && board[7] === player.symbol &&
            board[6] !== ' ' && board[7] !== ' ' && board[8] !== ' ') ||

        (board[0] === board[3] && board[3] === board[6] && board[3] === player.symbol &&
            board[0] !== ' ' && board[3] !== ' ' && board[6] !== ' ') ||

        (board[1] === board[4] && board[4] === board[7] && board[4] === player.symbol &&
            board[1] !== ' ' && board[4] !== ' ' && board[7] !== ' ') ||

        (board[2] === board[5] && board[5] === board[8] && board[5] === player.symbol &&
            board[2] !== ' ' && board[5] !== ' ' && board[8] !== ' ') ||

        (board[0] === board[4] && board[4] === board[8] && board[4] === player.symbol &&
            board[0] !== ' ' && board[4] !== ' ' && board[8] !== ' ') ||

        (board[2] === board[4] && board[4] === board[6] && board[4] === player.symbol &&
            board[2] !== ' ' && board[4] !== ' ' && board[6] !== ' ')
        ){
           player.score++;
           printResult(player,secondaryPlayer); 
           
        }


    };

    const printResult = function(player,secondaryPlayer){
        results.innerHTML = 'the winner' + '<br>' + 'of the round is ' + '<br>' + player.name;
        results.innerHTML += '<br>' + player.name + ' ' + player.score + ' - ' + secondaryPlayer.score + ' ' + secondaryPlayer.name;
        reset(player,secondaryPlayer);
    };


    const reset = function(player,secondaryPlayer){
        for(let i = 0; i < buttons.length; i++){
            board[i] = ' ';
            buttons[i].textContent = ' ';
            setTimeout(() =>(results.innerHTML = ' '),3000);
            player.scores = 0;
            secondaryPlayer.scores = 0;
        }
    };

    
    return {displayBoard,modifyBoard,verifyWhoWins,reset};
} // PLEASE NOTE : NOT IIFE SO I HAVE TO CREATE A VARIABLE TO USE THOSE INSIDE FUNCTIONS  


const Player = function(){

   
    const createPlayer = (name,symbol,score) =>{
        return {name,symbol,score};
    };


    const DOMElements = function(player1,player2){ 
        
        const boardFunctions = gameBoard();
        let changePlayer = player1;
        let secondaryPlayer = player2;
        const buttons = document.querySelectorAll('.game-board button');

        for(let j = 0; j < buttons.length; j++){
            buttons[j].textContent = ' ';
        }

        for(let i = 0; i < buttons.length; i++){
            
            buttons[i].addEventListener('click', (event) =>{

                if(event.currentTarget.textContent !== ' ') return;

                boardFunctions.modifyBoard(changePlayer.symbol,i);
                boardFunctions.displayBoard();
                boardFunctions.verifyWhoWins(changePlayer,secondaryPlayer);

                if(changePlayer.symbol === player1.symbol){
                    changePlayer = player2;
                    secondaryPlayer = player1;
                    }
                else{ 
                    changePlayer = player1;
                    secondaryPlayer = player2;
                }
            });
        
        }

        const resetButton = document.querySelector('.scores button');
    
        resetButton.addEventListener('click',() => {
            boardFunctions.reset();
        });

    };
    





    return {createPlayer,DOMElements};
} // PLEASE NOTE : NOT IIFE SO I HAVE TO CREATE A VARIABLE TO USE THOSE INSIDE FUNCTIONS



const game = function(){

    const players = Player();
    let name;

    name = prompt('insert name of first player: ');
    const player1 = players.createPlayer(name,'X',0);
    name = prompt('insert name of the second player');
    const player2 = players.createPlayer(name,'O',0);

    players.DOMElements(player1,player2);

    
}

game();



