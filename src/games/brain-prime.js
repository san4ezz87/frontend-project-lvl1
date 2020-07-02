import {
  getStyledStr,
  getRandomInt,
  gameEngine,
} from '../index.js';

const gameRulesText = `Answer ${getStyledStr('"yes"', ['red'])} ${getStyledStr('if', ['bold'])} given number is prime. Otherwise answer ${getStyledStr('"no"', ['red'])}.`;


const buildQuestionExpr = () => {
  const listPrimeNumber = [2, 3, 5, 7, 11, 13, 17, 19];
  const evalCorrectAnswer = (num) => (listPrimeNumber.includes(num) ? 'yes' : 'no');
  const question = getRandomInt(1, 20);
  const corrAnswer = evalCorrectAnswer(questionBudy);

  return {
    question,
    corrAnswer,
  };
};


const runBrainPrime = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainPrime;
