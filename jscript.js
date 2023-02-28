'use strict'

let form = document.getElementById("form");
let submitBtn = document.getElementById("submit-btn");
let clearBtn = document.getElementById("clear-btn");
let output = document.getElementById("json");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Object for store form
  let formData = {};

  // Add all list data to formData
  let dropdowns = form.querySelectorAll("select");
  dropdowns.forEach((dropdown) => {
    formData[dropdown.name] = dropdown.value;
  });

  // Add all input data to formData
  let inputs = form.querySelectorAll("input[type='text']");
  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });

  // formData to string JSON
  let jsonString = JSON.stringify(formData);

  // output JSON
  output.innerText = jsonString;

  // send GET-request

  let xhr = new XMLHttpRequest();
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
