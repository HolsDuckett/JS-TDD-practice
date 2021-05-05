const { test, expect } = require("@jest/globals");
const middleLetter = require("./middleLetter");


describe('Find the middle letter', () => {
    test('returns the string when only 1 character string is given', () => {
        expect(middleLetter("A")).toBe("A");
    });

    test('returns full string when only a 2 character string is passed', () => {
        expect(middleLetter("BB")).toBe("BB");
    });

    test('returns the middle letter of a 3 character string is passed', () => {
        expect(middleLetter("cat")).toBe("a");
    });

    test('returns the 2 middle charsacters if the length of string is even', () => {
        expect(middleLetter("middle")).toBe("dd");
    })
})
