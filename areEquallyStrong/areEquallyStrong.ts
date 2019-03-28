function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  let yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  let friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  let friendStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
