import readlineSync from 'readline-sync';

function brainCalc() {
  let counter = 0;
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];

  while (counter < 3) {
    const currentNumber = Math.ceil(Math.random() * 100);
    const currentNumberSecond = Math.ceil(Math.random() * 100);
    const currentOperator = operators[Math.floor(Math.random() * operators.length)];
    let correctAnswer;

    const getCorrectAnswer = () => {
      if (currentOperator === '+') {
        correctAnswer = currentNumber + currentNumberSecond;
      }
      if (currentOperator === '-') {
        correctAnswer = currentNumber - currentNumberSecond;
      }
      if (currentOperator === '*') {
        correctAnswer = currentNumber * currentNumberSecond;
      }
      return correctAnswer;
    };

    console.log(`Question: ${currentNumber} ${currentOperator} ${currentNumberSecond}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (answerOfUser === `${getCorrectAnswer()}`) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
}

export default brainCalc;
