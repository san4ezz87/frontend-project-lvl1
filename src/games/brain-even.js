import gameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const buildRoundData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};


const runBrainEven = () => {
  gameEngine(gameRules, buildRoundData);
};

export default runBrainEven;
