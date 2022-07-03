import luhnFormula from '../luhnFormula';

test('Валидация пройдена', () => {
  expect(luhnFormula('4929122379150982')).toBeTruthy();
});

test('Валидация не пройдена', () => {
  expect(luhnFormula('6666666666666666')).toBeFalsy();
});
