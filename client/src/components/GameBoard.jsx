import React, { useState } from 'react';

const GameBoard = () => {
  const [board, setBoard] = useState(initBoard);
  const [selectedPiece, setSelectedPiece] = useState(0);

  const initBoard = [
    0,'b',0,'b',0,'b',0,'b',
    'b',0,'b',0,'b',0,'b',0,
    0,'b',0,'b',0,'b',0,'b',
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    'r',0,'r',0,'r',0,'r',0,
    0,'r',0,'r',0,'r',0,'r',
    'r',0,'r',0,'r',0,'r',0
  ];

  const validMoves = (index, color, king) => {
    setSelectedPiece(index);
    declareDiagonals(color, index)
      .then(result => {
        checkMoves(result.diagonalLeft, result.diagonalRight)
        checkHops(result.diagonalLeft, result.diagonalRight, result.diagonalLeftIndex, result.diagonalRightIndex, color, result.opposite)
      })
  }

  const declareDiagonals = async (color, index) => {
    if (color === 'r') {
      var opposite = 'b';
      if (index === 8 || index === 24 || index === 40 || index === 56) {
        var diagonalLeft = 'NA';
        var diagonalRight = board[index - 7];
        var diagonalRightIndex = index - 7;
      } else if (index === 23 || index === 39 || index === 55) {
        var diagonalLeft = board[index - 9];
        var diagonalLeftIndex = index - 9;
        var diagonalRight = 'NA';
      } else {
        var diagonalLeft = board[index - 9];
        var diagonalRight = board[index - 7];
        var diagonalLeftIndex = index - 9;
        var diagonalRightIndex = index - 7;
      }
    } else if (color === 'b') {
      var opposite = 'r';
      if (index === 8 || index === 24 || index === 40) {
        var diagonalLeft = 'NA';
        var diagonalRight = board[index + 9];
        var diagonalRightIndex = index + 9;
      } else if (index === 7 || index === 23 || index === 39 || index === 55) {
        var diagonalLeft = board[index + 7];
        var diagonalLeftIndex = index + 7;
        var diagonalRight = 'NA';
      } else {
        var diagonalLeft = board[index + 7];
        var diagonalRight = board[index + 9];
        var diagonalLeftIndex = index + 7;
        var diagonalRightIndex = index + 9;
      }
    }
    var object = { color, diagonalLeft, diagonalRight, diagonalLeftIndex, diagonalRightIndex, opposite }
    return object;
  }

  const checkMoves = (left, right) => {
    if (left === 0) {
      highlight();
    }
    if (right === 0) {
      highlight();
    }
  }

  const checkHops = (left, right, leftIndex, rightIndex, color, opposite) => {
    if (left === opposite) {
      declareDiagonals(color, leftIndex)
        .then(result => {
          checkMoves(result.diagonalLeft, null)
        })
    }
    if (right === opposite) {
      declareDiagonals(color, rightIndex)
        .then(result => {
          checkMoves(null, result.diagonalRight)
        })
    }
  }

  return(
    <div>

    </div>
  )
}

export default GameBoard;