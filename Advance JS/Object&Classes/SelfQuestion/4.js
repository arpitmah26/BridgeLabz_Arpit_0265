//optional chaining

let employee ={
    name: "Hardy",
    dept:{
        name: "QA",
        manager:{
            name: "Sifti"
        }
    }
};

let managerName = employee.dept?.manager?.name;
console.log(managerName);


let hrName = employee.dept?.manager?.team?.position?.name;
console.log(hrName);