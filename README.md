### SUMMARY

Using codewars katas and tech tests to practice TDD process in javascript and jest.

## Requirements
The program runs in a REPL like irb or in a browser console.

It's fine to use Ruby or JavaScript.

Your job is to return the middle letter of a word. If the word's length is odd, return the middle letter. If the word's length is even, return the middle 2 letters.

## Acceptance Criteria
- get_middle("test") # => "es"
- get_middle("testing") # => "t"
- get_middle("middle") # => "dd"
- get_middle("A") # => "A"
- get_middle("of") # => "of"


## Planning

|   INPUT    |   OUTPUT  |
|------------|------------|
|    "A"    |    "A"    |
|    "B"    |    "B"    |
|    "of"    |    "of"    |
|    "cat"    |    "a"    |
|    "middle"    |    "dd"    |

Edgecase
- ouput capitalisation is the same as input
- spaces
