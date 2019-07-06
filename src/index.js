module.exports = function check(str, bracketsConfig) {
  let blocks = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    blocks = bracketsConfig.map(function (bracket) {
      return bracket[0] + bracket[1];
    })
  }
  let result
  while (result !== str) {
    result = str;
    blocks.forEach(function (block) {
      str = str.replace(block, '');
    });
  }
  return str.length === 0;
}
