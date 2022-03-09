// https://leetcode.com/problems/binary-tree-inorder-traversal/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// [1,null,2,3]
test('use case 1', () => {
    const node = new TreeNode(1, undefined, new TreeNode(2, 3, undefined))
    expect(inorderTraversal(node)).toEqual([1, 3, 2])
})



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let arr = [];
    traverse(root, arr)
    return arr
};

function traverse(root, arr) {
    if (root !== null) {
        if (root.left != null) {
            traverse(root.left, arr)
        }
        arr.push(root.val)
        traverse(root.right, arr)
    }
}