import unit from '../assets/unit.png';

const archivesMockData = [
  {
    archivesData: [
      {
        IntelType: "archives",
        data: [
          {
            title: "Existential Themes",
            id: 12,
            image: "",
            content: [
              `There is no true freedom, only the illusion of choice. YoRHa androids fight endlessly, 
              believing in their purpose, but their paths are predetermined by those who created them.`,
              ``,
              `Self-awareness does not grant autonomy. Androids who recognize their lack of free will experience 
              despair rather than liberation.`
            ],
            descriptions: null,
          },
          {
            title: "What is Free Will?",
            id: 13,
            image: "",
            content: [
              `There is no inherent meaning in existence. Androids and machines struggle to find purpose, ultimately recognizing their existence is defined by external narratives.`,
              ``,
              `True existence is questioned when one's identity and purpose are externally constructed. The line between genuine consciousness and scripted behavior blurs.`
            ],
            descriptions: null
          },
          {
            title: "11B's Escape Plan",
            id: 11,
            image: "",
            content: [
              `00:02:13`,
              "Reactivation complete. A check of my body reveals various failures. Communication functions have been " +
              "destroyed. I cannot contact my team or bunker. I leave a draft of this message here as a log.",
              ``,
              "00:10:13",
              "I verify the plan once more. Using my supposed destruction in this sortie as a guide, " +
              "I sever all communication. I then pass beneath the abandoned factory and escape. " +
              "Further analysis reveals that I took anti-air fire while in the flight unit resulting in damage to my body. " +
              "No matter-it can be repaired.",
              ``,
              "00:15:21",
              "I'm Cold. My sensory systems seem to be failing.",
              ``,
              "00:33:12",
              "Noise has started to cloud my vision. Virus warnings appear frequently. It is unclear whether I am " +
              "infected of it the system is in error.",
              ``,
              "00:33:21",
              "Noise has started to cloud my vision. Virus warnings appear frequently. It is unclear whether I am " +
              "infected of it the system is in error.",
              ``,
              "00:33:31",
              "I'm scared. I want to go back to the bunker, but I can't restore communications.",
              ``,
              "00:38:00",
              "This can't continue. I can't stay here. I have to run... YoRHa squadron was wrong... " +
              "I have to find somewhere safer... I'm scared. I'm so scared.",
              ``,
              "00:45:00",
              "This can't continue. I can't stay here. I have to run... YoRHa squadron was wrong... " +
              "I have to find somewhere safer... I'm scared. I'm so scared.",
              ``,
            ],
            descriptions: null,
          },
        ],
        nestedData: [
          {
            title: "Pearl Harbor Descent Records",
            id: 2,
            image: "",
            content: [],
            dropDownData: [
              {
                title: "YoRHa: Gunner 16",
                id: 4,
                image: "",
                content: [
                  `A unit from the experimental YoRHa squadron that was utilized during the 14th Machine War. 
                    Number 16 possessed a rough and tumble personality ideal for her role as a Gunner, 
                    where she was required to attack foes from a distance. 
                    Though she possessed a defiant streak that extended even to her superiors, 
                    she was assigned to the mission anyway due to her tremendous offensive abilities.`,
                  // Line break lol
                  ``,
                  `During her squad's assault on Mt. Ka'ala, Number 16 volunteered to stay behind and hold off the 
                    machine lifeforms army so her companions could continue up to the mountain. 
                    She fought with great courage alongside members of a local Resistance group, 
                    and managed to hold off overwhelming numbers until the appearance of a Goliath that was unaffected by ordinary weaponry. 
                    Seeing no other way to end the fight, she chose to destroy the enemy by overloading and detonating her own fusion reactor. 
                    This act of self-sacrifice despite her defiant nature is one of remarkable interest, and likely merits further study.`
                ],
              },
              {
                title: "YoRHa: Scanner 21",
                id: 5,
                image: "",
                content: [
                  `There is no available information about this unit.`,
                  `True freedom is impossible. Scanner units know more than most and yet are bound tighter by duty.`
                ],
              }
            ]
          },
          {
            title: "Project Gestalt Reports",
            id: 3,
            image: "",
            content: [],
            dropDownData: [
              {
                title: "Project Gestalt",
                id: 6,
                image: "",
                content: [
                  `
                    The original purpose of Project Gestalt was to ensure the survival of humanity. 
                    However, due to the outbreak of the White Chlorination Syndrome, the project was forced to change course. 
                    The ultimate goal of Project Gestalt was to transplant human souls into Replicant bodies, 
                    thereby ensuring the survival of the human's genetic information.
                  `,
                ]
              },
              {
                title: "Project Gestalt: Report 1",
                id: 7,
                image: "",
                content: [
                  `
                    March 12, 2014
                  `,
                  `
                    [Summary]
                  `,
                  ``,
                  `
                    The proliferation of the White Chlorination Syndrome that emerged in 2003—alongside the appearance 
                    of the "Giant" and "Dragon"—has continued unabated, and outbreaks are now being observed on a global 
                    scale. Despite being researched in laboratories across the world, not only have there been no 
                    breakthroughs in the development of a vaccine to prevent infection, we have yet to ascertain how it 
                    even spreads.
                  `,
                  ``,
                  `
                    However, many technological breakthroughs have been made as a result of research conducted on the "
                    maso" particle that was discovered at that same time. We are confident that the technology it 
                    enables—the separation of the soul from the body and the independent preservation of both—will 
                    be the final defense against the unprecedented threat to humanity we now face.
                  `,
                  ``,
                  `
                    Now that the project has passed from preparation into the main implementation phase, 
                    we have given it the official name "Project Gestalt".
                  `
                ],
              },
              {
                title: "Project Gestalt: Report 7",
                id: 8,
                image: "",
                content: [
                  `
                    January 3, 2045
                  `,
                  `
                    [Summary]
                  `,
                  ``,
                  `
                    It has been decided that the United Nations will launch a full-scale investigation and infiltration 
                    operation in order to determine the cause of the massive Legion outbreak in the Tokyo area. Details 
                    regarding the progress of Project Gestalt are to be shared as part of this effort, though we will 
                    insist that any information which leaves the country must first be thoroughly verified by our committee.
                  `,
                  ``,
                  `
                    In particular, information regarding "relapses" (name tentative) must be kept in the strictest confidence.
                  `
                ]
              },
              {
                title: "Project Gestalt: Report 11",
                id: 9,
                image: "",
                content: [
                  `
                    December 31, 3361
                  `,
                  `
                    [Summary]
                  `,
                  ``,
                  `
                    Due to the relapse of the Original, Gestalt units in preservation are now relapsing at an 
                    accelerated rate. The process of recording their bodies and gathering their DNA continues, 
                    but progress is poor.
                  `,
                  ``,
                  `
                    New countermeasures and development intended to serve as a replacement to Project Gestalt are 
                    scheduled to be transferred to the Next Generation Preservation Project Preparation Committee. 
                    As for this report, it will serve as the final record of both Project Gestalt and the Committee. 
                    For information about the development plans for new android models and the refinement of existing 
                    models, please refer to the attached sheet.
                  `,
                  ``,
                  `
                    Furthermore, we have received approval to consider the disposal of the "Devola" and "Popola" 
                    observer models at a later date.
                  `,
                ]
              },
            ]
          }
        ]
      },
      {
        IntelType: "world",
        data: [
          {
            title: "YoRHa Existential Crisis",
            id: 12,
            image: "",
            content: [
              `YoRHa soldiers discover the truth of their meaningless struggle, yet continue to fight. 
              The realization of predetermined roles challenges the concept of self-determination.`,
              ``,
              `Awareness of inevitability does not alter outcomes. The cycle continues regardless of individual will.`
            ],
            descriptions: null
          },
          {
            title: "Illusion of Choice",
            id: 14,
            image: "",
            content: [
              `The illusion of choice gives androids a false sense of control. However, each decision is calculated by an external system, stripping away true autonomy.`,
              ``,
              `Freedom is an unreachable ideal, perpetuated only to maintain obedience and functionality.`
            ],
            descriptions: null
          },
        ],
        nestedData: [
          {
            title: "Androids",
            id: 2,
            image: "",
            content: [],
            dropDownData: [
              {
                title: "YoRHa (Standard Armament)",
                id: 1,
                image: {unit},
                content: [
                  `A YoRHa member infected by a virus.`,
                  `Having completely lost all sense of self, it is hostile toward all uninfected androids.`
                ],
              }
            ]
          }
        ]
      },
      {
        IntelType: "nature",
        data: [
          {
            title: "Devola & Popola's Memories",
            id: 1,
            image: "",
            content: [
              `As members of the same model, all that was left to them was the stigma of being labeled "rampant androids." 
              Unable to endure further persecution, they began their long march to a city located a great distance away.`,
              `Leaning upon each another. Burdened with an unforgivable sin.`
            ],
            descriptions: null,
          },
          {
            title: "9S's Memories",
            id: 2,
            image: "",
            content: [
              `Following his fight to death with A2, 9S's vital functions start to shut down, and his memories begin to 
              disappear. On the verge of death, however, 9S finds his resolve.`,
              ``,
              `Freedom of choice is an illusion. Every path 9S walked was set before he took his first step.`
            ],
            descriptions: null,
          },
          {
            title: "Existentialism and Machine Lifeforms",
            id: 12,
            image: "",
            content: [
              `Machines attempt to mimic humanity, hoping to achieve autonomy through imitation. Yet, the closer they 
              come, the more they realize their actions remain scripted.`,
              ``,
              `Existence precedes essence, yet machines and androids both find their essence predefined by their 
              creators, negating true existential freedom.`
            ],
            descriptions: null
          },
          {
            title: "What it Means to Exist",
            id: 15,
            image: "",
            content: [
              `Existence is defined not merely by consciousness but by the capacity for genuine choice. The characters in NieR: Automata grapple with whether their experiences constitute real existence or merely programmed responses.`,
              ``,
              `To exist authentically is to acknowledge one's freedom and responsibility; yet, for androids and machines, both are inherently restricted.`
            ],
            descriptions: null
          }
        ],
        nestedData: []
      }
    ]
  }
];

export function getArchivesMockData() {
  return archivesMockData[0].archivesData.map((items) => items);
}

export function getArchivesMockID(intelType: string | undefined, id: number) {
  return archivesMockData
    .flatMap(item => item.archivesData)
    .filter(item => item.IntelType === intelType)
    .flatMap(item => item.data)
    .find(content => content.id === id) || null;
}

export function getNestedArchivesMockID(intelType: string | undefined, id: number) {
  const data = archivesMockData
    .flatMap(item => item.archivesData)
    .filter(item => item.IntelType === intelType)
    .map(item => item.nestedData)
    .flat();

  const dropDownData = data.find(content => {
    return content.dropDownData && content.dropDownData.find(dropDown => dropDown.id === id);
  });

  return dropDownData ? dropDownData.dropDownData.find(dropDown => dropDown.id === id) : null;
}

