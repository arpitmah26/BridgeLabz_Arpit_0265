// List of employees with their salaries
const employees = [
    { name: "Arpit", salary: 90000 },
    { name: "Arman", salary: 80000 },
    { name: "Arin", salary: 70000 },
    { name: "Aryan", salary: 30000 },
    { name: "Arsh", salary: 40000 }
  ];
  
  // Specified salary threshold
  const salaryThreshold = 50000;
  
  // Step 1: Filter employees earning more than the specified amount
  const filteredEmployees = employees.filter(employee => employee.salary > salaryThreshold);
  
  // Step 2: Map the filtered employees to show their name and updated salary (10% increment)
  const updatedSalaries = filteredEmployees.map(employee => ({
    name: employee.name,
    updatedSalary: employee.salary * 1.1 // 10% increment
  }));
  
  // Step 3: Use reduce to calculate the total updated salary
  const totalUpdatedSalary = updatedSalaries.reduce((total, employee) => total + employee.updatedSalary, 0);
  
  // Output the results
  console.log("Filtered Employees with Updated Salaries:");
  console.log(updatedSalaries);
  
  console.log(`Total Updated Salary: $${totalUpdatedSalary.toFixed(2)}`);
  