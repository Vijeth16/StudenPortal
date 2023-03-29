// function,array,objects
var read = require('readline-sync')
// var myexp = require('express')

//const a = undefined
console.log("hi welcome to exam portal")
var user = read.question("Enter your name-")

  Question.write("Welcome, "+user+" for Tech quiz")
var score =0
//  Question.write("Press ENTER to continue")
function userques(Question,Answer){     //function
  var usranswer=read.question(Question);  // it will display questions passed in arr
  //  Question.write(usranswer)
  
  if(usranswer===Answer)
  {
      Question.write("correct")
    score = score+1
      Question.write(score)
  }
  else{
      Question.write("wrong")
  
  }
  
}
 var arr=[{           //object inside a array
            question:"Which is main circuit board in computer?",
            answer:"motherboard",
 },
          {
              question:"which is your country?",
              answer:"int",
          }]
         //]
for(i=0;i<arr.length;i++){
  var arr1 = arr[i];
  //userques(arr.question,arr.answer)
  userques(arr1.question,arr1.answer); //function call
    Question.write(userques);
}
