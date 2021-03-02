import sayHelloByName from './cli.js';

const run = (currentGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = sayHelloByName();
  if (currentGame() === true) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export default run;
