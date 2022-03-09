// https://leetcode.com/problems/letter-combinations-of-a-phone-number/


test.skip('Letter Combination 1', () => {
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    numberMapping = new Map([
        [2, "abc"],
        [3, 'def'],
        [4, 'ghi'],
        [5, 'jkf'],
        [6, 'mno'],
        [7, 'pqrs'],
        [8, 'tuv'],
        [9, 'wxyz']
    ]
    );

    const combinations = [];



    for (let i = 0; i < 1; i++) {
        const char = Number(digits.charAt(i));
        const mapping = numberMapping.get(char).split('');
        console.log(mapping)
    }
    console.log(combinations)
};