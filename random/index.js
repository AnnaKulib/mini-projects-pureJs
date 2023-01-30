const form = document.querySelector(".form");
const inputMin = document.querySelector("#nummin");
const inputMax = document.querySelector("#nummax");
const numCount = document.querySelector("#numcount");
const resultFill = document.querySelector("#resgen");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (numCount.value < 0) {
    return "number amount should be greater than zero";
  }
  let arr = [];
  let n = 0;
  let min = parseInt(inputMin.value);
  let max = parseInt(inputMax.value);
  while (n < numCount.value) {
    n++;
    let res = Math.round(Math.random() * (max - min) + min);
    // console.log(res);
    arr.push(res);
  }
  console.log(arr);
  resultFill.textContent = arr;
  event.currentTarget.reset();
}
