//HTML Declarations
const BLOODLINECHOICE = document.getElementById("bloodline-choice");
const ORIGINCHOICE = document.getElementById("origin-choice");
const POSTCHOICE = document.getElementById("post-choice");

const BLOODLINEOPTIONS = document.getElementById("bloodline-options");
const BLOODLINEEDGESBTNS = document.getElementById("bloodline-edges-btns");
const BLOODLINEASPECTSBTNS = document.getElementById("bloodline-aspects-btns");
const BLOODLINESKILLSBTNS = document.getElementById("bloodline-skills-btns");
const BLOODLINEOPTIONDIVS = [
  BLOODLINEEDGESBTNS,
  BLOODLINEASPECTSBTNS,
  BLOODLINESKILLSBTNS,
];

const ORIGINOPTIONS = document.getElementById("origin-options");
const ORIGINEDGESBTNS = document.getElementById("origin-edges-btns");
const ORIGINASPECTBTNS = document.getElementById("origin-aspects-btns");
const ORIGINSKILLSBTNS = document.getElementById("origin-skills-btns");
const ORIGINOPTIONDIVS = [ORIGINEDGESBTNS, ORIGINASPECTBTNS, ORIGINSKILLSBTNS];

const POSTOPTIONS = document.getElementById("post-options");
const POSTEDGESBTNS = document.getElementById("post-edges-btns");
const POSTASPECTBTNS = document.getElementById("post-aspects-btns");
const POSTSKILLSBTNS = document.getElementById("post-skills-btns");
const POSTOPTIONDIVS = [POSTEDGESBTNS, POSTASPECTBTNS, POSTSKILLSBTNS];

const OPTIONSOBJECT = {
  Bloodline: { optiondiv: BLOODLINEOPTIONS, divarray: BLOODLINEOPTIONDIVS },
  Origin: { optiondiv: ORIGINOPTIONS, divarray: ORIGINOPTIONDIVS },
  Post: { optiondiv: POSTOPTIONS, divarray: POSTOPTIONDIVS },
};

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

const createEdgeHolder = () => {
  return [
    qsCharacterHolder.bloodline.edge,
    qsCharacterHolder.origin.edge,
    qsCharacterHolder.post.edge,
  ];
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

const btnArrayOf = (pb, option) => {
  return [...document.getElementsByClassName(`${pb}-${option}`)];
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
const hideOptionsIfNotSelected = (target, cl, el, pb) => {
  if (target.classList.contains(cl)) {
    if (target.classList.contains("selected-playbook")) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
      resetCharacterPlaybook(qsCharacterHolder[pb]);
    }
  }
};

//Unselect a button of the same class as the clicked button
const deselectUnusedButton = (arr, cl, target) => {
  [...arr].forEach((item) => {
    if (
      item.classList.contains(cl) &&
      item.classList.contains(target.classList[0]) &&
      item.id !== target.id
    ) {
      item.classList.remove(cl);
    }
  });
};

const isEdgeSelectedElsewhere = (holder, check) => {
  for (let pb in holder) {
    if (holder[pb].edge == check) {
      return true;
    }
  }
  return false;
};

const toggleLockedEdges = (target) => {
  let edgeHolder = createEdgeHolder();
  [...document.getElementsByClassName("edges")].forEach((item) => {
    if (item.id != target.id && !item.classList.contains("selected-edge")) {
      if (edgeHolder.includes(item.classList[1].split("-")[0])) {
        item.classList.add("locked-edge");
      } else if (item.classList.contains("locked-edge")) {
        item.classList.remove("locked-edge");
      }
    }
  });
};

//Skill Related Functions
const doesSkillHavePoints = (skill) => {
  for (let pb in qsCharacterHolder) {
    if (pb["skills"].hasOwnProperty(skill)) {
      if (pb["skills"][skill] > 0) {
        return true;
      }
    }
  }
  return false;
};

const plusBtnFunction = (target, type) => {
  const skill = target.parentElement.id.split("-")[0];

  if (qsCharacterHolder[type.toLowerCase()].skills.hasOwnProperty(skill)) {
    qsCharacterHolder[type.toLowerCase()].skills[skill]++;
  } else {
    qsCharacterHolder[type.toLowerCase()].skills[skill] = 1;
  }

  [...document.getElementsByClassName(`${skill}-value`)].forEach((counter) => {
    counter.innerHTML = qsCharacterHolder[type.toLowerCase()].skills[skill];
  });

  console.log("Check skills:", qsCharacterHolder);
};

//Option Functionality
const edgeButtonFunction = (target, type) => {
  //Set edge on the character sheet
  qsCharacterHolder[type.toLowerCase()].edge = target.id.split("-")[2];
  //Toggle selection class on clicked button
  target.classList.toggle("selected-edge");
  //Removes edge from qsCharacterHolder is edge button is deselected
  if (!target.classList.contains("selected-edge")) {
    qsCharacterHolder[type.toLowerCase()].edge = "";
  }
  deselectUnusedButton(
    [...document.getElementsByClassName(`${type}-edge`)],
    "selected-edge",
    target
  );
  toggleLockedEdges(target);
};

/* HTML TEMPLATES */
const playbookBtnTemplate = (name, type, blurb) => {
  return `<div id='${name}' class='${type.toLowerCase()}-choice-btn playbook-choice-btn'>
      <h2 class='text-center'>
      ${name}
      </h2>
      <p class='text-center'>
      ${blurb}
      </p></div>`;
};

const edgeBtnTemplate = (edge, pb) => {
  return `<div id='${pb}-edge-${edge}' class='${pb}-edge ${edge}-btn edges ${
    isEdgeSelectedElsewhere(qsCharacterHolder, edge) ? "locked-edge" : ""
  }'>
    <h3>${edge}</h3>
    <p>${capitalize(
      edgesInfo.find((entry) => entry.name == edge).tagline.slice(11)
    )}</p>
    </div>`;
};

const skillBtnTemplate = (skill) => {
  return `<div id='${skill}-skill-counter' class=' skill-counter'>
    <div class="skill-name">${capitalize(skill)}</div>
    <div class="skill-val-dec-btn">-</div>
    <div class="${skill}-value skill-value" id='${skill}-points'>0</div>
    <div class="skill-val-inc-btn">+</div>
    </div>`;
};

const aspectBtnTemplate = (aspect, type) => {
  return `<div class='${type}-aspect'>
        <h3>${aspect["name"]}</h3>
        <p>${aspect["length"]} Track ${aspect["type"]}</p>
        <p>${aspect["description"]}</p>
        </div>`;
};

//Call renderChoiceBtns before assigning button functionality
renderChoiceBtns();

//Create array of selectable buttons
const playbookChoiceBtns = document.getElementsByClassName(
  "playbook-choice-btn"
);

//Add functionality to Playbook buttons
[...playbookChoiceBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let clickedBtn = event.target;
    if (
      event.target.tagName.toLowerCase() == "p" ||
      event.target.tagName.toLowerCase() == "h2"
    ) {
      clickedBtn = event.target.parentElement;
    }

    //Remove 'selected-playbook' class from a button of same type as clicked button
    deselectUnusedButton(
      [...playbookChoiceBtns],
      "selected-playbook",
      clickedBtn
    );

    clickedBtn.classList.toggle("selected-playbook");

    //Hide Options if no playbook is selected
    hideOptionsIfNotSelected(
      btn,
      "bloodline-choice-btn",
      BLOODLINEOPTIONS,
      "bloodline"
    );
    hideOptionsIfNotSelected(btn, "origin-choice-btn", ORIGINOPTIONS, "origin");
    hideOptionsIfNotSelected(btn, "post-choice-btn", POSTOPTIONS, "post");

    //Toggle locked-edge off when a playbook button is clicked
    let edgeHolder = createEdgeHolder();
    [...document.getElementsByClassName("edges")].forEach((item) => {
      if (
        !edgeHolder.includes(item.classList[1].split("-")[0]) &&
        item.classList.contains("locked-edge")
      ) {
        item.classList.remove("locked-edge");
      }
    });

    let selectedPlaybook = PLAYBOOKS.find((el) => el.name == clickedBtn.id);

    if (selectedPlaybook.type == "Bloodline") {
      //Clear out the holder when a new playbook is clicked
      resetCharacterPlaybook(qsCharacterHolder.bloodline);
      //Clear out each div that holds options on click
      BLOODLINEOPTIONDIVS.forEach((div) => {
        div.innerHTML = "";
      });
      //Assign bloodline name to qsCharacterHolder
      qsCharacterHolder.bloodline.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        BLOODLINEEDGESBTNS.innerHTML += edgeBtnTemplate(
          edge,
          selectedPlaybook.type
        );
      });

      //Add clickability to Edge buttons
      btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
        btn2.addEventListener("click", () => {
          edgeButtonFunction(btn2, selectedPlaybook.type);
        });
      });

      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        BLOODLINEASPECTSBTNS.innerHTML += aspectBtnTemplate(
          aspect,
          selectedPlaybook.type
        );
      });
      //Generate Skill Buttons
      [...selectedPlaybook.skillsQS, ...selectedPlaybook.languagesQS].forEach(
        (skill) => {
          BLOODLINESKILLSBTNS.innerHTML += skillBtnTemplate(
            skill,
            selectedPlaybook.type
          );
        }
      );
      //Add clickability to skill plus buttons
      [...document.getElementsByClassName("skill-val-inc-btn")].forEach(
        (btn2) => {
          btn2.addEventListener("click", () => {
            plusBtnFunction(btn2, selectedPlaybook.type);
          });
        }
      );
    } else if (selectedPlaybook.type == "Origin") {
      //Clear out the holder when a new playbook is clicked
      resetCharacterPlaybook(qsCharacterHolder.origin);
      //Clear out each div that holds options on click
      ORIGINOPTIONDIVS.forEach((div) => {
        div.innerHTML = "";
      });
      //Assign origin name to qsCharacterHolder
      qsCharacterHolder.origin.name = selectedPlaybook.name;

      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        ORIGINEDGESBTNS.innerHTML += edgeBtnTemplate(
          edge,
          selectedPlaybook.type
        );
      });

      //Add clickability to Edge buttons
      btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
        btn2.addEventListener("click", () => {
          edgeButtonFunction(btn2, selectedPlaybook.type);
        });
      });

      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        ORIGINASPECTBTNS.innerHTML += aspectBtnTemplate(
          aspect,
          selectedPlaybook.type
        );
      });
    } else if (selectedPlaybook.type == "Post") {
      //Clear out the holder when a new playbook is clicked
      resetCharacterPlaybook(qsCharacterHolder.post);
      POSTEDGESBTNS.innerHTML = "";
      POSTASPECTBTNS.innerHTML = "";
      qsCharacterHolder.post.name = selectedPlaybook.name;
      //Generate Edge buttons
      selectedPlaybook.edgesQS.forEach((edge) => {
        POSTEDGESBTNS.innerHTML += edgeBtnTemplate(edge, selectedPlaybook.type);
      });
      //Add clickability to Edge buttons
      btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
        btn2.addEventListener("click", () => {
          edgeButtonFunction(btn2, selectedPlaybook.type);
        });
      });
      //Generate Aspect Buttons
      selectedPlaybook.aspects.forEach((aspect) => {
        POSTASPECTBTNS.innerHTML += aspectBtnTemplate(
          aspect,
          selectedPlaybook.type
        );
      });
    }
    console.log(qsCharacterHolder);
  });
});
