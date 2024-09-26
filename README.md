# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recall my code,
```js
function convertToAdjList(adjMatrix) {
    bigList = [];
    for (var i = 0; i < adjMatrix.length; i++){
        smallList = [];
        for (var j = 0; j < adjMatrix[i].length; j++){
            if(adjMatrix[i][j] != 0) smallList.push(j);
        }
        bigList.push(smallList);
    }
    return bigList;
}
```

For my code, for it runs through each of the entries in the $n x n$ adjacency matrix once so it is $O(n^2)$. Because the adjacentcy matrix is $n x n$ where $n$ is the number of vertices, the runtime will only depend on the number of vertices $n$. It will go through every element in the matrix regardless of the number of edges.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

This is my code,
```js
function convertToAdjMatrix(adjList) {
    adjMatrix = [];
    for (var i = 0; i < adjList.length; i++){
        list = [];
        var tempCount = 0;
        while (tempCount < adjList.length){
            list.push(0);
            tempCount++;
        }
        for (var j = 0; j < adjList[i].length; j++){
            list[adjMatrix[i][j]] = 1;
        }
        adjMatrix.push(list);
    }
    return adjMatrix;
}
```

The outer For-loop and While-loop will populate the array with $nxn$ $0$'s and then the inner for-loop will run $e$ times where $e$ is the number of edges. So my implementation has a runtime is $n^2 + e \in O(n^2)$. This means that it depends on both the number of vertices and the number of edges.

I coded this completely independently. I looked at this website to help me understand the adjacency list vs matrix. https://www.geeksforgeeks.org/comparison-between-adjacency-list-and-adjacency-matrix-representation-of-graph/#
