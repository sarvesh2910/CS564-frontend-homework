// // Add your code here
const inputWord = document.querySelector("#inputWord");

inputWord.addEventListener("keyup", () => {
  const inputWord = document.getElementById("inputWord").value;
  const textContainer = document.getElementById("textContainer");
  const text = textContainer.textContent;
  const regex = new RegExp(`\\b${inputWord}\\b`, "gi");
  const highlightedText = text.replace(
    regex,
    (match) => `<span style="background-color: #ffff54">${match}</span>`,
  );
  document.querySelector("#textContainer").innerHTML = highlightedText;
});
