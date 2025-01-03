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
const BLOODLINE_RESOURCE_BTNS = document.getElementById(
  "Bloodline-resource-btns"
);
const BLOODLINE_DRIVE_BTNS = document.getElementById("Bloodline-drive-btns");
const BLOODLINE_MIRE_BTNS = document.getElementById("Bloodline-mire-btns");
const BLOODLINE_OPTION_DIVS = [
  BLOODLINE_EDGE_BTNS,
  BLOODLINE_ASPECT_BTNS,
  BLOODLINE_SKILL_BTNS,
  BLOODLINE_RESOURCE_BTNS,
  BLOODLINE_DRIVE_BTNS,
  BLOODLINE_MIRE_BTNS,
];

const ORIGIN_OPTIONS = document.getElementById("Origin-options");
const ORIGIN_EDGE_BTNS = document.getElementById("Origin-edge-btns");
const ORIGIN_ASPECT_BTNS = document.getElementById("Origin-aspect-btns");
const ORIGIN_SKILL_BTNS = document.getElementById("Origin-skill-btns");
const ORIGIN_RESOURCE_BTNS = document.getElementById("Origin-resource-btns");
const ORIGIN_DRIVE_BTNS = document.getElementById("Origin-drive-btns");
const ORIGIN_MIRE_BTNS = document.getElementById("Origin-mire-btns");
const ORIGIN_OPTION_DIVS = [
  ORIGIN_EDGE_BTNS,
  ORIGIN_ASPECT_BTNS,
  ORIGIN_SKILL_BTNS,
  ORIGIN_RESOURCE_BTNS,
  ORIGIN_DRIVE_BTNS,
  ORIGIN_MIRE_BTNS,
];

const POST_OPTIONS = document.getElementById("Post-options");
const POST_EDGE_BTNS = document.getElementById("Post-edge-btns");
const POST_ASPECT_BTNS = document.getElementById("Post-aspect-btns");
const POST_SKILL_BTNS = document.getElementById("Post-skill-btns");
const POST_RESOURCE_BTNS = document.getElementById("Post-resource-btns");
const POST_DRIVE_BTNS = document.getElementById("Post-drive-btns");
const POST_MIRE_BTNS = document.getElementById("Post-mire-btns");
const POST_OPTION_DIVS = [
  POST_EDGE_BTNS,
  POST_ASPECT_BTNS,
  POST_SKILL_BTNS,
  POST_RESOURCE_BTNS,
  POST_DRIVE_BTNS,
  POST_MIRE_BTNS,
];

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
const BLOODLINE_DISPLAY_SKILLS = document.getElementById(
  "Bloodline-display-skills"
);
const BLOODLINE_DISPLAY_ASPECTS = document.getElementById(
  "Bloodline-display-aspects"
);
const BLOODLINE_DISPLAY_RESOURCES = document.getElementById(
  "Bloodline-display-resources"
);
const BLOODLINE_DISPLAY_DRIVE = document.getElementById(
  "Bloodline-display-drive"
);
const BLOODLINE_DISPLAY_MIRE = document.getElementById(
  "Bloodline-display-mire"
);

const ORIGIN_DISPLAY_NAME = document.getElementById("Origin-display-name");
const ORIGIN_DISPLAY_EDGE = document.getElementById("Origin-display-edge");
const ORIGIN_DISPLAY_SKILLS = document.getElementById("Origin-display-skills");
const ORIGIN_DISPLAY_ASPECTS = document.getElementById(
  "Origin-display-aspects"
);
const ORIGIN_DISPLAY_RESOURCES = document.getElementById(
  "Origin-display-resources"
);
const ORIGIN_DISPLAY_DRIVE = document.getElementById("Origin-display-drive");
const ORIGIN_DISPLAY_MIRE = document.getElementById("Origin-display-mire");

const POST_DISPLAY_NAME = document.getElementById("Post-display-name");
const POST_DISPLAY_EDGE = document.getElementById("Post-display-edge");
const POST_DISPLAY_SKILLS = document.getElementById("Post-display-skills");
const POST_DISPLAY_ASPECTS = document.getElementById("Post-display-aspects");
const POST_DISPLAY_RESOURCES = document.getElementById(
  "Post-display-resources"
);
const POST_DISPLAY_DRIVE = document.getElementById("Post-display-drive");
const POST_DISPLAY_MIRE = document.getElementById("Post-display-mire");

export const DISPLAY_OBJECT = {
  Bloodline: {
    name: BLOODLINE_DISPLAY_NAME,
    edge: BLOODLINE_DISPLAY_EDGE,
    skills: BLOODLINE_DISPLAY_SKILLS,
    aspects: BLOODLINE_DISPLAY_ASPECTS,
    resources: BLOODLINE_DISPLAY_RESOURCES,
    drive: BLOODLINE_DISPLAY_DRIVE,
    mire: BLOODLINE_DISPLAY_MIRE,
  },
  Origin: {
    name: ORIGIN_DISPLAY_NAME,
    edge: ORIGIN_DISPLAY_EDGE,
    skills: ORIGIN_DISPLAY_SKILLS,
    aspects: ORIGIN_DISPLAY_ASPECTS,
    resources: ORIGIN_DISPLAY_RESOURCES,
    drive: ORIGIN_DISPLAY_DRIVE,
    mire: ORIGIN_DISPLAY_MIRE,
  },
  Post: {
    name: POST_DISPLAY_NAME,
    edge: POST_DISPLAY_EDGE,
    skills: POST_DISPLAY_SKILLS,
    aspects: POST_DISPLAY_ASPECTS,
    resources: POST_DISPLAY_RESOURCES,
    drive: POST_DISPLAY_DRIVE,
    mire: POST_DISPLAY_MIRE,
  },
};

export const updateDisplay = (displayObj, sheet, skillsArr) => {
  for (let pb in displayObj) {
    displayObj[pb].name.innerHTML = sheet[pb].name;
    displayObj[pb].edge.innerHTML = sheet[pb].edge;

    let skillsText = "";
    skillsArr.forEach((skill) => {
      if (sheet[pb].skills.hasOwnProperty(skill)) {
        skillsText += `<br>${skill}: ${sheet[pb].skills[skill]}`;
      }
    });
    displayObj[pb].skills.innerHTML = skillsText;

    let aspectText = "";
    sheet[pb].aspects.forEach((aspect) => {
      aspectText += `<br>${aspect.name}`;
    });
    displayObj[pb].aspects.innerHTML = aspectText;

    let resourceText = "";
    sheet[pb].resources.forEach((resource) => {
      resourceText += `<br>${resource.name} (${resource.type})`;
    });
    displayObj[pb].resources.innerHTML = resourceText;
  }
};
