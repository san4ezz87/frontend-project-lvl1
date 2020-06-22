import readline from 'readline';

const getStyledStr = (str, fontStyles) => {
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

const brainEven = () => {
  const correctAnswerToWin = 3;
  let correctAnswerCount = 0;

  const hellowText = 'Welcome to the Brain Games!';
  const askNameText = 'May I have your name? ';
  const conditionsText = `Answer ${getStyledStr('"yes"', ['red'])} ${getStyledStr('if', ['bold'])} the number is even, otherwise answer ${getStyledStr('"no"', ['red'])}.`;

  const wrongAnswerBuild = (answer, correctAnswer, name) => `${getStyledStr(`"${answer}"`, ['red'])} is wrong answer ;(. Correct answer was ${getStyledStr(`"${correctAnswer}"`, ['red'])}.\nLet ${getStyledStr(`'s try again, ${name}`, ['red'])}!`;
  const greetingBuild = (name) => `Hello, ${name}!`;
  const questionBuild = (curNumber) => `Question: ${curNumber}`;
  const randomNumber = () => Math.floor(Math.random() * 100);
  const evalCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Your answer: ',
  });

  let curNumber = randomNumber();
  let correctAnswer = evalCorrectAnswer(curNumber);

  console.log(hellowText);

  rl.question(askNameText, (name) => {
    console.log(greetingBuild(name));

    console.log(conditionsText);
    console.log(questionBuild(curNumber));

    rl.prompt();

    rl.on('line', (input) => {
      const answer = input.trim();
      if (answer === 'yes' || answer === 'no') {
        readline.moveCursor(process.stdout, 0, -1);
        const answerStyled = answer === 'yes' ? getStyledStr('"yes"', ['cyan']) : answer;
        console.log(`Your answer: ${answerStyled}`);
      }


      if (answer !== correctAnswer) {
        console.log(wrongAnswerBuild(answer, correctAnswer, name));
        rl.close();
        return;
      }

      if (answer === correctAnswer) {
        correctAnswerCount += 1;
        console.log('Correct!');
      }

      if (correctAnswerCount >= correctAnswerToWin) {
        console.log(`Congratulations, ${name}!`);
        rl.close();
        return;
      }

      curNumber = randomNumber();
      correctAnswer = evalCorrectAnswer(curNumber);
      console.log(questionBuild(curNumber));
      rl.prompt();
    });
  });
};

export default brainEven;
