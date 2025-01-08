import { updateDisplay, DISPLAY_OBJECT } from "./getElements.js";
import { getTotalPointsInSkill } from "./htmlTemplates.js";
import { SKILLSARR } from "../playbooks/skills.js";
import { skillPointMax } from "../script.js";

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
