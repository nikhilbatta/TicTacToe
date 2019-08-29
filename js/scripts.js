function Player(x){
  this.symbol = x;
}
function Space (){
  this.symbol = "empty";
}
Space.prototype.assign = function(symbol1){
  this.symbol = symbol1;
}
function Board (){
  this.spaces = [];
  for (var i=1;i<10;i++){
    var newSpace = new Space();
    this.spaces.push(newSpace)
  }
}
Board.prototype.checkForWin = function(symbol){
    console.log("scan3 running");
  if (this.scanForThree(0,1,2, symbol)){
    return true;
  }
  if (this.scanForThree(3,4,5, symbol)){
    return true;
  }
  if (this.scanForThree(6,7,8, symbol)){
    return true;
  }
  if (this.scanForThree(0,3,6, symbol)){
    return true;
  }
  if (this.scanForThree(1,4,7, symbol)){
    return true;
  }
  if (this.scanForThree(2,5,8, symbol)){
    return true;
  }
  if (this.scanForThree(0,4,8, symbol)){
    return true;
  }
  if (this.scanForThree(2,4,6, symbol)){
    return true;
  }
}

function Game (){
  this.board = new Board();
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.currentPlayer = this.player1
}
Game.prototype.switchPlayers = function(){
  if(this.currentPlayer === this.player1){
    this.currentPlayer = this.player2
  } else{
    this.currentPlayer = this.player1
  }
}
Board.prototype.scanForThree = function(num1, num2, num3, symbol){
  if (this.spaces[num1].symbol === symbol && this.spaces[num2].symbol === symbol && this.spaces[num3].symbol === symbol) {

  console.log(this.spaces)
  return true;
}
}
//frontend
$(document).ready(function(){
  var game =  new Game();
  $('.board-space').click(function(){
    var tile = this;
    var num = parseInt(this.id);
    if( game.board.spaces[num].symbol === "empty") {
      game.board.spaces[num].assign(game.currentPlayer.symbol);
      // console.log(game.board.spaces[num].symbol);
      $(tile).text(game.currentPlayer.symbol);
      if(game.board.checkForWin(game.currentPlayer.symbol)) {
        $("#win").after("<h1>" + "YOU WON" + "</h1>")

      }

      game.switchPlayers();
    }
  });
});
