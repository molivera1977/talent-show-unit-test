/* ═══════════════════════════════════════════════════════
   THE TALENT SHOW — TEST QUESTION BANKS (built 2026-10-22)
   Written new for this year's class (Marcos 10/21: never last year's test).
   The review and the test cover the same words and the same story parts
   with different sentences and stems.
     VOCAB_BANK  24 items, each word once: 12 definitions (V01–V24 ids) + 12 word usage (V25–V48 ids);
                 the words swap between the review and the test
     COMP_BANK   P01–P10 story details · P11–P20 Part A / Part B pairs
     CLOZE_BANK  C01–C24 (same word per id on both; new sentence)
   answer = index into choices (choices are shuffled at run time).
   page = the story page (34–37) the story panel opens to.
   The teacher dashboard reads this file (REVIEW_FILES) — keep ids stable.
═══════════════════════════════════════════════════════ */

/* Part II: the sentence, with the word underlined, then the question */
function tsInContext(sentence, word) {
  const underlined = sentence.replace(new RegExp('\\b' + word + '\\b', 'i'), m => `<u>${m}</u>`);
  return `${underlined}<br>What does <b>${word}</b> mean in this sentence?`;
}

window.VOCAB_BANK = [
  /* ── PART I: DEFINITIONS (12 words; the other 12 are asked this way on the review) ── */
  { id:"V01", q:"Which word means “a tight hold on something”?", choices:["grip","routine","surprise","individual"], answer:0 },
  { id:"V03", q:"Which word means “in a way that does not feel good”?", choices:["desperately","besides","uncomfortably","carefully"], answer:2 },
  { id:"V05", q:"Which word means “to start talking before someone else is finished”?", choices:["interrupt","consider","describe","worry"], answer:0 },
  { id:"V07", q:"Which word means “feeling upset because something does not seem fair”?", choices:["accountable","curt","resentful","respectful"], answer:2 },
  { id:"V09", q:"Which word means “in a way that shows you want something very badly”?", choices:["desperately","carefully","uncomfortably","besides"], answer:0 },
  { id:"V11", q:"Which word means “a set of moves that you practice and then perform”?", choices:["inspiration","self-esteem","routine","grip"], answer:2 },
  { id:"V13", q:"Which word means “feeling very embarrassed in front of other people”?", choices:["humiliated","respectful","accountable","curt"], answer:0 },
  { id:"V15", q:"Which word means “showing that you care about other people and their ideas”?", choices:["humiliated","curt","respectful","resentful"], answer:2 },
  { id:"V17", q:"Which word means “to tell someone what you think he or she should do”?", choices:["advise","describe","interrupt","worry"], answer:0 },
  { id:"V19", q:"Which word means “the good feeling you have about yourself”?", choices:["routine","individual","self-esteem","surprise"], answer:2 },
  { id:"V21", q:"Which word means “to keep thinking that something bad might happen”?", choices:["worry","describe","advise","take charge"], answer:0 },
  { id:"V23", q:"Which word means “something that you did not expect”?", choices:["self-esteem","routine","surprise","inspiration"], answer:2 },
  /* ── PART II: WORD USAGE (test: 12 of the 24 words; the other 12 are on the review) ── */
  { id:"V26", q:tsInContext("That huge pizza is too much food for one individual to eat.", "individual"), choices:["a tight hold on something","the good feeling you have about yourself","a set of moves that you practice and then perform","one person alone, not a group"], answer:3 },
  { id:"V28", q:tsInContext("Jon hesitated for a moment before he petted the big, barking dog.", "hesitated"), choices:["to think carefully about something","stopped for a moment before doing or saying something","to start talking before someone else is finished","to tell what someone or something is like"], answer:1 },
  { id:"V30", q:tsInContext("Mom will take charge if the power goes out, and she will hand out flashlights.", "take charge"), choices:["to think carefully about something","to keep thinking that something bad might happen","to start talking before someone else is finished","to be the one who leads and decides what to do"], answer:3 },
  { id:"V32", q:tsInContext("When our car got stuck in the mud, Dad called for help to get us out of that situation.", "situation"), choices:["one person alone, not a group","what is happening at a certain time","something that gives you an idea","a tight hold on something"], answer:1 },
  { id:"V34", q:tsInContext("Watching the birds outside gave Eva the inspiration to build a birdhouse.", "inspiration"), choices:["something that you did not expect","what is happening at a certain time","the good feeling you have about yourself","something that gives you an idea"], answer:3 },
  { id:"V36", q:tsInContext("Lucy wanted to consider every flavor before she picked her ice cream.", "consider"), choices:["to speak up for yourself or for someone else","to think carefully about something","to tell someone what you think he or she should do","to start talking before someone else is finished"], answer:1 },
  { id:"V38", q:tsInContext("Nina carefully put the last block on top so the tall tower would not fall.", "carefully"), choices:["in a way that does not feel good","in a way that shows you want something very badly","in addition to what was already said","in a way that pays close attention"], answer:3 },
  { id:"V40", q:tsInContext("Mira is accountable for her library book, so she must pay if she loses it.", "accountable"), choices:["feeling upset because something does not seem fair","responsible for what you do","showing that you care about other people and their ideas","short and not friendly when speaking"], answer:1 },
  { id:"V42", q:tsInContext("This coat is too small for me, and besides, it has a big hole in it.", "besides"), choices:["in a way that pays close attention","in a way that does not feel good","in a way that shows you want something very badly","in addition to what was already said"], answer:3 },
  { id:"V44", q:tsInContext("My big brother was curt with me this morning and only said, “Go away.”", "curt"), choices:["feeling very embarrassed in front of other people","short and not friendly when speaking","responsible for what you do","showing that you care about other people and their ideas"], answer:1 },
  { id:"V46", q:tsInContext("Grandma asked me to describe my new room, so I told her it has blue walls.", "describe"), choices:["to tell someone what you think he or she should do","to keep thinking that something bad might happen","stopped for a moment before doing or saying something","to tell what someone or something is like"], answer:3 },
  { id:"V48", q:tsInContext("A big kid cut in front of my friend in line, so I chose to stand up for her.", "stand up"), choices:["to tell what someone or something is like","to speak up for yourself or for someone else","stopped for a moment before doing or saying something","to think carefully about something"], answer:1 },
];

window.COMP_BANK = [
  /* ── PART I: STORY DETAILS ────────────────────────── */
  { id:"P01", page:35, q:"Maura knew someone would help her with her act for the show. Who was it? (page 35)", choices:["her older brother","her grandmother","Tina’s mother","her math teacher"], answer:0 },
  { id:"P02", page:35, q:"Tina pointed to the poster. It says acts can be individuals, partners, or what? (page 35)", choices:["small groups","whole classes","big teams","grown-ups"], answer:0 },
  { id:"P03", page:35, q:"Tina interrupted Maura. When did Tina say they should talk? (page 35)", choices:["at lunch","at recess","after school","during math"], answer:0 },
  { id:"P04", page:35, q:"Maura tells about a problem with Tina. What does Tina always do? (page 35)", choices:["takes charge","tells jokes","shows up late","forgets her books"], answer:0 },
  { id:"P05", page:36, q:"Tina said someone can make them costumes. Who was it? (page 36)", choices:["Tina’s mother","Maura’s grandmother","Maura’s brother","the art teacher"], answer:0 },
  { id:"P06", page:36, q:"Who is telling the story when it says, “I told her about my juggling act”? (page 36)", choices:["Maura","Tina","Tina’s mother","Maura’s grandmother"], answer:0 },
  { id:"P07", page:36, q:"Maura’s grandmother drove for a while before she finally said something. How long did she drive? (page 36)", choices:["a few minutes","a few hours","about one second","all afternoon"], answer:0 },
  { id:"P08", page:37, q:"Maura’s grandmother said it wouldn’t hurt to let Tina know something. What should Maura let Tina know? (page 37)", choices:["what Maura wants","how to juggle balls","when the show starts","where to buy costumes"], answer:0 },
  { id:"P09", page:37, q:"Maura called Tina. How was Tina on the phone? (page 37)", choices:["She was curt.","She was cheerful.","She was silly.","She was excited."], answer:0 },
  { id:"P10", page:37, q:"At the end of the story, what does Maura say standing up for herself did? (page 37)", choices:["It did pay off.","It made Tina leave.","It hurt her act.","It was a mistake."], answer:0 },
  /* ── PART II: INFERENCES, CONCLUSIONS, AND EVIDENCE (A/B pairs) ── */
  { id:"P11", page:35, q:"Part A: What can the reader infer about Maura right before Tina interrupts her? (page 35)", choices:["She is nervous about sharing her idea.","She is proud and ready to show off.","She is bored and wants to go home.","She is happy to go along with Tina."], answer:0 },
  { id:"P12", page:35, q:"Part B: Which sentence from page 35 best supports the answer to Part A?", choices:["“I hesitated for a second before continuing.”","“After all, we are best friends; we should be able to see eye to eye about this.”","“My older brother had been teaching me juggling, and I knew he’d help me with my act for the show.”","“I wanted to win on my own—with an act that was all mine.”"], answer:0 },
  { id:"P13", page:35, q:"Part A: Why does Maura not want to do an act with Tina? (page 35)", choices:["She wants to do an act all her own.","She thinks Tina is a bad singer.","She is too busy with her math work.","She does not like the talent show."], answer:0 },
  { id:"P14", page:35, q:"Part B: Which sentence from page 35 best supports the answer to Part A?", choices:["“During math, I tried to think of how I would tell Tina that I wanted to do my own act.”","“Tina ran over to the bulletin board and read the poster.”","“After all, we are best friends; we should be able to see eye to eye about this.”","“Tina interrupted me.”"], answer:0 },
  { id:"P15", page:36, q:"Part A: Tina says no to the juggling act. What can the reader infer about how this makes Maura feel? (page 36)", choices:["upset that Tina turned down her idea","glad that she will not have to juggle","proud that Tina liked her idea","tired from practicing all morning"], answer:0 },
  { id:"P16", page:36, q:"Part B: Which sentence from page 36 best supports the answer to Part A?", choices:["“At recess, I ran around the track a couple of times just to let off steam.”","“I told her about my juggling act.”","“At lunch, Tina started talking as soon as we sat down.”","“My inspiration came from that new TV show, You’ve Got Talent.”"], answer:0 },
  { id:"P17", page:36, q:"Part A: What can the reader conclude about how Maura acted when Tina shared her plan? (page 36)", choices:["Maura did not stand up for her own idea.","Maura hurt Tina’s feelings about the plan.","Maura wanted Tina to do the act alone.","Maura made the whole plan by herself."], answer:0 },
  { id:"P18", page:36, q:"Part B: Which sentence from page 36 best supports the answer to Part A?", choices:["“So, Tina is not being respectful of your ideas, but it sounds as if you aren’t either.”","“I explained about the talent show as she listened carefully.”","“Tina considered it.”","“I have it all planned out.”"], answer:0 },
  { id:"P19", page:37, q:"Part A: Maura stood up for herself. What can the reader conclude about how this action affected her friendship with Tina? (page 37)", choices:["They stay friends, and Maura gets a say, too.","They stop being friends after the phone call.","Tina still makes every choice for both of them.","They decide to do one act together after all."], answer:0 },
  { id:"P20", page:37, q:"Part B: Which sentence from page 37 best supports the answer to Part A?", choices:["“But the biggest surprise came at recess, when we played a game that I chose, not Tina.”","“She was curt on the phone, and I spent all night worrying she would be mad at me.”","“When we got home, I took 12 deep breaths, called Tina, and told her that I was going to do my juggling act.”","“I thought about this.”"], answer:0 },
];

window.COMP_PAIRS = [['P11','P12'], ['P13','P14'], ['P15','P16'], ['P17','P18'], ['P19','P20']];

window.CLOZE_BANK = [
  { id:"C01", q:"Use both hands to get a good __________ on the kite string when the wind blows hard.", choices:["grip","routine","inspiration"], answer:0 },
  { id:"C02", q:"The doctor checked one __________ at a time while the rest of the kids waited.", choices:["routine","individual","grip"], answer:1 },
  { id:"C03", q:"After eating three hot dogs, Ben felt __________ full.", choices:["carefully","besides","uncomfortably"], answer:2 },
  { id:"C04", q:"Grant __________ before he told Mom about the broken lamp.", choices:["hesitated","describe","worry"], answer:0 },
  { id:"C05", q:"Jamal waited for his friend to finish talking so he would not __________ her.", choices:["describe","interrupt","consider"], answer:1 },
  { id:"C06", q:"The babysitter told us she would __________ until Mom and Dad got home.", choices:["interrupt","describe","take charge"], answer:2 },
  { id:"C07", q:"Theo felt __________ when the teacher blamed him for a mess he did not make.", choices:["resentful","respectful","curt"], answer:0 },
  { id:"C08", q:"Water from the toilet spilled all over the floor, and Dad knew how to fix the __________.", choices:["inspiration","situation","routine"], answer:1 },
  { id:"C09", q:"Nico waved __________ at the bus driver because he did not want to miss the bus.", choices:["uncomfortably","besides","desperately"], answer:2 },
  { id:"C10", q:"The silly way my cat sleeps gave me the __________ for a funny comic.", choices:["inspiration","self-esteem","situation"], answer:0 },
  { id:"C11", q:"Our karate class performed a __________ of kicks and punches at the school fair.", choices:["surprise","routine","grip"], answer:1 },
  { id:"C12", q:"Our class will __________ three names for the new hamster before we vote.", choices:["interrupt","hesitated","consider"], answer:2 },
  { id:"C13", q:"Ezra was __________ when his mom kissed him at the bus stop while his friends watched.", choices:["humiliated","accountable","respectful"], answer:0 },
  { id:"C14", q:"Walk __________ on the wet floor so you do not slip.", choices:["desperately","carefully","besides"], answer:1 },
  { id:"C15", q:"Be __________ in the library, and use a quiet voice so others can read.", choices:["humiliated","resentful","respectful"], answer:2 },
  { id:"C16", q:"Ollie is __________ for packing his own soccer bag before each game.", choices:["accountable","curt","resentful"], answer:0 },
  { id:"C17", q:"Mom and Dad __________ me to wear a helmet every time I ride my bike.", choices:["describe","advise","interrupt"], answer:1 },
  { id:"C18", q:"We cannot get a cat because cats cost a lot, and __________, Dad sneezes around cats.", choices:["carefully","uncomfortably","besides"], answer:2 },
  { id:"C19", q:"When the class clapped for Hugo’s science project, his __________ grew, and he felt proud of himself.", choices:["self-esteem","routine","grip"], answer:0 },
  { id:"C20", q:"The angry man at the store gave us a __________ answer and would not help.", choices:["respectful","curt","accountable"], answer:1 },
  { id:"C21", q:"During the loud storm, my little brother began to __________ that a tree would fall.", choices:["describe","interrupt","worry"], answer:2 },
  { id:"C22", q:"At show-and-tell, Tess had to __________ her pet snake to the class.", choices:["describe","advise","worry"], answer:0 },
  { id:"C23", q:"When I opened my lunch box, the cookie from Mom was a sweet __________.", choices:["routine","surprise","self-esteem"], answer:1 },
  { id:"C24", q:"Ruth was brave enough to __________ for herself and tell the coach she wanted a turn to bat.", choices:["consider","describe","stand up"], answer:2 },
];
