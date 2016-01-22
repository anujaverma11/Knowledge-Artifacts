Problem 1:
Compare two binary trees to see if they are identical.  Assume your tree has the following properties:
tree.size => returns the size (depth) of the tree; root is considered 0
tree.root => returns root node of the tree
 the nodes of your tree have the following methods:
node.leftChild => returns the left child of the node or null
node.rightChild => returns the right child of the node or null

Input: Tree1, Tree2
Output: Boolean

Time Complexity: O(n)
Space Complexity: O(n)

Example:
tree1 =        1
          /        \
        2          3
      /    \       /    \
    4      5    6     7


tree2 =        1
          /        \
        2          3
      /    \       /    \
    4      5    6     7



treeCompare(tree1, tree2) => true

tree1 =        1
          /        \
        2          3
      /    \       /    \
    4      5    6     7


tree2 =        9
          /        \
        2          3
      /    \       /    \
    4      5    6     7


treeCompare(tree1, tree2) => false
