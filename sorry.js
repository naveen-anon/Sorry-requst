const sorryBtn = document.getElementById("sorryBtn");
const response = document.getElementById("response");

sorryBtn.addEventListener("click", () => {
  response.classList.remove("hidden");
  response.innerHTML = "💖 Tumhe khona nahi chahta baby 💖";
});
