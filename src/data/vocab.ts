export type Vocab = {
  word: string;
  phonetic: string;
  translation: string;
  example: string;
  level: "A2" | "B1" | "B2" | "C1" | "C2";
};

export const VOCAB: Vocab[] = [
  { word: "achieve", phonetic: "/əˈtʃiːv/", translation: "достигать", example: "She worked hard to achieve her goals.", level: "A2" },
  { word: "advice", phonetic: "/ədˈvaɪs/", translation: "совет", example: "Can you give me some advice?", level: "A2" },
  { word: "avoid", phonetic: "/əˈvɔɪd/", translation: "избегать", example: "Try to avoid junk food.", level: "A2" },
  { word: "borrow", phonetic: "/ˈbɒrəʊ/", translation: "брать взаймы", example: "Can I borrow your pen?", level: "A2" },
  { word: "decide", phonetic: "/dɪˈsaɪd/", translation: "решать", example: "We need to decide quickly.", level: "A2" },
  { word: "describe", phonetic: "/dɪˈskraɪb/", translation: "описывать", example: "Can you describe what you saw?", level: "A2" },
  { word: "expect", phonetic: "/ɪkˈspekt/", translation: "ожидать", example: "I expect the train to be late.", level: "A2" },
  { word: "improve", phonetic: "/ɪmˈpruːv/", translation: "улучшать", example: "Daily practice will improve your English.", level: "A2" },
  { word: "prefer", phonetic: "/prɪˈfɜː/", translation: "предпочитать", example: "I prefer tea to coffee.", level: "A2" },
  { word: "suggest", phonetic: "/səˈdʒest/", translation: "предлагать", example: "I suggest we leave early.", level: "A2" },
  { word: "admit", phonetic: "/ədˈmɪt/", translation: "признавать", example: "He admitted that he was wrong.", level: "B1" },
  { word: "afford", phonetic: "/əˈfɔːd/", translation: "позволять себе", example: "I can't afford a new laptop yet.", level: "B1" },
  { word: "appreciate", phonetic: "/əˈpriːʃieɪt/", translation: "ценить", example: "I really appreciate your help.", level: "B1" },
  { word: "assume", phonetic: "/əˈsjuːm/", translation: "предполагать", example: "Don't assume the worst.", level: "B1" },
  { word: "benefit", phonetic: "/ˈbenɪfɪt/", translation: "польза", example: "Exercise has clear health benefits.", level: "B1" },
  { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", translation: "сложная задача", example: "Learning a language is a real challenge.", level: "B1" },
  { word: "convince", phonetic: "/kənˈvɪns/", translation: "убеждать", example: "She convinced me to apply.", level: "B1" },
  { word: "deserve", phonetic: "/dɪˈzɜːv/", translation: "заслуживать", example: "You deserve a break.", level: "B1" },
  { word: "establish", phonetic: "/ɪˈstæblɪʃ/", translation: "устанавливать", example: "They established a small school.", level: "B1" },
  { word: "expand", phonetic: "/ɪkˈspænd/", translation: "расширять", example: "The shop plans to expand next year.", level: "B1" },
  { word: "accurate", phonetic: "/ˈækjərət/", translation: "точный", example: "The figures must be accurate.", level: "B2" },
  { word: "coherent", phonetic: "/kəʊˈhɪərənt/", translation: "связный", example: "Write a coherent paragraph.", level: "B2" },
  { word: "diverse", phonetic: "/daɪˈvɜːs/", translation: "разнообразный", example: "The city has a diverse population.", level: "B2" },
  { word: "efficient", phonetic: "/ɪˈfɪʃnt/", translation: "эффективный", example: "This is a more efficient method.", level: "B2" },
  { word: "essential", phonetic: "/ɪˈsenʃl/", translation: "необходимый", example: "Sleep is essential for memory.", level: "B2" },
  { word: "flexible", phonetic: "/ˈfleksəbl/", translation: "гибкий", example: "My hours are quite flexible.", level: "B2" },
  { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", translation: "неизбежный", example: "Some change is inevitable.", level: "B2" },
  { word: "persuasive", phonetic: "/pəˈsweɪsɪv/", translation: "убедительный", example: "She made a persuasive case.", level: "B2" },
  { word: "resilient", phonetic: "/rɪˈzɪliənt/", translation: "стойкий", example: "Children can be remarkably resilient.", level: "B2" },
  { word: "subtle", phonetic: "/ˈsʌtl/", translation: "тонкий, едва заметный", example: "There was a subtle change in tone.", level: "B2" },
  { word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", translation: "двусмысленный", example: "The instruction is ambiguous.", level: "C1" },
  { word: "articulate", phonetic: "/ɑːˈtɪkjələt/", translation: "чётко формулировать", example: "She can articulate complex ideas clearly.", level: "C1" },
  { word: "compelling", phonetic: "/kəmˈpelɪŋ/", translation: "убедительный, захватывающий", example: "The evidence is compelling.", level: "C1" },
  { word: "convey", phonetic: "/kənˈveɪ/", translation: "передавать смысл", example: "It is hard to convey the mood in writing.", level: "C1" },
  { word: "indispensable", phonetic: "/ˌɪndɪˈspensəbl/", translation: "незаменимый", example: "A good dictionary is indispensable.", level: "C1" },
  { word: "meticulous", phonetic: "/məˈtɪkjələs/", translation: "тщательный", example: "She is meticulous about details.", level: "C1" },
  { word: "pragmatic", phonetic: "/præɡˈmætɪk/", translation: "прагматичный", example: "We need a pragmatic solution.", level: "C1" },
  { word: "profound", phonetic: "/prəˈfaʊnd/", translation: "глубокий", example: "The book had a profound effect on me.", level: "C1" },
  { word: "scrutinise", phonetic: "/ˈskruːtənaɪz/", translation: "тщательно изучать", example: "Examiners scrutinise every claim.", level: "C1" },
  { word: "substantial", phonetic: "/səbˈstænʃl/", translation: "значительный", example: "There has been a substantial rise.", level: "C1" },
  { word: "tentative", phonetic: "/ˈtentətɪv/", translation: "предварительный", example: "We have only a tentative plan.", level: "C1" },
  { word: "ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", translation: "вездесущий", example: "Smartphones are now ubiquitous.", level: "C1" },
  { word: "conundrum", phonetic: "/kəˈnʌndrəm/", translation: "запутанная проблема", example: "Funding the repairs is a real conundrum.", level: "C2" },
  { word: "elusive", phonetic: "/ɪˈluːsɪv/", translation: "неуловимый", example: "A clear answer remains elusive.", level: "C2" },
  { word: "ephemeral", phonetic: "/ɪˈfemərəl/", translation: "мимолетный", example: "Online fame is often ephemeral.", level: "C2" },
  { word: "exacerbate", phonetic: "/ɪɡˈzæsəbeɪt/", translation: "усугублять", example: "The delay only exacerbated the problem.", level: "C2" },
  { word: "lucid", phonetic: "/ˈluːsɪd/", translation: "ясный", example: "She gave a lucid explanation.", level: "C2" },
  { word: "nuanced", phonetic: "/ˈnjuːɑːnst/", translation: "с нюансами", example: "His view is more nuanced than it first seems.", level: "C2" },
  { word: "paradigm", phonetic: "/ˈpærədaɪm/", translation: "модель, парадигма", example: "The study challenges the old paradigm.", level: "C2" },
  { word: "unprecedented", phonetic: "/ʌnˈpresɪdentɪd/", translation: "беспрецедентный", example: "Demand has reached an unprecedented level.", level: "C2" },
];

export const LEVELS = ["all", "A2", "B1", "B2", "C1", "C2"] as const;
