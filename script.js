//HTML Declarations
const BLOODLINECONTAINER = document.getElementById("bloodline-container");
const ORIGINCONTAINER = document.getElementById("origin-container");
const POSTCONTAINER = document.getElementById("post-container");
const BLOODLINECHOICE = document.getElementById("bloodline-choice");
const ORIGINCHOICE = document.getElementById("origin-choice");
const POSTCHOICE = document.getElementById("post-choice");
const BLOODLINESELECTABLES = document.getElementById("bloodline-selectables");
const BLOODLINEEDGES = document.getElementById("bloodline-edges");
const BLOODLINEASPECTS = document.getElementById("bloodline-aspects");

import { PLAYBOOKS } from "./importer.js";

let qsCharacterHolder = {
  bloodline: {
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  origin: {
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  post: {
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
};

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
    } else if (playbook.type == "Post") {
      POSTCHOICE.innerHTML += choiceBtnTemplate(
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

    //Hide Bloodline-selectables element is no playbooks are selected.
    if (btn.classList.contains("selected-playbook")) {
      BLOODLINESELECTABLES.classList.remove("hidden");
    } else {
      BLOODLINESELECTABLES.classList.add("hidden");
    }

    let selectedPlaybook = PLAYBOOKS.find((el) => el.name == clickedBtn.id);

    if (selectedPlaybook.type == "Bloodline") {
      BLOODLINEEDGES.innerHTML = "";
      BLOODLINEASPECTS.innerHTML = "";
      selectedPlaybook.edgesQS.forEach((edge) => {
        BLOODLINEEDGES.innerHTML += `<div id='Bloodline-edge-${edge}' class='Bloodline-edge'>${edge}</div>`;
      });
    }
  });
});
