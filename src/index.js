import readlineSync from 'readline-sync';
import { getStyledStr } from './utils/utils.js';

const answerToWing = 3;
export default (gameRulesText, buildQuestionExpr) => {
  let correctAnswer = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRulesText);

  while (answerToWing > correctAnswer) {
    const { question, corrAnswer } = buildQuestionExpr();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');

    const answer = userAnswer.trim();
    if (answer !== corrAnswer) {
      console.log(`${getStyledStr(`"${answer}"`, ['red'])} is wrong answer ;(. Correct answer was ${getStyledStr(`"${corrAnswer}"`, ['red'])}.`);
      console.log(`Let ${getStyledStr(`'s try again, ${userName}`, ['red'])}!`);
      return;
    }

    correctAnswer += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
