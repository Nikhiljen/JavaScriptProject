const form = document.querySelector("form");

document.addEventListener("submit", (e) => {
  e.preventDefault(); //Using event.preventDefault() allows you to stop this default behavior from happening, giving you more control over how the event is handled.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const status = document.querySelector("#status");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `${height} is not valid input Please give a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `${weight} is not a valid input please give a valid weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi} is your BMI. Your in Under Weight please incresed some weight</span>`;
    } else if (18.6 <= bmi <= 24.9) {
      result.innerHTML = `<span>${bmi} is your BMI. Your in normal range keep it up</span>`;
    } else if (24.9 < bmi <= 30) {
      result.innerHTML = `<span>${bmi} is your BMI. Your in over weight please do some excersice and come in normal range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} is your BMI. Your in over weight please do some excersice and come in normal range</span>`;
    }
  }
});
