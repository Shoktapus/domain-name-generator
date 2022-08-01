const pronouns = ["my", "our", "your", "their"];
const adj = ["superficial", "odd", "silly", "swift"];
const nouns = ["efficiency", "climate", "guitar", "initiative"];

const getRandomNum = (max) => Math.floor(Math.random() * max);
const getRandomName = () =>
  `${pronouns[Math.floor(Math.random() * pronouns.length)]}`;

const func = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++)
      for (let k = 0; k < arr[i].length; k++)
        for (let l = 0; l < arr[i].length; l++) console.log(arr[i][3]);
  }
};
console.log(func(pronouns));

const setRandomName = () => {
  document.getElementById("random-name").innerText = getRandomName();
};
document.getElementById("generate").addEventListener("click, setRandomName");
setRandomName();
