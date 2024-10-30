const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
let score = 0;
let hitPosition;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  const randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.classList.contains('mole')) {
      score++;
      scoreDisplay.textContent = score;
      square.classList.remove('mole');
    }
  });
});

function moveMole() {
  setInterval(randomSquare, 1000);
}

moveMole();