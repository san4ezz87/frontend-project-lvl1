import readline from 'readline';

export default () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
  });
};
