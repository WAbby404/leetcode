class TreeNode {
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

const tree = new TreeNode(1);

class BinaryTreeNode{
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}