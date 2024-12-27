const isEdgeSelectedElsewhere = (holder, check) => {
  for (let pb in holder) {
    if (holder[pb].edge == check) {
      return true;
    }
  }
  return false;
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getTotalPointsInSkill = (skill, holder) => {
  let totalPoints = 0;
  for (let pb in holder) {
    if (holder[pb].skills.hasOwnProperty(skill)) {
      totalPoints += holder[pb].skills[skill];
    }
  }
  return totalPoints;
};

export const playbookBtnTemplate = (name, type, blurb) => {
  return `<div id='${name}' class='${type}-choice-btn playbook-choice-btn'>
        <h2 class='text-center'>
        ${name}
        </h2>
        <p class='text-center'>
        ${blurb}
        </p></div>`;
};

export const edgeBtnTemplate = (edge, pb, sheet, db) => {
  return `<div id='${pb}-edge-${edge}' class='${pb}-edge ${edge}-btn edges ${
    isEdgeSelectedElsewhere(sheet, edge) ? "locked-edge" : ""
  }'>
      <h3>${edge}</h3>
      <p>${capitalize(
        db.find((entry) => entry.name == edge).tagline.slice(11)
      )}</p>
      </div>`;
};

export const skillBtnTemplate = (skill, holder, pb) => {
  return `<div id='${skill}-skill-counter-${pb}' class=' skill-counter'>
      <div class="skill-name">${skill}</div>
      <div class="skill-val-dec-btn">-</div>
      <div class="${skill}-value skill-value" id='${skill}-points-${pb}'>${getTotalPointsInSkill(
    skill,
    holder
  )}</div>
      <div class="skill-val-inc-btn">+</div>
      <div class="skill-pips"></div>
      </div>`;
};

export const aspectBtnTemplate = (aspect, type) => {
  return `<div class='${type}-aspect'>
          <h3>${aspect["name"]}</h3>
          <p>${aspect["length"]} Track ${aspect["type"]}</p>
          <p>${aspect["description"]}</p>
          </div>`;
};
