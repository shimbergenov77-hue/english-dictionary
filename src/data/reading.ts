export type Verdict = "TRUE" | "FALSE" | "NOT GIVEN";

export type TfngQ = {
  kind: "tfng";
  prompt: string;
  answer: Verdict;
};

export type McqQ = {
  kind: "mcq";
  prompt: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
};

export type HeadingQ = {
  kind: "heading";
  paragraph: string;
  answer: number;
};

export type ReadingQuestion = TfngQ | McqQ | HeadingQ;

export type Passage = {
  id: string;
  part: number;
  title: string;
  focus: string;
  paragraphs: { label?: string; text: string }[];
  headings?: string[];
  questions: ReadingQuestion[];
};

export const PASSAGES: Passage[] = [
  {
    id: "r1",
    part: 1,
    title: "The quiet return of the public library",
    focus: "True / False / Not Given",
    paragraphs: [
      {
        text: "For much of the early twenty-first century, public libraries were widely described as institutions in decline. Falling visitor numbers, shrinking budgets and the rise of smartphones led many city officials to question whether large buildings full of printed books still deserved public money. Several high-profile closures in the 2010s seemed to confirm that verdict. Yet a closer look at recent figures from a number of European and North American cities suggests that the story is more complicated than a simple narrative of obsolescence.",
      },
      {
        text: "In cities such as Helsinki, Toronto and Manchester, library membership has risen again since about 2018, even while book loans have remained flat or declined slightly. The people coming through the doors are not, in the main, borrowing novels. They are using free wifi, attending language classes, working on laptops, or bringing children to story sessions. Librarians interviewed for a 2023 municipal study in Manchester said that more than half of afternoon users never take a book home. What they value is a heated, quiet, staffed room that does not ask them to buy a coffee.",
      },
      {
        text: "This shift has forced libraries to redesign their space. Shelving has been pushed to the walls to make room for desks with power sockets. Some branches have removed the traditional rule of silence on the ground floor, while keeping an upper floor strictly quiet. The change is not universally popular. A survey of long-standing members in Toronto found that almost a third felt the building had become too much like a café and that they could no longer concentrate. Younger users, by contrast, rated the same branches more highly than they had five years earlier.",
      },
      {
        text: "Funding remains the awkward part of the revival. Most of the libraries that are thriving have not been given larger book budgets. Instead, city councils have redirected money towards staff who can teach digital skills, and towards building repairs. A report by the European Library Association warned in 2024 that buildings constructed in the 1970s are now reaching the end of their mechanical lives. Heating systems, lifts and roofs, rather than collections, are the items most likely to determine whether a branch stays open. The report did not claim that every city is investing enough to cover those costs.",
      },
      {
        text: "There is also a persistent myth that libraries mainly serve people who cannot afford books. Research from Helsinki contradicts that picture, at least in part: the fastest-growing group of new members there was university-educated adults in their thirties, many of whom said they already bought books and subscribed to streaming services. They came for the space, not the savings. Whether that pattern holds in poorer districts is less clear. The Helsinki study looked only at the city's central library and two large suburban branches, and explicitly noted that it had not surveyed the smallest neighbourhood sites.",
      },
      {
        text: "What does seem consistent is that libraries which still measure success only by the number of books borrowed are misreading their own visitors. The institutions that have recovered are those that accepted a broader job: part reading room, part classroom, part public living room. That does not make the printed collection irrelevant. It does mean that a fall in loans is no longer, by itself, evidence that a library has failed.",
      },
    ],
    questions: [
      { kind: "tfng", prompt: "In the early 2000s, public libraries were often described as being in decline.", answer: "TRUE" },
      { kind: "tfng", prompt: "Book loans in Helsinki, Toronto and Manchester have increased sharply since 2018.", answer: "FALSE" },
      { kind: "tfng", prompt: "Most afternoon users in the Manchester study take at least one book home.", answer: "FALSE" },
      { kind: "tfng", prompt: "Some redesigned libraries keep one floor silent.", answer: "TRUE" },
      { kind: "tfng", prompt: "A majority of long-standing Toronto members said they could no longer concentrate.", answer: "FALSE" },
      { kind: "tfng", prompt: "Younger users in Toronto rated the redesigned branches more highly than before.", answer: "TRUE" },
      { kind: "tfng", prompt: "Libraries that are doing well have generally received bigger budgets for buying books.", answer: "FALSE" },
      { kind: "tfng", prompt: "The European Library Association stated that every city is spending enough on repairs.", answer: "FALSE" },
      { kind: "tfng", prompt: "Heating systems can decide whether an older branch remains open.", answer: "TRUE" },
      { kind: "tfng", prompt: "The fastest-growing group of new members in Helsinki already bought books.", answer: "TRUE" },
      { kind: "tfng", prompt: "The Helsinki study included the city's smallest neighbourhood libraries.", answer: "FALSE" },
      { kind: "tfng", prompt: "The writer believes that a drop in book loans proves a library has failed.", answer: "FALSE" },
    ],
  },
  {
    id: "r2",
    part: 2,
    title: "How cities try to stay cool",
    focus: "Matching headings + True / False / Not Given",
    headings: [
      "i  A solution that can make streets hotter",
      "ii  Why shade is not a minor detail",
      "iii  Evidence from one unusually hot summer",
      "iv  Plants that do more than decorate",
      "v  A material choice with mixed results",
      "vi  The limit of what residents can do alone",
      "vii  Cooling that depends on water the city may not have",
      "viii  How night-time heat changes behaviour",
    ],
    paragraphs: [
      {
        label: "A",
        text: "When a heatwave settles over a city, the danger is not only the afternoon peak. Concrete and asphalt store heat through the day and release it after sunset, so temperatures in dense neighbourhoods can stay several degrees above those in the surrounding countryside well into the night. Sleep becomes harder, and people who work early shifts start the next day already tired. Hospitals in southern Europe have reported that admissions for heat-related illness often rise on the second and third night of a hot spell, not on the first afternoon.",
      },
      {
        label: "B",
        text: "Trees are the most frequently recommended response, and for good reason. A mature street tree shades the pavement and, through evaporation from its leaves, cools the air around it. A study of residential streets in Lyon found that a continuous line of trees could lower the surface temperature of the pavement by more than ten degrees on a clear July day. The same study noted that young saplings, however attractive in planning drawings, provide almost none of that benefit for the first decade.",
      },
      {
        label: "C",
        text: "Painting roofs white has been promoted as a cheaper alternative. Reflective surfaces send sunlight back into the atmosphere instead of absorbing it, and on individual buildings the indoor temperature can fall noticeably. At street level the picture is less encouraging. Researchers in Los Angeles measured a slight increase in the heat felt by pedestrians where pale roofs bounced light down into narrow streets. The technique helps the building; it does not automatically help the person walking past it.",
      },
      {
        label: "D",
        text: "Another popular idea is to mist public squares with fine sprays of water. In dry heat this can be pleasant and effective. In humid cities the same spray adds moisture to air that is already heavy, and the cooling effect shrinks. Several pilot projects in coastal cities were scaled back after the first summer because water use was high and the drop in temperature was smaller than the models had predicted. The projects did not publish a full cost comparison with tree planting.",
      },
      {
        label: "E",
        text: "Shade structures — canopies, awnings, and bus shelters with solid roofs — are sometimes dismissed as cosmetic. They should not be. People decide whether to walk, wait for a bus, or stay indoors partly on the basis of whether there is a patch of shade. A transport authority in Melbourne found that bus stops with roofs were used more during hot months even when the service itself had not changed. The finding is modest, but it shows that small pieces of infrastructure shape behaviour.",
      },
      {
        label: "F",
        text: "None of these measures works well if it is left entirely to households. A resident can buy a fan or plant a courtyard tree, yet cannot cool the road, the bus stop, or the school playground. Cities that reduced heat stress most clearly were those that treated shade and surface materials as part of ordinary street design, funded from the same budgets as paving and lighting. Volunteer planting days helped, but they did not replace that public work.",
      },
    ],
    questions: [
      { kind: "heading", paragraph: "A", answer: 7 },
      { kind: "heading", paragraph: "B", answer: 3 },
      { kind: "heading", paragraph: "C", answer: 4 },
      { kind: "heading", paragraph: "D", answer: 6 },
      { kind: "heading", paragraph: "E", answer: 1 },
      { kind: "heading", paragraph: "F", answer: 5 },
      { kind: "tfng", prompt: "Hospital admissions for heat illness always peak on the first afternoon of a heatwave.", answer: "FALSE" },
      { kind: "tfng", prompt: "In Lyon, newly planted trees cooled pavements as much as mature trees.", answer: "FALSE" },
      { kind: "tfng", prompt: "White roofs can reduce the temperature inside a building.", answer: "TRUE" },
      { kind: "tfng", prompt: "Mist systems were less effective than expected in some humid coastal cities.", answer: "TRUE" },
      { kind: "tfng", prompt: "The coastal pilot projects proved that misting is cheaper than planting trees.", answer: "NOT GIVEN" },
      { kind: "tfng", prompt: "In Melbourne, more people used roofed bus stops in hot months without any change to the bus service.", answer: "TRUE" },
    ],
  },
  {
    id: "r3",
    part: 3,
    title: "Sleep, memory and the myth of the short night",
    focus: "Multiple choice + True / False / Not Given",
    paragraphs: [
      {
        text: "A popular claim in business magazines is that highly successful people sleep very little, and that the rest of us could do the same if we were more disciplined. The claim makes a good headline. It is a poor guide to how memory works. Over the past twenty years, sleep laboratories have shown that the brain does not simply shut down at night. During certain stages of sleep it replays fragments of the day, and that replay appears to help move new information into longer-term storage.",
      },
      {
        text: "One line of evidence comes from studies in which volunteers learn a list of words or a motor skill, such as a short sequence on a keyboard, and are then tested after a night of sleep or after an equal period awake. In most of these experiments the group that sleeps performs better the next day, even when total study time is identical. The advantage is not huge for a single list of words, but it shows up reliably, and it is larger for material that was only partly learned.",
      },
      {
        text: "The timing of sleep matters as well as the amount. A German study asked students to memorise vocabulary in the evening. Those who slept soon afterwards remembered more a week later than those who stayed up for several hours watching television before going to bed. The researchers did not conclude that evening study is always best. They did conclude that a long gap filled with new stimulation can interfere with the delicate early stage of memory.",
      },
      {
        text: "There is a limit to how far this can be pushed. People who cut sleep to five hours or fewer for several nights running show slower reaction times and weaker recall, even if they feel they have adapted. A week of recovery sleep repairs some of the damage but, in one carefully controlled trial, did not fully restore performance on a task that required people to ignore distractions. The trial involved healthy adults in their twenties. It did not include shift workers or teenagers.",
      },
      {
        text: "Caffeine complicates the picture. A strong coffee can hide tiredness and improve attention for an hour or two, which is why students drink it before exams. It does not, however, replace the memory benefit of sleep. In a small experiment at a British university, caffeinated students felt more alert during a morning test but did not remember a passage they had read the night before any better than students who had slept poorly and drunk none. The sample was too small to settle the question, and the authors said so.",
      },
      {
        text: "None of this means that every person needs exactly eight hours, or that a single short night before an exam will erase weeks of study. It does mean that treating sleep as wasted time is hard to defend if the aim is to remember what you have learned. The students who do best in long courses are rarely the ones who boast about all-nighters. They are usually the ones who protect a regular stretch of sleep, especially on the nights after they have met new material.",
      },
    ],
    questions: [
      {
        kind: "mcq",
        prompt: "What is the writer's view of the claim that successful people need very little sleep?",
        options: [
          "It is supported by most laboratory work.",
          "It is useful advice for students before exams.",
          "It sounds striking but is a weak guide to memory.",
          "It is true only for people in business.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "In the learning experiments, the group that slept generally",
        options: [
          "studied for longer than the waking group.",
          "did better the next day despite equal study time.",
          "forgot motor skills but remembered words.",
          "showed a benefit only after a full week.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "The German vocabulary study suggests that",
        options: [
          "evening study is always more effective than morning study.",
          "television improves memory if it comes after learning.",
          "a long gap full of new activity can disrupt early memory.",
          "students should avoid sleeping after they study.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "After several nights of five hours' sleep or less, a week of recovery",
        options: [
          "fully returned performance on every task tested.",
          "had no effect at all on reaction times.",
          "repaired some harm but not all of it, in one trial.",
          "was studied only among shift workers.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "What did the British caffeine experiment find?",
        options: [
          "Coffee replaced the memory benefit of a proper night's sleep.",
          "Alert students did not remember the passage better than tired ones.",
          "A large sample proved caffeine harms long-term memory.",
          "Students who drank coffee slept longer than the others.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "According to the final paragraph, students who succeed on long courses usually",
        options: [
          "rely on occasional all-nighters.",
          "sleep exactly eight hours every night.",
          "keep a regular period of sleep after learning new material.",
          "avoid studying in the evening.",
        ],
        answer: 2,
      },
      { kind: "tfng", prompt: "During some stages of sleep the brain replays parts of the day.", answer: "TRUE" },
      { kind: "tfng", prompt: "The sleep advantage is greater when the material was only partly learned.", answer: "TRUE" },
      { kind: "tfng", prompt: "The German researchers said that studying in the evening is always best.", answer: "FALSE" },
      { kind: "tfng", prompt: "The recovery-sleep trial included teenagers.", answer: "FALSE" },
      { kind: "tfng", prompt: "The authors of the caffeine study claimed their sample was large enough to be conclusive.", answer: "FALSE" },
      { kind: "tfng", prompt: "One short night before an exam will cancel out weeks of revision.", answer: "FALSE" },
    ],
  },
  {
    id: "r4",
    part: 4,
    title: "Food grown inside the city",
    focus: "True / False / Not Given",
    paragraphs: [
      {
        text: "Rooftop farms and converted warehouses full of lettuce have become a familiar image in articles about the future of food. The photographs are attractive: rows of green under pink lights, a few miles from the people who will eat them. The economics are less photogenic. Most commercial indoor farms sell herbs and salad leaves, which are light, perishable and expensive in shops, rather than the calories that actually feed a city. Wheat, rice and potatoes still come, overwhelmingly, from fields outside the urban boundary.",
      },
      {
        text: "That does not make urban growing pointless. A project in Singapore supplies a supermarket chain with basil and other herbs that previously arrived by air. The herbs cost more to produce under lights than in a field, but they travel a shorter distance and less of the crop is thrown away. The company has not published a full account of its energy use. It has said that the price shoppers pay is close to the price of imported herbs, which is possible only because imported herbs were already costly.",
      },
      {
        text: "Community gardens are a different case. They rarely compete with supermarkets on price or volume. Their defenders argue that the value lies elsewhere: residents who grow a little food talk to neighbours they would otherwise never meet, and children see that a tomato is a plant before it is a product. A three-year study in Detroit recorded higher levels of trust among people who shared a garden than among similar residents who did not. The study could not prove that the garden caused the trust. People who already trusted their neighbours may have been more willing to join.",
      },
      {
        text: "Soil in older industrial cities is often contaminated. Lead from old paint and fuel can sit in the ground for decades. Several garden networks now require a soil test before vegetables are planted in the earth, and they use raised beds with clean soil where the test fails. This practice is not yet universal. A review of community gardens in three British cities found that fewer than half had tested their soil in the previous five years, even though local councils offered the test at no charge.",
      },
      {
        text: "Water is the quieter constraint. Indoor farms recycle much of what they use, which is one reason they are promoted in dry regions. Outdoor community plots, by contrast, can demand a surprising amount of municipal water in a hot summer. During a drought in Cape Town, some gardens were asked to stop watering ornamental flowers and to prioritise food crops. The request was voluntary. The article that reported it did not say how many gardens complied.",
      },
      {
        text: "The sensible conclusion is narrower than the advertising. Cities can grow a useful share of their fresh herbs and a meaningful share of their community life. They cannot, with current methods, grow the staple crops that fill most plates. Treating a rooftop lettuce farm as a replacement for farmland confuses a real, limited success with a solution to a different problem. Planners who understand the distinction are more likely to fund the projects that actually work.",
      },
    ],
    questions: [
      { kind: "tfng", prompt: "Most commercial indoor farms concentrate on herbs and salad leaves.", answer: "TRUE" },
      { kind: "tfng", prompt: "Cities already produce most of the wheat their residents eat.", answer: "FALSE" },
      { kind: "tfng", prompt: "The Singapore herbs are cheaper to grow than herbs in a field.", answer: "FALSE" },
      { kind: "tfng", prompt: "The Singapore company has released a complete report of its energy consumption.", answer: "FALSE" },
      { kind: "tfng", prompt: "Shoppers in Singapore pay roughly the same for local herbs as for imported ones.", answer: "TRUE" },
      { kind: "tfng", prompt: "Community gardens usually sell food more cheaply than supermarkets.", answer: "FALSE" },
      { kind: "tfng", prompt: "The Detroit study proved that gardens create trust between neighbours.", answer: "FALSE" },
      { kind: "tfng", prompt: "Lead can remain in urban soil for a long time.", answer: "TRUE" },
      { kind: "tfng", prompt: "In the British review, most community gardens had tested their soil within five years.", answer: "FALSE" },
      { kind: "tfng", prompt: "Councils in those British cities charged a fee for soil tests.", answer: "FALSE" },
      { kind: "tfng", prompt: "Every garden in Cape Town stopped watering flowers during the drought.", answer: "NOT GIVEN" },
      { kind: "tfng", prompt: "The writer thinks rooftop farms can replace staple farmland.", answer: "FALSE" },
    ],
  },
  {
    id: "r5",
    part: 5,
    title: "What learning a second language seems to change",
    focus: "Multiple choice",
    paragraphs: [
      {
        text: "Parents are often told that a second language will make their children smarter, more tolerant and better at every school subject. The research is more careful than the slogan. Bilingual children do show some advantages on tasks that require them to ignore irrelevant information and switch attention. Those advantages are real, but they are modest, and they do not automatically appear as higher marks in mathematics or science.",
      },
      {
        text: "A large Canadian study followed children from kindergarten to the end of primary school. Pupils in French immersion programmes eventually matched, and in reading sometimes surpassed, their peers in English-only classes. In the first two years, however, they lagged behind in English spelling. Parents who withdrew their children after a single difficult year often did so before the catch-up had happened. The study did not find that immersion harmed long-term literacy.",
      },
      {
        text: "Age is frequently misunderstood. It is true that young children pick up pronunciation with less effort. It is not true that adults cannot become highly proficient. Adults learn grammar rules faster in the early months because they already know how to study. What they usually lack is time and a willingness to sound foolish. Immigrants who need the language for work often progress more in a year than teenagers who study it for three hours a week at school.",
      },
      {
        text: "There is a popular belief that bilingual people have two equal languages in their heads at all times. In practice, one language is usually dominant, and the balance shifts with use. A person who spoke Polish at home and then worked in English for twenty years may struggle to discuss their job in Polish, while remaining fluent about family life. This is not a failure of memory so much as a picture of where each language has been used.",
      },
      {
        text: "Translation is a poor measure of skill in the early stages. Learners who can hold a conversation sometimes freeze when asked to translate sentence by sentence, because conversation allows them to choose the words they know. Examiners who test only through translation therefore underestimate what a learner can do in real situations. The reverse is also possible: a student who translates accurately on paper may not manage the speed of speech.",
      },
      {
        text: "The social effect is the hardest to measure. Learning a language does not guarantee an open mind. It does make certain experiences available: reading a newspaper that your neighbours read, or understanding a joke that does not survive translation. People who never need those experiences can pass an exam and remain uninterested in the culture. The language is a door. Walking through it is a separate decision.",
      },
    ],
    questions: [
      {
        kind: "mcq",
        prompt: "Research on bilingual children suggests that their advantage",
        options: [
          "appears strongly in every school subject.",
          "is mainly a modest one, on attention and switching tasks.",
          "has been shown to be a myth.",
          "is larger in science than in any other area.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "In the Canadian immersion study, pupils in the first two years",
        options: [
          "were better at English spelling than other pupils.",
          "never caught up in reading.",
          "were behind in English spelling at the start.",
          "left school earlier than their peers.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "Why did some parents remove their children from immersion?",
        options: [
          "The study told them literacy would be harmed.",
          "They reacted to early difficulty, before the later catch-up.",
          "Their children had already surpassed other pupils.",
          "French was removed from the school.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "According to the passage, adults learning a language",
        options: [
          "cannot reach a high level of proficiency.",
          "learn pronunciation faster than young children.",
          "often learn early grammar faster because they know how to study.",
          "always progress more slowly than school teenagers.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "Immigrants who need a language for work",
        options: [
          "usually progress less than teenagers with three lessons a week.",
          "may progress more in a year than those teenagers.",
          "cannot learn pronunciation.",
          "avoid grammar in the early months.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "The example of the Polish speaker is used to show that",
        options: [
          "bilingual people always control both languages equally.",
          "losing a language is always a failure of memory.",
          "the stronger language depends on where it has been used.",
          "English replaces a first language completely after twenty years.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "Why can conversation be easier than translation for learners?",
        options: [
          "Translation uses easier grammar.",
          "Conversation lets them choose words they already know.",
          "Examiners prefer translation.",
          "Speech is always slower than writing.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "A student who translates well on paper",
        options: [
          "will certainly speak at a natural speed.",
          "may still struggle with the speed of speech.",
          "cannot pass a written exam.",
          "has no need to practise listening.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "What does the writer say about the social effect of language learning?",
        options: [
          "It is easy to measure in examinations.",
          "It guarantees that a learner becomes open-minded.",
          "It is possible to pass an exam and still ignore the culture.",
          "Jokes are always easy to translate.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "The phrase \"the language is a door\" means that",
        options: [
          "a language course includes travel.",
          "knowing the language creates a possibility, not an automatic result.",
          "doors are a common topic in language exams.",
          "learners should study architecture.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "The Canadian study's long-term finding on literacy was that immersion",
        options: [
          "damaged it.",
          "did not harm it.",
          "made spelling worse permanently.",
          "was abandoned by the schools.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "Young children, compared with adults, generally",
        options: [
          "find pronunciation less of a struggle.",
          "learn grammar rules faster in the first months.",
          "refuse to sound foolish.",
          "need the language for work.",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "r6",
    part: 6,
    title: "Storing electricity for the days without wind",
    focus: "Matching headings + multiple choice",
    headings: [
      "i  A battery that dominates short gaps",
      "ii  Why extra cables are not the whole answer",
      "iii  A method that already powers most cities",
      "iv  The problem of a calm, dark week",
      "v  Hydrogen as a slow, leaky store",
      "vi  Old mines given a second job",
      "vii  Several tools, not a single winner",
      "viii  How households changed the evening peak",
    ],
    paragraphs: [
      {
        label: "A",
        text: "Wind and solar power are now cheap enough, in many regions, to undercut coal on a sunny or windy afternoon. The difficulty begins when the weather refuses to cooperate. A week of low wind in winter, combined with short days, is sometimes called a dunkelflaute in the German debate: a dark lull. During those periods a grid that relies on renewables must either burn something else, import power, or draw on energy stored earlier. Building more turbines does not, by itself, fill a week when all of them are nearly still.",
      },
      {
        label: "B",
        text: "Lithium-ion batteries, the kind used in cars and phones, have become the default way to cover short gaps. They can release a large amount of power within seconds, which is exactly what a grid needs when a cloud passes over a solar farm. They are far less suitable for storing energy across several days. The cost of keeping a lithium battery charged and idle for a week is high, and the materials are needed in vehicles. Most engineers now treat them as a tool for hours, not for seasons.",
      },
      {
        label: "C",
        text: "One older method is making a comeback in new places. Pumped hydro stores energy by pumping water uphill when power is cheap and letting it run down through turbines later. It works, and it lasts for decades, but it needs a hill and a permit. A handful of companies are testing a dry version in disused mine shafts: a heavy weight is winched up when electricity is plentiful and lowered when it is scarce. The idea is simple. Whether it can be built cheaply at the scale of a city is still an open question. No commercial mine-shaft system yet supplies a whole town.",
      },
      {
        label: "D",
        text: "Hydrogen attracts attention because it can, in theory, hold energy for months. Electricity splits water; the hydrogen is stored; later it is burned or passed through a fuel cell. Each step loses energy. In current demonstrations, less than half of the original electricity is returned, and storage tanks must be watched for leaks. Supporters argue that the losses are acceptable if the alternative is wasting surplus summer power. Critics reply that a process which throws away so much energy will struggle to compete unless equipment becomes much cheaper.",
      },
      {
        label: "E",
        text: "Connecting distant regions with new transmission lines is often presented as a substitute for storage. If the wind is blowing in one country, the argument goes, a cable can carry the power to a country that is becalmed. Interconnectors do help, and Europe has added several. They do not abolish the problem. A large weather system can sit over half a continent, leaving many linked countries short at the same time. Cables also take years to approve, and the public objection is sometimes stronger than the engineering difficulty.",
      },
      {
        label: "F",
        text: "The practical path that most system planners describe is a mixture, not a single winner. Batteries cover the fast changes within a day. Hydro and, perhaps, weights in shafts cover longer stretches where the geography allows. Hydrogen may have a role for the rare worst weeks, if its costs fall. And some gas plants remain, ideally run less and less often, as insurance. Anyone who offers one technology as the complete answer is selling a simpler problem than the one the grid actually has.",
      },
    ],
    questions: [
      { kind: "heading", paragraph: "A", answer: 3 },
      { kind: "heading", paragraph: "B", answer: 0 },
      { kind: "heading", paragraph: "C", answer: 5 },
      { kind: "heading", paragraph: "D", answer: 4 },
      { kind: "heading", paragraph: "E", answer: 1 },
      { kind: "heading", paragraph: "F", answer: 6 },
      {
        kind: "mcq",
        prompt: "A dunkelflaute is best described as",
        options: [
          "a surplus of summer solar power.",
          "a period of little wind and little daylight.",
          "a type of lithium battery.",
          "a new transmission cable.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "Lithium-ion batteries are described as most useful for",
        options: [
          "storing energy across a whole season.",
          "replacing vehicles.",
          "short gaps, such as a passing cloud.",
          "pumping water uphill.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "What is said about weight-based storage in mine shafts?",
        options: [
          "It already powers entire towns commercially.",
          "It is too complicated to explain.",
          "It has not yet been shown to supply a whole town at a commercial scale.",
          "It requires no construction.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "Current hydrogen demonstrations",
        options: [
          "return most of the electricity that was put in.",
          "return less than half of the original electricity.",
          "do not involve any energy loss.",
          "have replaced all gas plants.",
        ],
        answer: 1,
      },
      {
        kind: "mcq",
        prompt: "New transmission lines fail to solve the whole problem because",
        options: [
          "electricity cannot travel through cables.",
          "Europe has refused to build any.",
          "a large weather system can leave many connected countries short together.",
          "they store hydrogen.",
        ],
        answer: 2,
      },
      {
        kind: "mcq",
        prompt: "The writer's conclusion is that",
        options: [
          "one technology will soon do every job.",
          "gas plants should run more often each year.",
          "planners need a mix of tools for different timescales.",
          "batteries are useless within a single day.",
        ],
        answer: 2,
      },
    ],
  },
];
