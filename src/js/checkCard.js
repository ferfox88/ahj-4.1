export default function checkCard(numberCard) {
  const visa = /^4/;
  const master = /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/;
  const amex = /^3[47]/;
  const discover = /^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])/;
  const jcb = /^352[8-9]|35[3-8]/;
  const diners = /^30[0-5]|36|54/;
  const mir = /^2/;

  let card = 'null';
  if (numberCard.match(visa)) {
    card = 'visa';
  } else if (numberCard.match(master)) {
    card = 'master';
  } else if (numberCard.match(amex)) {
    card = 'amex';
  } else if (numberCard.match(discover)) {
    card = 'discover';
  } else if (numberCard.match(jcb)) {
    card = 'jcb';
  } else if (numberCard.match(diners)) {
    card = 'diners';
  } else if (numberCard.match(mir)) {
    card = 'mir';
  }
  return card;
}
