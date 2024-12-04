export const horizoneerPlaybook = {
  name: "Horizoneer",
  type: "Post",
  blurb:
    "Blending the disciplines of explorer and scholar, horizoneers are silver-tongued travellers able to charm hearts and waves alike.",
  edgesQS: ["Sharps", "Tides", "Veils"],
  skillsQS: ["Flourish", "Harvest", "Outwit", "Sense", "Study", "Sway", "Tend"],
  languagesQS: ["Lyrebite", "Brasstongue", "Highvin"],
  resourcesQS: {
    salvage: ["Drinking Horn"],
    specimens: ["Bark Wine"],
    whispers: ["New Horizons", "Over the Ridge"],
    charts: ["A Hasty Sketch"],
  },
  drivesQS: [
    "Discover a hidden culture or enclave",
    "Force a relationship between disparate peoples",
  ],
  miresQS: [
    "You stumble over your words at the worst of times",
    "You slip in and out of the various languages you know",
  ],
  aspects: [
    {
      name: "First Impressions",
      type: "Trait",
      length: 2,
      description:
        "Increase impact when communicating with an individual for the first time.",
    },
    {
      name: "Silver Tongue",
      type: "Trait",
      length: 4,
      description:
        "When communicating with a friendly individual in their natural language, treat conflict results as triumphs.",
    },
    {
      name: "Hyperadaptive",
      type: "Trait",
      length: 4,
      description:
        "Mark to learn a smattering of any language you hear and have no ranks in. This knowledge remains until you choose to mark and replace in with a new language.",
    },
    {
      name: "Wealth of Knowledge",
      type: "Trait",
      length: 3,
      description:
        "Mark to learn a secret of the sea related to one of your whispers (the whisper isn't consumed).",
    },
    {
      name: "Nothing Stays Buried",
      type: "Trait",
      length: 4,
      description:
        "Mark to identify a hidden or forgotten space in your vicinity by gut feeling alone.",
    },
    {
      name: "Open Hands, Open Heart",
      type: "Trait",
      length: 3,
      description:
        "Whenever you or your crew successfully defuse a situation that was heading toward a fight, clear a mark of mire.",
    },
    {
      name: "Exports Tell Stories",
      type: "Trait",
      length: 3,
      description:
        "Whenever you crew gains a piece of cargo, gain a whisper related to that cargo for yourself.",
    },
    {
      name: "Watch and Learn",
      type: "Trait",
      length: 3,
      description:
        "Use a task to tag along with one of your crewmates, gaining a temporary rank in any skill they display. This rank lasts until you next use Watch and Learn.",
    },
    {
      name: "Bait Bandoleer",
      type: "Gear",
      length: 4,
      description:
        "Intoxicating to certain species. Treat conflicts as triumphs when trying to distract, divert, or drive off a wildsea creature.",
    },
    {
      name: "Spike Wine",
      type: "Gear",
      length: 2,
      description:
        "An ektus delicacy that sharpens the palette. Whenever you or a crewmate gains a benefit from a meal or beverage, increase the track for the benefit by one box.",
    },
    {
      name: "Tuning Fork",
      type: "Gear",
      length: 4,
      description:
        "Once per scene increase impact when engaged in a performance of some kind.",
    },
    {
      name: "Padded Gauntlet",
      type: "Gear",
      length: 2,
      description:
        "Used to help train the wild creatures of the sea. You're resistant to bite attacks, no matter the damage type.",
    },
    {
      name: "Sheaf of a Hundred Stories",
      type: "Gear",
      length: 3,
      description:
        "Gain a whisper whenever you encounter a spectacle, horror, or new port during a journey.",
    },
    {
      name: "Bundled Correspondence",
      type: "Gear",
      length: 3,
      description:
        "When you enter a new port, mark to find a friendly contact you've exchanged letter with in the past.",
    },
    {
      name: "Sturdy Instrument",
      type: "Gear",
      length: 4,
      description:
        "Anything from a guitar to maracas, a hip drm to an accordian, a sitar or an ocarina. Can be played, but also acts as a CQ Blunt weapon in a pinch.",
    },
  ],
};
