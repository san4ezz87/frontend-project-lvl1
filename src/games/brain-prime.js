import gameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i += i) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const buildQuestionExpr = () => {
  const question = getRandomInt(1, 20);
  const corrAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    corrAnswer,
  };
};


const runBrainPrime = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainPrime;
