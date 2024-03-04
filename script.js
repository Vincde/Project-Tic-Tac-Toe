const Player = {

    createPlayer : function(name,symbol){
        return {name,symbol};
    }

}


const gameBoard = {

    board : [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    player1 : Player.createPlayer('mimmo','X'),
    player2 : Player.createPlayer('aldo','O'),

    startGame : function(){
        let whoIsThePlayer = 'X';

        /* const buttons = document.querySelectorAll('.game-board button');

        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', () => {
                
            });
        } */



        this.playBoard(whoIsThePlayer);

    },

    displayBoard: function(){
        const buttons = document.querySelectorAll('.game-board button');

        for(let i = 0; i < this.board.length; i++){
            console.log(this.board[i]);
            buttons[i].textContent = this.board[i];
        }
    },

    playBoard : function(whoIsThePlayer) {


        let playerChoice = 4; //example of read positioning;

        if(this.board[playerChoice] === ' '){
        this.board[playerChoice] = whoIsThePlayer;  //  element in the grid = (X or O) in the array
        }else{
            alert('cannot execute on a button which is already been pressed');
            return;
        }

        this.displayBoard();
        let result = this.verifyWinner(whoIsThePlayer);
        
        if(result !== undefined){
            console.log(result);
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
            }


    }


}

gameBoard.startGame();
