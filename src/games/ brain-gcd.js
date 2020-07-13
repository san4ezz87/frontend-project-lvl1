import gameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const filterDividerTakeNum = (curNum) => (divisor) => (curNum % divisor === 0);

const findAllDivisors = (num) => {
  const minNum = 1;
  let resNum = num;
  const divisorsListForNumber = [];
  const divisorsList = [2, 3, 4, 5, 6, 7, 8, 9];

  while (minNum !== resNum) {
    const filterDivider = filterDividerTakeNum(resNum);
    const [divisorForNum] = divisorsList.filter(filterDivider);
    if (divisorForNum) {
      divisorsListForNumber.push(divisorForNum);
      resNum /= divisorForNum;
    } else {
      divisorsListForNumber.push(resNum);
      resNum /= resNum;
    }
  }

  return divisorsListForNumber;
};

const evalCorrectAnswer = (firstNum, secondNum) => {
  const firstDividersList = findAllDivisors(firstNum);
  const secondDividersList = findAllDivisors(secondNum);

  const commonDividersList = firstDividersList.filter((divider) => {
    const elmentIndex = secondDividersList.indexOf(divider);
    if (elmentIndex !== -1) {
      secondDividersList.splice(elmentIndex, 1);
      return true;
    }
    return false;
  });

  if (commonDividersList.length) {
    return commonDividersList.reduce((acc, divvider) => acc * divvider);
  }
  return 1;
};

const buildRoundData = () => {
  const first = getRandomInt(1, 20);
  const second = getRandomInt(1, 20);

  const correctAnswer = evalCorrectAnswer(first, second);
  const question = `${first} ${second}`;

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainGcd = () => {
  gameEngine(gameRules, buildRoundData);
};

export default runBrainGcd;
