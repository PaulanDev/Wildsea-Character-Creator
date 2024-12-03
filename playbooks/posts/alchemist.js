export const alchemistPlaybook = {
  name: "Alchemist",
  type: "Post",
  blurb:
    "Manipulators of salt and chemicals, able to extract and transfer the very essence of specimens and salvage.",
  edgesQS: ["Grace", "Sharps", "Tides"],
  skillsQS: [
    "Brace",
    "Break",
    "Concoct",
    "Harvest",
    "Scavenge",
    "Study",
    "Tend",
  ],
  languagesQS: ["Highvin", "Brasstongue"],
  resourcesQS: {
    salvage: ["Pouch of Vials", "Rust Extract"],
    specimens: [
      "Dried Locusts",
      "Draketongue Root",
      "Beast Blood",
      "Poison Glands",
    ],
    whispers: ["A Stained Snapograph"],
    charts: ["A Tale of Choking Mists"],
  },
  drivesQS: [
    "Discover a previously unknown alchemical effect",
    "Gather bile from an ancient leviathan",
  ],
  miresQS: [
    "You're the perfect test subject for your own work",
    "Explosives are unstable around you",
  ],
  aspects: [
    {
      name: "Component Scrounger",
      type: "Trait",
      length: 3,
      description:
        "When one of your crewmates acquires an alchemically useful specimen, gain a copy of that specimen for yourself (once per scene).",
    },
    {
      name: "Alchemical Unearthing",
      type: "Trait",
      length: 3,
      description:
        "Whenever you discover a new location, choose a unique property (represented by a tag) to be easily found on specimens or salvage there.",
    },
    {
      name: "Ulcerous Alembic",
      type: "Trait",
      length: 4,
      description:
        "You can swallow two alchemical components, keeping them safely in your stomach. You can concoct them internally when you choose, benefitting immediately from the results or spitting the resulting solution out.",
    },
    {
      name: "The Old Ways",
      type: "Trait",
      length: 2,
      description:
        "Increase impact when concocting using only bone, organs, or insect parts as components.",
    },
    {
      name: "Pestle-Pound",
      type: "Trait",
      length: 3,
      description:
        "Use a task to grind a specimen into a powder, changing its form to a dust or salt and giving it the 'Pure' tag.",
    },
    {
      name: "Baseline",
      type: "Trait",
      length: 3,
      description:
        "Mark to briefly ignore any positive or negative effects stemming from a temporary benefit or injury. You are always immune to the negative effects of crezzerin.",
    },
    {
      name: "Heady Vapours",
      type: "Trait",
      length: 2,
      description:
        "Mark to ruminate on a question and receive a confusing, but accurate, answer. Burn instead to receive instant clarity from the answer.",
    },
    {
      name: "Chemicokinesis",
      type: "Trait",
      length: 3,
      description: "Mark to levitate and control impure liquids.",
    },
    {
      name: "Metabolize",
      type: "Trait",
      length: 2,
      description:
        "Consume a specimen to gain a brief burst of sensory information related to the specimen consumed (such as tremorsense by consuming a spider's web, for example).",
    },
    {
      name: "Catalyst Belt",
      type: "Gear",
      length: 3,
      description:
        "A heavy work-pack containing reagents and catalysts, tried and tested. Mark to use a chemical from the belt in place of a specimen when concocting.",
    },
    {
      name: "Explosive Vials",
      type: "Gear",
      length: 3,
      description:
        "Not an endless supply, but potent and disorienting. Mark to deal LR Blast, Salt, Acid, or Toxin damage to multiple nearby foes.",
    },
    {
      name: "Dilution Agent",
      type: "Gear",
      length: 2,
      description:
        "When you create a concoction, the entire crew can gain the benefit it offers as a one-track temporary aspect.",
    },
    {
      name: "Pressure-Sealed Linkage",
      type: "Gear",
      length: 2,
      description:
        "Treat conflicts as triumphs when using at least one liquid as a resource for a concoction.",
    },
    {
      name: "Accelerant Vial",
      type: "Gear",
      length: 3,
      description:
        "Once per journey you may create a concoction during a montage without using your usual task to do so (though you must still roll to create the concoction as usual).",
    },
    {
      name: "Living Liquid",
      type: "Companion",
      length: 2,
      description:
        "Winds its way around your form, studded with broken glass. Deals CQ Acid or Keen damage.",
    },
    {
      name: "Syringioquito",
      type: "Companion",
      length: 4,
      description:
        "A diminutive alchemical construct designed to hold and drain fluids without being detected.",
    },
  ],
};
