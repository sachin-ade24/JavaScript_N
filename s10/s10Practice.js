const employeePrototype = {
    printInfo: function(){
        console.log(`Hello, the employee name is ${this.name}.`);
    }
}
const e1 = Object.create(employeePrototype);
e1.name = "Tom";
e1.printInfo();