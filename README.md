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

For my code, for it runs through each of the entries in the $n x n$ adjacency matrix once so it is $O(n^2)$. Because the adjacentcy matrix in $n x n$ where $n$ is the number of vertices, the runtime will only depend on the number of vertices $n$. It will go through every element in the matrix regardless of the number of edges.


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.





I did this completely independently. 
