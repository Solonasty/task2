'use strict'

let form = document.getElementById("form");
let submitBtn = document.getElementById("submit-btn");
let clearBtn = document.getElementById("clear-btn");
let output = document.getElementById("json");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Object for store form
  let formData = {}; // typeof == object

  // Add all list data to formData
  let dropdowns = form.querySelectorAll("select");
  dropdowns.forEach((dropdown) => {
    formData[dropdown.name] = dropdown.value; // select name list1 = option value 1
  });

  // Add all input data to formData
  let inputs = form.querySelectorAll("input[type='text']");
  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });

  // formData to string JSON
  let jsonString = JSON.stringify(formData); // typeof == string

  // output JSON
  output.innerText = jsonString;


// send GET-request

  let xhr = new XMLHttpRequest(); //1. Создать XMLHttpRequest
  xhr.open('GET', '#.php'); // 2. Инициализировать его xhr.open(method(GET/POST), URL) (replace '#.php' with folder on server)
//   xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.responseType = 'json';
  xhr.send(jsonString); //3. Послать запрос

  xhr.onload = function() { //4. Слушать события на xhr, чтобы получить ответ (load – происходит, когда получен какой-либо ответ)
let responseObj = xhr.response;
    if (xhr.status == 200) { //Код состояния HTTP (число): 200, 404, 403 и так далее, может быть 0 в случае, если ошибка не связана с HTTP.
      alert('Готово, получили: ' + responseObj.message);
    }
    else {
      alert('Произошла ошибка. Код ошибки: ' + xhr.status);
    }
  };

});

// Clear button

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Clear list data
  form.reset();

  // Clear JSON
  output.innerText = "";
});
