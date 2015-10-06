$(document).ready(function(){

  // Your code goes here
  // When someone types in an email in the input, replace the image with that person's gravatar
  // The format for the gravatar URL: http://www.gravatar.com/avatar/HASH?s=256
  // Where the hash is calculated as follows:
  //  1. Strip out all trailing and leading spaces from the email
  //  2. convert the email to all lowercase
  //  3. create the MD5 hash of that string using the MD5 function provided
  // MD5("stuff") will return the MD5 hash of the string "stuff"
$("#email").keyup( function() {

var email = $("#email").val();
result = email.trim();
final_result = result.toLowerCase();
console.log(final_result);
MD5result = MD5(final_result);

console.log(MD5result);

$('#avatar').attr('src',"http://www.gravatar.com/avatar/"+MD5result+"?s=256");

});

});