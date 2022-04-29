export const initialState = {
  player: 'X',
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  winner: null,
  error: null,
};

const copy = (data) => JSON.parse(JSON.stringify(data));

export function gameReducer(state, action) {
  const nextState = copy(state); // create a new copy of the state
  const { reset = false, row, col } = action; // extract the row and column of the move

  if (reset) {
    return initialState;
  }


  if (state.winner) { // game is already over
    nextState.error = "Game already won";
    return nextState;
  }

  if (state.board[row][col] !== '') { // spot is already taken
    nextState.error = "Illegal move";
    return nextState;
  }

  nextState.error = null;
  nextState.board[row][col] = state.player; // set the position to the current player, X or O
  nextState.player = state.player === 'X' ? 'O' : 'X'; // update the player to the next player
  nextState.winner = findWinner(nextState.board); // check if the board has a winner

  return nextState;
}

function findWinner(board) {
  const topCorner = board[0][0];
  const center = board[1][1];
  const bottomCorner = board[2][2];

  if (topCorner !== '' && topCorner === center && topCorner === bottomCorner) {
    return topCorner;
  }

  return null;
}

