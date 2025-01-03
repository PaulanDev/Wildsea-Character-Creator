import {
  CHOICE_OBJECT,
  OPTIONS_OBJECT,
  DISPLAY_OBJECT,
  updateDisplay,
} from "./subscripts/getElements.js";

import { PLAYBOOKS } from "./importer.js";
import { edgesInfo } from "./playbooks/edges.js";
import { SKILLS } from "./playbooks/skills.js";

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

const skillPointMax = 5;

//This is a dirty solution until I make the skills object in playbooks, like I did for edges.
const SKILLSARR = SKILLS.map((skill) => skill.name);

const createEdgeHolder = (sheet) => {
  return [sheet["Bloodline"].edge, sheet["Origin"].edge, sheet["Post"].edge];
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

const toggleLockedEdges = (target) => {
  let edgeHolder = createEdgeHolder(qsCharacterHolder);
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

const updateSkillCounters = (skill) => {
  [...document.getElementsByClassName(`${skill}-value`)].forEach((counter) => {
    counter.innerHTML = getTotalPointsInSkill(skill, qsCharacterHolder);
  });
};

const plusBtnFunction = (target, type) => {
  const skill = target.parentElement.id.split("-")[0];

  let totalPointsInSkill = getTotalPointsInSkill(skill, qsCharacterHolder);

  let pointsRemainingForPlaybook =
    skillPointMax -
    Object.values(qsCharacterHolder[type].skills).reduce(
      (acc, currVal) => acc + currVal,
      0
    );

  if (pointsRemainingForPlaybook > 0) {
    if (totalPointsInSkill < 3) {
      if (qsCharacterHolder[type].skills.hasOwnProperty(skill)) {
        qsCharacterHolder[type].skills[skill]++;
      } else {
        qsCharacterHolder[type].skills[skill] = 1;
      }

      target.parentElement.lastElementChild.innerHTML += " * ";

      updateSkillCounters(skill);
    }
  }
  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
};

const minusBtnFunction = (target, type) => {
  const skill = target.parentElement.id.split("-")[0];

  if (qsCharacterHolder[type].skills.hasOwnProperty(skill)) {
    if (qsCharacterHolder[type].skills[skill] > 1) {
      qsCharacterHolder[type].skills[skill]--;
    } else {
      delete qsCharacterHolder[type].skills[skill];
    }

    target.parentElement.lastElementChild.innerHTML =
      target.parentElement.lastElementChild.innerHTML.slice(0, -3);

    updateSkillCounters(skill);
  }
  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
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
  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
};

//Aspect Functionality
const aspectButtonFunction = (target, pb) => {
  //Get the name of the clicked aspect button
  let aspectName = target.firstElementChild.innerHTML;
  //Get the full object of the aspect
  let chosenAspect = pb.aspects.find(
    (el) => el.name == target.firstElementChild.innerHTML
  );
  //If the aspects for the pb don't have an object with the name of the clicked button
  if (
    qsCharacterHolder[pb["type"]].aspects.filter(
      (item) => item["name"] == aspectName
    ).length == 0
  ) {
    qsCharacterHolder[pb["type"]].aspects.push(chosenAspect);
  } else {
    let targetIndex = qsCharacterHolder[pb["type"]].aspects
      .map((aspect) => aspect.name)
      .indexOf(aspectName);
    qsCharacterHolder[pb["type"]].aspects.splice(targetIndex, 1);
  }

  //Remove the first in the aspect array if a third is added
  if (qsCharacterHolder[pb["type"]].aspects.length > 2) {
    qsCharacterHolder[pb["type"]].aspects.shift();
  }

  //Create array of aspect names in qsCharacterHolder for playbook
  let selectedAspectNames = qsCharacterHolder[pb["type"]].aspects.map(
    (aspect) => aspect.name
  );

  //Toggle selected-aspect for relevant buttons
  [...document.getElementsByClassName(`${pb["type"]}-aspect`)].forEach(
    (btn2) => {
      if (selectedAspectNames.includes(btn2.firstElementChild.innerHTML)) {
        btn2.classList.add("selected-aspect");
      } else {
        btn2.classList.remove("selected-aspect");
      }
    }
  );
  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
};

//Resource Functionality
const resourceButtonFunction = (target, pb) => {
  let resourceType = target.firstElementChild.innerHTML;
  let resourceName = target.lastElementChild.innerHTML;

  //Check if resource is in pb, if so remove from array

  let resourceArray = qsCharacterHolder[pb].resources.map(
    (thing) => thing["name"]
  );

  if (resourceArray.indexOf(resourceName) > -1) {
    qsCharacterHolder[pb].resources.splice(
      resourceArray.indexOf(resourceName),
      1
    );
  } else {
    qsCharacterHolder[pb].resources.push({
      name: resourceName,
      type: resourceType,
    });
  }

  //Remove the 0th index resource if a third one tries to be selected
  if (qsCharacterHolder[pb].resources.length > 2) {
    qsCharacterHolder[pb].resources.shift();
  }

  resourceArray = qsCharacterHolder[pb].resources.map((thing) => thing["name"]);

  //Gives elements .selected-resource or removes it
  [...document.getElementsByClassName(`${pb}-resource`)].forEach((el) => {
    if (resourceArray.includes(el.lastElementChild.innerHTML)) {
      el.classList.add("selected-resource");
    } else {
      el.classList.remove("selected-resource");
    }
  });

  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
};

const driveButtonFunction = (target, pb) => {
  let targetDrive = target.firstElementChild.innerHTML;

  //Control class on buttons
  [...document.getElementsByClassName(`${pb}-drive`)].forEach((drive) => {
    if (targetDrive == drive.firstElementChild.innerHTML) {
      drive.classList.toggle("selected-drive");
    } else {
      drive.classList.remove("selected-drive");
    }
  });

  //Assign to playbook
  if (target.classList.contains("selected-drive")) {
    qsCharacterHolder[pb].drive = targetDrive;
  } else {
    qsCharacterHolder[pb].drive = "";
  }

  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
};

const mireButtonFunction = (target, pb) => {
  let targetMire = target.firstElementChild.innerHTML;

  //Control class on buttons
  [...document.getElementsByClassName(`${pb}-mire`)].forEach((mire) => {
    if (targetMire == mire.firstElementChild.innerHTML) {
      mire.classList.toggle("selected-mire");
    } else {
      mire.classList.remove("selected-mire");
    }
  });

  //Assign to playbook
  if (target.classList.contains("selected-mire")) {
    qsCharacterHolder[pb].mire = targetMire;
  } else {
    qsCharacterHolder[pb].mire = "";
  }

  updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
};

/* HTML TEMPLATES */
import {
  playbookBtnTemplate,
  edgeBtnTemplate,
  skillBtnTemplate,
  aspectBtnTemplate,
  resourceBtnTemplate,
  dmBtnTemplate,
  capitalize,
  getTotalPointsInSkill,
} from "./subscripts/htmlTemplates.js";

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

    //Clear out the holder when a new playbook is clicked
    resetCharacterPlaybook(qsCharacterHolder[selectedPlaybook.type]);

    //Toggle locked-edge off when a playbook button is clicked
    let edgeHolder = createEdgeHolder(qsCharacterHolder);
    [...document.getElementsByClassName("edges")].forEach((item) => {
      if (
        !edgeHolder.includes(item.classList[1].split("-")[0]) &&
        item.classList.contains("locked-edge")
      ) {
        item.classList.remove("locked-edge");
      }
    });

    //Clear out each div that holds options on click
    OPTIONS_OBJECT[selectedPlaybook.type].divarray.forEach((div) => {
      div.innerHTML = "";
    });

    //Assign name of playbook to qsCharacterHolder
    clickedBtn.classList.contains("selected-playbook")
      ? (qsCharacterHolder[selectedPlaybook.type].name = selectedPlaybook.name)
      : (qsCharacterHolder[selectedPlaybook.type].name = "");

    //Generate Edge buttons
    selectedPlaybook.edgesQS.forEach((edge) => {
      OPTIONS_OBJECT[selectedPlaybook.type].divarray[0].innerHTML +=
        edgeBtnTemplate(
          edge,
          selectedPlaybook.type,
          qsCharacterHolder,
          edgesInfo
        );
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
          skillBtnTemplate(skill, qsCharacterHolder, selectedPlaybook.type);
      }
    );

    //Generate Resource buttons
    for (let resourceType in selectedPlaybook.resourcesQS) {
      selectedPlaybook.resourcesQS[resourceType].forEach((resource) => {
        OPTIONS_OBJECT[selectedPlaybook.type].divarray[3].innerHTML +=
          resourceBtnTemplate(
            resource,
            "resource",
            selectedPlaybook.type,
            capitalize(resourceType)
          );
      });
    }

    //Generate Drive buttons
    selectedPlaybook.drivesQS.forEach((drive) => {
      OPTIONS_OBJECT[selectedPlaybook.type].divarray[4].innerHTML +=
        dmBtnTemplate(drive, "drive", selectedPlaybook.type);
    });

    //Generate Mire buttons
    selectedPlaybook.miresQS.forEach((mire) => {
      OPTIONS_OBJECT[selectedPlaybook.type].divarray[5].innerHTML +=
        dmBtnTemplate(mire, "mire", selectedPlaybook.type);
    });

    //Add clickability to Edge buttons
    btnArrayOf(selectedPlaybook.type, "edge").forEach((btn2) => {
      btn2.addEventListener("click", () => {
        edgeButtonFunction(btn2, selectedPlaybook.type);
      });
    });

    //Add clickability to skill plus buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-inc-btn`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        plusBtnFunction(btn2, selectedPlaybook.type);
      });
    });

    //Add clickability to skill minus buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-dec-btn`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        minusBtnFunction(btn2, selectedPlaybook.type);
      });
    });

    //Add clickability to aspect buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-aspect`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        aspectButtonFunction(btn2, selectedPlaybook);
      });
    });

    //Add clickability to resource buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-resource`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        resourceButtonFunction(btn2, selectedPlaybook.type);
      });
    });

    //Add clickability to drive buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-drive`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        driveButtonFunction(btn2, selectedPlaybook.type);
      });
    });

    //Add clickability to mire buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-mire`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        mireButtonFunction(btn2, selectedPlaybook.type);
      });
    });

    //Update skill counters after changing playbooks, which resets and removes points
    SKILLSARR.forEach((skill) => updateSkillCounters(skill));
    updateDisplay(DISPLAY_OBJECT, qsCharacterHolder, SKILLSARR);
    console.log(qsCharacterHolder);
  });
});
