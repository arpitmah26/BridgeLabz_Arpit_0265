const employees = [
    {name: "Arpit", salary: 90000},
    {name: "Arin", salary: 50000},
    {name: "Arman", salary: 80000},
    {name: "Aryan", salary: 70000},
    {name: "Arsh", salary: 40000}
]

const salaryThreshold = 50000;

// filter employees earning more than specified amount
const filteredEmployees = employees.filter(employee => employee.salary > salaryThreshold);

//map the filtered employees to show their name and updated salary
const updatedSalaries = filteredEmployees.map(employee => ({
    name: employee.name,
    updatedSalary: employee.salary *1.1
}));

//Use reduce to calculate the total updated salary
const totalUpdatedSalary = updatedSalaries.reduce((total, employee) => total + employee.updatedSalary, 0);

console.log("Filtered Employees with Updated Salaries:");
console.log(updatedSalaries);

console.log(`Total Updated Salary: $${totalUpdatedSalary.toFixed(2)}`);

