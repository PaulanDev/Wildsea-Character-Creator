export const mothrynPlaybook = {
  name: "Mothryn",
  type: "Bloodline",
  blurb:
    "An insectile bloodline exploring the leafy sea after the collapse of their restrictive pre-verdant culture. The mothryn are short-lived and colorful.",
  edgesQS: ["Grace", "Tides", "Veils"],
  skillsQS: ["Cook", "Flourish", "Hunt", "Sense", "Study", "Vault", "Wavewalk"],
  languagesQS: ["Raka Spit", "Knock", "Signalling"],
  resourcesQS: {
    salvage: ["Bolt of Fabric", "Damaged Scrap-Flute"],
    specimens: ["Berry Pigment", "Raw Silk"],
    whispers: ["Rationing Ended", "Vibrant Riot"],
    charts: ["A Tapestry Map", "A Painted Wing-Scale"],
  },
  drivesQS: ["Throw yourself into dire situations with vigour", "Solve baffling problems with style"],
  miresQS: ["Your elegance evaporates, leaving you clumsy", "The rationing returns - your colours and stories fade"],
  aspects: [
    {
      name: "Dust and Paper",
      type: "Trait",
      length: 5,
      description: "Your form is slim, light, and deceptively difficult to land a solid hit on.",
    },
    {
      name: "Elegant Wings",
      type: "Trait",
      length: 3,
      description: "Though most mothryn wings now serve as decoration, yours are uncommonly strong. You can glide with ease, or mark for a short burst of elegant flight.",
    },
    {
      name: "Scatterscale",
      type: "Trait",
      length: 2,
      description: "Mark to create a cloud of fine dust that refracts light and distorts perception - your own senses are unaffected.",
    },
    {
      name: "Thick Fur",
      type: "Trait",
      length: 4,
      description: "You're weak to Flame, but resist the effects of bad air and airborne spores.",
    },
    {
      name: "Elaborate Beard-Braids",
      type: "Trait",
      length: 3,
      description: "Your beard is a rich, intertwining mass of fur and braids, perfect for concealing small objects. Burn to gain a new piece of salvage or specimen from within it (that you might conceivably have stashed there).",
    },
    {
      name: "Prismatic Antennae",
      type: "Trait",
      length: 3,
      description: "Dense clusters of sensort fronds grow from your antennae, letting you see clearly without light and through clouds of dust or spores.",
    },
    {
      name: "I Used to Know This",
      type: "Trait",
      length: 3,
      description: "You can treat a conflict as a triumph when rolling for an action without a skill adding to your dice pool (once per scene).",
    },
    {
      name: "Chaos Dancing",
      type: "Trait",
      length: 3,
      description: "A fighting style that makes use of wing-edges and scything kicks. Deals CQ Keen or Spike damage.",
    },
    {
      name: "Ceremonial Patterning",
      type: "Gear",
      length: 4,
      description: "Your wings are a riot of colour and style. Mark to increase impact when trying to impress or convince.",
    },
    {
      name: "Marks of Where We've Been",
      type: "Gear",
      length: 3,
      description: "Chart-like decorations cover your wings and fur. Mark to use this aspect in place of a chart, but only when travelling through an area you've visited before.",
    },
    {
      name: "Flowing Fabrics",
      type: "Gear",
      length: 3,
      description: "You're resistant to three damage types, chosen from the following list: Keen, Blast, Acid, Frost, Salt.",
    },
    {
      name: "Wing-Studs",
      type: "Gear",
      length: 4,
      description: "Can be launched shrapnel with a deft twist, dealing LR Blunt damage.",
    },
    {
      name: "Silkspire Byx",
      type: "Companion",
      length: 4,
      description: "A living golem of beautifully spun silks, usually in vaguely lupine shape.",
    },
    {
      name: "Talycat",
      type: "Companion",
      length: 2,
      description: "A domesticated felinesque insect that sheds medicinally potent scale-dust. Your entire crew has resistance against infections and diseases.",
    }
  ],
};
