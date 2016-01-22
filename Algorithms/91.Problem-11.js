Problem 2:
Find the maximum depth or height of a tree (where a tree with only a root node has a max depth/height of 0).  You may assume the tree is not empty.

Assume your tree has the following properties:
tree.root => returns root node of the tree

The nodes of your tree have the following properties:
node.leftChild => returns the left child of the node or null
node.rightChild => returns the right child of the node or null

Time Complexity: O(n)
Space Complexity: O(n)

Example:
tree =              1
          /        \
        2          3
      /           /
    4           6

maxDepth(tree) => 2

tree =              1
          /        \
        2          3
      /            /    \
    4           6     7
          /
        5

maxDepth(Tree) => 3
