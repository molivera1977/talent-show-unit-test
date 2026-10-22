/* ═══════════════════════════════════════════════════════
   THE TALENT SHOW — TEST · WRITTEN RESPONSE (#21, #22)
   R.A.D. FILL-IN (Marcos 10/21): like the R.A.D. review homework, but with
   boxes to type in — "no lines that need to be deleted".
   - r = the Restate line, printed in full (nothing to type).
   - a, d = the Answer and Detail sentences. Each {…} is a box the student
     fills with words found on the cited story page. "a|b" = forms accepted
     as matching the story (the sheet row reports "boxes that match").
   - Graded by the teacher (not auto-scored). Box words do not repeat the
     review homework's blanks.
═══════════════════════════════════════════════════════ */
window.WRITTEN_DIRECTIONS = 'Each answer is a R.A.D. answer with some words missing. R is done for you. Find the missing words in the story and type them in the boxes. Then type your whole R.A.D. answer in the big box.';

/* What each letter means — the same names as the R.A.D. Online Quiz */
window.RAD_STEPS = [
  { key: 'R', name: 'Restate', tip: 'This part is done for you. Read it.' },
  { key: 'A', name: 'Answer',  tip: 'Find the missing words in the story. Type them in the boxes.' },
  { key: 'D', name: 'Detail',  tip: 'Find the missing words that tell more. Type them in the boxes.' }
];

window.WRITTEN_PROMPTS = [
  {
    id: 'W1',
    label: 'Question 21',
    prompt: 'How does Maura change from the beginning of the story to the end? Use details from pages 35 and 37.',
    r: 'From the beginning of the story to the end, Maura changes.',
    a: 'At the beginning, Maura {hesitated|hesitate} and let Tina {take charge|takes charge}. At the end, Maura stands up for herself.',
    d: 'When Maura got home, she took 12 deep {breaths|breath}, called Tina, and told her she was going to do her {juggling|juggle} act.'
  },
  {
    id: 'W2',
    label: 'Question 22',
    prompt: 'The Essential Question asks, “How do your actions affect others?” How did Tina’s actions affect Maura? Use details from page 36.',
    r: 'Tina’s actions affected Maura.',
    a: 'When Tina said no to the juggling act, Maura ran around the {track} to let off {steam}.',
    d: 'Tina said she could not learn to {juggle|juggling} in three weeks, and she did not want to be {humiliated}.'
  }
];
