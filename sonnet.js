/*Paste the code below into your HTML file.
Take the contents of the sonnet div and place it in a variable
Find and output the starting position of the word "orphans"
Output the number of characters in the sonnet
Replace the first occurance of the string "winter" with "yuletide"
Replace all occurances of the string "the" with "a large"
Set the content of the sonnet div with the new string*/



var son = document.getElementById("sonnet").innerHTML;
document.write("<p>The starting position of the word orphans is: </p>" + son.indexOf("orphans"));
var n = son.length;
document.write("<p>The number of characters in this sonnet is: </p>" + n);
var replace = son.replace("winter", "yuletide");
document.getElementById("sonnet").innerHTML = replace;
var replaceG = son.replace(/ the | The |The /g, " a large ");
document.getElementById("sonnet").innerHTML = replaceG;
