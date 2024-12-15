export const ketraPlaybook = {
  name: "Ketra",
  type: "Bloodline",
  blurb:
    "Humanity's less fortunate descendants, making their way up from hidden mines and buried buildings. The ketra are gelatinous, tech-savvy, and bio-electric.",
  edgesQS: ["Iron", "Sharps", "Veils"],
  skillsQS: [
    "Concoct",
    "Delve",
    "Outwit",
    "Scavenge",
    "Sense",
    "Sway",
    "Vault",
  ],
  languagesQS: ["Cthonic", "Raka Spit", "Signalling"],
  resourcesQS: {
    salvage: ["Ceremonial Dynamite", "Old Driftwood"],
    specimens: ["Luminescent Bone", "Curled Centipede"],
    whispers: ["The Comforting Dark", "All Tunnels End"],
    charts: ["A Faded Schematic"],
  },
  drivesQS: [
    "Raise a pre-verdant structure",
    "Hoard treasures of the wider waves",
  ],
  miresQS: [
    "Sparks and jolts course through your extremities",
    "Your inkblot patterns whirl dizzyingly",
  ],
  aspects: [
    {
      name: "Gelatinous Form",
      type: "Trait",
      length: 5,
      description:
        "You have an inherent weakness to Salt damage, but can squeeze and compress your body enough to move through spaces much smaller than expected.",
    },
    {
      name: "Sensory Stalks",
      type: "Trait",
      length: 4,
      description:
        "A rare mutation that hones your sight. You can see clearly without light.",
    },
    {
      name: "Crawling Pattern",
      type: "Trait",
      length: 4,
      description:
        "The glowing patches on your flesh crawl at your command, even onto others nearby. Mark this trait to create a dim but lasting light on you or a nearby target.",
    },
    {
      name: "Tunnel-Wise",
      type: "Trait",
      length: 3,
      description:
        "Treat conflicts as triumph when navigating or moving through enclosed areas.",
    },
    {
      name: "Whispers in the Dark",
      type: "Trait",
      length: 3,
      description:
        "While in a dimply lit or unlit area, mark to learn a secret from the darkness (once per scene).",
    },
    {
      name: "Scrapper Enzymes",
      type: "Trait",
      length: 3,
      description:
        "You can use salvage as a component when concocting a potion or chemical mixture, no matter its form.",
    },
    {
      name: "Voltaic Mantle",
      type: "Trait",
      length: 4,
      description:
        "The tendrils of your mantle crackle with lightning as they strike, dealing CQ Volt damage.",
    },
    {
      name: "Driftwood Core",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, Spike, Toxin, Frost, Volt.",
    },
    {
      name: "Rebreather Mask",
      type: "Gear",
      length: 3,
      description:
        "You have a short supply of clean air you can tap into when you need to, and you also resist the effects of bad air and airborne spores.",
    },
    {
      name: "Climbing Hooks",
      type: "Gear",
      length: 4,
      description:
        "Attached to a harness or embedded in your gelatinous flesh. Ignore cut while climbing, as long as you're moving with care.",
    },
    {
      name: "Driving-Chain",
      type: "Gear",
      length: 3,
      description:
        "A rusted chain from a long-dead machine, now wielded as a weapon dealing Blunt damage at CQ or LR.",
    },
    {
      name: "Scrap-Metal Skeleton",
      type: "Gear",
      length: 3,
      description:
        "The internal structures you've collected can store biovoltaic energy. Use a task to create a resource, Scrap-Bone Battery.",
    },
    {
      name: "Old Ore Piercings",
      type: "Gear",
      length: 1,
      description:
        "You're immune to the usual effects of crezzerin. Concentrated sources of crezzerin heal rather than harm you.",
    },
    {
      name: "Oiljelly",
      type: "Companion",
      length: 4,
      description:
        "A slick, symbiotic slime-like creature bonded with your body.",
    },
    {
      name: "Drone Attendant",
      type: "Companion",
      length: 3,
      description:
        "A simple punchcard-driven repair construct. Increase impact when repairing or tinkering with other machines.",
    },
  ],
};
