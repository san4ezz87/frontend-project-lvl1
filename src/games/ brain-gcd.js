import runGameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  if (firstNum === 0 || secondNum === 0) {
    return Math.max(firstNum, secondNum);
  }
  const initDivisor = Math.min(firstNum, secondNum);
  for (let divisor = initDivisor; divisor > 1; divisor -= 1) {
    const firstRemainder = firstNum % divisor;
    const secondRemainder = secondNum % divisor;
    if (firstRemainder === 0 && secondRemainder === 0) {
      return divisor;
    }
  }
  return 1;
};

const buildRoundData = () => {
  const first = getRandomInt(1, 20);
  const second = getRandomInt(1, 20);

  const correctAnswer = findGcd(first, second);
  const question = `${first} ${second}`;

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainGcd = () => {
  runGameEngine(gameRules, buildRoundData);
};

export default runBrainGcd;
