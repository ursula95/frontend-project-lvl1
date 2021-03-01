#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHelloByName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = sayHelloByName();
console.log('What is the result of the expression?');

let counter = 0;
const operators = [ '+', '-', '*' ];
while (counter < 3) {
  const currentNumber = Math.ceil(Math.random() * 100);
  const currentNumberSecond = Math.ceil(Math.random() * 100);
  const currentOperator = operators[Math.floor(Math.random() * operators.length)];
  const correctAnswer = eval(`${currentNumber}${currentOperator}${currentNumberSecond}`);
  
  console.log(`Question: ${currentNumber} ${currentOperator} ${currentNumberSecond}`);
  const answerOfUser = readlineSync.question('Your answer: ');

  if (answerOfUser === `${correctAnswer}`) {
    console.log('Correct!');
    counter += 1;
  } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      break;
    }
  }

if (counter === 3) {
  console.log(`Congratulations, ${userName}!`);
}