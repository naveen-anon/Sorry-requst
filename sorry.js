const text = `
Me tumhe hurt nahi karna chahta baby 💔
Par kya karu…
Tumhari yaad har pal aati hai 🥺

Tumhare alawa koi bhi acha nahi lagta 💞
Tumse baat karta hoon to sukoon milta hai 😌
Aur na karu to dil bechain rehta hai 💓

Mene tumhare liye wo sab chhod diya
jo tumhe pasand nahi tha 🥹

Please maan jao na baby 🐥
I really miss you 😭
`;

const typingText = document.getElementById("typingText");
const sorryBtn = document.getElementById("sorryBtn");
const finalMsg = document.getElementById("finalMsg");
const music = document.getElementById("bgMusic");
const whatsappBtn = document.getElementById("whatsappBtn");

let index = 0;

// Typing effect
function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 35);
  }
}
typeEffect();

// Play music on first touch
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// Button click
sorryBtn.addEventListener("click", () => {
  finalMsg.classList.remove("hidden");
});

// WhatsApp Share
const message = encodeURIComponent(
  "Sorry baby 😩💔\nMe tumhe hurt nahi karna chahta...\nPlease maan jao na baby 🐥💖"
);
whatsappBtn.href = `https://wa.me/?text=${message}`;

// Floating hearts
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// Crying emoji rain
const cry = document.querySelector(".cry");
setInterval(() => {
  const emoji = document.createElement("span");
  emoji.innerText = "😭";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 20 + 15 + "px";
  emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
  cry.appendChild(emoji);
  setTimeout(() => emoji.remove(), 5000);
}, 500);
