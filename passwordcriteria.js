console.log("this script is referenced properly");

// When the user clicks on the password field, show the message box
function myfocusFunction() {
  document.getElementById("message").style.display = "block";

}

// When the user clicks outside of the password field, hide the message box

function myBlurFunction() {
  document.getElementById("message").style.display = "none";

}

// When the user starts to type something inside the password field
function myFunction() {

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if($("#psw").val().match(lowerCaseLetters)) {
    console.log($("#letter"));
    $("#letter").lowerClass("invalid")
    $("letter").addClass("valid")
  } else { 
    $("letter").removeClass("valid")
    $("#letter").addClass("invalid")
}
  // Validate capital letters

  var upperCaseLetters = /[A-Z]/g; 
  if ($("#psw").val().match(upperCaseLetters)) {
    $("#capital").removeClass("invalid")
    $("#capital").addClass("valid")
  } else {
    $("#capital").removeClass("valid")
    $("capital").addClass("invalid")
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if($("#psw").val().match(numbers)) {
    $("number").removeClass("invalid")
    $("#number").addClass("valid")
  } else {
    $("#number").removeClass("valid")
    $("#number").addClass("invalid")
  }

  // Validate length
  if($("#psw").val.length >= 8) {
    $("#length").removeClass("invalid")
    $("#length").addClass("valid")
  } else {
    $("#length").removeClass("valid")
    $("length").addClass("invalid")
  }

}