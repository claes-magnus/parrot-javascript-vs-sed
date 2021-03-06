const regExps = require('./source-code-reg-exp.js');

const ANSI_CODES = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    purple: 35,
    cyan: 36,
    white: 37,
    start: '\x1b[',
    bold: '1;',
    reset: '\x1b[0m',
    background: 10,
    ending: 'm'   
};

const types = {
    keywords: 'purple',
    doubleQuote: 'yellow',
    singleQuote: 'yellow',
    dynamicQuote: 'yellow',
    integer: 'yellow',
    inlineComment: 'cyan',
    blockComment: 'cyan'
};

function highlightWord(word, typeOfExpr) {
    const { 
        start,
        ending,
        reset
} = ANSI_CODES;
    const color = types[typeOfExpr];
    return ''.concat(start, ANSI_CODES[color], ending, word, reset);
}

function highlight(input) {
    return Object.entries(regExps).reduce(
        (newInput, [regExType, expression]) => newInput.replace(
            expression, 
            (w) => highlightWord(w, regExType)
        ),
        input
    );
}

module.exports = highlight;
