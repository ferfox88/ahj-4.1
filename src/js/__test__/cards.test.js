import cards from '../checkCard';

test.each([
  ['visa', '4929122379150982', 'visa'],
  ['master', '2221000716757322', 'master'],
  ['amex', '341509565686308', 'amex'],
  ['discover', '6011111318671319', 'discover'],
  ['jcb', '3540854617114880', 'jcb'],
  ['diners', '36140988645042', 'diners'],
  ['mir', '2200000000000000', 'mir'],
  ['null', '6666666666666666', 'null'],
])('it should be %s', (_, input, expected) => {
  expect(cards(input)).toEqual(expected);
});
