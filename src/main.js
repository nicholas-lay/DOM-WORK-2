
const api = $("#test");
api.addClass("red").addClass("blue")//函数用对象api来调用，addClass函数的this就是这个对象api
//this就是api


$("#test")
    .find(".child")
    .addClass("yellow")


api.addClass("black")



