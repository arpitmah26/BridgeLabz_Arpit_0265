// Trees in js

// 2. Terminology
// Root: The top node in a tree.
// Parent: A node that has children.
// Child: A node that has a parent.
// Leaf: A node without children.
// Depth: The distance from the root to a node.
// Height: The longest path from a node to a leaf.
// Subtree: A tree consisting of a node and its descendants.

// Implementation of Tree


class TreeNode{
    constructor(value){
        this.value =value;
        this.left = null;
        this.right = null;
    }
}


//binary tree class

class BinaryTree{
    constructor(){
        this.root = null;
    }


    insert(value){
        const newNode = new TreeNode(value);

        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(true){
            if(value< current.value){
                if(!current.left){
                    current.left =newNode;
                    return;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right =newNode;
                    return;
                }
                current  =current.right;
            }
        }
    }

    //search for value
    search(value){
        let current = this.root;
        while(current){
            if(value === current.value) return value;
            if(value < current.value){
                current =current.left
            }else{
                current = current.right;
            }
        }
        return false;
    }

    //traversals
    inOrderTraversal(node = this.root){
        if(!node) return;
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
        
    }


    preOrderTraversal(node = this.root){
        if(!node) return;
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
        
    }


    postOrderTraversal(node = this.root){
        if(!node) return;
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
        
    }


    //height of tree
    getHeight(node = this.root){
        if(!node) return -1;
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) +1;
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.inOrderTraversal();
tree.postOrderTraversal();
tree.preOrderTraversal();


console.log(tree.getHeight());