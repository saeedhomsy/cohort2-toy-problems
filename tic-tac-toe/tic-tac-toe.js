/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
<<<<<<< HEAD
	var finalRes = -1
	var collArr = []

	for (var i = 0; i < board.length; i++) {
		finalRes = checkRow(board[i]);
		if (finalRes === -1) {
			break;
		}
	}
	//must loop throw diag and show res
};


function checkCol(board,colInd){debugger
	var ctr = 0;
	var res = -1;
	if(board[0][colInd] !== 0){
		res = board[0][colInd];
		for (var i = 0; i < board.length; i++) {
			if (board[0][colInd] !== board[i][colInd]) {
				return -1
			}
			ctr++;
		}
		
	}
	return res;
}


function checkRow(rowArr){debugger
	var res = -1;
	if(rowArr[0]!== 0){
		res = rowArr[0]
		var isSame = true;
		for (var i = 1; i < rowArr.length; i++) {
			if (rowArr[0] !== rowArr[i]) {
				return -1
			}
		}
	}
	return res
}

function checkDiag(board){

}
=======
	
};
>>>>>>> 169bb2998308d17180eaceea99dcf1c0881da3a6
