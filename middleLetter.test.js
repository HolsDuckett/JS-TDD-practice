const middleLetter = require("./middleLetter");


describe('Find the middle letter', () => {
    test('returns the string when only 1 character string is given', () => {
        expect(middleLetter("A")).toBe("A");
    });
})
