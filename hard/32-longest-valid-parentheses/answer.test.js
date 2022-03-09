// https://leetcode.com/problems/longest-valid-parentheses/

test.skip('use case 1', () => {
    expect(longestValidParentheses('(()')).toEqual(2)
})

test.skip('use case 2', () => {
    expect(longestValidParentheses(")()())")).toEqual(4)
})

test.skip('use case 3', () => {
    expect(longestValidParentheses("")).toEqual(0)
})

test.skip('use case 4', () => {
    expect(longestValidParentheses("()(())((()))")).toEqual(6)
})

test.skip('use case 5', () => {
    expect(longestValidParentheses(")()())")).toEqual(4)
})
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const LEFT = '(';
    const RIGHT = ')';

    let queue = [];
    let count = 0;
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === LEFT) {
            queue.push('(');
        } else {
            let lastItem = queue[queue.length - 1];
            if (s[i] === RIGHT && lastItem === LEFT) {

                queue.pop();
                count++;



                if (count > longest) {
                    longest = count;
                }

                if (longest >= 0 && queue.length === 0) {
                    count = 0;
                }
            }
        }
    }

    return longest * 2;
};