const containerEl = document.querySelector('.container');

for(i = 0; i < 16; i++) {
    let board = document.createElement('div');
    board.className = 'boxes';

    document.getElementById('board').appendChild(board);
}