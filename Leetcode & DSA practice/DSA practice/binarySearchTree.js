class Node{
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
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const newNode = new Node(value);
        // do this whole if statement to make recursion possible
        if(this.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode){
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
    search(root, value){
        if(!root){
            return false;
        } else {
            if(root.value === value){
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        } 
    }
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
    min(root){
        if(!root.left){
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root){
        if(!root.right){
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    delete(value){
        // relys on recursion so start recursive loop with starting values
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value){
        //  if empty (return root to ensure recursion works in tree)
        if(root === null){
            return root;
        }
        // if not empty, first find node with passed in value (recursion)
        // if value is less then root
        if(value < root.value){
            // go down left tree
            root.left = this.deleteNode(root.left, value);
        // if value is more then root
        } else if ( value > root.value){
            // go down right tree
            root.right = this.deleteNode(root.right, value);
        // if both statements fail, then we have found node with correct value 
        // & can move forward with deletion
        } else {
            // 3 deletion scenarios
            // no children
            if(!root.left && !root.right){
                return null;
            }
            // one child (L then R)
            if(!root.left){
                return root.right;
            } else if(!root.right){
                return root.left;
            }
            // two children
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}

const bst = new BinarySearchTree();

console.log('Tree is empty', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(1);
bst.insert(2);
bst.insert(11);
bst.insert(13);

// bst.BFS(bst.root);
// bst.delete(3);
// console.log('_____')
// bst.BFS(bst.root);
// bst.delete(15);
// console.log('_____')
// bst.BFS(bst.root);
bst.delete(10);
bst.delete(1);
bst.delete(2);
console.log('_____')
bst.BFS(bst.root);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 3));
// console.log(bst.search(bst.root, 7));
// console.log(bst.search(bst.root, 20));
// bst.BFS(bst.root);

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));