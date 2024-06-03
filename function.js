function test(str) {
  const obj = {
    '{':-1,
    '}':1,
    '[':-2,
    ']':2,
    '(':-3,
    ')':3
  }
  const len = str.length;
  let count = 0;
  let khArr = [];
  for (let i = 0;i < len;i++) {
    if (obj[str[i]] && obj[str[i]] < 0) {
      khArr.push(obj[str[i]]);
    } else if (obj[str[i]] && obj[str[i]] > 0) {
      for(let j = 0;j < khArr.length;j++) {
        if (khArr[j] + obj[str[i]] === 0) {
          count++;
          khArr[j] = 0;
          continue;
        }
      }
    }
  }
  return count;
}
test('{}()')