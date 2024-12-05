export const surgeonPlaybook = {
  name: "Surgeon",
  type: "Post",
  blurb:
    "Surgeons combine the skills of portside doctors, combat medics, and psychologists into a single field.",
  edgesQS: ["Iron", "Sharps", "Tides"],
  skillsQS: ["Concoct", "Hack", "Harvest", "Rattle", "Study", "Sway", "Tend"],
  languagesQS: ["Chthonic", "Gaudimm", "Saprekk", "Knock"],
  resourcesQS: {
    salvage: ["Pristine Bandages", "Iron Leg-Brace"],
    specimens: ["Medicinal Herbs", "Rubbing Alcohol"],
    whispers: ["How Bones Mend", "A Scar That Never Fades"],
    charts: ["Directions To a Surgery"],
  },
  drivesQS: [
    "Divine the cure for a previously incurable ailment",
    "Have a porcedure named after you",
  ],
  miresQS: [
    "Your hands shake under pressure",
    "Alcohol calls to you in your darker moments",
  ],
  aspects: [
    {
      name: "First Aid",
      type: "Trait",
      length: 3,
      description:
        "When a nearby ally takes damage, hijack focus to immediately heal one point of that damage (once per scene).",
    },
    {
      name: "Evolving Techniques",
      type: "Trait",
      length: 3,
      description:
        "Increase impact when healing others in a safe, stable environment.",
    },
    {
      name: "The Limits of the Crew",
      type: "Trait",
      length: 4,
      description:
        "Mark to allow a crew-mate to benefit from a fully-marked trait or companion for the duration of a scene.",
    },
    {
      name: "Biological Maestro",
      type: "Trait",
      length: 3,
      description:
        "Choose a bloodline. When healing a member of that bloodline, treat conflict results as triumphs.",
    },
    {
      name: "In the Absence of Journals",
      type: "Trait",
      length: 3,
      description:
        "You receive a whisper whenever a crewmate fully heals from an injury.",
    },
    {
      name: "Wilds Theoretician",
      type: "Trait",
      length: 4,
      description:
        "Consume a whisper to discern the properties of a mysterious illness or injury.",
    },
    {
      name: "Vigilance",
      type: "Trait",
      length: 2,
      description:
        "You scrub, clean, and de-spore surfaces with regularity. Whenever you or one of your crew takes an injury, reduce the injury track by one box.",
    },
    {
      name: "Ceaseless Tending",
      type: "Trait",
      length: 3,
      description:
        "You can use a task to work on healing up to three traits, injuries, or companions at a time.",
    },
    {
      name: "Leviathan-Blood Infusion",
      type: "Gear",
      length: 3,
      description:
        "Hard to get hold of, but terrifying potent. Burn to hive you or a crewmate resistance to all damage for the duration of a scene or increased impact on all attacks for the duration of a scene.",
    },
    {
      name: "Herbal Sealing-Wax",
      type: "Gear",
      length: 3,
      description:
        "An odd-smelling unguent for spreading on a vessel's doorways, dispensed liberally as a matter of course. Increase your ship's Seal rating by one when you're aboard.",
    },
    {
      name: "Spice-Nosed Mask",
      type: "Gear",
      length: 2,
      description:
        "You're immune to disease, and resist the effects of bad air and airborne spores.",
    },
    {
      name: "Doctor's Trusty Satchel",
      type: "Gear",
      length: 2,
      description:
        "Mark to acquire one of three resources, Hungry Leeches, Soporific Draught or Medicinal Herbs.",
    },
    {
      name: "Surgical Spectacles",
      type: "Gear",
      length: 3,
      description:
        "Mark to identify one of a target's weak points or weaknesses.",
    },
    {
      name: "Bonesaw",
      type: "Gear",
      length: 4,
      description:
        "Works just as well on foes as it does patients. Deals CQ Serrated damage.",
    },
    {
      name: "Whisperspit Leech",
      type: "Companion",
      length: 2,
      description:
        "Mark mire to drain the falsehood out of a statement, hearing the truth behind it. You gain a whisper based on the excised lies.",
    },
  ],
};
