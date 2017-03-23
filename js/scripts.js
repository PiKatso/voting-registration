$(document).ready(function() {

var age = parseInt(prompt("please enter your age:"));

if (age >= 18){
  $(".plus").show();
} else {
  $(".under").show();
}


});
