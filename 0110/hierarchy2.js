/**
 * Created by Administrator on 2017/1/10.
 */
function Employee (name, dept) {
    this.name = name || "";
    this.dept = dept || "general";
}

function WorkerBee (projs) {
    this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

/*function Engineer (mach) {
    this.dept = "engineering";
    this.machine = mach || "";
}*/
Engineer.prototype = new WorkerBee;

var jane = new Engineer("belau");
console.log(jane.name);
console.log(jane.dept);
console.log(jane.projects);
console.log(jane.machine);
console.log(jane.constructor);
console.log(jane1.specialty);

function Engineer(name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, "engineering", projs);
    this.machine = mach || "";
}

var jane1 = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
console.log(jane1.name);
console.log(jane1.dept);
console.log(jane1.projects);
console.log(jane1.machine);
console.log(jane1.constructor);
console.log(jane1.specialty);

Employee.prototype.specialty = "none";