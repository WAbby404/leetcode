class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    // isEmpty
    isEmpty(){
        return this.root === null;
    }
    // insert
    insert(value){
        const newNode = new TreeNode(value);
        if(this.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // insertNode (recursive)
    insertNode(newNode, root){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null){
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    // search
    search(root, value){
        if(!root){
            return false;
        } else {
            if(root.value === value){ 
                return true;
            } else if(root.value > value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    // traversal - DFS preorder, inorder, postorder | BFS
    DFSpreorder(root){
        if(root){
            console.log(root.value);
            this.DFSpreorder(root.left);
            this.DFSpreorder(root.right);
        }
    }
    DFSinorder(root){
        if(root){
            this.DFSinorder(this.left);
            console.log(root.value);
            this.DFSinorder(this.right);
        }
    }
    DFSpostorder(root){
        if(root){
            this.DFSpostorder(root.left);
            this.DFSpostorder(root.right);
            console.log(root.value);
        }
    }
    BFS(root){
        const queue = [];
        queue.push(root);
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }
    // min
    min(root){
        if(!root.left){
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    // max
    max(root){
        if(!root.right){
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    // delete
    delete(value){
        this.root = this.deleteNode(this.root, value);
    }
    // deleteNode (recursive)
    deleteNode(root, value){
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        } else if ( value > root.value ) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // 3 scenarios
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            } else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}