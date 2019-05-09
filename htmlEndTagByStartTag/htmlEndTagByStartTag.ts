function htmlEndTagByStartTag(startTag) {
  let startTagArr = startTag.split(' ');
  let tag = startTagArr[0];
  tag = tag.replace(/\W/g, '');

  return `</${tag}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
