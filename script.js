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
  resourceButtonFunction,
  driveButtonFunction,
  mireButtonFunction,
} from "./subscripts/buttonFunctions.js";

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
        resourceButtonFunction(btn2, selectedPlaybook.type, qsPlaybookHolder);
      });
    });

    //Add clickability to drive buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-drive`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        driveButtonFunction(btn2, selectedPlaybook.type, qsPlaybookHolder);
      });
    });

    //Add clickability to mire buttons
    [
      ...document.getElementsByClassName(`${selectedPlaybook.type}-mire`),
    ].forEach((btn2) => {
      btn2.addEventListener("click", () => {
        mireButtonFunction(btn2, selectedPlaybook.type, qsPlaybookHolder);
      });
    });

    //Update skill counters after changing playbooks, which resets and removes points
    SKILLSARR.forEach((skill) => updateSkillCounters(skill, qsPlaybookHolder));
    updateDisplay(DISPLAY_OBJECT, qsPlaybookHolder, SKILLSARR);
    updateFullCharacter(qsPlaybookHolder, qsFullCharacter);
  });
});
