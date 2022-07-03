import checkCard from './checkCard';
import luhnFormula from './luhnFormula';

export default function validatorCard() {
  const cards = document.getElementsByClassName('card');
  const input = document.querySelector('.form-control');
  const button = document.querySelector('.btn');

  input.addEventListener('input', () => {
    const resCheckCard = checkCard(input.value);
    for (const card of cards) {
      if (card.classList.contains(resCheckCard) || input.value.length === 0) {
        card.style.opacity = 1;
      } else {
        card.style.opacity = 0.3;
      }
    }
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const resLuhnFormula = luhnFormula(input.value);
    if (input.value.length === 0) return;
    if (resLuhnFormula) {
      input.style.backgroundColor = 'rgb(195, 242, 195)';
    } else {
      input.style.backgroundColor = 'rgb(253, 225, 225)';
    }
  });
}
