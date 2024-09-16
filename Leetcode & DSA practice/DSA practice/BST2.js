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
    isEmpty(root){
        return this.root === null;
    }
    // insert
    insert(value){
        const newNode = new TreeNode(value);
        if(this.root.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(newNode, this.root);
        }
    }
    // insertNode
    insertNode(newNode, root){
        if(root.value > newNode.value){
            if(!root.left){
                root.left = newNode;
            } else {
                this.insertNode(newNode, root.left);
            }
        } else {
            if(!root.right){
                root.right = newNode;
            } else {
                this.insertNode(newNode, root.right);
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
            } else if(root.value > value){
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    // traversal - DFSpreorder, DFSinorder, DFSpostorder, BFS
    DFSpreorder(root){
        if(root){
            console.log(root.value);
            DFSpreorder(root.left);
            DFSpreorder(root.right);
        }
    }
    DFSinorder(root){
        if(root){
            DFSinorder(root.left);
            console.log(root.value);
            DFSinorder(root.right);
        }
    }
    DFSpostorder(root){
        if(root){
            DFSpostorder(root.left);
            DFSpostorder(root.right);
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
        if(root){
            if(!root.left){
                return root;
            } else {
                return this.min(root.left);
            }
        }
    }
    // max
    max(root){
        if(root){
            if(!root.right){
                return root;
            } else {
                return this.max(root.right);
            }
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
        // look further down the tree L or R
        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value){
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right){
                return null;
            } 
            // one
            if(!root.left){
                return root.right;
            } else if (!root.right){
                return root.left;
            }
            // two make the next biggest child this current root & delete its old place
            // take minimum (leaf node) & replace it with what we want to delete
            // (will still be a binary search tree after replacement)
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
    }
}
// T ASID B- log n | ASID W- n  | S - O(n)