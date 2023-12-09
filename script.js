const MAX_MOVES = 9; //checking the draw

let para = document.querySelector('.result');
let turnX = false;
let reset = document.querySelector('.reset-button');
let count = 0;
const buttons = document.querySelectorAll('.box');
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

para.classList.add('reset');

buttons.forEach((button) => {
  button.addEventListener('click',()=> {
    if (!turnX) {
      button.innerText = 'O';
      turnX= true;      
    } else {
      button.innerText = 'X';
      turnX= false;
    }
    count++;
    let isWinner = checkWinner();
    if (isWinner) {
      count = 0;
      printWinner(isWinner);
    }
    if (count===MAX_MOVES && (!isWinner)) {
      count = 0;
      drawMessage();
    }
    button.disabled = true;
  });
});

const checkWinner = ()=> {
  for (let pattern of winningPattern) {
    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;
    if (val1 !== '' && val2 !== '' && val3 !== '') {
      if (val1===val2 && val2 === val3){
        return val1;
      }
    }
  }
};

const drawMessage = () => {
  para.classList.remove('reset');
  para.innerText = 'Its A Draw';
  
}

const printWinner = (isWinner) => {
  para.classList.remove('reset');
  reset.classList.remove('reset');
  para.innerText = `The Winner is ${isWinner}`;
  disableButtons();
}
const disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled= true;
  });
};

reset.addEventListener('click',() => {
  buttons.forEach(button => {
    button.disabled=false;
    button.innerText='';
  });
  count = 0;
  para.classList.add('reset');
  turnX = false; 
});