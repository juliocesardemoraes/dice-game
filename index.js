function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

const tagDice = document.getElementById("dice");

const rolarDado = () => {
  const dice = getRandomInt(6);
  tagDice.src = `/images/dice-${dice}.png`;
};
