const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

const mainCard = document.getElementById("mainCard");
const finalCard = document.getElementById("finalCard");

const noTexts = [
  "Na mane ki?",
  "Areee Abar?",
  "Na bola jabe na 😏",
  "akhono na?",
  "Kamre Debo!",
  "Ab toh ha bolna hi parega"
];

let index = 0;

// Initial NO position
noBtn.style.left = "55%";
noBtn.style.top = "55%";

noBtn.addEventListener("mouseenter", () => {
  noBtn.innerText = noTexts[index % noTexts.length];
  index++;

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

yesBtn.addEventListener("click", () => {
  song.currentTime = 0;
  song.play();

  mainCard.classList.add("hidden");
  finalCard.classList.remove("hidden");
});
