import runGameEngine from '../index.js';
import getRandomInt from '../utils/utils.js';

const gameRules = 'What number is missing in the progression?';
const progressionLength = 10;
const progressionMake = (n, num) => n + num;

const buildProgression = (start, step, length) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    const prevElem = progression[i - 1];
    const newElem = progressionMake(prevElem, step);
    progression.push(newElem);
  }

  return progression;
};

const buildRoundData = () => {
  const first = getRandomInt(1, 3);
  const blankPossion = getRandomInt(1, progressionLength - 1);
  const progressionStep = getRandomInt(1, 3);

  const progression = buildProgression(first, progressionStep, progressionLength);

  const correctAnswer = progression.splice(blankPossion, 1, '..');
  const question = progression.join(' ');

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};


const runBrainProgression = () => {
  runGameEngine(gameRules, buildRoundData);
};

export default runBrainProgression;
