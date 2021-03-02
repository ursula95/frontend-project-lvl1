import readlineSync from 'readline-sync';

function brainPrime() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let counter = 0;
  
    while (counter < 3) {
      const currentNumber = Math.ceil(Math.random() * 1000);
      console.log(`Question: ${currentNumber}`);
      const answerOfUser = readlineSync.question('Your answer: ');
      let realAnswer = 'yes';

      for (let i = 2; i < currentNumber; i++) {
	  if (currentNumber % i === 0) {
		realAnswer = 'no';
		break;
	    }
      }
  
      if (answerOfUser !== 'yes' && answerOfUser !== 'no') {
        return false;
      } else if (answerOfUser === realAnswer) {
          console.log('Correct!');
          counter += 1;
        } else {
          console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
          return false;
        }
      }
    return true;
  };
  
  export default brainPrime;
