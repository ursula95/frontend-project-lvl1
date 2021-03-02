import readlineSync from 'readline-sync';

function brainGcd() {
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;

  const nod = (a, b) => {
	if (b > a) {
        return nod(b, a);
    }    
    if (!b) {
        return a;
    }
	return nod(b, a % b);
  };

  while (counter < 3) {
    const currentNumber = Math.ceil(Math.random() * 100);
    const currentNumberSecond = Math.ceil(Math.random() * 100);
    const correctAnswer = nod(currentNumber, currentNumberSecond);

    console.log(`Question: ${currentNumber} ${currentNumberSecond}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (answerOfUser === `${correctAnswer}`) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};

export default brainGcd;
