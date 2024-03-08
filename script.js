const gameBoard = function(){

    const board = ['a','','','b','','','','',''];
    
    const displayBoard = function(){
        for(elem of board){
            console.log(elem);
        }
    };

    const modifyBoard = (symbol,position) =>{
        board[position] = symbol;
    }


    
    return {displayBoard,modifyBoard};
} // PLEASE NOTE : NOT IIFE SO I HAVE TO CREATE A VARIABLE TO USE THOSE INSIDE FUNCTIONS  


const player = function(){

    const createPlayer = (name,symbol) =>{
        return {name,symbol};
    };

    return {createPlayer};
} // PLEASE NOTE : NOT IIFE SO I HAVE TO CREATE A VARIABLE TO USE THOSE INSIDE FUNCTIONS



const game = function(){

    const playerC = player();

    const player1 = playerC.createPlayer('mimmo','X');
    const player2 = playerC.createPlayer('also','Z');

    
}



