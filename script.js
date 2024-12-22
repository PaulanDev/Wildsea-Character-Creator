//HTML Declarations
const BLOODLINE_CHOICE = document.getElementById("Bloodline-choice");
const ORIGIN_CHOICE = document.getElementById("Origin-choice");
const POST_CHOICE = document.getElementById("Post-choice");

const BLOODLINE_OPTIONS = document.getElementById("Bloodline-options");
const BLOODLINE_EDGE_BTNS = document.getElementById("Bloodline-edge-btns");
const BLOODLINE_ASPECT_BTNS = document.getElementById("Bloodline-aspect-btns");
const BLOODLINE_SKILL_BTNS = document.getElementById("Bloodline-skill-btns");
const BLOODLINE_OPTION_DIVS = [
  BLOODLINE_EDGE_BTNS,
  BLOODLINE_ASPECT_BTNS,
  BLOODLINE_SKILL_BTNS,
];

const ORIGIN_OPTIONS = document.getElementById("Origin-options");
const ORIGIN_EDGE_BTNS = document.getElementById("Origin-edge-btns");
const ORIGIN_ASPECT_BTNS = document.getElementById("Origin-aspect-btns");
const ORIGIN_SKILL_BTNS = document.getElementById("Origin-skill-btns");
const ORIGIN_OPTION_DIVS = [
  ORIGIN_EDGE_BTNS,
  ORIGIN_ASPECT_BTNS,
  ORIGIN_SKILL_BTNS,
];

const POST_OPTIONS = document.getElementById("Post-options");
const POST_EDGE_BTNS = document.getElementById("Post-edge-btns");
const POST_ASPECT_BTNS = document.getElementById("Post-aspect-btns");
const POST_SKILL_BTNS = document.getElementById("Post-skill-btns");
const POST_OPTION_DIVS = [POST_EDGE_BTNS, POST_ASPECT_BTNS, POST_SKILL_BTNS];

const OPTIONS_OBJECT = {
  Bloodline: { optiondiv: BLOODLINE_OPTIONS, divarray: BLOODLINE_OPTION_DIVS },
  Origin: { optiondiv: ORIGIN_OPTIONS, divarray: ORIGIN_OPTION_DIVS },
  Post: { optiondiv: POST_OPTIONS, divarray: POST_OPTION_DIVS },
};

const BLOODLINE_DISPLAY_NAME = document.getElementById(
  "Bloodline-display-name"
);
const BLOODLINE_DISPLAY_EDGE = document.getElementById(
  "Bloodline-display-edge"
);

const ORIGIN_DISPLAY_NAME = document.getElementById("Origin-display-name");
const ORIGIN_DISPLAY_EDGE = document.getElementById("Origin-display-edge");

const POST_DISPLAY_NAME = document.getElementById("Post-display-name");
const POST_DISPLAY_EDGE = document.getElementById("Post-display-edge");

const DISPLAY_OBJECT = {
  Bloodline: [BLOODLINE_DISPLAY_NAME, BLOODLINE_DISPLAY_EDGE],
  Origin: [ORIGIN_DISPLAY_NAME, ORIGIN_DISPLAY_EDGE],
  Post: [POST_DISPLAY_NAME, POST_DISPLAY_EDGE],
};

import { PLAYBOOKS } from "./importer.js";
import { edgesInfo } from "./playbooks/edges.js";

let qsCharacterHolder = {
  Bloodline: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  Origin: {
    name: "",
    edge: "",
    skills: {},
    resources: [],
    drive: "",
    mire: "",
    aspects: [],
  },
  Post: {
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
    qsCharacterHolder.Bloodline.edge,
    qsCharacterHolder.Origin.edge,
    qsCharacterHolder.Post.edge,
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
      BLOODLINE_CHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Origin") {
      ORIGIN_CHOICE.innerHTML += playbookBtnTemplate(
        playbook.name,
        playbook.type,
        playbook.blurb
      );
    } else if (playbook.type == "Post") {
      POST_CHOICE.innerHTML += playbookBtnTemplate(
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

  if (qsCharacterHolder[type].skills.hasOwnProperty(skill)) {
    qsCharacterHolder[type].skills[skill]++;
  } else {
    qsCharacterHolder[type].skills[skill] = 1;
  }

  [...document.getElementsByClassName(`${skill}-value`)].forEach((counter) => {
    counter.innerHTML = qsCharacterHolder[type].skills[skill];
  });

  console.log("Check skills:", qsCharacterHolder);
};

//Option Functionality
const edgeButtonFunction = (target, type) => {
  //Set edge on the character sheet
  qsCharacterHolder[type].edge = target.id.split("-")[2];
  //Toggle selection class on clicked button
  target.classList.toggle("selected-edge");
  //Removes edge from qsCharacterHolder is edge button is deselected
  if (!target.classList.contains("selected-edge")) {
    qsCharacterHolder[type].edge = "";
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
  return `<div id='${name}' class='${type}-choice-btn playbook-choice-btn'>
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
      "Bloodline-choice-btn",
      BLOODLINE_OPTIONS,
      "Bloodline"
    );
    hideOptionsIfNotSelected(
      btn,
      "Origin-choice-btn",
      ORIGIN_OPTIONS,
      "Origin"
    );
    hideOptionsIfNotSelected(btn, "Post-choice-btn", POST_OPTIONS, "Post");

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

    //Clear out the holder when a new playbook is clicked
    resetCharacterPlaybook(qsCharacterHolder[selectedPlaybook.type]);

    //Clear out each div that holds options on click
    OPTIONS_OBJECT[selectedPlaybook.type].divarray.forEach((div) => {
      div.innerHTML = "";
    });

    //Assign bloodline name to qsCharacterHolder
    qsCharacterHolder[selectedPlaybook.type].name = selectedPlaybook.name;

    //Generate Edge buttons
    selectedPlaybook.edgesQS.forEach((edge) => {
      OPTIONS_OBJECT[selectedPlaybook.type].divarray[0].innerHTML +=
        edgeBtnTemplate(edge, selectedPlaybook.type);
    });

    //Add clickability to Edge buttons
    btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
      btn2.addEventListener("click", () => {
        edgeButtonFunction(btn2, selectedPlaybook.type);
      });
    });

    //Generate Aspect buttons
    selectedPlaybook.aspects.forEach((aspect) => {
      OPTIONS_OBJECT[selectedPlaybook.type].divarray[1].innerHTML +=
        aspectBtnTemplate(aspect, selectedPlaybook.type);
    });

    //Generate Skill Buttons
    [...selectedPlaybook.skillsQS, ...selectedPlaybook.languagesQS].forEach(
      (skill) => {
        OPTIONS_OBJECT[selectedPlaybook.type].divarray[2].innerHTML +=
          skillBtnTemplate(skill, selectedPlaybook.type);
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
    console.log(qsCharacterHolder);
  });
});
