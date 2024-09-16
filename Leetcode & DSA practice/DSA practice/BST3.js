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
        if(this.root.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // insertNode
    insertNode(root, newNode){
        if(newNode.value < root.value){
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
    // Traversal DFSpreorder, DFSinorder, DFSpostorder BFS
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
    DFSpostorder(root){
        if(root){
            this.DFSpostorder(root.left);
            this.DFSpostorder(root.right);
            console.log(root.value);
        }
    }
    // search
    search(root, value){
        if(!root){
            return false;
        } else {
            if(root.value === value){
                return true;
            } else if(root.value > value){
                this.search(root.left, value);
            } else {
                this.search(root.right, value);
            }
        }
    }
    // min
    min(root){
        if(!root.left){
            return root.value;
        } else {
            this.min(root.left);
        }
    }
    // max
    max(root){
        if(!root.right){
            return root.value;
        } else {
            this.max(root.right);
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
        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        } else if( value > root.value){
            root.right = this.deleteNode(root.right, value);
        } else {
            // 3 scenarios
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }

            // 2 children case- swap right min (leaf node) with node to delete & delete it
            // will still be in order
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}