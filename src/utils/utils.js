const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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

export { getRandomInt, getStyledStr };
