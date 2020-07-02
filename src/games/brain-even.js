import {
  gameEngine,
} from '../index.js';

import {
  getStyledStr,
  getRandomInt,
} from '../utils/utils.js';

const gameRulesText = `Answer ${getStyledStr('"yes"', ['red'])} ${getStyledStr('if', ['bold'])} the number is even, otherwise answer ${getStyledStr('"no"', ['red'])}.`;

const buildQuestionExpr = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomInt(1, 100);
  const corrAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    corrAnswer,
  };
};


const runBrainEven = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainEven;
