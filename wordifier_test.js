var test = require('tape');
var wordifier = require('./wordifier.js');

test('make single digit word', function(t) {
    t.equal(wordifier(1), "one");
    t.equal(wordifier(2), "two");
    t.equal(wordifier(3), "three");
    t.equal(wordifier(9), "nine");
    t.end();
});
test('make two digit words up to 20', function(t) {
    t.equal(wordifier(10), "ten");
    t.equal(wordifier(11), "eleven");
    t.equal(wordifier(13), "thirteen");
    t.equal(wordifier(19), "nineteen");
    t.equal(wordifier(20), "twenty");
    t.end();
});
test('make two digit words greater than 20', function(t) {
    t.equal(wordifier(21), "twenty one");
    t.equal(wordifier(30), "thirty");
    t.equal(wordifier(97), "ninety seven");
    t.end();
});
test('make two digits, two words', function(t) {
    t.equal(wordifier(100), "one hundred");
    t.equal(wordifier(200), "two hundred");
    t.end();
});
test('make three digits, two words', function(t) {
    t.equal(wordifier(112), "one hundred twelve");
    t.equal(wordifier(480), "four hundred eighty");
    t.equal(wordifier(203), "two hundred three");
    t.end();
});
test('make four word, three digit number', function(t) {
    t.equal(wordifier(481), "four hundred eighty one");
    t.equal(wordifier(999), "nine hundred ninety nine");
    t.equal(wordifier(10000), "ten thousand");
    t.equal(wordifier(10001), "ten thousand one");
    t.equal(wordifier(100000), "one hundred thousand");
    t.equal(wordifier(100001), "one hundred thousand one");
    // t.equal(wordifier(1000000), "one million");
    t.end();
});
