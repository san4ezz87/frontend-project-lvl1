import runGameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivisor = Math.sqrt(num);
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const buildRoundData = () => {
  const question = getRandomInt(1, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question: question.toString(),
    correctAnswer,
  };
};


const runBrainPrime = () => {
  runGameEngine(gameRules, buildRoundData);
};

export default runBrainPrime;
