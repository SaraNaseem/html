//ex5.js

/*
Create an HTML page that contains JavaScript code. The JavaScript code produces a sequence of
lines, each line is of the form: Line [i] , where i is a number from 1 to 30. When rendered by the
web browser, the lines containing the odd numbers must be in red color and aligned to the left, and
the lines containing even numbers must be in green color and aligned to the right.


Note that the sequence of lines must be generated using a loop statement.
*/


var lines =  new Array(30); //declare new array of 30
for(var i = 1; i <= lines.length; i++) //for loop to place value in each arrray slot
{
	if((i%2) == 1)
	document.write("<p class=\"left\">"+"Line " + i +"</p>");
	else
	document.write("<p class=\"right\">"+"Line " + i +"</p>");
}