function incorrectPasscodeAttempts(passcode, attempts) {
  let attemptNr = 0;
  for (let i = 0; i < attempts.length; i++) {
    if (passcode === attempts[i]) {
      attemptNr = 0;
    } else {
      attemptNr++;
    }

    if (attemptNr === 10) {
      return true;
    }
  }
  return false;
}

console.log(
  incorrectPasscodeAttempts('1111', [
    '1111',
    '4444',
    '9999',
    '3333',
    '8888',
    '2222',
    '7777',
    '0000',
    '6666',
    '7285',
    '5555',
    '1111'
  ])
);

console.log(
  incorrectPasscodeAttempts('0000', [
    '1111',
    '4444',
    '9999',
    '3333',
    '8888',
    '2222',
    '7777',
    '6666',
    '1111',
    '0000'
  ])
);
