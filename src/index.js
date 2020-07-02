import readlineSync from 'readline-sync';

export const hellowText = 'Welcome to the Brain Games!';
export const askNameText = 'May I have your name? ';

export const getStyledStr = (str, fontStyles) => {
  const fontStyle = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m',
    bold: '\x1b[1m',
  };

  const combinedStyles = fontStyles.reduce((acc, style) => acc + fontStyle[style], '');

  return `${combinedStyles}${str}${fontStyle.reset}`;
};

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

export const getRandomInt = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  return Math.floor(Math.random() * (maxRound - minRound + 1)) + min;
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
    const { questionBudy, corrAnswer } = buildQuestionExpr();

    const userAnswer = readlineSync.question(questionBuild(questionBudy), {
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
