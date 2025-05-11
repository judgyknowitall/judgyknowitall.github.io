import PageProps from '@/models/PageProps';
import { useEffect, useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import './TicTacToePage.css';

/// FUTURE IMPROVEMENTS
// - When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
// - Display the location for each move in the format (row, col) in the move history list.

// Square Component
function Square({value, onSquareClick}: SquareProps) {
    return (
        <button className="square" onClick={onSquareClick}>
            { value }
        </button>
    );
}

// Game Board Component
function GameBoard({xIsNext, squares, onPlay}: BoardProps) {

  let status;
  const winner = calculateWinner(squares);
  if (winner) status = "Winner " + winner;
  else status = "Next player: " + (xIsNext ? "X" : "O");

  function handleClick(i:number) {
    if (squares[i] || winner) return;

    // Make changes to copy to avoid direct data mutation
    const nextSquares = squares.slice();

    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    onPlay(nextSquares);
  }

  // Each row in the board consisting of 3 squares.
  const squareRow = (row: number) => {
    let content = [];
    for (let col = 0; col < 3; col++) {
      const squareNum = (row*3) + col;
      content.push(
        <Square 
          key={squareNum}
          value={squares[squareNum]} 
          onSquareClick={() => handleClick(squareNum)} />
      );
    }
    return content;
  }

  // The board as 3 square rows
  const squareRows = () => {
    let content = [];
    for (let row = 0; row < 3; row++) {
      content.push(<div className="board-row" key={row}>{ squareRow(row) }</div>);
    }
    return content;
  };

  return (
    <>
      <div className='status'>{status}</div>
      { squareRows() }
    </>
  );
}

// Game History Component
function GameHistory({currentMove, history, onJump}: HistoryProps) {

  const [isOrderReversed, setOrderReversed] = useState(false);

  // View for the current move
  const currentMoveView = (
    <div className='game-history-move'>{'You are at move #' + (currentMove+1)}</div>
  );

  // View for a move in the past
  const pastMoveView = (move: number) => {
    let description;
    if (move > 0) description = 'Go to move #' + move;
    else description = 'Go to game start';

    return (
      <button className='game-history-move' onClick={() => onJump(move)}>
        {description}
      </button>
    )
  };

  // View for the list of moves
  const moveListView = history.map((_, move) => {
    return (
      <li key={move}>
        {move == currentMove ? currentMoveView : pastMoveView(move)}
      </li>
    )
  });

  return (
    <>
      <div className='game-history-sort' onClick={() => setOrderReversed(!isOrderReversed)}>
        {'Game History'}
        { isOrderReversed? <FaAngleUp/> : <FaAngleDown/> }
      </div>
      <ol reversed={isOrderReversed}>{ isOrderReversed ? moveListView.reverse() : moveListView }</ol>
    </>
  )
}

// Page Render method
// This is the render function that runs everytime the state changes
// Try to avoid redundant state.
function TicTacToePage({pageProps} : {pageProps: PageProps}) {

  useEffect(() => {
    pageProps.onPageChanged("Tic-Tac-Toe");
  })

  const [history, setHistory] = useState<string[][]>([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares : string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleTimeJump(nextMove: number){
    setCurrentMove(nextMove);
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <GameBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-history">
        <GameHistory currentMove={currentMove} history={history} onJump={handleTimeJump}/>
      </div>
    </div>
  );
}
    
// Helper function to calculate winner
function calculateWinner(squares : string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  
// Props
interface SquareProps {
  value: string; 
  onSquareClick: React.MouseEventHandler
};
interface BoardProps {
  xIsNext: boolean,
  squares: string[],
  onPlay: (nextSquares: string[]) => void
};
interface HistoryProps {
  currentMove: number,
  history: string[][],
  onJump: (nextMove: number) => void
};

export default TicTacToePage;