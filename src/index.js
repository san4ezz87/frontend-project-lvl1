import readlineSync from 'readline-sync';

const answerToWing = 3;
export default (gameRulesText, buildRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRulesText);

  for (let correctAnswerCount = 0; correctAnswerCount < answerToWing; correctAnswerCount += 1) {
    const { question, correctAnswer } = buildRoundData();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');

    const answer = userAnswer.trim();
    if (answer !== correctAnswer) {
      console.log(` ${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
