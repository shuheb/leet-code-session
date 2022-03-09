// https://leetcode.com/problems/valid-parentheses/

describe.skip('valid-parenthesis', () => {
    it('"{ { } [ ] [ [ [ ] ] ] }"', () => expect(isValid("{{}[][[[]]]}")).toBe(true))
    it('"()[]{}"', () => expect(isValid("()[]{}")).toBe(true))
    it('"(])"', () => expect(isValid("(])")).toBe(false))
    it('"([)]"', () => expect(isValid("([)]")).toBe(false))
    it('"{[]}"', () => expect(isValid("{[]}")).toBe(true))
})

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {

};

