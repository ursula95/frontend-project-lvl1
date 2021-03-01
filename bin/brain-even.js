#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHelloByName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = sayHelloByName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 3) {
  const currentNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${currentNumber}`);
  const answerOfUser = readlineSync.question('Your answer: ');

  if (answerOfUser !== 'yes' && answerOfUser !== 'no') {
    console.log(`Let's try again, ${userName}`);
    break;
  } else if (currentNumber % 2 === 0) {
    if (answerOfUser === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
      break;
    }
  } else if (currentNumber % 2 !== 0) {
    if (answerOfUser === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
      break;
    }
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${userName}!`);
}
