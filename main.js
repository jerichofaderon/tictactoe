/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'x';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);
/*----- functions -----*/
function handleTurn() {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render ();
    };
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};
        // new code below
function render() {
    board.forEach(function(mark,index) {
        squares[index].textContent = mark;
    });
    if ( win === 'T' ) {
        messages.textContent = `That's a tie, queen!`
      } else if (win) { 
        messages.textContent = `${win} wins the game!`
      } else {
        messages.textContent = `It's ${turn}'s turn!`
      }
}