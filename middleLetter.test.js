const middleLetter = require("./middleLetter");


describe('Find the middle letter', () => {
    test('returns the string when only 1 character string is given', () => {
        expect(middleLetter("A")).toBe("A");
    });

    test('returns full string when only a 2 character string is passed', () => {
        expect(middleLetter("BB")).toBe("BB");
    });
})
