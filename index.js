// function,array,objects
//var read = require('readline-sync')
//const a = undefined
var user = prompt("Enter your name-")
document.write("Welcome, "+user+" for Tech quiz")
var score =0
//document.write("Press ENTER to continue")
function userques(Question,Answer){     //function
  var usranswer=prompt(Question);  // it will display questions passed in arr
  //document.write(usranswer)
  
  if(usranswer===Answer)
  {
    document.write("correct")
    score = score+1
    document.write(score)
  }
  else{
    document.write("wrong")
  
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
  document.write(userques);
}
