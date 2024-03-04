

const Player = {

    createPlayer : function(name,symbol){
        return {name,symbol};
    }

}


const gameBoard = {
    board : ['a','a','a','a','a','a','a','a','a'],
    player1 : Player.createPlayer('mimmo','X'),
    player2 : Player.createPlayer('aldo','O'),

    displayBoard: function(){
        //queryslector for the buttons i suppose

        for(let i = 0; i < this.board.length; i++){
            console.log(this.board[i]);
            //SelectedButton.value = this.board[i]
        }
    },

    playBoard : function() {
        //querySelector.

        let whoIsThePlayer = 'x';

        let playerChoice = 2; //example of read positioning;

        if(board[playerChoice] === ' '){
        board[playerChoice] = whoIsThePlayer;  //  element in the grid = (X or O) in the array
        }else{
            alert('cannot execute on a button which is already been pressed');
        }


        console.log(this.verifyWinner(whoIsThePlayer));
        
    },


    verifyWinner : function(whoIsThePlayer){
        let playerWhoWon;
        if(whoIsThePlayer === 'X'){
            playerWhoWon = this.player1;
        }else{
            playerWhoWon = this.player2;
        }

            if((board[0] === board[1] && board[1]=== board[2]) ||
            (board[3] === board[4] && board[4] === board[5]) ||
            (board[6] === board[7] && board[7] === board[8]) ||
            (board[0] === board[3] && board[3] === board[6]) ||
            (board[1] === board[4] && board[4] === board[7]) ||
            (board[2] === board[5] && board[5] === board[8]) ||
            (board[0] === board[4] && board[4] === board[8]) ||
            (board[2] === board[4] && board[4] === board[6])){
                return 'Game is won! by ' + playerWhoWon.name;
            }
    }


}
