import {
  CHOICE_OBJECT,
  OPTIONS_OBJECT,
  DISPLAY_OBJECT,
  updateDisplay,
} from "./subscripts/getElements.js";

import { PLAYBOOKS } from "./importer.js";
import { edgesInfo } from "./playbooks/edges.js";
import { SKILLSARR } from "./playbooks/skills.js";

import {
  qsPlaybookHolder,
  qsFullCharacter,
  resetCharacterPlaybook,
  updateFullCharacter,
} from "./subscripts/characterSheets.js";

export const skillPointMax = 5;

//Create playbook choice buttons
const renderPlaybookBtns = () => {
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
      resetCharacterPlaybook(qsPlaybookHolder[pb]);
    }
  }
};

import {
  createEdgeHolder,
  deselectUnusedButton,
  edgeButtonFunction,
  updateSkillCounters,
  plusBtnFunction,
  minusBtnFunction,
  aspectButtonFunction,
} from "./subscripts/buttonFunctions.js";

//Resource Functionality
const resourceButtonFunction = (target, pb) => {
  let resourceType = target.firstElementChild.innerHTML;
  let resourceName = target.lastElementChild.innerHTML;

  //Check if resource is in pb, if so remove from array

  let resourceArray = qsPlaybookHolder[pb].resources.map(
    (thing) => thing["name"]
  );

  if (resourceArray.indexOf(resourceName) > -1) {
    qsPlaybookHolder[pb].resources.splice(
      resourceArray.indexOf(resourceName),
      1
    );
  } else {
    qsPlaybookHolder[pb].resources.push({
      name: resourceName,
      type: resourceType,
    });
  }

  //Remove the 0th index resource if a third one tries to be selected
  if (qsPlaybookHolder[pb].resources.length > 2) {
    qsPlaybookHolder[pb].resources.shift();
  }

  resourceArray = qsPlaybookHolder[pb].resources.map((thing) => thing["name"]);

  //Gives elements .selected-resource or removes it
  [...document.getElementsByClassName(`${pb}-resource`)].forEach((el) => {
    if (resourceArray.includes(el.lastElementChild.innerHTML)) {
      el.classList.add("selected-resource");
    } else {
      el.classList.remove("selected-resource");
    }
  });

  updateDisplay(DISPLAY_OBJECT, qsPlaybookHolder, SKILLSARR);
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
    qsPlaybookHolder[pb].drive = targetDrive;
  } else {
    qsPlaybookHolder[pb].drive = "";
  }

  updateDisplay(DISPLAY_OBJECT, qsPlaybookHolder, SKILLSARR);
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
    qsPlaybookHolder[pb].mire = targetMire;
  } else {
    qsPlaybookHolder[pb].mire = "";
  }

  updateDisplay(DISPLAY_OBJECT, qsPlaybookHolder, SKILLSARR);
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
} from "./subscripts/htmlTemplates.js";

//Call renderPlaybookBtns before assigning button functionality
renderPlaybookBtns();

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
    resetCharacterPlaybook(qsPlaybookHolder[selectedPlaybook.type]);

    //Toggle locked-edge off when a playbook button is clicked
    let edgeHolder = createEdgeHolder(qsPlaybookHolder);
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

    //Assign name of playbook to qsPlaybookHolder
    clickedBtn.classList.contains("selected-playbook")
      ? (qsPlaybookHolder[selectedPlaybook.type].name = selectedPlaybook.name)
      : (qsPlaybookHolder[selectedPlaybook.type].name = "");

    //Generate Edge buttons
    selectedPlaybook.edgesQS.forEach((edge) => {
      OPTIONS_OBJECT[selectedPlaybook.type].divarray[0].innerHTML +=
        edgeBtnTemplate(
          edge,
          selectedPlaybook.type,
          qsPlaybookHolder,
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
          skillBtnTemplate(skill, qsPlaybookHolder, selectedPlaybook.type);
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
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-edge`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        edgeButtonFunction(btn2, selectedPlaybook.type, qsPlaybookHolder);
      });
    });

    //Add clickability to skill plus buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-inc-btn`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        plusBtnFunction(
          btn2,
          selectedPlaybook.type,
          qsPlaybookHolder,
          skillPointMax
        );
      });
    });

    //Add clickability to skill minus buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-dec-btn`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        minusBtnFunction(btn2, selectedPlaybook.type, qsPlaybookHolder);
      });
    });

    //Add clickability to aspect buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-aspect`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        aspectButtonFunction(btn2, selectedPlaybook, qsPlaybookHolder);
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
    SKILLSARR.forEach((skill) => updateSkillCounters(skill, qsPlaybookHolder));
    updateDisplay(DISPLAY_OBJECT, qsPlaybookHolder, SKILLSARR);
    updateFullCharacter(qsPlaybookHolder, qsFullCharacter);
    console.log("Here's the condensed character sheet:");
    console.log(qsFullCharacter);
  });
});
