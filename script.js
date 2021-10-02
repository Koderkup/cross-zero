let move = ['O', 'X'];
let count = 0;
let player = 'X';
let data = [];
let winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let cells = document.querySelectorAll('.cell');
let btn = document.querySelector('button');
let step = document.querySelector('#step');
let winner = document.querySelector('#winner');
btn.addEventListener('click', clean);
step.innerHTML = 'Ходит:' + player;
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', gamer);
}


function gamer() {
    count++;
    let key = count % 2;
    this.innerHTML = move[key];
    this.removeEventListener('click', gamer);
    this.innerHTML = move[key];
    changePlayer();
    checkWin();
}


function changePlayer() {
    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    step.innerHTML = 'Ходит:' + player;

}

function clean() {
    count = 0;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', gamer);
    }
    step.innerHTML = 'Ходит:' + 'X';
    winner.innerHTML = 'Выиграл:';
}

function checkWin() {
    let flag = false;
    for (let i = 0; i < winMatrix.length; i++) {
        let id = winMatrix[i];
        for (let j = 0; j < cells.length; j++) {
            if (cells[id[0]].innerHTML == 'X' && cells[id[1]].innerHTML == 'X' && cells[id[2]].innerHTML == 'X') {
                winner.innerHTML = 'Выиграл игрок Х';
                winner.style.fontSize = '24px';
                flag = true;
            }
        }
        for (let k = 0; k < cells.length; k++) {
            if (cells[id[0]].innerHTML == 'O' && cells[id[1]].innerHTML == 'O' && cells[id[2]].innerHTML == 'O') {
                winner.innerHTML = 'Выиграл игрок O';
                winner.style.fontSize = '24px';
                flag = true;
            }
        }
    }


    if (count == 9 && flag === false) {
        alert('НИЧЬЯ');
    }
}