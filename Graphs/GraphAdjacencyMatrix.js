class Graph {
    constructor(size) {
      this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
      this.size = size;
    }
  
    // Add an edge (for undirected graph)
    addEdge(vertex1, vertex2) {
      this.matrix[vertex1][vertex2] = 1;
      this.matrix[vertex2][vertex1] = 1;
    }
  
    // Print the matrix
    printMatrix() {
      console.log(this.matrix);
    }
  }
  
  // Usage
  const graph = new Graph(3);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.printMatrix();
  // Output:
  // [ [ 0, 1, 1 ],
  //   [ 1, 0, 0 ],
  //   [ 1, 0, 0 ] ]
  