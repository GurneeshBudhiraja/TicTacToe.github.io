let buttons = document.querySelectorAll('.boxes');
let resetButton = document.querySelector('.reset');
const para = document.querySelector('p');
let count = 0;
let cross = false; //checking the turn
const winningPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]; //array for checking the winner


buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    count++;
    if (!cross) {
      console.log(button);
      button.innerText = 'O';
      cross=true;
    } else {
      console.log(button);
      button.innerText = 'X';
      cross= false;
    }
    button.disabled = true;
    let gameWinner = checkGameWinner();
    if (gameWinner) {
      para.classList.replace('reset-para','show-para');
      para.innerText = `The Winner is ${gameWinner}`;
      resetButton.classList.replace('reset','reset-button');
      disableButtons();
    } 
  });
});


// disabling all the buttons

const disableButtons = () => {
buttons.forEach(button => {
  button.disabled=true;
});
};

const checkGameWinner = () => {
  for (let pattern of winningPattern) {
    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;
    if (val1!=='' && val2!=='' && val3!=='' && count!==9) {
      if (val1===val2 && val1===val3) {
        return val1;
      }
    } else if (count===9) {
      drawMessage();
    }
  }
};

resetButton.addEventListener('click', ()=> {
  buttons.forEach(button => {
    button.innerText = '';
    button.disabled= false;
  });
  resetButton.classList.replace('reset-button','reset');
  para.classList.replace('show-para','reset-para');
});

const drawMessage = () => {
  para.classList.replace('reset-para','show-para');
  para.innerText = 'The Match Has Been Drawn!';
  resetButton.classList.replace('reset','reset-button');
  disableButtons();
};