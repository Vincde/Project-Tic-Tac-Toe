const gameBoard = function(){

    const board = ['a','','','b','','','','',''];
    
    const displayBoard = function(){
        for(elem of board){
            console.log(elem);
        }
    };

    const modifyBoard = (symbol,position) =>{
        board[position] = symbol;
    };

    const verifyWhoWins = (player) =>{

        if((board[0] === board[1] && board[1]=== board[2] && board[1] === playerSymbol1 &&
            board[0] !== ' ' && board[1] !== ' ' && board[2] !== ' ') ||

        (board[3] === board[4] && board[4] === board[5] && board[4] === playerSymbol1 &&
            board[3] !== ' ' && board[4] !== ' ' && board[5] !== ' ') ||

        (board[6] === board[7] && board[7] === board[8] && board[7] === playerSymbol1 &&
            board[6] !== ' ' && board[7] !== ' ' && board[8] !== ' ') ||

        (board[0] === board[3] && board[3] === board[6] && board[3] === playerSymbol1 &&
            board[0] !== ' ' && board[3] !== ' ' && board[6] !== ' ') ||

        (board[1] === board[4] && board[4] === board[7] && board[4] === playerSymbol1 &&
            board[1] !== ' ' && board[4] !== ' ' && board[7] !== ' ') ||

        (board[2] === board[5] && board[5] === board[8] && board[5] === playerSymbol1 &&
            board[2] !== ' ' && board[5] !== ' ' && board[8] !== ' ') ||

        (board[0] === board[4] && board[4] === board[8] && board[4] === playerSymbol1 &&
            board[0] !== ' ' && board[4] !== ' ' && board[8] !== ' ') ||

        (board[2] === board[4] && board[4] === board[6] && board[4] === playerSymbol1 &&
            board[2] !== ' ' && board[4] !== ' ' && board[6] !== ' ')
        ){
           printResult(player);
        }


    };

    const printResult = function(player){
        console.log('the winner of the round is' + player.name);
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
    let changePlayer = player1;

    name = prompt('insert name of first player: ');
    const player1 = players.createPlayer(name,'X');
    name = prompt('insert name of the second player');
    const player2 = players.createPlayer(name,'O');

    const boardFunctions = gameBoard();


    (function(){ //DOM buttons eventListener
        /* boardFunctions.modifyBoard(changePlayer.symbol,i); */
        /* boardFunctions.displayBoard(); */
        /* boardFunctions.verifyWhoWins(changePlayer); */


        if(changePlayer.symbol === player1.symbol) changePlayer = player2;
        else changePlayer = player1;
    })();
    

    
}



