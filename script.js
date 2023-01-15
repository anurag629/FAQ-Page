let searchInput = document.getElementById("search-input");
let faqQuestions = document.querySelectorAll(".faq-question");

searchInput.addEventListener("input", function () {
  let searchTerm = this.value.toLowerCase();

  for (let i = 0; i < faqQuestions.length; i++) {
    let question = faqQuestions[i].querySelector("p").textContent;

    if (question.toLowerCase().indexOf(searchTerm) !== -1) {
      faqQuestions[i].style.display = "block";
    } else {
      faqQuestions[i].style.display = "none";
    }
  }
});

for (let i = 0; i < faqQuestions.length; i++) {
  let question = faqQuestions[i].querySelector("p");
  let answer = faqQuestions[i].querySelector(".faq-answer");

  question.addEventListener("click", function () {
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}

// script.js
let form = document.querySelector(".submit-question form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let question = form.querySelector("#question").value;
  let name = form.querySelector("#name").value;
  let email = form.querySelector("#email").value;

  // Do something with the question, name, and email, such as
  // sending an email or adding the question to a database.
  // For example, you can use the Fetch API to send the data to a server
});
