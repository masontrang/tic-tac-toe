import { useState } from 'react';
import './App.css';

function Square({ player, setPlayer }){
  const [mark, setMark] = useState('');

  const updateMark = () => {
    if (!mark) {
      setMark(player);
      setPlayer(player === 'O' ? 'X' : 'O');
    }
  };
  
  return (
    <button className="square" onClick={updateMark}>{mark}</button>
  );
}

function Board() {
  const dummyArray = ['', '', ''];
  const [aPlayer, setPlayer] = useState('X');

  return (
    <div className="game-board">
      {
        dummyArray.map((item) => (
          <div className="board-row">
            {
              dummyArray.map((item) => <Square player={aPlayer} setPlayer={setPlayer} />)
            }
          </div>
        ))
      }
    </div>
  );

  // return (
  //   <div className='game-board'>
  //     <div className="board-row">
  //       <Square />
  //       <Square />
  //       <Square />
  //     </div>
  //     <div className="board-row">
  //       <Square />
  //       <Square />
  //       <Square />
  //     </div>
  //     <div className="board-row">
  //       <Square />
  //       <Square />
  //       <Square />
  //     </div>
  //   </div>
  // )
}

function App() {
  return (
    <div className="game">
      <Board />
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
