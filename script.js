import {
  CHOICE_OBJECT,
  OPTIONS_OBJECT,
  DISPLAY_OBJECT,
} from "./subscripts/getElements.js";

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
const renderChoiceBtns = () => {
  for (let playbook of PLAYBOOKS) {
    CHOICE_OBJECT[playbook.type].innerHTML += playbookBtnTemplate(
      playbook.name,
      playbook.type,
      playbook.blurb
    );
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

    let selectedPlaybook = PLAYBOOKS.find((el) => el.name == clickedBtn.id);

    //Hide Options div if no playbook of that type is selected
    hideOptionsIfNotSelected(
      btn,
      `${selectedPlaybook.type}-choice-btn`,
      OPTIONS_OBJECT[selectedPlaybook.type].optiondiv,
      selectedPlaybook.type
    );

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
