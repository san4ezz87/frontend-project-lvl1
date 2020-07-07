import readlineSync from 'readline-sync';

const answerToWing = 3;
export default (gameRulesText, buildRoundData) => {
  let correctAnswer = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRulesText);

  while (answerToWing > correctAnswer) {
    const { question, corrAnswer } = buildRoundData();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');

    const answer = userAnswer.trim();
    if (answer !== corrAnswer) {
      console.log(` ${answer} is wrong answer ;(. Correct answer was ${corrAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    correctAnswer += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
