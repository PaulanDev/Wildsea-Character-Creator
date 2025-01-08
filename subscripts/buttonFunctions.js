import { updateDisplay, DISPLAY_OBJECT } from "./getElements.js";
import { getTotalPointsInSkill } from "./htmlTemplates.js";
import { SKILLSARR } from "../playbooks/skills.js";
import { skillPointMax } from "../script.js";
import { qsFullCharacter } from "./characterSheets.js";

export const createEdgeHolder = (sheet) => {
  return [sheet["Bloodline"].edge, sheet["Origin"].edge, sheet["Post"].edge];
};

//Unselect a button of the same class as the clicked button
export const deselectUnusedButton = (arr, cl, target) => {
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

const toggleLockedEdges = (target, pbHolder) => {
  let edgeHolder = createEdgeHolder(pbHolder);
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

export const updateSkillCounters = (skill, pbHolder) => {
  [...document.getElementsByClassName(`${skill}-value`)].forEach((counter) => {
    counter.innerHTML = getTotalPointsInSkill(skill, pbHolder);
  });
};

export const edgeButtonFunction = (target, type, pbHolder) => {
  //Set edge on the character sheet
  pbHolder[type].edge = target.id.split("-")[2];
  //Toggle selection class on clicked button
  target.classList.toggle("selected-edge");
  //Removes edge from qsPlaybookHolder is edge button is deselected
  if (!target.classList.contains("selected-edge")) {
    pbHolder[type].edge = "";
  }
  deselectUnusedButton(
    [...document.getElementsByClassName(`${type}-edge`)],
    "selected-edge",
    target
  );
  toggleLockedEdges(target, pbHolder);
  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};

export const plusBtnFunction = (target, type, pbHolder) => {
  const skill = target.parentElement.id.split("-")[0];

  let totalPointsInSkill = getTotalPointsInSkill(skill, pbHolder);

  let pointsRemainingForPlaybook =
    skillPointMax -
    Object.values(pbHolder[type].skills).reduce(
      (acc, currVal) => acc + currVal,
      0
    );

  if (pointsRemainingForPlaybook > 0) {
    if (totalPointsInSkill < 3) {
      if (pbHolder[type].skills.hasOwnProperty(skill)) {
        pbHolder[type].skills[skill]++;
      } else {
        pbHolder[type].skills[skill] = 1;
      }

      target.parentElement.lastElementChild.innerHTML += " * ";

      updateSkillCounters(skill, pbHolder);
    }
  }
  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};

export const minusBtnFunction = (target, type, pbHolder) => {
  const skill = target.parentElement.id.split("-")[0];

  if (pbHolder[type].skills.hasOwnProperty(skill)) {
    if (pbHolder[type].skills[skill] > 1) {
      pbHolder[type].skills[skill]--;
    } else {
      delete pbHolder[type].skills[skill];
    }

    target.parentElement.lastElementChild.innerHTML =
      target.parentElement.lastElementChild.innerHTML.slice(0, -3);

    updateSkillCounters(skill, pbHolder);
  }
  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};

//Aspect Functionality
export const aspectButtonFunction = (target, pb, pbHolder) => {
  //Get the name of the clicked aspect button
  let aspectName = target.firstElementChild.innerHTML;
  //Get the full object of the aspect
  let chosenAspect = pb.aspects.find(
    (el) => el.name == target.firstElementChild.innerHTML
  );
  //If the aspects for the pb don't have an object with the name of the clicked button
  if (
    pbHolder[pb["type"]].aspects.filter((item) => item["name"] == aspectName)
      .length == 0
  ) {
    pbHolder[pb["type"]].aspects.push(chosenAspect);
  } else {
    let targetIndex = pbHolder[pb["type"]].aspects
      .map((aspect) => aspect.name)
      .indexOf(aspectName);
    pbHolder[pb["type"]].aspects.splice(targetIndex, 1);
  }

  //Remove the first in the aspect array if a third is added
  if (pbHolder[pb["type"]].aspects.length > 2) {
    pbHolder[pb["type"]].aspects.shift();
  }

  //Create array of aspect names in pbHolder for playbook
  let selectedAspectNames = pbHolder[pb["type"]].aspects.map(
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
  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};

//Resource Functionality
export const resourceButtonFunction = (target, pb, pbHolder) => {
  let resourceType = target.firstElementChild.innerHTML;
  let resourceName = target.lastElementChild.innerHTML;

  //Check if resource is in pb, if so remove from array
  let resourceArray = pbHolder[pb].resources.map((thing) => thing["name"]);
  if (resourceArray.indexOf(resourceName) > -1) {
    pbHolder[pb].resources.splice(resourceArray.indexOf(resourceName), 1);
  } else {
    pbHolder[pb].resources.push({
      name: resourceName,
      type: resourceType,
    });
  }

  //Remove the 0th index resource if a third one tries to be selected
  if (pbHolder[pb].resources.length > 2) {
    pbHolder[pb].resources.shift();
  }

  resourceArray = pbHolder[pb].resources.map((thing) => thing["name"]);

  //Gives elements .selected-resource or removes it
  [...document.getElementsByClassName(`${pb}-resource`)].forEach((el) => {
    if (resourceArray.includes(el.lastElementChild.innerHTML)) {
      el.classList.add("selected-resource");
    } else {
      el.classList.remove("selected-resource");
    }
  });

  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};

export const driveButtonFunction = (target, pb, pbHolder) => {
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
    pbHolder[pb].drive = targetDrive;
  } else {
    pbHolder[pb].drive = "";
  }

  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};

export const mireButtonFunction = (target, pb, pbHolder) => {
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
    pbHolder[pb].mire = targetMire;
  } else {
    pbHolder[pb].mire = "";
  }

  updateDisplay(DISPLAY_OBJECT, pbHolder, SKILLSARR);
};
