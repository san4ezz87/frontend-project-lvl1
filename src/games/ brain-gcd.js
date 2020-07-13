import runGameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  if (firstNum === 0 || secondNum === 0) {
    return Math.max(firstNum, secondNum);
  }
  const initDivisor = Math.min(firstNum, secondNum);
  for (let i = initDivisor; i > 1; i -= 1) {
    const first = firstNum % i;
    const second = secondNum % i;
    if (first === 0 && second === 0) {
      return i;
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
