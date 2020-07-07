import gameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';


const gameRulesText = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operatorList = Object.keys(operations);

const buildRoundData = () => {
  const fistNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);
  const operationNum = getRandomInt(0, operatorList.length);
  const operator = operatorList[operationNum];
  const question = `${fistNum} ${operator} ${secondNum}`;
  const corrAnswer = (operations[operator](fistNum, secondNum));
  return {
    question,
    corrAnswer: corrAnswer.toString(),
  };
};

const runBrainCalc = () => {
  gameEngine(gameRulesText, buildRoundData);
};

export default runBrainCalc;
