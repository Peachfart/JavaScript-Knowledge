var myVariable = "global";
myOtherVariable = "global";

function myFunction() {
    var myVariable = "local";
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = "local";
    return myOtherVariable;
}

console.log(myVariable); // 输出global,因为它是一个全局变量
console.log(myFunction()); // 输出local,因为 myVariable 是在 myFunction() 函数中声明的局部变量,作用域仅在 myFunction() 内

console.log(myOtherVariable); // 输出global.因为引用了在第二行初始化了的全局变量 myOtherVariable
console.log(myOtherFunction()); // 输出local,在 myOtherFunction() 中,没有使用 var 关键字修饰,所以引用全局变量 myOtherVariable 并将它赋值 local
console.log(myOtherVariable); // 输出local,因为在 myOtherFunction() 中修改了 myOtherVariable 的值
