import readlineSync from 'readline-sync';

function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;

  while (counter < 3) {
    const currentNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${currentNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    let correctAnswer = 'no';

    if (currentNumber % 2 === 0) {
      correctAnswer = 'yes';
    }

    if (answerOfUser === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answerOfUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }
  return true;
}

export default brainEven;
