import {
  gameEngine,
} from '../index.js';

import {
  getStyledStr,
  getRandomInt,
} from '../utils/utils.js';

const gameRulesText = `Answer ${getStyledStr('"yes"', ['red'])} ${getStyledStr('if', ['bold'])} given number is prime. Otherwise answer ${getStyledStr('"no"', ['red'])}.`;


const buildQuestionExpr = () => {
  const isPrime = (num) => {
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i += i) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

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
