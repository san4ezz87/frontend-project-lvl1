import readlineSync from 'readline-sync';
import { getStyledStr } from './utils/utils.js';

export const hellowText = 'Welcome to the Brain Games!';
export const askNameText = 'May I have your name? ';

export const countRightAnswer = (amountToWin) => {
  let currAmount = 0;

  return {
    incrimentCorret() {
      currAmount += 1;
    },
    isWin() {
      return currAmount >= amountToWin;
    },
  };
};

export const gameEngine = (gameRulesText, buildQuestionExpr) => {
  console.log(hellowText);
  const userName = readlineSync.question(askNameText);
  console.log(`Hello, ${userName}!`);

  const answerCounter = countRightAnswer(3);
  console.log(gameRulesText);

  while (!answerCounter.isWin()) {
    const { question, corrAnswer } = buildQuestionExpr();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');

    const answer = userAnswer.trim();
    if (answer !== corrAnswer) {
      console.log(`${getStyledStr(`"${answer}"`, ['red'])} is wrong answer ;(. Correct answer was ${getStyledStr(`"${corrAnswer}"`, ['red'])}.`);
      console.log(`Let ${getStyledStr(`'s try again, ${userName}`, ['red'])}!`);
      return;
    }

    if (answer === corrAnswer) {
      answerCounter.incrimentCorret();
      console.log('Correct!');
    }

    if (answerCounter.isWin()) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};
