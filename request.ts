const sorryBtn = document.getElementById("sorryBtn") as HTMLButtonElement;
const response = document.getElementById("response") as HTMLParagraphElement;

sorryBtn.addEventListener("click", (): void => {
  response.classList.remove("hidden");
  response.innerText = "💖 Tumhe khona nahi chahta baby 💖";
});
