/*
   8-10: Distinction  (if)
   7-8: Merit         (else if)
   6-7: Pass          (else if)
   <6 : Fail          (else)
*/
grade = 9.5
//1. if else
if (grade >= 8.0 && grade <=10.0) {
   console.log("Distinction")
} else if (grade >= 7.0 && grade < 8.0) {
   console.log("Merit")
} else if (grade >= 6.0 && grade < 7.0) {
   console.log("Pass")
} else {
   console.log("Fail")
}

//2. switch case
menu = 2
switch(menu) {
   case 1:
      console.log("You selected menu 1");
      break;
   case 2:
      console.log("You selected menu 2");
      break;
   case 3:
      console.log("You selected menu 3");
      break;
   default:
      console.log("Invalid menu");
      break;
}