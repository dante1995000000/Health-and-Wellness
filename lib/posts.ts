export type Category =
  | "Women's Health"
  | "Hormones & Cycle"
  | "Men's Health"
  | "Intimacy & Relationships"
  | "Daily Wellness";

export const categories: { name: Category; slug: string; dot: string; blurb: string }[] = [
  {
    name: "Women's Health",
    slug: "womens-health",
    dot: "bg-clay-500",
    blurb: "Pelvic floor, sexual wellness, and whole-body care for women.",
  },
  {
    name: "Hormones & Cycle",
    slug: "hormones-cycle",
    dot: "bg-gold-500",
    blurb: "Understanding your cycle, hormone health, and tracking with intention.",
  },
  {
    name: "Men's Health",
    slug: "mens-health",
    dot: "bg-sage-700",
    blurb: "Vitality, strength, and evidence-based care for men.",
  },
  {
    name: "Intimacy & Relationships",
    slug: "intimacy-relationships",
    dot: "bg-plum-500",
    blurb: "Connection, communication, and relationship wellness.",
  },
  {
    name: "Daily Wellness",
    slug: "daily-wellness",
    dot: "bg-sage-500",
    blurb: "Simple, evidence-based habits for everyday health.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  date: string;
  height: "short" | "medium" | "tall";
  image: string;
  author: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "understanding-pelvic-floor-health",
    title: "A Gentle Guide to Pelvic Floor Health",
    excerpt:
      "Why your pelvic floor matters at every life stage, and simple exercises to support it.",
    category: "Women's Health",
    readTime: "6 min read",
    date: "2026-06-02",
    height: "tall",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "The pelvic floor is a group of muscles that quietly does an enormous amount of work — supporting the bladder, bowel, and uterus, stabilizing the core, and playing a central role in sexual sensation. Yet most of us never think about it until something feels off.",
      "Pelvic floor dysfunction can show up as leaking when you laugh or sneeze, a feeling of heaviness, discomfort during intimacy, or lower back pain. These experiences are common, especially after childbirth or during perimenopause, but common does not mean something you have to live with.",
      "A gentle daily practice can help: begin by learning to identify the muscles through slow, controlled contractions, then build both strength and the ability to fully relax. Many people benefit from working with a pelvic floor physical therapist, who can offer a personalized plan rather than generic exercises.",
      "Breathing matters more than people expect. Shallow chest breathing can keep the pelvic floor in a chronically tense state. Practicing slow diaphragmatic breathing, where the belly and ribs expand on the inhale, helps the pelvic floor move through its full natural range.",
      "If you notice persistent pain, leaking, or pressure, please talk with a pelvic health specialist. This article is educational and not a substitute for individualized medical care.",
    ],
  },
  {
    slug: "cycle-syncing-your-workouts",
    title: "Cycle Syncing: Training With Your Hormones, Not Against Them",
    excerpt:
      "How shifting hormone levels across your cycle can inform smarter, kinder workout choices.",
    category: "Hormones & Cycle",
    readTime: "7 min read",
    date: "2026-05-28",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    author: "Priya Nathan, RD",
    content: [
      "Your menstrual cycle is not just about your period. It is a roughly month-long hormonal rhythm that can influence energy, strength, recovery, and even motivation.",
      "During the follicular phase, rising estrogen is often linked with better insulin sensitivity and increased energy — a good window for higher-intensity training if that feels good to you. Around ovulation, many people report feeling their strongest.",
      "In the luteal phase, progesterone rises and body temperature increases slightly, which can make high-intensity efforts feel harder. This can be a good time to shift toward steady-state cardio, mobility work, or strength training at a moderate intensity.",
      "During menstruation, energy often dips, and gentle movement — walking, restorative yoga, light stretching — can feel more supportive than pushing for a personal record.",
      "Cycle syncing is a framework, not a rulebook. Individual experiences vary widely, and factors like hormonal birth control, PCOS, or perimenopause change the picture. Tracking how you actually feel over a few cycles is more useful than following a generic template.",
    ],
  },
  {
    slug: "mens-hormonal-health-after-40",
    title: "Men's Hormonal Health After 40: What the Evidence Actually Says",
    excerpt:
      "Separating myth from science on testosterone, energy, and healthy aging in men.",
    category: "Men's Health",
    readTime: "8 min read",
    date: "2026-05-20",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Sam Whitfield",
    content: [
      "Testosterone naturally declines by roughly one to two percent per year after age 30, but the marketing around 'low T' often outpaces the actual research. Fatigue, low mood, and reduced muscle mass have many possible causes, and testosterone is only one variable.",
      "Before considering hormone therapy, it's worth ruling out sleep apnea, poor sleep quality, high stress, low physical activity, and nutrient deficiencies — all of which can mimic low-testosterone symptoms and are more common than clinically low testosterone itself.",
      "Resistance training has some of the strongest evidence behind it for supporting healthy testosterone levels and overall vitality as men age, alongside adequate sleep, stress management, and maintaining a healthy body composition.",
      "If symptoms persist, a simple blood panel with a doctor — ideally drawn in the morning, when testosterone peaks — is a reasonable next step. Self-diagnosing from a symptom checklist online is not.",
      "Healthy aging is rarely about chasing a single number. It's the accumulation of consistent, unglamorous habits: sleep, movement, nutrition, and connection.",
    ],
  },
  {
    slug: "rebuilding-intimacy-after-a-dry-spell",
    title: "Rebuilding Intimacy After a Dry Spell",
    excerpt:
      "Reconnecting with a partner takes more than effort — it takes the right kind of conversation.",
    category: "Intimacy & Relationships",
    readTime: "5 min read",
    date: "2026-05-14",
    height: "short",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "Periods of low intimacy are extremely common in long-term relationships and are rarely a sign that something is fundamentally wrong. Stress, parenting, illness, and simple routine can all quietly erode closeness.",
      "The instinct to 'just try harder' physically often backfires when the emotional connection hasn't been addressed first. Research on relationship satisfaction consistently points to emotional attunement — feeling seen and understood — as a precursor to physical closeness, not a byproduct of it.",
      "A useful starting point is a low-stakes conversation outside the bedroom: What has felt distant lately? What would help either of you feel more present with each other? Curiosity, not blame, tends to open these conversations up.",
      "Small, consistent gestures of affection — a hand on the back, real eye contact, a few uninterrupted minutes of conversation — rebuild trust faster than one grand gesture.",
      "If a lack of intimacy is tied to pain, medical concerns, or unresolved conflict, a certified sex therapist or couples counselor can offer support beyond what any article can.",
    ],
  },
  {
    slug: "evening-routine-for-better-sleep",
    title: "A 20-Minute Evening Routine Backed by Sleep Science",
    excerpt:
      "Small, research-supported changes to your wind-down routine can meaningfully improve sleep quality.",
    category: "Daily Wellness",
    readTime: "4 min read",
    date: "2026-05-08",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
    author: "Priya Nathan, RD",
    content: [
      "Sleep quality is shaped less by what happens the moment you lie down and more by the hour before it. A consistent wind-down routine signals to your nervous system that it's safe to slow down.",
      "Dimming lights about an hour before bed supports natural melatonin production, which bright overhead lighting and screens can suppress. If screens are unavoidable, lowering brightness and holding devices farther from your face helps.",
      "A cool room, roughly 65 to 68°F (18 to 20°C), aligns with the body's natural temperature drop during sleep onset and is one of the more consistently supported environmental factors in sleep research.",
      "Light stretching or a short body scan meditation can lower physiological arousal, especially after a stressful day. Even five slow minutes can meaningfully shift your baseline before bed.",
      "Consistency matters more than perfection. Going to bed and waking at similar times, even on weekends, does more for long-term sleep quality than any single evening ritual.",
    ],
  },
  {
    slug: "reading-your-cervical-mucus",
    title: "What Your Cycle Is Telling You: A Beginner's Guide to Fertility Awareness",
    excerpt:
      "Understanding cervical mucus, basal body temperature, and what they reveal about your cycle.",
    category: "Hormones & Cycle",
    readTime: "9 min read",
    date: "2026-04-30",
    height: "tall",
    image:
      "https://images.unsplash.com/photo-1495397889129-d7b7a0c8c1f0?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Sam Whitfield",
    content: [
      "Fertility awareness methods track physical signs that shift across the menstrual cycle to identify fertile and non-fertile windows. When practiced carefully, they can offer insight into your hormonal patterns whether or not pregnancy is a goal.",
      "Cervical mucus changes texture in response to estrogen. Early in the cycle it's often minimal or sticky; as ovulation approaches, it typically becomes clear, stretchy, and slippery — often compared to raw egg white — which supports sperm survival.",
      "Basal body temperature (BBT) rises slightly, usually by 0.5 to 1°F, after ovulation due to increased progesterone. Taking your temperature at the same time each morning, before getting out of bed, over several cycles reveals a pattern.",
      "Charting both signs together tends to be more reliable than tracking either alone. Free and paid apps can help visualize trends, but understanding the underlying signs yourself makes the data more meaningful.",
      "These methods require consistency and, ideally, guidance from a certified fertility awareness educator to use reliably for family planning. This article is for general education only.",
    ],
  },
  {
    slug: "libido-changes-what-is-normal",
    title: "Libido Changes: What's Normal and When to Talk to a Doctor",
    excerpt:
      "Desire naturally ebbs and flows. Here's how to tell the difference between a normal shift and something worth discussing.",
    category: "Women's Health",
    readTime: "6 min read",
    date: "2026-04-22",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "Sexual desire is influenced by an enormous number of factors: stress, sleep, relationship dynamics, medication, hormonal shifts, and simple life stage. A dip in libido during a demanding season is common and not necessarily a medical issue.",
      "That said, sudden or persistent changes are worth paying attention to. Certain medications, especially some antidepressants and hormonal contraceptives, are known to affect desire for some people. Thyroid conditions and hormonal imbalances can also play a role.",
      "Desire discrepancy between partners is one of the most common concerns raised in couples therapy, and it is rarely about one person being 'broken.' Differing baseline levels of desire are simply part of human variation.",
      "If low libido is causing you distress, or is accompanied by pain, mood changes, or other symptoms, it's worth bringing up with a doctor. There's no need to wait until it feels 'bad enough.'",
      "Reframing desire as something that can be cultivated — through rest, connection, and reduced stress — rather than something you either have or don't, tends to be a more compassionate starting point.",
    ],
  },
  {
    slug: "protein-timing-for-recovery",
    title: "Does Protein Timing Actually Matter? What the Research Shows",
    excerpt:
      "The 'anabolic window' myth, debunked — plus what actually helps with muscle recovery.",
    category: "Daily Wellness",
    readTime: "5 min read",
    date: "2026-04-15",
    height: "short",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    author: "Priya Nathan, RD",
    content: [
      "For years, fitness culture promoted a strict 30-minute 'anabolic window' after exercise for protein intake. More recent research suggests this window is far more forgiving than once believed.",
      "Total daily protein intake appears to matter more than precise timing for most people. Spreading intake across three to four meals, each with a meaningful protein source, supports muscle repair just as well as obsessing over post-workout minutes.",
      "That said, if you train fasted or go many hours without eating around a workout, having protein within a couple of hours afterward is a reasonable, low-effort habit.",
      "For most active adults, aiming for roughly 1.6 to 2.2 grams of protein per kilogram of body weight per day, spread throughout the day, is well supported by current research — though individual needs vary and this isn't personalized medical advice.",
    ],
  },
  {
    slug: "communicating-needs-with-a-partner",
    title: "How to Talk About What You Need in Bed (Without It Being Awkward)",
    excerpt:
      "Practical language for a conversation many couples avoid — and why avoiding it costs more than the discomfort of having it.",
    category: "Intimacy & Relationships",
    readTime: "6 min read",
    date: "2026-04-08",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Sam Whitfield",
    content: [
      "Most people learn to talk about nearly everything in a relationship except sex, often because they never saw it modeled growing up. That silence tends to create more distance than the vulnerable conversation itself would.",
      "Framing requests around your own experience, rather than a partner's shortcomings, tends to land better: 'I feel most connected when we slow down' opens a conversation; 'you never slow down' tends to close one.",
      "Timing matters. Bringing up a sensitive topic in a neutral moment — a walk, a car ride, over coffee — tends to go better than in the bedroom itself, where emotions run higher.",
      "Curiosity works both ways. Asking a partner what they enjoy, what they'd like more or less of, invites the same openness you're hoping to receive.",
      "If these conversations consistently feel impossible to start, a sex therapist can offer structured tools designed exactly for this — there's no shame in needing a guide.",
    ],
  },
  {
    slug: "perimenopause-early-signs",
    title: "Perimenopause Isn't Just Hot Flashes: Early Signs to Watch For",
    excerpt:
      "Perimenopause can begin years before your period changes noticeably. Here's what to look for.",
    category: "Hormones & Cycle",
    readTime: "7 min read",
    date: "2026-04-01",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "Perimenopause, the transitional years before menopause, can begin in your late 30s or 40s and often lasts four to eight years. Many people don't recognize early symptoms because they expect hot flashes first.",
      "Sleep disruption is often one of the earliest signs, sometimes appearing years before cycle changes. Shifting estrogen and progesterone levels affect the body's ability to regulate temperature and sleep architecture.",
      "Mood changes, including increased anxiety or irritability, are common and are linked to fluctuating hormones affecting neurotransmitter systems, not simply 'stress.' This is a physiological shift, not a personal failing.",
      "Cycle changes are often the first thing people notice consciously — periods becoming shorter, longer, heavier, or less predictable — but by the time this happens, hormonal shifts have often been underway for a while.",
      "Tracking your cycle and symptoms over several months gives you and your doctor real data to work with, rather than relying on memory alone during an appointment.",
    ],
  },
  {
    slug: "magnesium-for-stress-and-sleep",
    title: "Magnesium: The Evidence Behind the Hype",
    excerpt:
      "It's everywhere in wellness marketing. Here's what the research actually supports.",
    category: "Daily Wellness",
    readTime: "5 min read",
    date: "2026-03-25",
    height: "short",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=1200&auto=format&fit=crop",
    author: "Priya Nathan, RD",
    content: [
      "Magnesium is involved in over 300 enzymatic reactions in the body, and a genuine deficiency can affect sleep, muscle function, and mood. But 'magnesium fixes everything' claims outpace the evidence.",
      "Research most consistently supports magnesium for people with an actual deficiency, or for specific uses like migraine prevention and menstrual cramp relief. For people who already eat a varied diet, supplementing may offer limited additional benefit.",
      "Magnesium glycinate is commonly recommended for sleep and relaxation due to good absorption and minimal digestive side effects, compared to magnesium citrate or oxide, which are more likely to have a laxative effect.",
      "Whole food sources — leafy greens, nuts, seeds, and legumes — provide magnesium alongside fiber and other nutrients, and are a reasonable first approach before reaching for a supplement.",
      "As always, check with a doctor before starting a new supplement, particularly if you take medication or have kidney concerns.",
    ],
  },
  {
    slug: "vaginal-microbiome-basics",
    title: "Your Vaginal Microbiome: A Beginner's Guide",
    excerpt:
      "An ecosystem of bacteria plays a bigger role in comfort and health than most people realize.",
    category: "Women's Health",
    readTime: "6 min read",
    date: "2026-03-18",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "A healthy vaginal microbiome is typically dominated by Lactobacillus bacteria, which produce lactic acid and keep the environment mildly acidic — a natural defense against infection.",
      "This balance can be disrupted by antibiotics, hormonal shifts, scented products, and douching, which is not recommended by major medical organizations because it disrupts this protective ecosystem.",
      "Common symptoms of imbalance include unusual discharge, odor, itching, or irritation. These can indicate bacterial vaginosis, yeast infections, or other conditions that benefit from a proper diagnosis rather than guesswork.",
      "Breathable cotton underwear, avoiding unnecessary scented products, and letting the body's natural balance do its work are simple, evidence-supported habits.",
      "If symptoms are persistent or recurring, see a healthcare provider rather than repeatedly self-treating with over-the-counter products — recurring symptoms sometimes point to something that needs a different approach.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, count = 3): Post[] {
  return posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, count)
    .concat(
      posts
        .filter((p) => p.slug !== post.slug && p.category !== post.category)
        .slice(0, count)
    )
    .slice(0, count);
}
