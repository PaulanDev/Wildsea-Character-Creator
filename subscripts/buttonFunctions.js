import { updateDisplay, DISPLAY_OBJECT } from "./getElements.js";
import { getTotalPointsInSkill } from "./htmlTemplates.js";
import { SKILLSARR } from "../playbooks/skills.js";

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
