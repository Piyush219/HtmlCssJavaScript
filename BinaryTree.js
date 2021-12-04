class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinaryST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode;
            return
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return null;
        }
        else if (data < node.data) {
            return this.search(node.left, data)
        }
        else if (data > node.data) {
            return this.search(node.right, data);
        }
        else {
            return node;
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            if (node.left != null) {
                this.preorder(node.left);
            }

            if (node.right != null) {
                this.preorder(node.right);
            }
        }
    }

    getRootNode() {
        return this.root;
    }


}

var binaryTree = new BinaryST();

binaryTree.insert(15);
binaryTree.insert(25);
binaryTree.insert(10);
binaryTree.insert(7);
binaryTree.insert(22);
binaryTree.insert(17);

var root = binaryTree.getRootNode()
binaryTree.preorder(root)
console.log(binaryTree)
console.log(binaryTree.search(root, 15))
