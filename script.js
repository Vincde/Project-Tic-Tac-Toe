const gameBoard = (function(){

    const board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

    const displayBoard = function(){
        for(let i = 0; i < board.length; i++){
            console.log(board[i]);
        }
    };

})();


const player = (function(){
    
    const createPlayer = function(name,symbol){
        return {name,symbol};
    };



})();