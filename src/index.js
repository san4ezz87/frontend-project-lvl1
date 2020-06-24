import readline from 'readline';

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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Your answer: ',
  });

  let answerData = buildQuestionExpr();
  console.log(hellowText);

  rl.question(askNameText, (name) => {
    const answerCounter = countRightAnswer(3);
    console.log(greetingBuild(name));

    console.log(gameRulesText);
    console.log(questionBuild(answerData.questionBudy));

    rl.prompt();

    rl.on('line', (input) => {
      const answer = input.trim();

      if (!answerData.isAnswerCorrect(answer)) {
        console.log(wrongAnswerBuild(answer, answerData.corrAnswer, name));
        rl.close();
        return;
      }

      if (answerData.isAnswerCorrect(answer)) {
        readline.moveCursor(process.stdout, 0, -1);
        console.log(`Your answer: ${getStyledStr(answer, ['cyan'])}`);
        answerCounter.incrimentCorret();
        console.log('Correct!');
      }

      if (answerCounter.isWin()) {
        console.log(`Congratulations, ${name}!`);
        rl.close();
        return;
      }

      answerData = buildQuestionExpr();
      console.log(questionBuild(answerData.questionBudy));
      rl.prompt();
    });
  });
};
