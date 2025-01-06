// 1. Binary Tree Inorder Traversal

function inorder(root){
    const result=[]
      function traverse(node){
        if(!node)
          return
        traverse(node.left)
        result.push(node.right)
        traverse(node.right)
      }
      traverse(root)
      return result
  }