/**
 * Created by Administrator on 2016/12/21.
 */
var div = document.getElementById("testDiv");
var divs = document.getElementsByTagName("div");

/*
 (1) Dom转jQuery包装集
 */
var jQueryObject = $("#testDiv");
var div = document.getElementById("testDiv");
var domToJQueryObject = $(div);
/*
 (2) jQuery包装集转Dom对象
 */
var domObject = $("#testDiv")[0];
$("#testDiv").each( function () {
    alert(this)
})

$("#testDiv").each(function() { $(this).html("修改内容") })

/*
创建dom
 */
var select = document.createElement("select");
select.options[0] = new Option("加载项1", "value1");
select.options[1] = new Option("加载项2", "value2");
select.size = "2";
var object = testDiv.appendChild(select);

/*
 一定不要在页面加载时就改变页面的DOM结构
 */
window.onload = function () {
    { testDiv.innerHTML = "<div style=\"border:solid 1px #FF0000\">动态创建的div</div>"; }
}
/*
 浏览器执行window.onload函数不仅仅是在构建完DOM树之后, 也是在所有图像和其他外部资源完整的加载并且在浏览器窗口显示完毕之后.
 所以如果某个图片或者其他资源加载很长时间, 访问者就会看到一个不完整的页面, 甚至在图片加载之前就执行了需要依赖动态添加的元素的脚本而导致脚本错误.
 */
/*
 解决办法就是等DOM被解析后, 在图像和外部资源加载之前执行我们的函数.在jQuery中让这一实现变得可行:
 */
$(document).ready(
    function() { testDiv.innerHTML = "<div style=\"border:solid 1px #FF0000\">使用动态创建的$(document).ready(function)方法</div>"; }
);
$(
    function() { testDiv.innerHTML += "<div style=\"border:solid 1px #FF0000\">使用$(function)方法</div>"; }
);


function testAttr1(event) {
    alert($("hibiscus").attr("class"));
    $("img").attr("alt", "修改后的alt属性");
    $("img").attr({title:"修改后的title", alt: "同时修改alt属性"});
}






