let hunger = 60;
let happiness = 50;
let energy = 75;

const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const energyBar = document.getElementById("energy-bar");
const petImage = document.getElementById("pet-image");

function updateBars() {
  hungerBar.style.width = `${hunger}%`;
  happinessBar.style.width = `${happiness}%`;
  energyBar.style.width = `${energy}%`;

  if (hunger < 30) {
    petImage.src = "img/sad.png"; // sad
  } else if (energy < 30) {
    petImage.src = "img/sleepy.jpg"; // sleepy
  } else {
    petImage.src = "img/happy.jpg"; // happy
  }
}

function feedPet() {
  hunger = Math.min(hunger + 20, 100);
  happiness = Math.min(happiness + 5, 100);
  updateBars();
}

function playWithPet() {
  happiness = Math.min(happiness + 20, 100);
  energy = Math.max(energy - 15, 0);
  hunger = Math.max(hunger - 10, 0);
  updateBars();
}

function sleepPet() {
  energy = Math.min(energy + 25, 100);
  hunger = Math.max(hunger - 15, 0);
  updateBars();
}

function degradeStats() {
  hunger = Math.max(hunger - 1, 0);
  happiness = Math.max(happiness - 1, 0);
  energy = Math.max(energy - 1, 0);
  updateBars();
}

setInterval(degradeStats, 3000); // decrease stats over time

updateBars();
