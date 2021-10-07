var num = document.querySelector("#textbox");
var btn_translate = document.querySelector("#btn");
var outputDiv = document.querySelector("#output");
var i = 0;
var x = 0;
var rem = 0;
function isPalindrome() {
  var ans = num.value;
  var ans2 = ans.split("/");
  var ans3 = parseInt(ans2.join(""));
  var origin = ans3;
  while (ans3 != 0) {
    rem = ans3 % 10;

    x = x * 10 + rem;
    console.log(x);
    ans3 = parseInt(ans3 / 10);
  }
  if (origin === x) {
    outputDiv.innerHTML = "Your Your Birthday is Palindrome"
  } else {
    outputDiv.innerHTML = "Sorry your Birthday is not Palindrome"
  }
}

btn_translate.addEventListener("click", isPalindrome);