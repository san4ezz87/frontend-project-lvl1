import gameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  const smalllerNum = 2;
  const numAbs = Math.abs(num);
  if (numAbs < smalllerNum) {
    return false;
  }

  const maxDivisor = Math.sqrt(numAbs);
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (numAbs % i === 0) {
      return false;
    }
  }

  return true;
};

const buildQuestionExpr = () => {
  const question = getRandomInt(1, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};


const runBrainPrime = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainPrime;
