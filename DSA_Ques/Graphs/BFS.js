// BFS

function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
  
    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
  
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  
  // Example
  const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
  };
  bfs(graph, "A"); // Output: A, B, C, D, E, F
  