import runGameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';


const gameRules = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operators = Object.keys(operations);

const buildRoundData = () => {
  const fistNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);
  const operationIndex = getRandomInt(0, operators.length - 1);

  const operator = operators[operationIndex];
  const question = `${fistNum} ${operator} ${secondNum}`;
  const correctAnswer = operations[operator](fistNum, secondNum);
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainCalc = () => {
  runGameEngine(gameRules, buildRoundData);
};

export default runBrainCalc;
