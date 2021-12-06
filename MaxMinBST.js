class Solution {
    // Function to find the minimum element in the given BST.
    MinValue(root) {
        // your code here
        while(root.left){
            root=root.left
        }
        return root.data
    }
    // Function to find Maximum element in the given BST
    MaxValue(root){
        while(root.right){
            root=root.right
        }
        return root.data
    }
}