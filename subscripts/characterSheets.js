export let qsPlaybookHolder = {
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

export let qsFullCharacter = {
  Bloodline: "",
  Origin: "",
  Post: "",
  edges: [],
  skills: {},
  aspects: [],
  resources: [],
  drives: [],
  mires: [],
};

//Reset all choices in the qsPlaybookHolder to blanks
export const resetCharacterPlaybook = (item) => {
  item["name"] = "";
  item["edge"] = "";
  item["skills"] = {};
  item["resources"] = [];
  item["drive"] = "";
  item["mire"] = "";
  item["aspects"] = [];
};

const resetFullCharacter = (fullHolder) => {
  fullHolder["Bloodline"] = "";
  fullHolder["Origin"] = "";
  fullHolder["Post"] = "";
  fullHolder["edges"] = [];
  fullHolder["skills"] = {};
  fullHolder["aspects"] = [];
  fullHolder["resources"] = [];
  fullHolder["drives"] = [];
  fullHolder["mires"] = [];
};

export const updateFullCharacter = (pbHolder, fullHolder) => {
  resetFullCharacter(fullHolder);
  for (let pb in pbHolder) {
    fullHolder[pb] = pbHolder[pb].name;
    fullHolder["edges"].push(pbHolder[pb].edge);
    for (let skill in pbHolder[pb]["skills"]) {
      if (fullHolder["skills"].hasOwnProperty(skill)) {
        fullHolder["skills"][skill] += pbHolder[pb]["skills"][skill];
      } else {
        fullHolder["skills"][skill] = pbHolder[pb]["skills"][skill];
      }
    }
    fullHolder["aspects"].push(...pbHolder[pb]["aspects"]);
    fullHolder["resources"].push(...pbHolder[pb]["resources"]);
    fullHolder["drives"].push(pbHolder[pb].drive);
    fullHolder["mires"].push(pbHolder[pb].mire);
  }
};
