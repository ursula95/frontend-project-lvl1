import readlineSync from 'readline-sync';

function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;

  while (counter < 3) {
    const currentNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${currentNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (answerOfUser !== 'yes' && answerOfUser !== 'no') {
      console.log(`Let's try again, ${userName}`);
      return false;
    } else if (currentNumber % 2 === 0) {
      if (answerOfUser === 'yes') {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
        return false;
      }
    } else if (currentNumber % 2 !== 0) {
      if (answerOfUser === 'no') {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
        return false;
      }
    }
  }
  return true;
};

export default brainEven;
