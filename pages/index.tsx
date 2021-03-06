import Link from 'next/link';
import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const Home = () => {


  //TODO: add abilities component, If you want to save time or don’t like the idea of randomly determining ability scores, you can choose from a fixed list (15, 14, 13, 12, 10, 8).
  //option to roll or standard array. manual/random - roll is 4 d6 then take 3 highest, so random math formula
  //create dice rolling componenent, roll each 'group' then assign to abilities
  //once rolled and assigned, add any modifiers from race or class
  //TODO: can add background, but that will be a last addition
  return (
    <>
      <Main>
      <TitleContainer>
      <Title>Dungeons & Dragons <br /> Character Creator</Title>
      <Center>
        <Link href="/create-character"><GetStarted>Get Started</GetStarted></Link>
      </Center>
      </TitleContainer>
      </Main>
      <GlobalStyle />
    </>
      
      );
};

  const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #ee3e29;
  }
`

const Main = styled.div`
  position: relative;
  height: 85vh;

`
const TitleContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 75%;
`
const Title = styled.h1`
  font-family: 'MedievalSharp', cursive;
  font-size: 3rem;
  text-align: center;
`
const GetStarted = styled.button`
  font-family: 'MedievalSharp', cursive;
  font-size: 1rem;
  color:#dadde0; 
  text-decoration: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 3px;
  background-color: #242526;
  &:hover {
    background-color: #2f3030;
  };
`

const Center = styled.div`
  text-align: center;
`

// Class data response:
// {
//   "index": "sorcerer",
//   "name": "Sorcerer",
//   "hit_die": 6,
//   "proficiency_choices": [
//     {
//       "choose": 2,
//       "type": "proficiencies",
//       "from": [
//         {
//           "index": "skill-arcana",
//           "name": "Skill: Arcana",
//           "url": "/api/proficiencies/skill-arcana"
//         },
//         {
//           "index": "skill-deception",
//           "name": "Skill: Deception",
//           "url": "/api/proficiencies/skill-deception"
//         },
//         {
//           "index": "skill-insight",
//           "name": "Skill: Insight",
//           "url": "/api/proficiencies/skill-insight"
//         },
//         {
//           "index": "skill-intimidation",
//           "name": "Skill: Intimidation",
//           "url": "/api/proficiencies/skill-intimidation"
//         },
//         {
//           "index": "skill-persuasion",
//           "name": "Skill: Persuasion",
//           "url": "/api/proficiencies/skill-persuasion"
//         },
//         {
//           "index": "skill-religion",
//           "name": "Skill: Religion",
//           "url": "/api/proficiencies/skill-religion"
//         }
//       ]
//     }
//   ],
//   "proficiencies": [
//     {
//       "index": "daggers",
//       "name": "Daggers",
//       "url": "/api/proficiencies/daggers"
//     },
//     {
//       "index": "quarterstaffs",
//       "name": "Quarterstaffs",
//       "url": "/api/proficiencies/quarterstaffs"
//     },
//     {
//       "index": "darts",
//       "name": "Darts",
//       "url": "/api/proficiencies/darts"
//     },
//     {
//       "index": "slings",
//       "name": "Slings",
//       "url": "/api/proficiencies/slings"
//     }
//   ],
//   "saving_throws": [
//     {
//       "index": "con",
//       "name": "CON",
//       "url": "/api/ability-scores/con"
//     },
//     {
//       "index": "cha",
//       "name": "CHA",
//       "url": "/api/ability-scores/cha"
//     }
//   ],
//   "starting_equipment": [
//     {
//       "equipment": {
//         "index": "dagger",
//         "name": "Dagger",
//         "url": "/api/equipment/dagger"
//       },
//       "quantity": 2
//     }
//   ],
//   "starting_equipment_options": [
//     {
//       "choose": 1,
//       "type": "equipment",
//       "from": [
//         {
//           "0": {
//             "equipment": {
//               "index": "crossbow-light",
//               "name": "Crossbow, light",
//               "url": "/api/equipment/crossbow-light"
//             },
//             "quantity": 1
//           },
//           "1": {
//             "equipment": {
//               "index": "crossbow-bolt",
//               "name": "Crossbow bolt",
//               "url": "/api/equipment/crossbow-bolt"
//             },
//             "quantity": 20
//           }
//         },
//         {
//           "equipment_option": {
//             "choose": 1,
//             "type": "equipment",
//             "from": {
//               "equipment_category": {
//                 "index": "simple-weapons",
//                 "name": "Simple Weapons",
//                 "url": "/api/equipment-categories/simple-weapons"
//               }
//             }
//           }
//         }
//       ]
//     },
//     {
//       "choose": 1,
//       "type": "equipment",
//       "from": [
//         {
//           "equipment": {
//             "index": "component-pouch",
//             "name": "Component pouch",
//             "url": "/api/equipment/component-pouch"
//           },
//           "quantity": 1
//         },
//         {
//           "equipment_option": {
//             "choose": 1,
//             "type": "equipment",
//             "from": {
//               "equipment_category": {
//                 "index": "arcane-foci",
//                 "name": "Arcane Foci",
//                 "url": "/api/equipment-categories/arcane-foci"
//               }
//             }
//           }
//         }
//       ]
//     },
//     {
//       "choose": 1,
//       "type": "equipment",
//       "from": [
//         {
//           "equipment": {
//             "index": "dungeoneers-pack",
//             "name": "Dungeoneer's Pack",
//             "url": "/api/equipment/dungeoneers-pack"
//           },
//           "quantity": 1
//         },
//         {
//           "equipment": {
//             "index": "explorers-pack",
//             "name": "Explorer's Pack",
//             "url": "/api/equipment/explorers-pack"
//           },
//           "quantity": 1
//         }
//       ]
//     }
//   ],
//   "class_levels": "/api/classes/sorcerer/levels",
//   "multi_classing": {
//     "prerequisites": [
//       {
//         "ability_score": {
//           "index": "cha",
//           "name": "CHA",
//           "url": "/api/ability-scores/cha"
//         },
//         "minimum_score": 13
//       }
//     ],
//     "proficiencies": []
//   },
//   "subclasses": [
//     {
//       "index": "draconic",
//       "name": "Draconic",
//       "url": "/api/subclasses/draconic"
//     }
//   ],
//   "spellcasting": {
//     "level": 1,
//     "spellcasting_ability": {
//       "index": "cha",
//       "name": "CHA",
//       "url": "/api/ability-scores/cha"
//     },
//     "info": [
//       {
//         "name": "Cantrips",
//         "desc": [
//           "At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table."
//         ]
//       },
//       {
//         "name": "Spell Slots",
//         "desc": [
//           "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
//           "For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot."
//         ]
//       },
//       {
//         "name": "Spells Known of 1st Level and Higher",
//         "desc": [
//           "You know two 1st-level spells of your choice from the sorcerer spell list.",
//           "The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. ",
//           "Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots."
//         ]
//       },
//       {
//         "name": "Spellcasting Ability",
//         "desc": [
//           "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
//           "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
//           "Spell attack modifier = your proficiency bonus + your Charisma modifier."
//         ]
//       },
//       {
//         "name": "Spellcasting Focus",
//         "desc": [
//           "You can use an arcane focus as a spellcasting focus for your sorcerer spells."
//         ]
//       }
//     ]
//   },
//   "spells": "/api/classes/sorcerer/spells",
//   "url": "/api/classes/sorcerer"
// }
export default Home;