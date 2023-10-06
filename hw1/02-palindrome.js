const elem = document.querySelector("input");
const resultDiv = document.querySelector("#result");

elem.addEventListener("input", handleInput);

function handleInput(event) {
  resultDiv.textContent = "";

  const inputValue = event.target.value;
  if (inputValue === "") {
    return;
  }
  if (isNaN(parseInt(inputValue, 10)) || parseInt(inputValue, 10) < 0) {
    resultDiv.textContent = "Please enter a positive number.";
    resultDiv.style.color = "#b20011";
    return;
  }
  const isPalindrome = checkPalindrome(inputValue);
  if (isPalindrome) {
    resultDiv.textContent = "Yes, This is a palindrome!";
    resultDiv.style.color = "#006737";
  } else {
    resultDiv.textContent = "No. Try again.";
    resultDiv.style.color = "#b20011";
  }
}

function checkPalindrome(inputValue) {
  const stringValue = inputValue.toString();
  const reversedValue = stringValue.split("").reverse().join("");
  return stringValue === reversedValue;
}
