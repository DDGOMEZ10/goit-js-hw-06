function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', () => {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
});

const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', () => {
  const boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
});
