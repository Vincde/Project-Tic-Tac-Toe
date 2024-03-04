const Player = {

    createPlayer : function(symbol){
        let name;
        name = prompt('Insert name of player');
        return {name,symbol};

    }

}


const gameBoard = {

    board : [' ',' ',' ',' ',' ',' ',' ',' ',' '],

    player1 : Player.createPlayer('X'),
    player2 : Player.createPlayer('O'),

    startGame : function(){
        let whoIsThePlayer = 'X';

        const buttons = document.querySelectorAll('.game-board button');

        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', () => {
                this.playBoard(whoIsThePlayer,i);
                if(whoIsThePlayer === 'X'){
                whoIsThePlayer = 'O';
                }else{
                    whoIsThePlayer = 'X';
                }
            },{once:true});
        }
    },

    displayBoard: function(){
        const buttons = document.querySelectorAll('.game-board button');

        for(let i = 0; i < this.board.length; i++){
            buttons[i].textContent = this.board[i];
        }
    },

    playBoard : function(whoIsThePlayer,i) {

        if(this.board[i] === ' '){
        this.board[i] = whoIsThePlayer;  //  element in the grid = (X or O) in the array
        }else{
            alert('cannot execute on a button which is already been pressed');
            return;
        }

        this.displayBoard();
        let result = this.verifyWinner(whoIsThePlayer);
        

        const scores = document.querySelector('.scores');
        if(result !== undefined){
            scores.textContent = result;
            return;
        }
        
    },


    verifyWinner : function(whoIsThePlayer){
        let playerWhoWon;
        if(whoIsThePlayer === 'X'){
            playerWhoWon = this.player1;
        }else{
            playerWhoWon = this.player2;
        }



            if((this.board[0] === this.board[1] && this.board[1]=== this.board[2] &&
                this.board[0] !== ' ' && this.board[1] !== ' ' && this.board[2] !== ' ') ||

            (this.board[3] === this.board[4] && this.board[4] === this.board[5] &&
                this.board[3] !== ' ' && this.board[4] !== ' ' && this.board[5] !== ' ') ||

            (this.board[6] === this.board[7] && this.board[7] === this.board[8] &&
                this.board[6] !== ' ' && this.board[7] !== ' ' && this.board[8] !== ' ') ||

            (this.board[0] === this.board[3] && this.board[3] === this.board[6] &&
                this.board[0] !== ' ' && this.board[3] !== ' ' && this.board[6] !== ' ') ||

            (this.board[1] === this.board[4] && this.board[4] === this.board[7] &&
                this.board[1] !== ' ' && this.board[4] !== ' ' && this.board[7] !== ' ') ||

            (this.board[2] === this.board[5] && this.board[5] === this.board[8] &&
                this.board[2] !== ' ' && this.board[5] !== ' ' && this.board[8] !== ' ') ||

            (this.board[0] === this.board[4] && this.board[4] === this.board[8] &&
                this.board[0] !== ' ' && this.board[4] !== ' ' && this.board[8] !== ' ') ||

            (this.board[2] === this.board[4] && this.board[4] === this.board[6] &&
                this.board[2] !== ' ' && this.board[4] !== ' ' && this.board[6] !== ' ')
            ){
                return 'Game is won! by ' + playerWhoWon.name;
            }else if(this.verifyTie() === 0){
                return 'Its a tie!';
            }const player1 = Player.createPlayer('X');
            const player2 = Player.createPlayer('O');
    },

    verifyTie: function(){
        for(let j = 0; j < this.board.length; j++ ){
            if(this.board[j] === ' '){ 
                return -1;
            }
        }
        return 0;
    }
}

gameBoard.startGame();
