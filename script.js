const gameBoard = (function(){

    const board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

    const displayBoard = function(){
        const buttons = document.querySelectorAll('.game-board button');
        for(let i = 0; i < board.length; i++){
            buttons[i].textContent = board[i];   
        }
    };

    const changeBoard = function(position,symbol){
        if(board[position] !== ' ') return 1;
        board[position] = symbol;
    }

    const resetBoard = function(){
        for(let i = 0; i < board.length; i++){
            board[i] = ' ';
        }
    }

    const verifyWin = function(){

        if((board[0] === board[1] && board[1]=== board[2] &&
            board[0] !== ' ' && board[1] !== ' ' && board[2] !== ' ') ||

        (board[3] === board[4] && board[4] === board[5] &&
            board[3] !== ' ' && board[4] !== ' ' && board[5] !== ' ') ||

        (board[6] === board[7] && board[7] === board[8] &&
            board[6] !== ' ' && board[7] !== ' ' && board[8] !== ' ') ||

        (board[0] === board[3] && board[3] === board[6] &&
            board[0] !== ' ' && board[3] !== ' ' && board[6] !== ' ') ||

        (board[1] === board[4] && board[4] === board[7] &&
            board[1] !== ' ' && board[4] !== ' ' && board[7] !== ' ') ||

        (board[2] === board[5] && board[5] === board[8] &&
            board[2] !== ' ' && board[5] !== ' ' && board[8] !== ' ') ||

        (board[0] === board[4] && board[4] === board[8] &&
            board[0] !== ' ' && board[4] !== ' ' && board[8] !== ' ') ||

        (board[2] === board[4] && board[4] === board[6] &&
            board[2] !== ' ' && board[4] !== ' ' && board[6] !== ' ')
        ){
            return 1;
        }

        return 0;
    };


    return {displayBoard,changeBoard,resetBoard,verifyWin};

})();


const player = (function(){
    
    const createPlayer = function(name,symbol){
        let score = 0;
        return {name,symbol,score};
    };

    const getName = function(){
        let name = prompt('Insert Name : ');
        return name;
    };





    return {createPlayer,getName};

})();

const game = function(){

    const player1 = player.createPlayer(player.getName(),'X');
    const player2 = player.createPlayer(player.getName(),'O');

    const results = document.querySelector('.results');
    const buttons = document.querySelectorAll('.game-board button');

    let verifyWinResult;
    let playerTurn = player1;
    let notPlaying = player2;
    let counter = 0;

    const start = function(position){ 

        if((gameBoard.changeBoard(position,playerTurn.symbol)) === 1) return;

        gameBoard.displayBoard();

        verifyWinResult = gameBoard.verifyWin();

        if(verifyWinResult === 1){

            playerTurn.score += 1;
            results.innerHTML = 'Round won by ' + playerTurn.name + '<br>';
            results.innerHTML += playerTurn.score + ' - ' + notPlaying.score;
            gameBoard.resetBoard();
            gameBoard.displayBoard(); 
            counter++;

            if(counter === 3){
                
                results.textContent = 'Finish game! Winner is ' + playerTurn.name;
                gameBoard.resetBoard();
                gameBoard.displayBoard();
                for(let j = 0 ; j < buttons.length; j++){
                    buttons[j] = ' ';
                    player1.score = 0;
                    player2.score = 0;
                }
            }

        }

        if(playerTurn === player1){ 
            playerTurn = player2;
            notPlaying = player1;
        }
        else{ 
            playerTurn = player1;
            notPlaying = player2;
        }


    };


    const initiateDOM = function(){

        
        const resetButton = document.querySelector('.scores button');



        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click',() =>{
                start(i);
            });
        }

        resetButton.addEventListener('click', () =>{
            gameBoard.resetBoard();
            for(let j = 0 ; j < buttons.length; j++){
                buttons[j] = ' ';
                player1.score = 0;
                player2.score = 0;
            }
            gameBoard.displayBoard();
        });
    };




    return {initiateDOM};
};

const ini = game();
ini.initiateDOM();