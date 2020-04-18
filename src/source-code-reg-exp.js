const RESERVED_KEYWORDS = require('./reserved-keywords.js');
const partRegExp = RESERVED_KEYWORDS.join('|');

const sourceCodeRegExp = new RegExp(`\\b(${partRegExp})\\b`, 'g');

console.log(sourceCodeRegExp)

module.exports = sourceCodeRegExp;
