/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let value = "3wineverlisten.com";
  const pronouns = ["my", "our", "your", "their"];
  const adj = ["superficial", "odd", "silly", "swift"];
  const nouns = ["efficiency", "climate", "guitar", "initiative"];
  const domains = [".com", ".org", ".io", ".us"];

  const getRandomPro = pronouns[Math.floor(Math.random() * pronouns.length)];
  const getRandomAdj = adj[Math.floor(Math.random() * adj.length)];
  const getRandomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const getRandomDomain = domains[Math.floor(Math.random() * domains.length)];
  value = getRandomPro + getRandomAdj + getRandomNoun + getRandomDomain;

  document.getElementById("martin").innerHTML = value;
};
