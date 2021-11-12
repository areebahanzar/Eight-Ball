//eight ball by Areebah Anzar

let userName = '';

//hello statement using Ternary Operator
userName ? console.log(`Hello ${userName}`)
: console.log('Hello');

let userQuestion = 'Will I get ice cream?'; // a question the user wants to ask.

//repeat question to user
console.log(userName+' '+ userQuestion);

//generate random number 0-7 inclusively
let randomNumber = Math.floor(Math.random()*8);

//want to save 8 phrases that eight ball could reply to a question w/ a switch statement, each corresponding to the random number generated above. 

let eightBall = ''; //response from eightball 

switch(randomNumber)
{
  case 0:
    eightBall = 'It is certain';
  break;
  case 1:
    eightBall = 'It is decidedly so';
  break;
  case 2: 
    eightBall ='Reply hazy try again';
  break;
  case 3:
   eightBall ='Cannot predict now';
  break;
  case 4:
    eightBall ='Do not count on it';
  break;
  case 5:
   eightBall ='My sources say no';
  break;
  case 6: 
    eightBall ='Outlook not so good';
  break;
  case 7:
   eightBall ='Signs point to yes';
  break;
}

console.log(eightBall); 
