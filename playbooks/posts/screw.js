export const screwPlaybook = {
  name: "Screw",
  type: "Post",
  blurb:
    "Masters of magnetism, screws merge themselves with scrap and salvage to increase their control of the world's detritus.",
  edgesQS: ["Iron", "Grace", "Teeth"],
  skillsQS: [
    "Brace",
    "Break",
    "Flourish",
    "Rattle",
    "Scavenge",
    "Sense",
    "Vault",
  ],
  languagesQS: ["Brasstongue"],
  resourcesQS: {
    salvage: ["Bundle of Rivets", "Iron Ore"],
    specimens: ["Rust-Beetle Chitin"],
    whispers: ["Unknown Forces", "The Floating Fortress"],
    charts: ["An Iron Scroll", "A Curious Compass"],
  },
  drivesQS: [
    "Discover a source of pure metal",
    "Reclaim and refurbish a pre-verdant ironclad",
  ],
  miresQS: [
    "Your metals rust and corrode",
    "Magnetic forces in your surroundings are unpredictable",
  ],
  aspects: [
    {
      name: "Ferrokinesis",
      type: "Trait",
      length: 3,
      description: "Mark to control or reshape exposed metal.",
    },
    {
      name: "Heart of Ore",
      type: "Trait",
      length: 2,
      description:
        "Choose a single type of metal (such as iron as copper). Increase impact when repairing, crafting, or using arconautics with your metal of choice.",
    },
    {
      name: "Ironsight",
      type: "Trait",
      length: 3,
      description:
        "You can sense nearby metals, see magnetic fields, and always know the direction of true north.",
    },
    {
      name: "Smart Repulsion",
      type: "Trait",
      length: 2,
      description:
        "Treat conflicts as triumphs when dodging or blocking attacks from constructs or metal weapons.",
    },
    {
      name: "Magnetic Levitation",
      type: "Trait",
      length: 3,
      description:
        "You can manipulate your own magnetic field, allowing you to fly for short periods when close to dense masses of metal (such as a ship's hull or kinetic anchor).",
    },
    {
      name: "Reactive Riveter",
      type: "Trait",
      length: 3,
      description:
        "Deal Spike damage to any creature that attacks you with their own body in close quarters (such as with tail or bite attacks).",
    },
    {
      name: "Field Charge",
      type: "Trait",
      length: 3,
      description:
        "Once per scene, give any piece of salvage you acquire the Magnetic tag.",
    },
    {
      name: "Pre-V Ingot",
      type: "Gear",
      length: 4,
      description:
        "Worn as a simple decoration, but holds incredible magnetic potential. Burn to briefly move a massive amount of metal, up to the size of a ship.",
    },
    {
      name: "Deconstructor",
      type: "Gear",
      length: 3,
      description:
        "Ignore cut when attempting to damage, break, or deconstruct a machine or mechanism made of metal.",
    },
    {
      name: "Iron-Ring Jacket",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, spike, Serrated, Toxin, Volt.",
    },
    {
      name: "Chaff Pouch",
      type: "Gear",
      length: 4,
      description:
        "Mark to produce a cloud of metal fragments, obscuring vision around you.",
    },
    {
      name: "Kinetic Anchor",
      type: "Gear",
      length: 3,
      description:
        "A large mass of metal shaped to make it easy to carry, often used to enable ferrokinesis in places otherwise empty of metal. Deals CQ Blunt damage.",
    },
    {
      name: "Rivet Swarm",
      type: "Companion",
      length: 3,
      description:
        "A cloud of floating debris you can direct with a flick of the wrist. Deals LR Spike or Keen damage.",
    },
  ],
};
