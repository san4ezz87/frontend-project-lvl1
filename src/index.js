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

export const greetingBuild = (name) => `Hello, ${name}!`;

export const questionBuild = (question) => `Question: ${question}`;

export const wrongAnswerBuild = (answer, correctAnswer, name) => `${getStyledStr(`"${answer}"`, ['red'])} is wrong answer ;(. Correct answer was ${getStyledStr(`"${correctAnswer}"`, ['red'])}.\nLet ${getStyledStr(`'s try again, ${name}`, ['red'])}!`;

export const gameEngine = (gameRulesText, buildQuestionExpr) => {
  console.log(hellowText);
  const userName = readlineSync.question(askNameText);
  console.log(greetingBuild(userName));
  const answerCounter = countRightAnswer(3);
  console.log(gameRulesText);

  while (true) {
    const { question, corrAnswer } = buildQuestionExpr();

    const userAnswer = readlineSync.question(questionBuild(question), {
      hideEchoBack: true,
      mask: '',
    });

    const answer = userAnswer.trim();
    if (answer !== corrAnswer) {
      console.log(wrongAnswerBuild(answer, corrAnswer, userName));
      return;
    }

    if (corrAnswer) {
      console.log(`Your answer: ${getStyledStr(answer, ['cyan'])}`);
      answerCounter.incrimentCorret();
      console.log('Correct!');
    }

    if (answerCounter.isWin()) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};
