export const tzelicraePlaybook = {
  name: "Tzelicrae",
  type: "Bloodline",
  blurb:
    "Secretive spider-colonies wearing humanesque skins. The tzelicrae are mysterious and unsettling, masters of movement and mimicry.",
  edgesQS: ["Grace", "Teeth", "Veils"],
  skillsQS: [
    "Concoct",
    "Delve",
    "Flourish",
    "Outwit",
    "Scavenge",
    "Vault",
    "Wavewalk",
  ],
  languagesQS: ["Knock", "Chthonic", "Saprekk", "Gaudimm"],
  resourcesQS: {
    salvage: ["Frayed Ropes", "Patterened Canvas"],
    specimens: ["Spider Husks", "Venom Extract"],
    whispers: ["A Prison of Skin"],
    charts: ["A Port Manifest in Knock"],
  },
  drivesQS: [
    "Solve problems in tzelicrae settlements",
    "Show others they are wrong to fear your kind",
  ],
  miresQS: [
    "Spiders escape your skin, striving for individuality",
    "Your movements are staccato, disturbing",
  ],
  aspects: [
    {
      name: "Arachnid Mobility",
      type: "Trait",
      length: 3,
      description: "You never cut for difficulty when climbing.",
    },
    {
      name: "The Lottery of Skin",
      type: "Trait",
      length: 4,
      description:
        "Choose either ardent, ektus, or gau. You can pass as a member of this species under casual inspection.",
    },
    {
      name: "Ersatz Limbs",
      type: "Trait",
      length: 4,
      description:
        "You have one or more additional arms, allowing you to hold and manipulate many objects at once.",
    },
    {
      name: "Tremorsense",
      type: "Trait",
      length: 2,
      description:
        "You can feel even the smallest vibrations in the air and ground around you.",
    },
    {
      name: "Goassamercraft",
      type: "Trait",
      length: 3,
      description:
        "Mark to produce a resource, Silk-Like-Web (either dry or sticky).",
    },
    {
      name: "Manifold Linguist",
      type: "Trait",
      length: 3,
      description:
        "You count as fluent when communicating with intelligent insects, hive-minds, and other tzelicrae, regardless of languages used.",
    },
    {
      name: "Spiderbite",
      type: "Trait",
      length: 4,
      description: "You have a set of fangs that can deal CQ Toxin damage.",
    },
    {
      name: "Shirk the Skin",
      type: "Trait",
      length: 5,
      description:
        "Burn to leave your skin for a short period. When outside your skin you are a mass of moving spiders, and can easily move through small spaces and climb and surface.",
    },
    {
      name: "Shroom Hookah",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Keen, Spike, Serrated, Hewing, Toxin",
    },
    {
      name: "Motley Carapace",
      type: "Gear",
      length: 5,
      description:
        "You've incorporated an assortment of discarded armour pieces into your skin.",
    },
    {
      name: "Hush-Silk Garments",
      type: "Gear",
      length: 4,
      description:
        "Your clothes are woven of fine silk that naturally dampens sound, making even your dramatic movements almost entirely silent.",
    },
    {
      name: "Iron Satchel",
      type: "Gear",
      length: 4,
      description:
        "A secure, wearable lockbox that can only be opened by a specific spider within you.",
    },
    {
      name: "Blade of Husks",
      type: "Gear",
      length: 3,
      description:
        "A ritual weapon made from the shitin of lost colony-members. Deals CQ Keen or Salt damage.",
    },
    {
      name: "Swarm-Scout",
      type: "Companion",
      length: 3,
      description:
        "A single spider you can send ahead as a scout, allowing you to see and hear at a distance.",
    },
    {
      name: "Rogue Doomsayer",
      type: "Companion",
      length: 3,
      description:
        "An unsettled fragment of personality. Mark to request a dark and unbidden (but likely pertinent) thought from the Firefly.",
    },
  ],
};
