class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Add a vertex
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Add an edge (for undirected graph)
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    // Remove an edge
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    }
  
    // Remove a vertex
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    // Print the graph
    printGraph() {
      for (let vertex in this.adjacencyList) {
        console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
      }
    }
  }
  
  // Usage
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.printGraph();
  // Output:
  // A -> B, C
  // B -> A
  // C -> A
  