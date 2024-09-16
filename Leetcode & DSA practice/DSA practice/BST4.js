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
    // isempty
    isEmpty(){
        return this.root === null;
    }
    // insert | insertNode
    insert(value){
        const newNode = new TreeNode(value);
        if(this.root.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
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
        } else {
            if(root.value === value){
                return true;
            } else if( root.value > value){
                this.search(root.left, value);
            } else {
                this.search(root.right, value);
            }
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
    DFSpostorder(root){
        if(root){
            this.DFSpostorder(root.left);
            this.DFSpostorder(root.right);
            console.log(root.value);
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
    // min | max
    min(root){
        if(root){
            if(!root.left){
                return root;
            } else {
                this.min(root.left);
            }
        }
    }

    max(root){
        if(root){
            if(!root.right){
                return root;
            } else {
                this.max(root.right);
            }
        }
    }
    // delete | deleteNode
    delete(value){
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if(root === null){
            return root;
        }
        if(root.value > value){
            root.left = this.deleteNode(root.left, value);
        } else if( root.value < value ){
            root.right = this.deleteNode(root.right, value);
        } else {
            // 3 possibilities
            if(!root.left && !root.right){
                return null;
            }

            if(!root.right){
                return root.left;
            }
            if(!root.left){
                return root.right;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(this.right, root.value);
        }
        return root;
    }
}