//1. hàm có return và có tham số
function sayHi (name) {
   return "Hello " + name + " !";
}
console.log(sayHi("Messi"))

//2. hàm không có return nhưng có tham số
function welcome(name) {
   console.log("Welcome " + name + " to Greenwich Vietnam !")
}
function sum(x, y) {
   console.log("Total: " + (x+y))
}
welcome("Ronaldo")
sum(20, 30)

//3. hàm có return nhưng không có tham số
function calculateTotal() {
   a = 5
   b = 7
   return a+b;
}
console.log(calculateTotal())

//4. hàm không có return và cũng không có tham số
function sayHello() {
   console.log(1644)
   console.log("Cloud Computing")
   a = 10
   b = 20
   console.log("a + b = " + (a+b))
}
sayHello()