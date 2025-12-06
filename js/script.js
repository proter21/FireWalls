// Взимаме формата по нейния ID
var form = document.getElementById("contactForm");

// Проверяваме дали формата съществува
if (form) {
  // Добавяме събитие за натискане на бутона "Изпрати"
  form.addEventListener("submit", function(e) {
    // Спираме стандартното поведение на формата (да се праща)
    e.preventDefault();
    
    // Взимаме стойностите от полетата и премахваме празните места
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    
    // Създаваме масив за грешки
    var errors = [];
    
    // Проверка за името
    if (name.length < 2) {
      errors.push("Името трябва да е поне 2 символа.");
    }
    
    // Проверка за имейл
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Въведете валиден имейл.");
    }
    
    // Проверка за съобщението
    if (message.length < 10) {
      errors.push("Съобщението трябва да е поне 10 символа.");
    }
    
    // Взимаме елемента за показване на съобщението
    var msgDiv = document.getElementById("formMessage");
    
    // Показваме грешки или успех
    if (errors.length > 0) {
      // Ако има грешки, ги показваме
      msgDiv.innerHTML = '<div class="error">⚠️ ' + errors.join('<br>⚠️ ') + '</div>';
    } else {
      // Ако няма грешки, показваме успех
      msgDiv.innerHTML = '<div class="success">✓ Съобщението е готово и проверено!</div>';
      // Изчистваме формата
      form.reset();
    }
  });
}
  