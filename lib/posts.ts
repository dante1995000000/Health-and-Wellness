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
    slug: "painful-sex-causes-and-solutions",
    title: "Painful Sex: What's Really Causing It and How to Get Relief",
    excerpt:
      "Painful sex affects more women than you'd think. Here's what causes it, and the evidence-based paths to real relief.",
    category: "Women's Health",
    readTime: "10 min read",
    date: "2026-06-15",
    height: "tall",
    image:
      "https://images.unsplash.com/photo-1758691462954-e6fa5005474b?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "Painful sex is more common than most doctors let on. Nearly three in four women experience it at some point, according to the American College of Obstetricians and Gynecologists.",
      "If you've been told to just relax, or handed a tube of lubricant without anyone asking real questions, you already know how dismissive that feels. The good news is that painful sex almost always has a specific, identifiable cause, and most causes respond well to treatment.",
      "Doctors use the term dyspareunia to describe persistent or recurrent pain during sex. It isn't a diagnosis by itself. It's a symptom, and figuring out where the pain happens, and when, is the first real step toward relief.",
      "Entry pain, the sharp or burning sensation right at penetration, points to a different set of causes than deep pain, which shows up further inside and often feels more like pressure or cramping. Naming that difference to a provider can speed up an accurate diagnosis considerably.",
      "Vaginismus is one of the most overlooked causes of entry pain. It happens when the pelvic floor muscles involuntarily tighten in anticipation of penetration, sometimes so strongly that entry becomes nearly impossible. This isn't something you can simply will away. It's a protective reflex, often rooted in past pain, anxiety, or an unconscious fear response. It responds well to pelvic floor physical therapy and gradual desensitization work with dilators.",
      "Hormonal shifts are another major driver, especially around vaginal dryness. Estrogen keeps vaginal tissue thick, elastic, and well lubricated. When estrogen drops, whether from breastfeeding, certain birth control methods, or the approach of menopause, tissue can become thin and fragile. Research summarized by the Mayo Clinic links this drop directly to genitourinary syndrome of menopause, a condition that causes burning, dryness, and pain with intercourse in a large share of postmenopausal women.",
      "If pain shows up deep inside rather than at the entrance, endometriosis deserves serious consideration. This condition causes tissue similar to the uterine lining to grow outside the uterus, often around the ovaries or the ligaments that support the pelvic organs. Deep penetration can stretch or compress that tissue, triggering pain some women describe as a dull ache and others describe as a sharp internal cramp. Endometriosis often goes undiagnosed for years, so persistent deep pain is worth raising directly with a gynecologist.",
      "Pelvic floor dysfunction sits at the intersection of physical and emotional causes. Chronic tension in these muscles, sometimes built up from years of stress, core-focused exercise without proper release work, or old injuries, can make sex uncomfortable even without an obvious hormonal trigger. A pelvic floor physical therapist can assess muscle tone internally and externally, then build a plan around gentle stretching, breathwork, and manual therapy.",
      "Infections and skin conditions matter too, and they're easy to miss. Yeast infections, bacterial vaginosis, and skin conditions like lichen sclerosus can all cause irritation that makes penetration painful. These usually come with other symptoms, like unusual discharge, itching, or visible changes to the skin. Mentioning any of those details to your doctor helps narrow things down fast.",
      "It would be incomplete to talk about painful sex without naming the psychological piece honestly. Anxiety about pain itself can create more muscle tension, which creates more pain, which feeds more anxiety. This cycle is well documented in pelvic pain research, and it doesn't mean the pain is imaginary. It means the nervous system and pelvic muscles are responding to a genuine threat signal. Untangling that usually takes both physical treatment and support from a therapist familiar with sexual pain.",
      "So what actually helps? For dryness-related pain, vaginal moisturizers used regularly, plus a good lubricant during sex, often make a noticeable difference within weeks. For more significant hormonal changes, low-dose topical vaginal estrogen is considered safe and effective by most gynecologic guidelines, even for many women who can't use systemic hormone therapy.",
      "For vaginismus and pelvic floor tension, working with a pelvic floor physical therapist tends to outperform generic advice by a wide margin. Treatment usually combines internal and external muscle work with graduated dilator use, done at your own pace, never rushed.",
      "If endometriosis or another structural condition is suspected, imaging and sometimes laparoscopic evaluation can confirm it. That opens the door to targeted treatment, from hormonal therapy to surgical management, depending on severity.",
      "The most important thing to know is this: persistent pain during sex is never something you have to accept as your new normal. It's a signal, not a life sentence. The right specialist, whether that's a gynecologist, pelvic floor therapist, or sex therapist, can help you find out exactly why it's happening and what will actually fix it.",
    ],
  },
  {
    slug: "pcos-and-your-cycle-explained",
    title: "PCOS and Your Cycle: What the Research Actually Shows",
    excerpt:
      "PCOS symptoms can feel confusing and isolating. Here's the science behind your cycle, and what actually helps long term.",
    category: "Hormones & Cycle",
    readTime: "9 min read",
    date: "2026-06-20",
    height: "tall",
    image:
      "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1200&auto=format&fit=crop",
    author: "Priya Nathan, RD",
    content: [
      "PCOS, or polycystic ovary syndrome, affects an estimated one in ten women of reproductive age, yet many go years without a clear diagnosis. Irregular cycles get chalked up to stress. Acne gets treated with skincare alone. Weight changes get met with vague advice to eat less and move more.",
      "That pattern of being dismissed is exhausting, and it's also common. PCOS is a hormonal condition, not a personal failing, and understanding what's actually happening in your body is the first step toward managing it well.",
      "At its core, PCOS involves a disruption in how your ovaries respond to hormonal signals. Many women with PCOS produce higher levels of androgens, hormones like testosterone that are present in everyone but elevated here. This can interfere with ovulation, which is why irregular or absent periods are one of the most common signs.",
      "The Rotterdam criteria, used by most gynecologists to diagnose PCOS, requires at least two of three features: irregular ovulation, elevated androgens either in blood tests or through symptoms like acne and excess hair growth, and polycystic-appearing ovaries on ultrasound. You don't need all three, and you don't need visible cysts to have PCOS, despite what the name suggests.",
      "Insulin resistance plays a bigger role than most people realize. Up to 70 percent of women with PCOS have some degree of insulin resistance, according to research published through the Endocrine Society. When cells don't respond well to insulin, the body produces more of it, and excess insulin can further push the ovaries to produce more androgens. This creates a cycle that affects far more than fertility.",
      "That insulin connection explains why PCOS often shows up alongside other patterns: stubborn weight gain, especially around the midsection, sugar cravings, and fatigue that doesn't match how much sleep you're getting. None of this means PCOS is caused by diet or lifestyle. It means the metabolic and reproductive systems are closely linked, and addressing one often helps the other.",
      "Cycle tracking becomes a genuinely useful tool here, not just for predicting periods but for understanding your own pattern. Many women with PCOS have cycles that stretch well beyond the typical 28 days, sometimes skipping months entirely. Tracking symptoms alongside cycle length, including skin changes, energy, and mood, gives you and your doctor real data instead of guesswork.",
      "On the food and movement side, research consistently points to a few approaches that help manage insulin resistance without requiring extreme restriction. A study published in the Journal of Clinical Endocrinology found that even modest weight loss, in the range of five to ten percent of body weight, can restore ovulation in a meaningful number of women with PCOS.",
      "Strength training in particular has shown promise. Building muscle improves how your body uses insulin, which can help regulate the whole hormonal cascade. This doesn't mean hours in the gym. Two to three sessions a week, focused on major muscle groups, tends to move the needle more than cardio alone.",
      "Fiber and protein at each meal help stabilize blood sugar, which reduces the insulin spikes that feed excess androgen production. This is a far more sustainable approach than cutting entire food groups, and it doesn't require obsessive tracking to work.",
      "Medication has a real place in PCOS management too. Metformin, originally developed for type 2 diabetes, is commonly prescribed to improve insulin sensitivity and is backed by decades of research in PCOS specifically. Combined hormonal birth control can regulate cycles and reduce androgen-related symptoms like acne, though it doesn't address the underlying insulin piece on its own.",
      "For women trying to conceive, PCOS is one of the most treatable causes of infertility. Ovulation induction medications, sometimes combined with the lifestyle changes above, help a large share of women with PCOS achieve pregnancy, and a reproductive endocrinologist can walk through the options based on your specific labs.",
      "If you suspect PCOS, ask your doctor for a full hormone panel, not just a single test. That typically includes testosterone, DHEA-S, LH, FSH, and a fasting insulin or glucose tolerance test. A pelvic ultrasound rounds out the picture. Getting the full workup, rather than a single data point, is what leads to an accurate diagnosis and a plan that actually fits your body.",
    ],
  },
  {
    slug: "erectile-dysfunction-vascular-health-connection",
    title: "Erectile Dysfunction and Vascular Health: The Connection Doctors Want You to Know",
    excerpt:
      "Erectile dysfunction is often an early signal of vascular health issues, not just a bedroom problem to hide from.",
    category: "Men's Health",
    readTime: "9 min read",
    date: "2026-06-25",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Sam Whitfield",
    content: [
      "Erectile dysfunction is rarely just about sex. In a large share of cases, it's one of the earliest visible signs that something is going on with a man's cardiovascular system, sometimes years before a heart attack or stroke shows up.",
      "That connection gets buried under embarrassment and jokes, which means a lot of men quietly avoid the conversation instead of treating it as the health signal it often is. Understanding the vascular link changes how you should think about it entirely.",
      "An erection is, at its core, a vascular event. Blood needs to flow into the penis quickly and stay there, which requires healthy, flexible blood vessels that can widen on demand. The vessels involved are small, some of the smallest in the body outside the eyes, which means they tend to show damage earlier than larger arteries like the ones feeding the heart.",
      "This is why researchers often call erectile dysfunction a window into arterial health. A well-cited body of research, including work published in the American Journal of Cardiology, has found that ED frequently precedes a cardiovascular event by three to five years. The small vessels struggle first, and the bigger ones follow later.",
      "Atherosclerosis, the buildup of plaque inside artery walls, is usually the underlying process. As plaque accumulates, vessels lose flexibility and narrow, restricting blood flow everywhere, including to the penis. The same risk factors that drive heart disease, high blood pressure, high cholesterol, smoking, diabetes, and excess weight, drive this process too.",
      "Diabetes deserves particular attention here. Men with diabetes are two to three times more likely to experience erectile dysfunction than men without it, and it often appears ten to fifteen years earlier than in the general population. High blood sugar damages blood vessels and nerves over time, affecting both the vascular and neurological pieces required for a normal erection.",
      "Testosterone gets blamed constantly, and it does play a role, but it's usually not the main driver. Low testosterone can reduce desire and affect erection quality, yet vascular and psychological factors are responsible for the majority of ED cases in men under 60. Jumping straight to testosterone replacement without ruling out vascular causes can mean missing a much bigger warning sign.",
      "Smoking has an outsized effect on this specific issue. Nicotine constricts blood vessels directly, and long-term smoking accelerates the same arterial damage that leads to both ED and heart disease. Men who smoke are roughly twice as likely to experience erectile dysfunction as men who don't, and quitting has been shown to improve erectile function within months in some studies.",
      "Exercise is one of the most consistently supported interventions, and not just for weight management. Aerobic activity improves endothelial function, essentially how well your blood vessels dilate and respond to demand. A well-known study published in the Journal of the American Medical Association found that men who exercised regularly had significantly lower rates of ED than sedentary men, independent of weight.",
      "Sleep apnea is another underrecognized piece of the puzzle. Disrupted breathing during sleep lowers oxygen levels repeatedly through the night, straining the cardiovascular system and reducing testosterone production. Men with undiagnosed sleep apnea show notably higher rates of ED, and treating the apnea, often with a CPAP machine, improves symptoms for many of them.",
      "So what should you actually do if you're experiencing ED? The most important first step is a real medical workup, not a prescription grabbed online without context. Blood pressure, cholesterol, blood sugar, and testosterone should all be checked, since ED can be the first clue that leads to catching a bigger issue early.",
      "Medications like PDE5 inhibitors, the class that includes sildenafil and tadalafil, work by improving blood flow and can be genuinely effective. But they treat the symptom. Addressing the underlying vascular risk factors, through diet, exercise, smoking cessation, and blood sugar control, is what protects both your sexual health and your heart over the long run.",
      "If there's one thing worth taking away here, it's this: erectile dysfunction is not a private embarrassment to manage alone. It's often your cardiovascular system asking for attention early, while there's still time to do something meaningful about it.",
    ],
  },
  {
    slug: "mismatched-libido-in-long-term-relationships",
    title: "Mismatched Libido: A Science-Backed Way to Navigate Different Sex Drives",
    excerpt:
      "Mismatched libido is one of the most common relationship struggles. Here's what research says can actually help couples.",
    category: "Intimacy & Relationships",
    readTime: "8 min read",
    date: "2026-06-30",
    height: "medium",
    image:
      "https://images.unsplash.com/photo-1763713512968-fef8805cc6cf?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Maren Ellis",
    content: [
      "Mismatched libido shows up in most long-term relationships at some point, and it rarely means anything is broken. Research from the Kinsey Institute suggests desire discrepancy is one of the most common issues couples bring to sex therapy, right up there with communication problems.",
      "If you or your partner want sex more or less often than the other, you're not the exception. You're the norm, and the way couples handle that gap matters far more than the gap itself.",
      "It helps to understand that desire isn't one single thing. Researchers typically describe two types: spontaneous desire, which appears out of nowhere in response to a thought or trigger, and responsive desire, which builds after physical touch or closeness has already started. Neither type is more normal or more healthy than the other.",
      "Spontaneous desire tends to get more attention culturally, largely because it's how desire is portrayed in movies and media. But responsive desire is extremely common, particularly in longer relationships and especially among women, according to research by sex therapist and author Emily Nagoski. Someone with primarily responsive desire may rarely feel like initiating, yet still enjoy and want intimacy once it begins.",
      "This distinction alone resolves a lot of unnecessary conflict. A partner who doesn't initiate as often isn't necessarily less attracted or less interested. Their desire may simply need a different entry point, one that starts with connection rather than spontaneous urge.",
      "Stress plays a much larger role in libido than most couples realize. Chronic stress elevates cortisol, which can suppress the hormones involved in sexual desire, including testosterone in both men and women. If one partner is under significant work or family stress, a temporary drop in desire is a physiological response, not a reflection of the relationship.",
      "Life stage matters too. New parents, people managing chronic illness, and anyone going through a major hormonal shift, from postpartum recovery to perimenopause, often experience real changes in desire that have nothing to do with attraction to their partner. Naming that stage out loud, instead of assuming it reflects something deeper, keeps the conversation grounded in what's actually happening.",
      "So how do couples actually move forward? The most consistently supported approach is talking about it directly, outside the bedroom, when neither partner is stressed or feeling rejected in the moment. A calm conversation over coffee tends to go far better than one that happens right after an awkward silence in bed.",
      "Framing the conversation around curiosity rather than blame changes the entire tone. Instead of "you never want to," try something like "I've noticed we've felt distant lately, and I'd love to understand what's going on for you." This invites information instead of triggering defensiveness.",
      "Scheduling intimacy sounds unromantic to some people, but research on relationship satisfaction suggests it can actually help, particularly for couples dealing with a genuine desire gap. Removing the pressure of spontaneity, and instead creating reliable space for connection, often allows responsive desire the room it needs to show up.",
      "Non-penetrative intimacy deserves more attention than it usually gets in these conversations. Touch, massage, and closeness without the expectation of sex can rebuild connection without the pressure that sometimes makes the higher-desire partner feel rejected and the lower-desire partner feel obligated.",
      "It's also worth ruling out medical contributors before assuming the gap is purely relational. Certain medications, especially some antidepressants, thyroid conditions, and hormonal shifts can all lower desire independent of the relationship itself. A conversation with a doctor can rule these out or offer solutions if they're contributing.",
      "If the gap continues to cause real distress for either partner, a certified sex therapist can offer structured tools built specifically for this. There's no shame in needing outside support. Desire discrepancy is common enough that entire areas of therapy exist just to help couples work through it well.",
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
