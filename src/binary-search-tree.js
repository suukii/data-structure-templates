class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        this._insert(this.root, node);
    }
    // iterative
    _insert(root, node) {
        while (true) {
            if (node.value <= root.value) {
                if (!root.left) {
                    root.left = node;
                    break;
                }
                root = root.left;
            } else {
                if (!root.right) {
                    root.right = node;
                    break;
                }
                root = root.right;
            }
        }
    }
    // // recursive
    // _insert(root, node) {
    //     if (!root) return node;

    //     if (node.value <= root.value) {
    //         root.left = this._insert(root.left, node);
    //     } else {
    //         root.right = this._insert(root.right, node);
    //     }
    //     return root;
    // }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

module.exports = {
    BST,
};
