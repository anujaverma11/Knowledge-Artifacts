### Sorting Algorithms 1

Sorting is a fundamental routine to organize data. There are many sorting algorithms to choose from. During making this selection, consider constraints and tradeoffs like:

- dataset type and size
- Stability Requirements
- ease of uderstanding
- time and space complexity of the sorting algorithms


#### Three Basic Sorts

##### Bubble Sort
- is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.  The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
- Time Complexity - O(n^2)

###### Advantages

- Simple to understand
- if the array is already sorted,then bubble sort will take only linear amount of time to figure that.
- Constant auxiliary space.
- Stable*

[Bubble Sort Implementation](02.Sorting/01.bubble.js)

##### Selection Sort
- We loop thru the array and find one minimum value at a time and use that to build up the sorted portion of the array.
- Time Complexity - O(n^2)

###### Advantages
- Simple to understand
- Constant auxiliary space.

###### Disadvantages
- Quadratic Time at best
- Non-Stable*

[Selection Sort Implementation](02.Sorting/02.selection.js)

##### Insertion Sort
- Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. With insertion sort you can create upto sorted section and than grab unsorted item and fiqure out where to place it in your sorted section
- Time Complexity - O(n^2)

###### Advantages
- Simple to understand
- Constant auxiliary space.
- Average twice as fast as bubble and selection
- Stable Sort
- Streamable - if you have a very large array where you streaming in values, you can use insertion sort.
- Fast for nearly sorted array.

###### Disadvantages
- Quadratic Time at best

[Insertion Sort Implementation](02.Sorting/03.insertion.js)

* *Stable vs Non-Stable - Stable sorts leave equal values in original order of indices. Non-Stable sort cannot guarantee.


Additional Resources: Sorting Algorithms I

- [Sorting Algorithm Animations and Use Cases](http://www.sorting-algorithms.com/)
- [Khan Academy: Sorting Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting)
- [Khan Academy: insertion Sort Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)
- [More Visualized Sorting Algorithms](http://visualgo.net/sorting.html)
- [USF Computer Science](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)









