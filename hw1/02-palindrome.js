const elem = document.querySelector("input");
const resultDiv = document.querySelector("#result");

elem.addEventListener("input", handleInput);

function handleInput(event) {
  resultDiv.textContent = "";
  resultDiv.classList.remove("text-danger", "text-success");

  const inputValue = event.target.value;
  if (inputValue === "") {
    return;
  }
  if (isNaN(parseInt(inputValue, 10)) || inputValue < 0) {
    resultDiv.textContent = "Please enter a positive number.";
    resultDiv.classList.add("text-danger");
  }
  const isPalindrome = checkPalindrome(inputValue);
  if (isPalindrome) {
    resultDiv.textContent = "Yes, This is a palindrome!";
    resultDiv.classList.add("text-success");
  } else {
    resultDiv.textContent = "No. Try again.";
    resultDiv.classList.add("text-danger");
  }
}

function checkPalindrome(inputValue) {
  const stringValue = inputValue.toString();
  const reversedValue = stringValue.split("").reverse().join("");
  return stringValue === reversedValue;
}
