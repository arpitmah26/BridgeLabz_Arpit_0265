// 7) Max Depth of Binary Tree
// Find the maximum depth of a binary tree.

function maxDepth(root) {
    if (!root) 
      return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}