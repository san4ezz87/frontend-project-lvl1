import {
  getStyledStr,
  getRandomInt,
  gameEngine,
} from '../index.js';

const gameRulesText = `What number is missing ${getStyledStr('in', ['bold'])} the progression?`;

const buildQuestionExpr = () => {
  const progressionLength = 10;
  const numForProgression = 2;
  const progressionMake = (n, num) => n + num;

  const progrssinStart = getRandomInt(1, 3);
  const numberPosition = getRandomInt(1, 9);
  const progressionRow = [progrssinStart];

  for (let i = 1; i < progressionLength; i += 1) {
    const prevElem = progressionRow[i - 1];
    const newElem = progressionMake(prevElem, numForProgression);
    progressionRow.push(newElem);
  }

  const corrAnswer = progressionRow.splice(numberPosition, 1, '..');
  const questionBudy = progressionRow.join(' ');

  return {
    questionBudy,
    corrAnswer,
    isAnswerCorrect(answer) {
      return answer === corrAnswer.toString();
    },
  };
};


const brainProgression = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default brainProgression;
