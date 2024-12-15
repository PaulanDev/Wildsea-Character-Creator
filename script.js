//HTML Declarations
const BLOODLINECONTAINER = document.getElementById("bloodline-container");
const ORIGINCONTAINER = document.getElementById("origin-container");
const POSTCONTAINER = document.getElementById("post-container");

const BLOODLINECHOICE = document.getElementById("bloodline-choice");
const ORIGINCHOICE = document.getElementById("origin-choice");
const POSTCHOICE = document.getElementById("post-choice");

const BLOODLINESELECTABLES = document.getElementById("bloodline-selectables");
const BLOODLINEEDGESBTNS = document.getElementById("bloodline-edges-btns");
const BLOODLINEASPECTSBTNS = document.getElementById("bloodline-aspects-btns");
const BLOODLINESKILLSBTNS = document.getElementById("bloodline-skills-btns");

const ORIGINSELECTABLES = document.getElementById("origin-selectables");
const ORIGINEDGESBTNS = document.getElementById("origin-edges-btns");
const ORIGINASPECTBTNS = document.getElementById("origin-aspects-btns");

const POSTSELECTABLES = document.getElementById("post-selectables");
const POSTEDGESBTNS = document.getElementById("post-edges-btns");
const POSTASPECTBTNS = document.getElementById("post-aspects-btns");

import { PLAYBOOKS } from "./importer.js";
import { edgesInfo } from "./playbooks/edges.js";

let qsCharacterHolder = {
  bloodline: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  origin: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  post: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

//Reset all choices in the qsCharacterHolder to blanks
const resetCharacterPlaybook = (item) => {
  item["name"] = "";
  item["edge"] = "";
  item["skills"] = {};
  item["resources"] = [];
  item["drive"] = "";
  item["mire"] = "";
  item["aspects"] = [];
};

//Playbook choice button template
const playbookBtnTemplate = (name, type, blurb) => {
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
      BLOODLINECHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Origin") {
      ORIGINCHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Post") {
      POSTCHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    }
  }
};

//Toggles the visibility of element el based on class cl of target t.
const hideIfNotSelected = (t, cl, el, pb) => {
  if (t.classList.contains(cl)) {
    if (t.classList.contains("selected-playbook")) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
      resetCharacterPlaybook(qsCharacterHolder[pb]);
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
        resetCharacterPlaybook(qsCharacterHolder.bloodline);
      }
    });

    clickedBtn.classList.toggle("selected-playbook");

    //Hide Bloodline Selectables if no playbook is selected
    hideIfNotSelected(
      btn,
      "bloodline-choice-btn",
      BLOODLINESELECTABLES,
      "bloodline"
    );

    //Hide Origin Selectables if no playbook is selected
    hideIfNotSelected(btn, "origin-choice-btn", ORIGINSELECTABLES, "origin");

    //Hide Post Selectables if no playbook is selected
    hideIfNotSelected(btn, "post-choice-btn", POSTSELECTABLES, "post");

    let selectedPlaybook = PLAYBOOKS.find((el) => el.name == clickedBtn.id);

    if (selectedPlaybook.type == "Bloodline") {
      BLOODLINEEDGESBTNS.innerHTML = "";
      BLOODLINEASPECTSBTNS.innerHTML = "";
      BLOODLINESKILLSBTNS.innerHTML = "";
      qsCharacterHolder.bloodline.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        BLOODLINEEDGESBTNS.innerHTML += `<div id='Bloodline-edge-${edge}' class='Bloodline-edge'>
        <h3>${edge}</h3>
        <p>${capitalize(
          edgesInfo.find((entry) => entry.name == edge).tagline.slice(11)
        )}</p>
        </div>`;
      });
      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        BLOODLINEASPECTSBTNS.innerHTML += `<div class='Bloodline-aspect'>
        <h3>${aspect.name}</h3>
        <p>${aspect.length} Track ${aspect.type}</p>
        <p>${aspect.description}</p>
        </div>`;
      });
      //Generate Skill Buttons
      [...selectedPlaybook.skillsQS, ...selectedPlaybook.languagesQS].forEach(
        (skill) => {
          BLOODLINESKILLSBTNS.innerHTML += `<div id='${skill}-skill-counter' class='skill-counter'>
          <div class="skill-name">${capitalize(skill)}</div>
          <div class="skill-val-dec-btn">-</div>
          <div class="skill-value" id='${skill}-points'>0</div>
          <div class="skill-val-inc-btn">+</div>
          </div>`;
        }
      );
    } else if (selectedPlaybook.type == "Origin") {
      ORIGINEDGESBTNS.innerHTML = "";
      ORIGINASPECTBTNS.innerHTML = "";
      qsCharacterHolder.origin.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        ORIGINEDGESBTNS.innerHTML += `<div id='Origin-edge-${edge}' class='Origin-edge'>
        <h3>${edge}</h3>
        <p>${capitalize(
          edgesInfo.find((entry) => entry.name == edge).tagline.slice(11)
        )}</p>
        </div>`;
      });
      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        ORIGINASPECTBTNS.innerHTML += `<div class='Origin-aspect'>
        <h3>${aspect.name}</h3>
        <p>${aspect.length} Track ${aspect.type}</p>
        <p>${aspect.description}</p>
        </div>`;
      });
    } else if (selectedPlaybook.type == "Post") {
      POSTEDGESBTNS.innerHTML = "";
      POSTASPECTBTNS.innerHTML = "";
      qsCharacterHolder.post.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        POSTEDGESBTNS.innerHTML += `<div id='Post-edge-${edge}' class='Post-edge'>
        <h3>${edge}</h3>
        <p>${capitalize(
          edgesInfo.find((entry) => entry.name == edge).tagline.slice(11)
        )}</p>
        </div>`;
      });
      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        POSTASPECTBTNS.innerHTML += `<div class='Post-aspect'>
        <h3>${aspect.name}</h3>
        <p>${aspect.length} Track ${aspect.type}</p>
        <p>${aspect.description}</p>
        </div>`;
      });
    }
    console.log(qsCharacterHolder);
  });
});
