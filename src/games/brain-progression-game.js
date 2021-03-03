import readlineSync from 'readline-sync';

function brainProgression() {
  console.log('What number is missing in the progression?.');
  let counter = 0;

  while (counter < 3) {
    const sourceArr = [];

    const firstNum = Math.ceil(Math.random() * 100);
    const step = Math.ceil(Math.random() * 100);
    const size = Math.ceil(Math.random() * 5 + 10);
    const indexOfHiddenNum = Math.ceil(Math.random() * (size - 1));
    let hiddenNum = 0;

    for (let i = firstNum, j = 0; j < size; i += step, j += 1) {
      sourceArr.push(i);
    }

    sourceArr.forEach((element) => {
      if (element === sourceArr[indexOfHiddenNum]) {
        hiddenNum = element;
        sourceArr[indexOfHiddenNum] = '..';
      }
    });

    const showedProgression = sourceArr.join(' ');

    console.log(`Question: ${showedProgression}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (answerOfUser === `${hiddenNum}`) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${hiddenNum}'.`);
      return false;
    }
  }
  return true;
}

export default brainProgression;
