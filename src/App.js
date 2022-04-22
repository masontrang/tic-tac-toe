import { useReducer } from 'react';
import { gameReducer, initialState } from './game';
import './App.css';

function Square({ mark, updateMark }){
  return (
    <button className="square" onClick={updateMark}>{mark}</button>
  );
}

function Board({ board, updateGame }) {
  return (
    <div className="game-board">
      {
        board.map((rowOfMarks, row) => (
          <div className="board-row">
            {
              rowOfMarks.map((mark, col) => (
                <Square mark={mark} updateMark={() => updateGame({ row, col })} />
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

function App() {
  const [game, updateGame] = useReducer(gameReducer, initialState);

  return (
    <div className="game">
      <Board board={game.board} updateGame={updateGame} />
      <div className="game-info">
        <div>{game.winner}</div>
        <div>{game.error}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
