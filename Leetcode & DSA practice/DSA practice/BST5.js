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
    search(root, value){
        if(!root){
            return false;
        }
        if(root.value > value){
            return this.search(root.left, value);
        } else if(root.value < value){
            return this.search(root.right, value);
        } else {
            return true;
        }
    }
    // traversal
    DFSpreorder(root){
        if(root){
            console.log(root.value);
            this.DFSpreorder(root.left);
            this.DFSpreorder(root.right);
        }
    }
    DFSinorder(root){
        if(root){
            this.DFSinorder(root.left);
            console.log(root.value);
            this.DFSinorder(root.right);
        }
    }
    DFSpreorder(root){
        if(root){
            console.log(root.value);
            this.DFSpreorder(root.left);
            this.DFSpreorder(root.right);
        }
    }
    BFS(root){
        let queue = [];
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
    // deleteNode
    deleteNode(root, value){
        if(root === null){
            return root;
        }
        if(root.value > value){
            root.left = this.deleteNode(root.left, value);
        } else if(root.value < value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
    }
}
// ASID B log n W n S n