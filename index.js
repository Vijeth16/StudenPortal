// function,array,objects
//var read = require('readline-sync')
//const a = undefined
var user = prompt("Enter your name-")
 window.print("Welcome, "+user+" for Tech quiz")
var score =0
// window.print("Press ENTER to continue")
function userques(Question,Answer){     //function
  var usranswer=prompt(Question);  // it will display questions passed in arr
  // window.print(usranswer)
  
  if(usranswer===Answer)
  {
     window.print("correct")
    score = score+1
     window.print(score)
  }
  else{
     window.print("wrong")
  
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
   window.print(userques);
}
