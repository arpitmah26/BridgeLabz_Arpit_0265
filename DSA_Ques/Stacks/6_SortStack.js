// 6) Sort a Stack
// Given a stack, sort it in ascending order using another stack

function sortStack(stack) {
    const sortedStack = []; 
    while (stack.length > 0) {
        const temp = stack.pop();
  
        while (sortedStack.length > 0 && sortedStack[sortedStack.length - 1] > temp) {
            stack.push(sortedStack.pop());
        }
  
        sortedStack.push(temp);
    }
  
    while (sortedStack.length > 0) {
        stack.push(sortedStack.pop());
    }
  
    return stack; 
  }
  
  
  const stack = [34, 3, 31, 98, 92, 23];
  console.log("Original Stack:", stack);
  
  const sortedStack = sortStack(stack);
  console.log("Sorted Stack:", sortedStack);