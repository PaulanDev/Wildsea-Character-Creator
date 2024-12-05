export const rattlehandPlaybook = {
  name: "Rattlehand",
  type: "Post",
  blurb:
    "Wilds engineers with a passion for salvage. The average rattlehand is at their best when repairing ships or crafting new, unusual gear.",
  edgesQS: ["Iron", "Sharps", "Tides"],
  skillsQS: [
    "Brace",
    "Break",
    "Concoct",
    "Delve",
    "Rattle",
    "Scavenge",
    "Tend",
  ],
  languagesQS: ["Brasstongue", "Highvin"],
  resourcesQS: {
    salvage: ["Ancient Writing", "Ceramic Battery"],
    specimens: ["Crushed Beetle", "Giant Insect Mandible"],
    whispers: ["Locomotive Power"],
    charts: ["An Indecipherable Blueprint"],
  },
  drivesQS: [
    "Repurpose a pre-Verdant machine",
    "Craft a weapon that can take down a leviathan",
  ],
  miresQS: [
    "The monomania of scavenging takes you",
    "Machines jump and backfire in your presence",
  ],
  aspects: [
    {
      name: "Mastercraft",
      type: "Trait",
      length: 2,
      description:
        "Choose wood, metal, or bone. Increase impact whe crafting repairing with your chosen material.",
    },
    {
      name: "Made to Last",
      type: "Trait",
      length: 3,
      description:
        "When you craft, the resulting creation's track is three boxes longer than usual.",
    },
    {
      name: "Multitasker",
      type: "Trait",
      length: 3,
      description:
        "You can use a task to work on repairing up to three pieces of gear or mechanical companions at a time.",
    },
    {
      name: "Surefire Smith",
      type: "Trait",
      length: 3,
      description:
        "Count conflicts as triumphs when repairing gear and mechanical companions.",
    },
    {
      name: "Deckside Engineer",
      type: "Trait",
      length: 3,
      description:
        "Tiny, incremental adjustments that you make without thinking keep your vessel's hull and superstructure in remarkable shape. Increase your ship's Armour rating by one when you're aboard.",
    },
    {
      name: "Breakdown Specialist",
      type: "Gear",
      length: 3,
      description:
        "When a crafted benefit's track is fully marked, gain a piece of salvage related to it before removing the benefit.",
    },
    {
      name: "Inkstamp Mechanism",
      type: "Gear",
      length: 2,
      description:
        "Consume a chart to quickly create a set of schematics for a machine or mechanism you can see (represented by a new chart). All actions to create such a machine yourself gain increased impact while you have this new chart.",
    },
    {
      name: "Toolbelt",
      type: "Gear",
      length: 2,
      description:
        "Once per scene, swiftly craft a one-track creation without needing to roll.",
    },
    {
      name: "Salvage Kit",
      type: "Gear",
      length: 3,
      description:
        "Contains salvage useful for crafting. Mark to use the contents in place of a resource when crafting.",
    },
    {
      name: "Multi-Lens Goggles",
      type: "Gear",
      length: 3,
      description:
        "You gain ferrosight, the ability to see electric and magnetic fields.",
    },
    {
      name: "Wolf-Skin Gloves",
      type: "Gear",
      length: 4,
      description:
        "You never cut for difficulty when including specimens in your crafting, no matter how grisly or unpalatable the process is.",
    },
    {
      name: "Volt-Rail",
      type: "Gear",
      length: 2,
      description:
        "An insulate grip around a crackling, rudimentary cattleprod. Deals CQ Volt damage, and you're immune to Volt damage yourself.",
    },
    {
      name: "Vortex Box",
      type: "Gear",
      length: 4,
      description:
        "A concertina-like weapon that compresses and fires air. Deals LR Blast damage.",
    },
    {
      name: "Hazard Suit",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Spike, Acid, Blast, Volt, Flame.",
    },
    {
      name: "Artillery Spider",
      type: "Companion",
      length: 3,
      description:
        "A self-made automaton designed to offer fire support. Deals LR Blast damage.",
    },
    {
      name: "Autocrawler",
      type: "Companion",
      length: 2,
      description:
        "A nimble little scavenging construct. Once per scene, add a positive tag of your choice onto any piece of salvage you acquire.",
    },
  ],
};
