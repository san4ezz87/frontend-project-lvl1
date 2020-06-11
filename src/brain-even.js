import askName from './cli.js';

const getStyledStr = (str, fontStyles) => {
  const fontStyle = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    reset: '\x1b[0m',
    bold: '\x1b[1m',
  };

  const combinedStyles = fontStyles.reduce((acc, style) => acc + fontStyle[style], '');

  return `${combinedStyles}${str}${fontStyle.reset}`;
};

const brainEven = () => {
  askName();
  const conditions = `Answer ${getStyledStr('"yes"', ['bold', 'red'])} ${getStyledStr('if', ['bold'])} the number is even, otherwise answer ${getStyledStr('"no"', ['bold', 'red'])}.`;
  console.log(conditions);
};

export default brainEven;
