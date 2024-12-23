//HTML Declarations
const BLOODLINE_CHOICE = document.getElementById("Bloodline-choice");
const ORIGIN_CHOICE = document.getElementById("Origin-choice");
const POST_CHOICE = document.getElementById("Post-choice");

export const CHOICE_OBJECT = {
  Bloodline: BLOODLINE_CHOICE,
  Origin: ORIGIN_CHOICE,
  Post: POST_CHOICE,
};

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

export const OPTIONS_OBJECT = {
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

export const DISPLAY_OBJECT = {
  Bloodline: { name: BLOODLINE_DISPLAY_NAME, edge: BLOODLINE_DISPLAY_EDGE },
  Origin: { name: ORIGIN_DISPLAY_NAME, edge: ORIGIN_DISPLAY_EDGE },
  Post: { name: POST_DISPLAY_NAME, edge: POST_DISPLAY_EDGE },
};

export const updateDisplay = (displayObj, sheet) => {
  for (let pb in displayObj) {
    for (let key in displayObj[pb]) {
      displayObj[pb][key].innerHTML = sheet[pb][key];
    }
  }
};
