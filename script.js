const gameBoard = function(){

    const buttons = document.querySelectorAll('.game-board button');

    const board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    
    const displayBoard = function(){
        for(let j = 0; j < buttons.length; j++){
            buttons[j].textContent = board[j];
        };
    };

    const modifyBoard = (symbol,position) =>{
        board[position] = symbol;
    };

    const verifyWhoWins = (player) =>{

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
           printResult(player);
        }


    };

    const printResult = function(player){
        console.log('the winner of the round is ' + player.name);
    }



    
    return {displayBoard,modifyBoard,verifyWhoWins};
} // PLEASE NOTE : NOT IIFE SO I HAVE TO CREATE A VARIABLE TO USE THOSE INSIDE FUNCTIONS  


const Player = function(){

    const createPlayer = (name,symbol) =>{
        return {name,symbol};
    };
    
    

    return {createPlayer};
} // PLEASE NOTE : NOT IIFE SO I HAVE TO CREATE A VARIABLE TO USE THOSE INSIDE FUNCTIONS



const game = function(){

    const players = Player();
    let name;

    name = prompt('insert name of first player: ');
    const player1 = players.createPlayer(name,'X');
    name = prompt('insert name of the second player');
    const player2 = players.createPlayer(name,'O');

    let changePlayer = player1;

    const boardFunctions = gameBoard();


    (function(){ 
        const buttons = document.querySelectorAll('.game-board button');

        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', () =>{
                boardFunctions.modifyBoard(changePlayer.symbol,i);
                boardFunctions.displayBoard();
                boardFunctions.verifyWhoWins(changePlayer);

                if(changePlayer.symbol === player1.symbol) changePlayer = player2;
                else changePlayer = player1;
            });
        
        }

    })();
    

    
}

game();



