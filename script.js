

const Player = {

    createPlayer : function(name,symbol){
        return {name,symbol};
    }

}


const gameBoard = {
    board : ['a','a','a','a','a','a','a','a','a'],
    player1 : Player.createPlayer('mimmo','x'),
    player2 : Player.createPlayer('aldo','y'),

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

        //selector for buttons

        //when ison
        //selectedButton.textcontent = whoisThePyaer

        //board[i].textContent = WhoIsThePlayer
        
        
        
        //whoIsThePlayer = 'O';

        
    }
}

