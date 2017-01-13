/*
/!**
 * Created by Administrator on 2017/1/10.
 *!/
function Employee(){
    this.name = "";
    this.dept = "general";
}

function Manager() {
    this.reports = [];
}
Manager.prototype = new Employee;

function  WorkerBee() {
    this.projects = [];
}
WorkerBee.prototype = new Employee;

function SalesPerson () {
    this.dept = "sales";
    this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;

function Engineer () {
    this.dept = "engineering";
    this.machine = "";
}
Engineer.prototype = new WorkerBee;


var mark = new WorkerBee;
mark.name = "";
mark.dept = "general";
mark.projects = [];

//
Employee.prototype.specialty = "none";


//
function Employee () {
    this.name = "";
    this.dept = "general";
}

function WorkerBee () {
    this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;
/!**
 *
 amy.name == "";
 amy.dept == "general";
 amy.projects == [];
 *!/
Employee.prototype.name = "Unknown";

*/
