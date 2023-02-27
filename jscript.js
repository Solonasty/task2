'use strict'

let form = document.getElementById("form");
let submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("json");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Object for store form
  const formData = {};

  // Add all list data to formData
  const dropdowns = form.querySelectorAll("select");
  dropdowns.forEach((dropdown) => {
    formData[dropdown.name] = dropdown.value;
  });

  // Add all input data to formData
  const inputs = form.querySelectorAll("input[type='text']");
  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });

  // formData to string JSON
  const jsonString = JSON.stringify(formData);

  // output JSON
  output.innerText = jsonString;

  // send GET-request

  const xhr = new XMLHttpRequest();
  xhr.open('GET', '#.php'); // replace '#.php' with link on server
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert(xhr.responseText);
    }
    else {
      alert('Произошла ошибка. Код ошибки: ' + xhr.status);
    }
  };

  xhr.send();

});

// Clear button

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Clear list data
  form.reset();

  // Clear JSON
  output.innerText = "";
});
