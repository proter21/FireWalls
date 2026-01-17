// Валидация на формата
var form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Чете полета
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Име
    if (name.length < 2) {
      alert("Името трябва да съдържа поне 2 символа.");
      return;
    }

    // Имейл
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Моля, въведете валиден имейл адрес.");
      return;
    }

    // Съобщение
    if (message.length < 10) {
      alert("Съобщението трябва да е поне 10 символа.");
      return;
    }

    // Успех
    alert("Съобщението е изпратено успешно!");
    form.reset();
  });
}
