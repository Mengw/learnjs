/**
 * Created by Administrator on 2017/1/10.
 */
function makeFunc() {
    var name = "hello world";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();


//闭包的用途
function f1() {
    var n = 999;
    nAdd = function () {
        n+=1;
    }
}

//性能考核
/*
 如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。
 例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。
 原因是这将导致每次构造器被调用，方法都会被重新赋值一次（也就是说，为每一个对象的创建）。
 */
// 很像java里面生成类一样
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function() {
        return this.name;
    };

    this.getMessage = function() {
        return this.message;
    };
}
// js比较正确的写法
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}

MyObJect.prototype={
    getName: function () {
        return this.name;
    },
    getMessage: function () {
        return this.message;
    }
};

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);


