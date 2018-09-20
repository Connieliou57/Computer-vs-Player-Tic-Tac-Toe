setScreen("intro");
onEvent("button10", "click", function(event) {
  setScreen("screen1");
});

var turnCount=0;
var computerTurn=false;
var board=["","","","","","","","","",""];
var gameOver = false;

function computerChoice(){
  var emptyBoard = [];
  if (computerTurn){
    console.log(board);
    for(var i=0; i<board.length; i++){
      if(board[i]=== ""){
        emptyBoard.push(i);
      }
    }
  var randomChoice= findBestMove(board,emptyBoard);
  for(i=0; i<board.length; i++){
    if(board[i]=== ""){
      if (randomChoice===0){
        winCheck();
        setText("button1","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===1){
        winCheck();
        setText("button2","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===2){
        winCheck();
        setText("button3","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===3){
        winCheck();
        setText("button4","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===4){
        winCheck();
        setText("button5","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===5){
        winCheck();
        setText("button6","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===6){
        winCheck();
        setText("button7","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===7){
        winCheck();
        setText("button8","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else if(randomChoice===8){
        winCheck();
        setText("button9","X");
        board[randomChoice]="X";
        turnCount++;
        winCheck();
        if(!gameOver) computerTurn=false;
        break;
      }
      else break;
      }
    }
  }
}

function findBestMove(newBoard, emptySpots){ 
  var testBoard=newBoard;
  var movesX=[];
  var movesO=[];
  for(var i=0;i<emptySpots.length;i++){
    testBoard[emptySpots[i]]= "X";//adds X to see what happens
    if (threeInRowWinner(testBoard)=="X"){
      movesX.push(10);
      testBoard[emptySpots[i]]="";
    }
    else {
      movesX.push(0);
      testBoard[emptySpots[i]]="";
    }
    testBoard[emptySpots[i]]= "O";//adds O to see what happens
    if(threeInRowWinner(testBoard)=="O"){
      movesO.push(-10);
      testBoard[emptySpots[i]]="";
    }
    else {
      movesO.push(0);
      testBoard[emptySpots[i]]="";
    }
  }
  console.log("movesX: "+movesX);
  console.log("movesO: "+movesO);
  var chosenMove=0;
  
  for(var j=0; j<movesO.length;j++){
    if(movesX[j]==10) return emptySpots[j];
    if(movesO[j]==-10) chosenMove=emptySpots[j];
  }
  
  if(chosenMove!==0)return chosenMove;
  else return emptySpots[0];
}

function winCheck(){
  
  if (threeInRowWinner(board)!==0){
      gameOver=true;
      setTimeout(function() {
        setScreen("gameOver");
      }, 500);

      if(computerTurn) {
          setText("winner", "Computer is the Winner!");
      }
      else {
          setText("winner", "You are the Winner!");
      }
  }
  else if (turnCount==9) {
    gameOver=true;
    setTimeout(function() {
        setScreen("gameDraw");
      }, 500); 
  }
}

function threeInRowWinner(board){
  if(board[0]==board[1]&& board[1]==board[2] && board[0]!=="") return board[0];
  if(board[3]==board[4]&& board[4]==board[5] && board[3]!=="") return board[3];
  if(board[6]==board[7]&& board[7]==board[8] && board[6]!=="") return board[6];
  if(board[0]==board[3]&& board[3]==board[6] && board[0]!=="") return board[0];
  if(board[1]==board[4]&& board[4]==board[7] && board[1]!=="") return board[1];
  if(board[2]==board[5]&& board[5]==board[8] && board[2]!=="") return board[2];
  if(board[0]==board[4]&& board[4]==board[8] && board[0]!=="") return board[0];
  if(board[2]==board[4]&& board[4]==board[6] && board[2]!=="") return board[2];
  else return 0;
}

function resetGame(){
  setScreen("screen1");
  setText("button1","");
  setText("button2","");
  setText("button3","");
  setText("button4","");
  setText("button5","");
  setText("button6","");
  setText("button7","");
  setText("button8","");
  setText("button9","");
  turnCount=0;
  board=["","","","","","","","","",""];
  gameOver=false;
  
}

onEvent("button1", "click", function(event) {
  if (getText("button1")=== ""){
    setText("button1", "O");
    board[0]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button2", "click", function(event) {
  if (getText("button2")=== ""){
    setText("button2", "O");
    board[1]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button3", "click", function(event) {
  if (getText("button3")=== ""){
    setText("button3", "O");
    board[2]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button4", "click", function(event) {
  if (getText("button4")=== ""){
    setText("button4", "O");
    board[3]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button5", "click", function(event) {
  if (getText("button5")=== ""){
    setText("button5", "O");
    board[4]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button6", "click", function(event) {
  if (getText("button6")=== ""){
    setText("button6", "O");
    board[5]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button7", "click", function(event) {
  if (getText("button7")=== ""){
    setText("button7", "O");
    board[6]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button8", "click", function(event) {
  if (getText("button8")=== ""){
    setText("button8", "O");
    board[7]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});
onEvent("button9", "click", function(event) {
  if (getText("button9")=== ""){
    setText("button9", "O");
    board[8]="O";
    turnCount++;
    winCheck();
    if (!gameOver){
      computerTurn=true;
      computerChoice();
    }
  }
});

onEvent("button11", "click", function(event) {
  resetGame();
});
onEvent("button12", "click", function(event) {
  resetGame();
});