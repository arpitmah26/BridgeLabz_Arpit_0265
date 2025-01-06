// 8) Task Scheduling
// Given a list of tasks and their deadlines, determine if the tasks can be completed before their deadlines.


function completetasks(tasks) {
  
    tasks.sort((a, b) => a.deadline - b.deadline);
  
    let currentTime = 0;
  
    for (let task of tasks) {
      if (currentTime + task.duration > task.deadline) {
        return false; 
      }
  
      currentTime += task.duration;
    }
  
    return true; 
  }
  
  const tasks = [
    { duration: 2, deadline: 3 },
    { duration: 1, deadline: 2 },
    { duration: 3, deadline: 5 }
  ];
  
  console.log(completetasks(tasks)); 
  
  const tasks2 = [
    { duration: 3, deadline: 4 },
    { duration: 2, deadline: 3 },
    { duration: 4, deadline: 5 }
  ];
  
  console.log(completetasks(tasks2)); 