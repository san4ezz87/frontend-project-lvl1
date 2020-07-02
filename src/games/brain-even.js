import {
  gameEngine,
} from '../index.js';

import {
  getStyledStr,
  getRandomInt,
} from '../utils/utils.js';

const gameRulesText = `Answer ${getStyledStr('"yes"', ['red'])} ${getStyledStr('if', ['bold'])} the number is even, otherwise answer ${getStyledStr('"no"', ['red'])}.`;

const buildQuestionExpr = () => {
  const evalCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');
  const question = getRandomInt(1, 100);
  const corrAnswer = evalCorrectAnswer(question);

  return {
    question,
    corrAnswer,
  };
};


const runBrainEven = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainEven;
