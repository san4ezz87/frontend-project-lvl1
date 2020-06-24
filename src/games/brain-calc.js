import {
  getRandomInt,
  gameEngine,
} from '../index.js';

const gameRulesText = 'What is the result of the expression?';

const operations = {
  1: (a, b) => a + b,
  2: (a, b) => a - b,
  3: (a, b) => a * b,
};

const operationSymbl = {
  1: '+',
  2: '-',
  3: '*',
};

const buildQuestionExpr = () => {
  const fistNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);
  const operationNum = getRandomInt(1, 3);

  const questionBudy = `${fistNum} ${operationSymbl[operationNum]} ${secondNum}`;
  const corrAnswer = (operations[operationNum](fistNum, secondNum));
  return {
    questionBudy,
    corrAnswer,
    isAnswerCorrect(answer) {
      return answer === corrAnswer.toString();
    },
  };
};

const brainCalc = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default brainCalc;
