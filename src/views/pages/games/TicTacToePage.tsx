import PageProps from '@/models/PageProps';
import { useEffect, useState } from 'react';
import './TicTacToePage.css';

/// FUTURE IMPROVEMENTS
// - For the current move only, show “You are at move #…” instead of a button.
// - Rewrite Board to use two loops to make the squares instead of hardcoding them.
// - Add a toggle button that lets you sort the moves in either ascending or descending order.
// - When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
// - Display the location for each move in the format (row, col) in the move history list.

// Square Component
//Props => {value}: {value: number}
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

  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

// Game History Component
function GameHistory({history, onJump}: HistoryProps) {

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) description = 'Go to move #' + move;
    else description = 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => onJump(move)}>
          {description}
        </button>
      </li>
    )
  });

  return (
    <ol>{moves}</ol>
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
      <div className="game-info">
        <GameHistory history={history} onJump={handleTimeJump}/>
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
  history: string[][],
  onJump: (nextMove: number) => void
};

export default TicTacToePage;