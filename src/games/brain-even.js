import {
  getStyledStr,
  getRandomInt,
  gameEngine,
} from '../index.js';

const gameRulesText = `Answer ${getStyledStr('"yes"', ['red'])} ${getStyledStr('if', ['bold'])} the number is even, otherwise answer ${getStyledStr('"no"', ['red'])}.`;

const buildQuestionExpr = () => {
  const evalCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');
  const questionBudy = getRandomInt(1, 100);
  const corrAnswer = evalCorrectAnswer(questionBudy);

  return {
    questionBudy,
    corrAnswer,
    isAnswerCorrect(answer) {
      return answer === corrAnswer;
    },
  };
};


const runBrainEven = () => {
  gameEngine(gameRulesText, buildQuestionExpr);
};

export default runBrainEven;
