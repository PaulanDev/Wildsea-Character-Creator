export const charPlaybook = {
  name: "Char",
  type: "Post",
  blurb:
    "Culinary masterminds who use meats and spices to imbue their dishes with lasting positive effects.",
  edgesQS: ["Instinct", "Teeth", "Tides"],
  skillsQS: ["Concoct", "Cook", "Flourish", "Harvest", "Hunt", "Sway", "Tend"],
  languagesQS: ["Brasstongue", "Raka Spit"],
  resourcesQS: {
    salvage: ["Boiling Casks", "Heating Element"],
    specimens: ["Medicinal Herbs", "Distant Sea-Spices"],
    whispers: ["That Delicate Taste", "Forbidden Food"],
    charts: ["An Annotated Cookbook", "A Spice-Stained Map"],
  },
  drivesQS: [
    "Prepare a banquet for the worthy",
    "Harvest a truly unique ingredient",
  ],
  miresQS: [
    "Fruits you collect rot and sour in their jars",
    "Your sense of taste becomes unworthy",
  ],
  aspects: [
    {
      name: "Only the Best",
      type: "Trait",
      length: 2,
      description: "Mark when gathering a specimen to give it the 'Pure' tag.",
    },
    {
      name: "Ingredient Scrounger",
      type: "Trait",
      length: 3,
      description:
        "When one of your crewmates acquires a potentially delicious specimen, gain a copy of that specimen for yourself (once per scene).",
    },
    {
      name: "Golden Nose",
      type: "Trait",
      length: 4,
      description:
        "Mark to identify a rare ingredient in your vicinity by scent alone.",
    },
    {
      name: "Bountiful Discovery",
      type: "Trait",
      length: 3,
      description:
        "Whenever you discover a new location, choose a single specimen type to be easily found there.",
    },
    {
      name: "Deep in the Barrel",
      type: "Trait",
      length: 3,
      description:
        "Increase impact when cooking with rotten or otherwise tainted ingredients. Meals made with these ingredients won't sicken your crew.",
    },
    {
      name: "Enough for Everybody",
      type: "Trait",
      length: 2,
      description:
        "Even a small meal can confer the benefits it offers as a one-track temporary aspect for the entire crew.",
    },
    {
      name: "Taste Test",
      type: "Trait",
      length: 4,
      description:
        "You're immunue to poisons, and can determine their presence and characteristics by taste alone.",
    },
    {
      name: "Flavour Engineer",
      type: "Trait",
      length: 3,
      description:
        "You can treat salvage as speciments whe creating meals. The results are still oddly edible.",
    },
    {
      name: "Acid-Etched Cookpot",
      type: "Gear",
      length: 5,
      description:
        "A hefty pot of near-unbreakable construction, used to prepare and store food or hide under in a tense situation.",
    },
    {
      name: "Mechanical Grinder",
      type: "Gear",
      length: 3,
      description:
        "Consume an additional specimen to create a lasting meal as an action (rather than the usual task).",
    },
    {
      name: "Spice Bandoleer",
      type: "Gear",
      length: 3,
      description:
        "A bandoleer containing your own secret blend of spices that never seems to run dry. Mark to create a rare resource, either Wilds Pepper, Hangman's Blend or Smouldergrit.",
    },
    {
      name: "Trademark Herbs",
      type: "Gear",
      length: 4,
      description:
        "The right seasoning can make anything taste good. Mark to treat conflict results as triumphs while cooking.",
    },
    {
      name: "Seasoned Cleaver",
      type: "Gear",
      length: 2,
      description:
        "As useful on the battlefield as it is in the galley. Deals CQ Hewing damage. Increase impact when acquiring dangerous or disruptive specimens.",
    },
    {
      name: "Reef-Iron Pan",
      type: "Gear",
      length: 4,
      description: "A colossal impliement. Deals CQ Blunt damage.",
    },
    {
      name: "Husk-Leather Apron",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Toxin, Acid, Blast, Salt, Flame.",
    },
    {
      name: "Sous Squirrel",
      type: "Companion",
      length: 2,
      description:
        "A red-furred undle of activity. Once per montage, gain a common insect specimen appropriate to the region (in addition to your usual task).",
    },
  ],
};
