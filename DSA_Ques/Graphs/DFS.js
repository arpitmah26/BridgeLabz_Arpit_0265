// DFS

function dfs(graph, start, visited = new Set()) {
    console.log(start);
    visited.add(start);
  
    for (const neighbor of graph[start]) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited);
      }
    }
  }
  
  // Example
  dfs(graph, "A"); // Output: A, B, D, E, F, C
  