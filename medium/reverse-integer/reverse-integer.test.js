// https://leetcode.com/problems/reverse-integer/

test.skip('Reverse Integer 1', () => {
    expect(reverse(123)).toEqual(321);
});

test.skip('Reverse Integer 2', () => {
    expect(reverse(-123)).toEqual(-321);
});

test.skip('Reverse Integer 3', () => {
    expect(reverse(120)).toEqual(21);
});

test.skip('Reverse Integer 4', () => {
    expect(reverse(1534236469)).toEqual(0);
});


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
};