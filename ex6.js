//ex6.js

/* 
Create an HTML page that displays a list of temperature numbers in both Celsius and Fahrenheit,
from -10 to +40 degree Celsius at 5 degree increments. The list should looks like:
• -10C -- 14F
• -5C -- 23F
• 0C -- 32F
• 5C -- 41F
• . . . . . .
• 40C -- 104F

Note the above list must be generated on the fly by your JavaScript code, not hard coded. In
addition your page must have some HTML code before and after the list!

The formula for Celsius/Fahreinheit conversion is:
 F = 9/5 x C + 32
*/
var lines = new Array(40);
document.write("<table border='2'>");//table border
document.write("<caption><strong>Conversion Table</strong></caption>");//table caption
document.write("<thead>", //create table
				"<tr>", 
					"<th>Celcius (&deg;C)</th>", 
					"<th>Fahrenheit (&deg;F)</th>",
				"</tr>",
				"</thead>",
				"<tbody>");
for(var i = -10; i <= 40; i+=5)
{
	document.write("<tr>");
	var F = i*(9/5)+32;
	document.write("<td>"+i+" &deg;C "+"</td><td>"+F+" &deg;F </td> <br />");
	document.write("</tr>");
}

document.write("</tbody>","</table>");//close table