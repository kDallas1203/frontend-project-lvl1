#!/usr/bin/env node
import readlineSync from 'readline-sync';

const promptUsername = () => readlineSync.question('May I have your name? ');
const generateRandomNumber = (max) => Math.floor(Math.random() * max) + 1;
const isEven = (value) => value % 2 === 0;
const promptUserAnswer = () => readlineSync.question('Your answer: ').trim();
const getCongratulationsText = (username) => `Congratulations, ${username}!`;
const getFailGameText = (username) => `Let's try again, ${username}!`;

function startGame() {
  const MAX_GAMES_COUNT = 2;
  let currentGameCount = 0;
  let isFail = false;

  while (MAX_GAMES_COUNT >= currentGameCount) {
    const question = generateRandomNumber(50);
    const answer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = promptUserAnswer();

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${answer}.`,
      );
      isFail = true;
      break;
    }

    currentGameCount += 1;
    console.log('Correct!');
  }

  return isFail;
}

function init() {
  console.log('Welcome to the Brain Games!');
  const username = promptUsername();
  console.log(`Hello ${username}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isFail = startGame();
  console.log(
    isFail ? getFailGameText(username) : getCongratulationsText(username),
  );
}

init();
