function getTotalTime(passcode, keypadStr) {
  if (!/^(?!.*(.).*\1)\d{9}$/.test(keypadStr)) { throw new Error(' 9 keys required'); }
  if (!/\d$/.test(passcode)) { throw new Error('only integers are allowed'); }
  let newPasscode = '';
  const newKeyPadStr = '012345678';
  for (const element of passcode) {
    newPasscode += keypadStr.indexOf(element);
  }
  let totalTime = 0;
  for (let i = 0; i < newPasscode.length - 1; i += 1) {
    let time = 0;
    const currentIndexKeypad = Number(newKeyPadStr[newPasscode[i]]);
    const nextIndexKeypad = newKeyPadStr[newPasscode[i + 1]];
    if (currentIndexKeypad === Number(nextIndexKeypad)) {
      time = 0;
    } else if (/^[0 | 3 | 6]$/.test(currentIndexKeypad)) {
      const getBool = nextIndexKeypad === newKeyPadStr[currentIndexKeypad + 1]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad + 3]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad - 3]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad + 4]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad - 2];
      if (getBool) { time = 1; } else { time = 2; }
    } else if (/^[1 | 4 | 7]$/.test(currentIndexKeypad)) {
      const getBool = Number(nextIndexKeypad) >= Number(newKeyPadStr[currentIndexKeypad + 5])
      || Number(nextIndexKeypad) <= Number(newKeyPadStr[currentIndexKeypad - 5]);
      if (getBool) { time = 2; } else { time = 1; }
    } else if (/^[2 | 5 | 8]$/.test(currentIndexKeypad)) {
      const getBool = nextIndexKeypad === newKeyPadStr[currentIndexKeypad - 1]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad + 3]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad - 3]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad - 4]
        || nextIndexKeypad === newKeyPadStr[currentIndexKeypad + 2];
      if (getBool) { time = 1; } else { time = 2; }
    }
    totalTime += time;
  }
  return totalTime;
}

export { getTotalTime };
