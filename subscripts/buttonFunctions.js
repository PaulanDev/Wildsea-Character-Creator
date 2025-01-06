import { updateDisplay, DISPLAY_OBJECT } from "./getElements.js";
import { getTotalPointsInSkill } from "./htmlTemplates.js";

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

/*
export const updateSkillCounters = (skill) => {
  [...document.getElementsByClassName(`${skill}-value`)].forEach((counter) => {
    counter.innerHTML = getTotalPointsInSkill(skill, pbHolder);
  });
};

export const plusBtnFunction = (target, type) => {
  const skill = target.parentElement.id.split("-")[0];

  let totalPointsInSkill = getTotalPointsInSkill(skill, qsPlaybookHolder);

  let pointsRemainingForPlaybook =
    skillPointMax -
    Object.values(qsPlaybookHolder[type].skills).reduce(
      (acc, currVal) => acc + currVal,
      0
    );

  if (pointsRemainingForPlaybook > 0) {
    if (totalPointsInSkill < 3) {
      if (qsPlaybookHolder[type].skills.hasOwnProperty(skill)) {
        qsPlaybookHolder[type].skills[skill]++;
      } else {
        qsPlaybookHolder[type].skills[skill] = 1;
      }

      target.parentElement.lastElementChild.innerHTML += " * ";

      updateSkillCounters(skill);
    }
  }
  updateDisplay(DISPLAY_OBJECT, qsPlaybookHolder, SKILLSARR);
};
*/
