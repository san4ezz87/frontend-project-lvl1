import gameEngine from '../index.js';

import {
  getRandomInt,
} from '../utils/utils.js';

const gameRulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

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
