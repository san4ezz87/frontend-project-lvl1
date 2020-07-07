import gameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRulesText = 'What number is missing in the progression?';
const progressionLength = 10;
const numForProgression = 2;
const progressionMake = (n, num) => n + num;

const buildQuestionExpr = () => {
  const progrssinStart = getRandomInt(1, 3);
  const numberPosition = getRandomInt(1, 9);
  const progressionRow = [progrssinStart];

  for (let i = 1; i < progressionLength; i += 1) {
    const prevElem = progressionRow[i - 1];
    const newElem = progressionMake(prevElem, numForProgression);
    progressionRow.push(newElem);
  }

  const corrAnswer = progressionRow.splice(numberPosition, 1, '..');
  const question = progressionRow.join(' ');

  return {
    question,
    corrAnswer: corrAnswer.toString(),
  };
};


const runBrainProgression = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainProgression;
