/*************************************************************************
  *                          Homework VIII                                *
  *                                                                       *
  *  Problem: Lattice Paths                                               *
  *                                                                       *
  *  Prompt: Count the number of unique paths to travel from the top left *
  *          to the bottom right of a lattice of squares.                 *
  *                                                                       *
  *  Input:  An interger N (which is the size of the lattice)             *
  *  Output: An interger (which represents the number of unique paths)    *
  *                                                                       *
  *  Example: N = 2 (2x2 board) => 6 (number of unique paths)             *
  *                                                                       *
  *  What is the time and auxilliary space complexity of your solution?   *
  *                                                                       *
  *  Note: When moving through the lattice, you can only move either down *
  *        or to the left.                                                *
  *                                                                       *
  *        Try implementing your solution using side effects recursion or *
  *        pure recursion.                                                *
  *                                                                       *
  *  Additional Resources:                                                *
  *    1: https://projecteuler.net/problem=15                             *
  *    2: https://en.wikipedia.org/wiki/Lattice_path                      *
  *                                                                       *
  *************************************************************************/



function latticePaths(n){
    var counter =0;
    function traverse(x,y){

        if (x===n && y===n){
            counter++;
        }
        else if (x>n || y>n){
            return;
        }
        console.log("X: " + x + " Y: " + y);
        traverse(x+1, y);
        traverse(x, y+1);
    }

    traverse(0,0);
    return counter;
}

latticePaths(2)