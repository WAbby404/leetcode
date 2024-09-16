class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    // isEmpty
    isEmpty(){
        return this.root === null;
    }
    // insert
    insert(value){
        let newNode = new TreeNode(value);
        if(this.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // insertNode
    insertNode(root, newNode){
        if(root.value > newNode.value){
            if(!root.left){
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(!root.right){
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    // search
    // traversal
    // min
    // max
    // delete
    // deleteNode
}