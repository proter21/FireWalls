// Взимаме формата
var form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Взимаме стойностите от полетата
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Проверка за име
    if (name.length < 2) {
      alert("Името трябва да съдържа поне 2 символа.");
      return;
    }

    // Проверка за имейл
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Моля, въведете валиден имейл адрес.");
      return;
    }

    // Проверка за съобщение
    if (message.length < 10) {
      alert("Съобщението трябва да е поне 10 символа.");
      return;
    }

    // Ако всичко е наред
    alert("Съобщението е изпратено успешно!");
    form.reset();
  });
}
