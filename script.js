//HTML Declarations
const BLOODLINECONTAINER = document.getElementById("bloodline-container");
const ORIGINCONTAINER = document.getElementById("origin-container");
const BLOODLINECHOICE = document.getElementById("bloodline-choice");
const ORIGINCHOICE = document.getElementById("origin-choice");

import { PLAYBOOKS } from "./importer.js";

//Playbook choice template
const choiceBtnTemplate = (name, type, blurb) => {
  return `<div id='${name}' class='${type.toLowerCase()}-choice-btn playbook-choice-btn'>
      <h2 class='text-center'>
      ${name}
      </h2>
      <p class='text-center'>
      ${blurb}
      </p></div>`;
};

//Create playbook choice buttons
const renderChoiceBtns = function () {
  for (const playbook of PLAYBOOKS) {
    if (playbook.type == "Bloodline") {
      BLOODLINECHOICE.innerHTML += choiceBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Origin") {
      ORIGINCHOICE.innerHTML += choiceBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    }
  }
};

//Call renderChoiceBtns before assigning button functionality
renderChoiceBtns();

//Create array of selectable buttons
const playbookChoiceBtns = document.getElementsByClassName(
  "playbook-choice-btn"
);

//Add function to buttons
[...playbookChoiceBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let clickedBtn = event.target;
    if (
      event.target.tagName.toLowerCase() == "p" ||
      event.target.tagName.toLowerCase() == "h2"
    ) {
      clickedBtn = event.target.parentElement;
    }

    //Unselect a button of the same type as the clicked button
    [...playbookChoiceBtns].forEach((item) => {
      if (
        item.classList.contains("selected-playbook") &&
        item.classList.contains(clickedBtn.classList[0]) &&
        item.id !== clickedBtn.id
      ) {
        item.classList.remove("selected-playbook");
      }
    });

    clickedBtn.classList.toggle("selected-playbook");
    let selectedPlaybook = PLAYBOOKS.find((el) => el.name == clickedBtn.id)
  });
});
