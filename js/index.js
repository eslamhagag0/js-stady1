
function calSum(num1,num2){
    var result =num1+num2
    return result
}
var num1 = Number (window.prompt (" enter number 1"))
var num2 = Number (window.prompt (" enter number 2"))
var sum = calSum(num1 , num2)
if  ( sum> 500) {
console.log (" proft")
}
else{
    console.log ("lose")
}
==============================================================================
1- Write a program that allow to user enter number then printit
var num1 = Number (window.prompt (" enter number 1"))
console.log ( num1)
-----------------------------------------------------------------------
2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
var num1 = Number (window.prompt (" enter number "))
if ( num1 %3 ==0 && num1 %4 ==0){
    console.log ("yes")
}
else{
    console.log(" No")
}
-----------------------------------------------------------------------
3- Write a program that allows the user to insert 2 integers then print the max
var num1 = Number (window.prompt (" enter number 1"))
var num2 = Number (window.prompt (" enter number 2"))
if ( num1> num1){
    console.log ( num1)
}
else {
    console.log( num2)
}
-------------------------------------------------------------------------
4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

var num1 = Number (window.prompt (" enter number 1"))
if ( num1>0 ){
    console.log( " output postive")
}
else if ( num===0)
 console.log(" zero")
else{
    console.log( " output negative")
}
==========================================================================
 5- Write a program that take 3 integers from user then print the max element and the min element.
var num1 = Number (window.prompt (" enter number 1"))
var num2 = Number (window.prompt (" enter number 2"))
var num3 = Number (window.prompt (" enter number 3"))
if ( num1> num2 && num1>num3){
    console.log(" max element=", num1)
}
else if ( num2>= num1 && num2>=num3){
    console.log (" max element =", num2)
}
else if ( num3 >= num1 && num3 >= num2){
    console.log (" max element =", num3)
}

 if ( num1< num2 && num1<num3){
    console.log(" min element ", num1)

}
else if ( num2<= num1 && num2<=num3){
    console.log(" min element =",num2)
}

else if ( num3 <= num1 && num3 <= num2){
    console.log(" min element =",num3)
}
===============================================================================
6- Write a program that allows the user to insert integer number then check If a number is oven or odd
var num1 = Number (window.prompt(" enter number 1"))
if ( num1 %2 ==0 ){
    console.log ( " output even")
}
else if  ( num1 %2 !=0){
    console.log ("output odd")
}
else if ( num1 ==0){
console.log ( "zero")
}
else {
    console.log (" pls try again")
}
================================================================================
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
var ch =(window.prompt(" enter ur latter"))
if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
  document.write("<b>"+ch+"</b>" + " is a Vowel");}
else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
  document.write("<b>"+ch+"</b>" + " is a Vowel");}
else{
  document.write("<b>"+ch+"</b>" + " is a Consonant");
}
=================================================================================
9- Writeaprogramthat allows user to insert integer thenpr intall numbers between 1 tothat’s number
 var num = Number (window.prompt(" enter number 1"))
for( i=1 ;i<num; i++){
    console.log( i)
}
==================================================================================
10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

var num = Number (window.prompt(" enter number "))

for( i=num ;i<=num*12 ; i=i+5){
     console.log(i)
 }
=================================================================================
11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
var num = Number (window.prompt(" enter number "))
 for( i=1;i<num; i++){
    if (i%2 ==0){
      console.log(i)
    }
  }
===================================================================================
12- Writeaprogramthattaketwointegersthenprintthepower
var base = Number (window.prompt(" enter number "))
var power = Number (window.prompt(" enter pow "))
var result = 1

for (power = 3; power != 0; power--) {
    result = result * base;
}
console.log (result)
===================================================================================
12- Write a program to enter marks of five subjects and calculate total, average and percentage.
var num1 = Number (window.prompt(" enter number "))
var num2 = Number (window.prompt(" enter number "))
var num3 = Number (window.prompt(" enter number "))
var num4 = Number (window.prompt(" enter number "))
var num5 = Number (window.prompt(" enter number "))
var avder=0
function avd ( num1, num2 ,num3, num4, num5){

    result= num1+num2+num3+num4+num5
    avd= result/5
    return avd
}
var result
var avder= avd ( num1, num2 ,num3, num4, num5)
console.log ( " total",result)
console.log ( " avderage",avd)
=====================================================================================
13-Write a program to input month number and print number of days in that 

	var n=Number(("enter month number b/w 1 and 12:"));
	if(n== 1||n== 3||n== 5|| n== 7|| n== 8 ||n==10 ||n==12)
	  {
		console.log("no of days is 31");
     	}
	   else if(n== 4||n== 6||n== 9|| n== 11){
		console.log("no of days in 20")};

  else{
	console.log("no of days is 29 or 28");	    
}

================================================================================================
Write a program to input marks of five subjectsPhysics, Chemistry, Biology, Mathematics and Computer Find percentage and grade
var subject = window.prompt("Please enter the name of the subject");

var subjectList=["m1", "m2","m3", "m4", "m5"];
sum=m1+m2+m3+m4+m5
console.log("total marks" ,sum)
avg=sum/5
console.log('average=',avg)

if(avg>=90){
  console.log("Grade A")
}
else if(avg>=80){
  console.log("Grade B")
}
else if(avg>=70){
  console.log("Grade C")
}
else{
  console.log("Low Grade")
}
=================================================================================================
15- Write a program to print total number of days in month 
var month = Number( window.prompt("Please enter the name of the subject"));

switch(month){
        case 1: 
            console.log("31 days")
            break;
        case 2: 
            console.log("28/29 days")
            break;
        case 3: 
            console.log("31 days")
            break;
        case 4: 
            console.log("30 days");
            break;
        case 5: 
            console.log("31 days");
            break;
        case 6: 
            console.log("30 days");
            break;
        case 7: 
            console.log("31 days");
            break;
        case 8: 
            console.log("31 days");
            break;
        case 9: 
            console.log("30 days");
            break;
        case 10: 
            console.log("31 days");
            break;
        case 11: 
            console.log("30 days");
            break;
        case 12: 
            console.log("31 days");
            break;
        default: 
            console.log("Invalid input! Please enter month number between 1-12");

    }
======================================================================================================
16- Write a program to check whether an alphabet is vowel or consonant 

var whether = window.prompt("Please enter the name of the subject");

switch(whether) {  
    case 'a':    
    case 'A':
    case 'e':  
    case 'E':
    case 'i':  
    case 'I':  
    case 'o':  
    case 'O':  
    case 'u':  
    case 'U':
         console.log(" is VOWEL", c);  
        break;  
    default: console.log("%c is CONSONANT", c);  
}  
========================================================================================================
17- Write a program to find maximum between two numbers 

var  num1 =Number( window.prompt (" pls enter nNumber 1"))
var  num2 =Number( window.prompt (" pls enter nNumber 2"))
switch(true) {
    case (num1 > num2):
        console.log(`Bigger number is ${num1}`);
        break;
    case (num1 < num2):
        console.log(`Bigger number is ${num2}`);
        break;
    case (num1 === num2):
        console.log(`${num1} is equal to ${num2}`);
        break;
     default: console.log(false, '-> Something went wrong');
}
=========================================================================================================
18- Write a program to check whether a number is even or odd 

var  num1 =Number( window.prompt (" pls enter nNumber 2"))
switch(true) {
    case (num1 %2 ==0):
        console.log(`number is even`);
        break;
    case (num1 %2 !=0):
        console.log(`the number is odd`);
        break;
    case (num1 === 0):
        console.log(`Zero`);
        break;
     default: console.log(false, '-> Something went wrong');
}
==========================================================================================================
19- Write a program to check whether a number is positive or negative or zero 

var  num1 =Number( window.prompt (" pls enter nNumber 2"))
switch(true) {
    case (num1 > 0):
        console.log(`number is POSITIVE`);
        break;
    case (num1 < 0):
        console.log(`the number is NEGATIVE`);
        break;
    case (num1 === 0):
        console.log(`Zero`);
        break;
     default: console.log(false, '-> Something went wrong');
}
=========================================================================================================
20- Write a program to create Simple Calculator 
 var  number1 =Number( window.prompt (" pls enter nNumber 1"))
 var  operator = window.prompt (" pls enter operator ")
 var  number2 =Number( window.prompt (" pls enter nNumber 2"))

 switch (operator) {
      case '+':
        result = number1 + number2;
        console.log (number1 + " + " + number2 + " = " + result);
        break;

      case '-':
        result = number1 - number2;
        console.log(number1 + " - " + number2 + " = " + result);
        break;

      case '*':
        result = number1 * number2;
        console.log (number1 + " * " + number2 + " = " + result);
        break;

      case '/':
        result = number1 / number2;
        console.log(number1 + " / " + number2 + " = " + result);
        break;

      default:
        console.log("Invalid operator!");
        break;
    }

