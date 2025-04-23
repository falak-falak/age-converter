let input = document.querySelector(".user-input");
let output = document.querySelector(".user-output");

function convertAge() {
  let ageInYears = input.value;
  if (ageInYears >= 0 && ageInYears != "") {
    let days = ageInYears * 365;
    output.value = Math.floor(days);
    msg.innerHTML = "";
  }
}

let convertBtn = document.querySelector(".convert-btn");
convertBtn.addEventListener("click", convertAge);
