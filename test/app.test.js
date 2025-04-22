const greet = require('../app');

test('greets properly', () => {
    expect(greet('World')).toBe('Hello, World!');
});