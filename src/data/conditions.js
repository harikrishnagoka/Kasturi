/**
 * The three conditions the centre is named for.
 *
 * Copy rule for this whole file: name symptoms in the words a patient would
 * actually use, not clinical shorthand. People search "blood while passing
 * motion", not "haematochezia" — and someone who recognises their own symptom
 * in plain language is far more likely to pick up the phone.
 *
 * MEDICAL REVIEW REQUIRED: every clinical claim below must be checked and
 * signed off by Dr. Venkanna Kasturi before this site goes live.
 */

export const conditions = [
  {
    slug: 'piles',
    name: 'Piles',
    nameTe: 'మూలవ్యాధి',
    ayurvedicName: 'Arsha',
    also: 'Haemorrhoids',
    title: 'Piles treatment in Medipally, Hyderabad',
    description:
      'Ayurvedic piles (haemorrhoids) treatment in Medipally, Hyderabad. Kshara Sutra and Kshara Karma by Dr. Venkanna Kasturi, MS (Ayurveda). No general anaesthesia, same-day discharge.',
    summary:
      'Swollen veins in and around the back passage. They are extremely common, they are not dangerous in themselves, and they are very treatable — most people simply wait far longer than they need to before getting help.',
    symptoms: [
      'Bright red blood while passing motion, often on the paper or in the pan',
      'A lump or swelling near the back passage that you can feel',
      'Itching, dampness or irritation around the area',
      'A dragging feeling, or the sense that you have not finished',
      'Pain when sitting for long periods',
    ],
    causes: [
      'Long-standing constipation and straining',
      'Sitting for many hours a day — desk work, driving',
      'Low-fibre diet and not enough water',
      'Pregnancy and childbirth',
      'Heavy lifting, and a family tendency towards it',
    ],
    treatment: {
      lead: 'Kshara Karma and Kshara Sutra',
      body:
        'Early-stage piles often settle with internal medicines, diet correction and local applications. For piles that keep coming back or have progressed, Kshara Karma — the controlled application of a medicated alkaline paste — shrinks the pile mass without cutting it away. Larger or prolapsing piles may be treated with Kshara Sutra.',
    },
    stages: [
      { grade: 'Grade 1', detail: 'Bleeding, but nothing comes out. Usually managed with medicines and diet.' },
      { grade: 'Grade 2', detail: 'Comes out while passing motion, goes back on its own.' },
      { grade: 'Grade 3', detail: 'Comes out and has to be pushed back by hand. Kshara treatment is usually advised.' },
      { grade: 'Grade 4', detail: 'Stays out permanently. Needs prompt assessment.' },
    ],
    faqs: [
      {
        q: 'Is piles treatment painful?',
        a: 'Kshara Karma is done under local anaesthesia, so the procedure itself is not painful. There is soreness for a few days afterwards, which is managed with medication. It is considerably less painful than conventional excision surgery, which is one of the main reasons patients choose it.',
      },
      {
        q: 'Will I need to be admitted overnight?',
        a: 'In most cases, no. It is a day procedure — you come in, it is done, and you go home the same day. You will be asked to come back for follow-up dressings and review.',
      },
      {
        q: 'How soon can I go back to work?',
        a: 'Most people with desk jobs return within two to four days. If your work involves heavy lifting or long hours of riding, the doctor will usually advise a longer gap.',
      },
      {
        q: 'Will the piles come back after treatment?',
        a: 'Kshara treatment has a low recurrence rate, but piles are strongly linked to how your bowels behave day to day. If constipation and straining continue, the problem can return. Diet and habit correction is a real part of the treatment, not an afterthought.',
      },
      {
        q: 'Do I have to be examined? I am embarrassed.',
        a: 'An examination is necessary to grade the problem correctly and rule out anything more serious. It is brief, done privately, and the doctor does this every single day. Nearly every patient says afterwards that the worry was worse than the visit.',
      },
    ],
  },

  {
    slug: 'fistula',
    name: 'Fistula',
    nameTe: 'భగందరం',
    ayurvedicName: 'Bhagandara',
    also: 'Fistula-in-ano',
    title: 'Fistula treatment in Medipally, Hyderabad — Kshara Sutra',
    description:
      'Ayurvedic fistula-in-ano treatment in Medipally, Hyderabad using Kshara Sutra, the thread procedure with a low recurrence rate. Dr. Venkanna Kasturi, MS (Ayurveda).',
    summary:
      'A small abnormal tunnel that forms between the anal canal and the skin outside, usually after an infection or abscess. It does not heal on its own, and it is the condition Kshara Sutra is best known for treating.',
    symptoms: [
      'A small opening near the back passage that leaks pus, discharge or blood',
      'Recurring swelling or a boil-like lump that bursts and then returns',
      'Discharge that stains your underclothes',
      'Throbbing pain that eases after the swelling drains',
      'Sometimes fever when it flares up',
    ],
    causes: [
      'A previous anal abscess that drained but never fully healed',
      'Infection of the small glands inside the anal canal',
      'Long-standing fissures or inflammatory bowel conditions',
      'Occasionally tuberculosis or an injury to the area',
    ],
    treatment: {
      lead: 'Kshara Sutra — the treatment of choice',
      body:
        'A fistula tunnel has to be dealt with along its full length or it simply comes back. Kshara Sutra threads a medicated ligature through the tract; it slowly cuts through and simultaneously heals behind itself as it goes. The thread is changed weekly. Because it does not require cutting away large amounts of tissue, the risk of damage to the muscles that control continence is low — this is the key advantage over conventional fistulectomy.',
    },
    stages: [
      { grade: 'Simple fistula', detail: 'A single, shallow tract. Usually resolves over a few thread changes.' },
      { grade: 'Complex / high fistula', detail: 'Branching or deeper tracts. Takes longer, but the muscle-sparing nature of Kshara Sutra matters most here.' },
      { grade: 'Recurrent fistula', detail: 'Has returned after previous surgery elsewhere. Commonly referred for Kshara Sutra.' },
    ],
    faqs: [
      {
        q: 'How long does Kshara Sutra treatment take?',
        a: 'It depends on the length and complexity of the tract. A simple fistula may take around four to six weeks; a longer or branching tract can take longer. The thread is changed once a week, and each change is a short outpatient visit.',
      },
      {
        q: 'Why not just have surgery and be done with it?',
        a: 'Conventional fistula surgery works, but for higher or complex tracts it carries a real risk of affecting the sphincter muscles, which control continence. Kshara Sutra cuts and heals gradually along the same line, which is why it is often preferred — particularly for patients whose fistula has already come back once.',
      },
      {
        q: 'My fistula came back after an operation. Can it still be treated?',
        a: 'Yes. Recurrent fistula after previous surgery is one of the most common reasons patients come here. Bring any earlier operation notes or scans with you.',
      },
      {
        q: 'Can I work during the treatment?',
        a: 'Most patients continue working throughout. You come in once a week for the thread change and carry on as normal in between, with some care about hygiene and sitting for long stretches.',
      },
      {
        q: 'Is the weekly thread change painful?',
        a: 'There is discomfort for a short while during and after the change, but it is brief and manageable. Patients generally describe it as far more tolerable than they expected.',
      },
    ],
  },

  {
    slug: 'fissure',
    name: 'Fissure',
    nameTe: 'పాయువు పగుళ్లు',
    ayurvedicName: 'Parikartika',
    also: 'Anal fissure',
    title: 'Anal fissure treatment in Medipally, Hyderabad',
    description:
      'Ayurvedic anal fissure (Parikartika) treatment in Medipally, Hyderabad. Relief from tearing pain while passing motion, without surgery in most cases. Dr. Venkanna Kasturi, MS (Ayurveda).',
    summary:
      'A small tear in the lining of the anal canal. It causes pain out of all proportion to its size, and it traps people in a cycle: passing motion hurts, so they avoid it, so stools get harder, so the tear gets worse.',
    symptoms: [
      'Sharp, tearing or knife-like pain while passing motion',
      'Pain that carries on for minutes to hours afterwards',
      'A small streak of bright red blood on the paper',
      'Fear or dread of going to the toilet',
      'A spasm or tightness in the back passage',
    ],
    causes: [
      'Hard stools and straining — by far the most common cause',
      'Long-standing constipation, or bouts of loose motion',
      'Very spicy food and low water intake',
      'After childbirth',
      'Tight anal sphincter muscle, which keeps the tear from healing',
    ],
    treatment: {
      lead: 'Usually treated without surgery',
      body:
        'Most fissures respond to a combination of internal medicines to soften stools, local medicated applications to relieve the muscle spasm, and sitz baths. The aim is to break the pain–constipation–spasm cycle so the tear can heal. Long-standing fissures that have thickened or developed a sentinel tag may need Kshara application or a small procedure.',
    },
    stages: [
      { grade: 'Acute fissure', detail: 'Recent, and heals well with medicines, diet and local care.' },
      { grade: 'Chronic fissure', detail: 'Present for weeks or months, edges thickened. Often needs Kshara treatment.' },
      { grade: 'With sentinel tag', detail: 'A skin tag has formed at the edge. The tag may need to be removed alongside treating the fissure.' },
    ],
    faqs: [
      {
        q: 'Can a fissure heal without surgery?',
        a: 'Yes — most acute fissures heal with medicines, stool softening and local applications, without any procedure at all. Surgery or Kshara application is reserved for fissures that have become chronic or have not responded.',
      },
      {
        q: 'How quickly will the pain settle?',
        a: 'Many patients notice a meaningful reduction in pain within the first week of treatment, though full healing takes longer. The important thing is not to stop treatment as soon as the pain eases, because that is when fissures relapse.',
      },
      {
        q: 'Is it piles or a fissure?',
        a: 'They are often confused. As a rough guide, piles usually cause painless bleeding and a lump, while a fissure causes severe pain during and after passing motion with only a small streak of blood. Only an examination can tell for certain, and the two can occur together.',
      },
      {
        q: 'What should I eat?',
        a: 'More fibre, considerably more water, and much less chilli and fried food while it heals. The doctor will give you specific guidance — diet is not optional advice here, it is a substantial part of why fissures heal or do not.',
      },
    ],
  },
];

export const getCondition = (slug) => conditions.find((c) => c.slug === slug);
