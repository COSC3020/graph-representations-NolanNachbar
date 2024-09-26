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
