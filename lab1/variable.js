//cách 1
a = 3
b = 5.5
c = false
d = "Greenwich Vietnam"
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//cách 2: sử dụng "var" (có tác dụng ở toàn cục : global)
var x = 5
var y = 2.7
console.log(x)

//cách 3: sử dụng "let" (có tác dụng ở cục bộ : local)
let n = 10
let m = 20
console.log(n)

//cách 4: sử dụng "const"  (hằng số)
const PI = 3.14
console.log(PI)

//cách 5: sử dụng "$"
$n = 50
console.log("n = " + $n)

a = 1
b = 3
c = a + b
console.log("a = " + a)
console.log("b = " + b)
console.log("a + b = " + c)
console.log("a - b = " + (a-b))

x = 17
y = 5
console.log(x/y)
console.log(x%y)

a = 10
b = a++                    //b=a=10 -> a++=a+1=10+1=11
c = ++a                    //++a=a+1=11+1=12 -> c=a=12
console.log("a = " + a)    //12
console.log("b = " + b)    //10
console.log("c = " + c)    //12