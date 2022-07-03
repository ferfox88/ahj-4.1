export default function luhnFormula(numberCard) {
  let sum = null;
  for (let i = 0; i < numberCard.length; i += 1) {
    let result = parseInt(numberCard[i], 10);

    if ((numberCard.length - i) % 2 === 0) {
      result *= 2;
      if (result > 9) {
        result -= 9;
      }
    }
    sum += result;
  }
  return sum % 10 === 0;
}
