function reflectString(inputString) {
  const alphabet = {
    z: 'a',
    y: 'b',
    x: 'c',
    w: 'd',
    v: 'e',
    u: 'f',
    t: 'g',
    s: 'h',
    r: 'i',
    q: 'j',
    p: 'k',
    o: 'l',
    n: 'm',
    m: 'n',
    l: 'o',
    k: 'p',
    j: 'q',
    i: 'r',
    h: 's',
    g: 't',
    f: 'u',
    e: 'v',
    d: 'w',
    c: 'x',
    b: 'y',
    a: 'z'
  };
  let stringArr = inputString.split('');

  let reflectedWord = '';

  stringArr.forEach(char => (reflectedWord += alphabet[char]));

  return reflectedWord;
}

console.log(reflectString('name'));
