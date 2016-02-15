var express = require('express');
var app = express();

app.get('/op/:operation/:number1/:number2', function (req, res) {
var answer;
var num1 = Number(req.params.number1);
var num2 = Number(req.params.number2);
function operation (operand, number1, number2){
  switch (operand){
    case 'add':
      answer= num1 + num2;
      break;
    case 'sub':
      answer= num1 - num2;
      break;
    case 'mult':
      answer= num1*num2;
      break;
    case 'div':
      answer= num1/num2;
      break; 
  }
}

  operation(req.params.operation, num1, num2, answer);
  var requestedObject = {
         operator: req.params.operation,
         firstOperand: num1,
         secondOperand: num2,
         solution: answer
};
   if (!answer){
     res.sendStatus(400);
   }else{
     res.send(JSON.stringify(requestedObject));
   } 
});


/*Create a web server that can listen to requests for /op/:operation/:number1/:number2 and respond with a JSON object*/
/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});