// 4. Path sum
// Given a binary tree and a sum, check if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

function pathsum(root, sum) {
    if (!root) 
      return false;
    if (!root.left && !root.right) 
      return root.val === sum;
    
    return pathsum(root.left, sum - root.val) || pathsum(root.right, sum - root.val);
}