function findEmailDomain(address) {
  let domain = address.split('@');

  return domain.pop();
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
