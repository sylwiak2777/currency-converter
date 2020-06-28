let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value");
let currencyElelment = document.querySelector(".js-currency");
let outcomeElement = document.querySelector(".js-outcome");

let rateEUR = 4.4573;
let rateUSD = 3.9741;
let rateGBP = 4.9328;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +valueElement.value;
  let currency = currencyElelment.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;

    case "GBP":
      result = amount / rateGBP;
      break;
    case "USD":
      result = amount / rateUSD;
      break;
  }

  outcomeElement.innerHTML = `${amount.toFixed(
    2
  )} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
});
