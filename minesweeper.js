document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells:[
     {row:1,col:1,isMine:true,hidden:true},
     {row:1,col:2,isMine:false,hidden:true},
     {row:1,col:3,isMine:true,hidden:true},
     {row:2,col:1,isMine:false,hidden:true},
     {row:2,col:2,isMine:true,hidden:true},
     {row:2,col:3,isMine:false,hidden:true},
     {row:3,col:1,isMine:true,hidden:true},
     {row:3,col:2,isMine:false,hidden:true},
     {row:3,col:3,isMine:true,hidden:true},



   ]
 }

function startGame () {
  // Don't remove this function call: it makes the game work!
  // var board.cells = (document.getElementsByClassName('board')[0].children)
//  this is the loop needed to count how far away the mines are
  for (var j = 0; j < board.cells.length; j++) {
    board.cells[j].surroundingMines = countSurroundingMines(board.cells[j])
  }

  addEventListener("click",checkForWin)
  addEventListener("contextmenu",checkForWin)




  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

   for (var f = 0; f < board.cells.length; f++) {
     if(board.cells[f].isMine && !board.cells[f].isMarked === true){
       return
     }
     if(board.cells[f].hidden === true && board.cells[f].isMine === false){
       return
     }
   }
   lib.displayMessage('You win!')

 }

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  var count = 0

  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++
    }
  }
  return count
}
