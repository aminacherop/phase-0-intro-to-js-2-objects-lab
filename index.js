// Write your solution in this file!
const employee = {
    name: "sam",
    streetAddress:"11 Broadway",
} 

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return { ...employee , [key] : value

    };
    }
const updateEmployee = updateEmployeeWithKeyAndValue(employee,"streetAddress","42 main street");
console.log(updateEmployee);
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;

}
const destructivelyupdateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee , "streetAddress", "42 main street")
console.log(destructivelyupdateEmployee);
console.log(employee);

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee};
    delete newEmployee[key];
    return newEmployee;
}
const updatedEmployee = deleteFromEmployeeByKey(employee,"streetAddress");
console.log(updatedEmployee);
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee,"streetAddress");
console.log(updatedEmployee);
console.log(employee);



