/* Spanish From Zero — curriculum part 2 (A2 core) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "es8",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي: indefinido المنتظم",
 "title": "⏪ الماضي: pretérito indefinido المنتظم",
 "subtitle": "احكي اللي حصل مبارح: hablé, comí, viví",
 "blocks": [
  { "type": "p", "text": "الماضي في الإسباني ليه صورتين: indefinido للحدث اللي حصل وخلص في وقت محدد (مبارح، الأسبوع اللي فات)، وimperfecto للعادات والأوصاف في الماضي. النهارده: indefinido المنتظم." },
  { "type": "h", "text": "التصريف المنتظم" },
  { "type": "table", "head": ["الضمير", "hablar (-AR)", "comer (-ER)", "vivir (-IR)"], "rows": [
   ["yo", "hablé", "comí", "viví"],
   ["tú", "hablaste", "comiste", "viviste"],
   ["él/ella/usted", "habló", "comió", "vivió"],
   ["nosotros", "hablamos", "comimos", "vivimos"],
   ["ellos/ustedes", "hablaron", "comieron", "vivieron"]
  ]},
  { "type": "note", "text": "لاحظ التشديد: hablÉ وhablÓ — العلامة دي هي اللي بتفرق الماضي عن المضارع. hablo (بحبّك آبلو) مضارع، habló (آبلو بس مشددة) ماضي لـ هو/هي." },
  { "type": "h", "text": "كلمات بتقولك استخدم indefinido" },
  { "type": "list", "items": [
   "`ayer` = مبارح: Ayer compré un libro.",
   "`la semana pasada` = الأسبوع اللي فات",
   "`el año pasado` = السنة اللي فاتت",
   "`anoche` = مبارح بالليل",
   "`hace dos días` = من يومين: Hace dos días llamé a mi madre."
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "¿Qué hiciste ayer, Omar?", "ar": "عملت إيه مبارح يا عمر؟" },
   { "who": "Omar", "en": "Estudié español por la mañana y caminé a la universidad.", "ar": "ذاكرت إسباني الصبح ومشيت للجامعة." },
   { "who": "Sara", "en": "¿Y por la tarde?", "ar": "والضهر؟" },
   { "who": "Omar", "en": "Comí con mi familia y miré una película.", "ar": "كلت مع أهلي واتفرجت على فيلم." },
   { "who": "Sara", "en": "¿Qué película viste?", "ar": "فيلم إيه اللي شفته؟" },
   { "who": "Omar", "en": "Vi una película española. ¡Entendí mucho!", "ar": "شفت فيلم إسباني. فهمت منه كتير!" }
  ]},
  { "type": "speak", "en": "Ayer estudié español, comí con mi familia y miré una película.", "ar": "مبارح ذاكرت إسباني، وكلت مع أهلي، واتفرجت على فيلم." },
  { "type": "speak", "en": "¿Qué hiciste ayer? — Estudié y trabajé.", "ar": "عملت إيه مبارح؟ — ذاكرت واشتغلت." }
 ],
 "quiz": [
  { "q": "yo + comer في indefinido:", "options": [{ "text": "como" }, { "text": "comí" }, { "text": "comió" }, { "text": "comíamos" }], "answer": 1, "explain": "comí: النهاية í المشددة للماضي مع yo في أفعال -ER/-IR." },
  { "q": "Habló español ayer معناها:", "options": [{ "text": "بيتكلم إسباني" }, { "text": "اتكلم إسباني مبارح (هو/هي)" }, { "text": "اتكلمت إسباني مبارح (أنا)" }], "answer": 1, "explain": "habló (بتشديد على آخره) = هو/هي اتكلم. أنا = hablé." },
  { "q": "أنهم كلمة بتدور على indefinido؟", "options": [{ "text": "siempre (دايماً)" }, { "text": "ayer (مبارح)" }, { "text": "normalmente (عادةً)" }, { "text": "todos los días (كل يوم)" }], "answer": 1, "explain": "ayer وقت محدد خلص — indefinido. الباقي عادات — imperfecto (الدرس الجاي)." },
  { "q": "nosotros + vivir في indefinido:", "options": [{ "text": "vivimos" }, { "text": "vivimos (نفس الشكل للمضارع والماضي)" }], "answer": 1, "explain": "vivimos شكل واحد للمضارع والماضي مع -IR؛ السياق بيحدد: Vivimos en Asiut (نسكن) vs Vivimos allí en 2020 (سكنّا)." }
 ],
 "exercises": [
  { "task": "اكتب ٥ جمل عن يومك مبارح بأفعال مختلفة في indefinido.", "hint": "Ayer... por la mañana... por la tarde...", "code": "Ayer estudié español. Comí con mi familia. Caminé a la universidad. Escuché música. Miré una película por la noche.", "why": "حكاية يومك هي أول قصة بتحكيها في أي لغة." },
  { "task": "صرّف hablar وcomer وvivir كاملين في indefinido (٥ ضمائر).", "hint": "é, aste, ó, amos, aron — وí, iste, ió, imos, ieron.", "code": "hablé, hablaste, habló, hablamos, hablaron — comí, comiste, comió, comimos, comieron — viví, viviste, vivió, vivimos, vivieron.", "why": "النمطين بس، وبعدها كل فعل منتظم في اللغة مفتوح ليك." }
 ]
},
{
 "id": "es9",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي: الأفعال الشاذة",
 "title": "🌪️ الماضي: الأفعال الشاذة في indefinido",
 "subtitle": "ser/ir وtener وhacer وestar — الأفعال اللي مش بتسمع الكلام",
 "blocks": [
  { "type": "p", "text": "أهم الأفعال هي دايماً الشاذة. الخبر الحلو: الشواذ دي بتتكرر كل يوم فبتحفظ نفسها. الخبر الأحلى: ser وir ليهم نفس التصريف في الماضي خالص." },
  { "type": "h", "text": "ser وir: تصريف واحد" },
  { "type": "table", "head": ["الضمير", "ser/ir", "مع ser", "مع ir"], "rows": [
   ["yo", "fui", "Fui estudiante. = كنت طالب", "Fui a Asiut. = رحت أسيوط"],
   ["tú", "fuiste", "Fuiste amable. = كنت لطيف", "¿Fuiste al mercado? = رحت السوق؟"],
   ["él/ella/usted", "fue", "Fue difícil. = كان صعب", "Fue a El Cairo. = راح القاهرة"],
   ["nosotros", "fuimos", "Fuimos amigos. = كنا أصحاب", "Fuimos juntos. = رحنا سوا"],
   ["ellos/ustedes", "fueron", "Fueron profesores. = كانوا مدرسين", "Fueron a casa. = راحوا البيت"]
  ]},
  { "type": "h", "text": "tener وhacer وestar" },
  { "type": "table", "head": ["الفعل", "yo", "tú", "él", "nosotros", "ellos"], "rows": [
   ["tener", "tuve", "tuviste", "tuvo", "tuvimos", "tuvieron"],
   ["hacer", "hice", "hiciste", "hizo", "hicimos", "hicieron"],
   ["estar", "estuve", "estuviste", "estuvo", "estuvimos", "estuvieron"]
  ]},
  { "type": "note", "text": "لاحظ النمط المشترك: النهايات -e, -iste, -o (من غير تشديد!), -imos, -ieron. وجذوع متغيرة: tuv-, hic- (hizo بـ z), estuv-. احفظ الجذع والنهايات هتيجي لوحدها." },
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "¿Fuiste a la fiesta ayer, Omar?", "ar": "رحت الحفلة مبارح يا عمر؟" },
   { "who": "Omar", "en": "No, no fui. Tuve un examen hoy.", "ar": "لا، مارحتش. كان عندي امتحان النهارده." },
   { "who": "Sara", "en": "¿Cómo fue el examen?", "ar": "الامتحان كان عامل إزاي؟" },
   { "who": "Omar", "en": "Fue difícil, pero hice todo.", "ar": "كان صعب، بس حليت كله." },
   { "who": "Sara", "en": "¿Estuviste en la biblioteca toda la noche?", "ar": "قعدت في المكتبة طول الليل؟" },
   { "who": "Omar", "en": "Sí, estuve allí hasta las dos.", "ar": "أيوه، قعدت هناك لحد الساعة اتنين." }
  ]},
  { "type": "speak", "en": "Ayer no fui a la universidad. Tuve un examen y estuve en casa todo el día.", "ar": "مبارح مارحتش الجامعة. كان عندي امتحان وقعدت في البيت طول اليوم." },
  { "type": "speak", "en": "¿Cómo fue el examen? — Fue difícil, pero hice todo.", "ar": "الامتحان كان عامل إزاي؟ — كان صعب، بس حليت كله." }
 ],
 "quiz": [
  { "q": "Fui a Asiut معناها:", "options": [{ "text": "كنت في أسيوط" }, { "text": "رحت أسيوط" }, { "text": "برايح أسيوط" }, { "text": "روحت لأسيوط دايماً" }], "answer": 1, "explain": "fui + a = رحت (ir). من غير a وبعدها صفة = كنت (ser)." },
  { "q": "¿Qué hiciste ayer? معناها:", "options": [{ "text": "بتعمل إيه مبارح؟" }, { "text": "عملت إيه مبارح؟" }, { "text": "هتعمل إيه مبارح؟" }], "answer": 1, "explain": "hiciste = عملت (hacer في الماضي مع tú)." },
  { "q": "hacer مع él في indefinido:", "options": [{ "text": "hico" }, { "text": "hizo" }, { "text": "hició" }, { "text": "hacio" }], "answer": 1, "explain": "hizo بـ z مش c — من أشهر الشواذ الإملائية." },
  { "q": "¿Cómo fue...؟ بتتسأل عن:", "options": [{ "text": "مكان حاجة" }, { "text": "إزاي كانت حاجة (تقييم)" }, { "text": "وقت حاجة" }], "answer": 1, "explain": "¿Cómo fue el examen/la fiesta/el viaje? = كان عامل إزاي؟" }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل عن آخر مرة سافرت فيها: رحت فين، كان إزاي، عملت إيه، قعدت قد إيه.", "hint": "Fui a... / Fue... / Hice... / Estuve...", "code": "El mes pasado fui a Alejandría. Fue muy bonito. Hice muchas fotos. Estuve allí tres días.", "why": "حكاية السفر هي الكلاسيكية الأولى في أي محادثة بالماضي." },
  { "task": "حوّل للماضي: Voy a la universidad. / Tengo un examen. / ¿Qué haces? / Estoy en casa.", "hint": "voy→fui, tengo→tuve, haces→hiciste, estoy→estuve.", "code": "Fui a la universidad. / Tuve un examen. / ¿Qué hiciste? / Estuve en casa.", "why": "التحويل المباشر بيربط المضارع اللي تعرفه بالماضي الجديد." }
 ]
},
{
 "id": "es10",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي المستمر: imperfecto",
 "title": "🕰️ الماضي المستمر: imperfecto",
 "subtitle": "احكي عن العادات والطفولة: de niño, siempre, todos los días",
 "blocks": [
  { "type": "p", "text": "imperfecto هو زمن الحكايات: اللي كنت بتعمله كل يوم، اللي كان بيحصل دايماً، وصف الدنيا زمان. لو indefinido هو نقطة على الخط، imperfecto هو الخلفية." },
  { "type": "h", "text": "التصريف: أسهل زمن في اللغة" },
  { "type": "table", "head": ["الضمير", "hablar (-AR)", "comer/vivir (-ER/-IR)"], "rows": [
   ["yo", "hablaba", "comía / vivía"],
   ["tú", "hablabas", "comías / vivías"],
   ["él/ella/usted", "hablaba", "comía / vivía"],
   ["nosotros", "hablábamos", "comíamos / vivíamos"],
   ["ellos/ustedes", "hablaban", "comían / vivían"]
  ]},
  { "type": "note", "text": "شواذ imperfecto تلاتة بس في اللغة كلها: ser → era, eras, era, éramos, eran. ir → iba, ibas, iba, íbamos, iban. ver → veía, veías, veía, veíamos, veían. كده خلصت الشواذ!" },
  { "type": "h", "text": "كلمات بتقولك استخدم imperfecto" },
  { "type": "list", "items": [
   "`de niño` = وأنا صغير: De niño, jugaba en la calle.",
   "`siempre` = دايماً: Siempre comía con mi familia.",
   "`todos los días` = كل يوم",
   "`antes` = زمان/قبل كده: Antes vivía en Asiut.",
   "`mientras` = بينما: Mientras estudiaba, escuchaba música."
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "¿Cómo era tu vida de niño, Omar?", "ar": "حياتك كانت عاملة إزاي وإنت صغير يا عمر؟" },
   { "who": "Omar", "en": "Era muy tranquila. Vivía en Asiut con mi familia.", "ar": "كانت هادية جداً. كنت عايش في أسيوط مع أهلي." },
   { "who": "Sara", "en": "¿Qué hacías después de la escuela?", "ar": "كنت بتعمل إيه بعد المدرسة؟" },
   { "who": "Omar", "en": "Jugaba al fútbol con mis amigos y veía dibujos animados.", "ar": "كنت بلعب كورة مع صحابي وأتفرج على كارتون." },
   { "who": "Sara", "en": "¡Yo también! Siempre veía los mismos dibujos.", "ar": "أنا كمان! كنت بتفرج دايماً على نفس الكارتون." }
  ]},
  { "type": "speak", "en": "De niño, jugaba al fútbol y veía dibujos animados.", "ar": "وأنا صغير، كنت بلعب كورة وأتفرج على كارتون." },
  { "type": "speak", "en": "Antes vivía en Asiut, pero ahora vivo en El Cairo.", "ar": "زمان كنت ساكن في أسيوط، بس دلوقتي ساكن في القاهرة." }
 ],
 "quiz": [
  { "q": "yo + hablar في imperfecto:", "options": [{ "text": "hablé" }, { "text": "hablaba" }, { "text": "habló" }, { "text": "hablía" }], "answer": 1, "explain": "-AR بياخد -aba في imperfecto: hablaba." },
  { "q": "Siempre comía con mi familia ليه imperfecto؟", "options": [{ "text": "لأنه حدث حصل مرة" }, { "text": "لأنه عادة متكررة في الماضي" }, { "text": "لأنه مضارع" }], "answer": 1, "explain": "siempre = عادة متكررة = خلفية = imperfecto." },
  { "q": "ser في imperfecto مع yo:", "options": [{ "text": "fui" }, { "text": "era" }, { "text": "soy" }, { "text": "iba" }], "answer": 1, "explain": "ser → era في imperfecto. fui هو الماضي المحدد (indefinido)." },
  { "q": "De niño معناها:", "options": [{ "text": "الطفل" }, { "text": "وأنا صغير" }, { "text": "الأطفال" }, { "text": "صغير" }], "answer": 1, "explain": "de niño = في الطفولة، بتتقال عن نفسك في الحكايات." }
 ],
 "exercises": [
  { "task": "اكتب ٥ جمل عن طفولتك: سكنت فين، لعبت إيه، شفت إيه، كلت إيه، رحت فين.", "hint": "De niño... vivía... jugaba... veía... comía... iba...", "code": "De niño, vivía en Asiut. Jugaba al fútbol en la calle. Veía dibujos animados. Comía con mi familia. Iba a la escuela caminando.", "why": "حكاية الطفولة هي التمرين الطبيعي لـ imperfecto." },
  { "task": "قارن بين زمان ودلوقتي في ٤ جمل: قبل كده كنت بعمل إيه، ودلوقتي بعمل إيه.", "hint": "Antes... pero ahora...", "code": "Antes vivía en Asiut, pero ahora vivo en El Cairo. Antes no hablaba español, pero ahora hablo un poco. Antes veía mucha tele, pero ahora estudio más. Antes jugaba todos los días, pero ahora trabajo.", "why": "المقارنة antes/ahora بتثبت الفرق بين الزمنين في جملة واحدة." }
 ]
},
{
 "id": "es11",
 "level": "A2",
 "skill": "core",
 "nav": "indefinido vs imperfecto",
 "title": "⚖️ indefinido vs imperfecto",
 "subtitle": "الحدث والخلفية: أهم فرق في الماضي الإسباني",
 "blocks": [
  { "type": "p", "text": "أصعب سؤال في A2: أنهي ماضي أستخدم؟ القاعدة بسيطة: imperfecto يرسم الخلفية (الجو، العادات، الأوصاف، اللي كان بيحصل)، وindefinido يحط الحدث اللي حصل وخلص فوق الخلفية." },
  { "type": "h", "text": "الصورة الذهنية" },
  { "type": "p", "text": "تخيل فيلم: الخلفية (الشارع، الجو، الناس ماشية) = imperfecto. الحدث (تليفون رن، واحد وصل، حاجة وقعت) = indefinido. `Mientras caminaba por la calle, sonó el teléfono.` = بينما كنت ماشي في الشارع (خلفية)، التليفون رن (حدث)." },
  { "type": "h", "text": "جدول القرار" },
  { "type": "table", "head": ["الموقف", "الزمن", "مثال"], "rows": [
   ["عادة متكررة", "imperfecto", "Siempre desayunaba a las ocho. = كنت بفطر دايماً الساعة ٨"],
   ["وصف في الماضي", "imperfecto", "La casa era grande. = البيت كان كبير"],
   ["الجو والوقت والسن", "imperfecto", "Hacía calor. Eran las tres. Tenía diez años."],
   ["حدث حصل وخلص", "indefinido", "Ayer llamé a Sara. = مبارح كلمت سارة"],
   ["سلسلة أحداث", "indefinido", "Me levanté, desayuné y salí. = صحيت وفطرت وخرجت"],
   ["حدث قطع خلفية", "الاتنين", "Mientras estudiaba, llegó Omar. = بينما بذاكر، عمر وصل"]
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Qué pasó ayer? No te vi en la universidad.", "ar": "إيه اللي حصل مبارح؟ ماشفتكيش في الجامعة." },
   { "who": "Sara", "en": "Era un día terrible. Hacía mucho calor y yo estaba cansada.", "ar": "كان يوم وحش. كان الجو حر جداً وأنا كنت تعبانة." },
   { "who": "Omar", "en": "¿Y qué hiciste?", "ar": "وعملت إيه؟" },
   { "who": "Sara", "en": "Me quedé en casa. Mientras descansaba, llamó mi madre.", "ar": "قعدت في البيت. وبينما بستريح، ماما كلمتني." },
   { "who": "Omar", "en": "¿Y ahora estás mejor?", "ar": "ودلوقتي أحسن؟" },
   { "who": "Sara", "en": "Sí, mucho mejor. Dormí diez horas.", "ar": "أيوه، أحسن بكتير. نمت عشر ساعات." }
  ]},
  { "type": "speak", "en": "Mientras caminaba por la calle, sonó el teléfono.", "ar": "بينما كنت ماشي في الشارع، التليفون رن." },
  { "type": "speak", "en": "Era un día terrible: hacía calor y yo estaba cansada.", "ar": "كان يوم وحش: الجو كان حر وأنا كنت تعبانة." }
 ],
 "quiz": [
  { "q": "Mientras estudiaba, llegó Omar. ليه estudiaba imperfecto ولlegó indefinido؟", "options": [{ "text": "estudiaba خلفية مستمرة وllegó حدث قطعها" }, { "text": "عشان estudiar أطول" }, { "text": "عشان Omar شخص" }], "answer": 0, "explain": "الخلفية المستمرة imperfecto والحدث اللي بيقطعها indefinido." },
  { "q": "La casa era grande — ليه imperfecto؟", "options": [{ "text": "حدث خلص" }, { "text": "وصف في الماضي" }, { "text": "عادة" }], "answer": 1, "explain": "الأوصاف في الماضي دايماً imperfecto." },
  { "q": "Me levanté, desayuné y salí — ليه كلها indefinido؟", "options": [{ "text": "لأنها عادات" }, { "text": "لأنها سلسلة أحداث خلصت" }, { "text": "لأنها أوصاف" }], "answer": 1, "explain": "الأحداث المتتالية اللي حصلت وخلصت بتاخد indefinido." },
  { "q": "Tenía diez años (كان عمري عشر سنين) ليه مش tuve؟", "options": [{ "text": "لأن السن خلفية/وصف مش حدث" }, { "text": "لأن tener شاذ" }, { "text": "الاتنين صح" }], "answer": 0, "explain": "السن والجو والوقت خلفية القصة، فبتاخد imperfecto." }
 ],
 "exercises": [
  { "task": "اكتب قصة قصيرة (٤ جمل) عن يوم وحش أو حلو: جملتين خلفية (imperfecto) وجملتين أحداث (indefinido).", "hint": "Era... Hacía... / De repente... llamó... llegó...", "code": "Era un día muy caluroso y yo estaba cansado. Mientras caminaba a la universidad, sonó el teléfono. Era mi madre: llegó mi tío de El Cairo. Fui a casa inmediatamente.", "why": "المزج بين الخلفية والحدث هو جوهر الحكي بالإسباني." },
  { "task": "حدد الزمن المناسب: Ayer ___ (llover). / Siempre ___ (llover) en invierno. / Mientras ___ (llover), salí.", "hint": "حدث؟ عادة؟ خلفية؟", "code": "Ayer llovió. / Siempre llovía en invierno. / Mientras llovía, salí.", "why": "نفس الفعل بتلات أزمنة حسب الدور في القصة — دي هي الفكرة كلها." }
 ]
},
{
 "id": "es12",
 "level": "A2",
 "skill": "core",
 "nav": "ضمائر المفعول",
 "title": "🎯 ضمائر المفعول: lo/la/le",
 "subtitle": "متعيدش الاسم مرتين: Lo veo. Le hablo.",
 "blocks": [
  { "type": "p", "text": "بدل ما تقول Veo el libro كل مرة، بتقول Lo veo (شايفه). الضمائر دي صغيرة بس بتفرق جداً في سلاسة كلامك، وهي من أكتر حاجات الإسباني اللي محتاجة تدريب." },
  { "type": "h", "text": "مفعول مباشر: lo/la/los/las" },
  { "type": "table", "head": ["الضمير", "بدل", "مثال"], "rows": [
   ["lo", "هو / إياه (مذكر)", "¿El libro? Lo tengo. = الكتاب؟ معايا"],
   ["la", "هي / إياها (مؤنث)", "¿La foto? La veo. = الصورة؟ شايفها"],
   ["los", "هم (مذكر/مختلط)", "¿Los libros? Los compré. = الكتب؟ اشتريتهم"],
   ["las", "هن/هم (مؤنث)", "¿Las mesas? Las vendí. = الترابيزات؟ بعتهم"]
  ]},
  { "type": "h", "text": "مفعول غير مباشر: le/les" },
  { "type": "list", "items": [
   "`le` = له/لها/لحضرتك: `Le hablo.` = بكلم (له/لها). `Le di el libro.` = اديتله الكتاب.",
   "`les` = لهم: `Les escribo.` = بكتبلهم.",
   "الفرق: المباشر بيجاوب (مين/إيه اللي شفته؟)، غير المباشر بيجاوب (لمين؟)."
  ]},
  { "type": "h", "text": "المكان: قبل الفعل المصرف" },
  { "type": "p", "text": "الضمير بييجي قبل الفعل المصرف: `Lo veo.` بس مع المصدر أو الاستمرار بيلزق في الآخر: `Quiero verlo.` (عايز أشوفه) / `Estoy viéndolo.` (شايفه دلوقتي). التركيبتين شائعين جداً." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Tienes mi libro, Sara?", "ar": "معاكي كتابي يا سارة؟" },
   { "who": "Sara", "en": "Sí, lo tengo. Te lo doy mañana.", "ar": "أيوه، معايا. هديهولك بكرة." },
   { "who": "Omar", "en": "¿Y mis apuntes? ¿Los tienes también?", "ar": "وملاحظاتي؟ معاكي كمان؟" },
   { "who": "Sara", "en": "No, los apuntes no los tengo. Pregúntale a Karim.", "ar": "لا، الملاحظات مش معايا. اسأل كريم." },
   { "who": "Omar", "en": "Vale, le llamo ahora.", "ar": "ماشي، هكلم له دلوقتي." }
  ]},
  { "type": "speak", "en": "¿El libro? Lo tengo. Te lo doy mañana.", "ar": "الكتاب؟ معايا. هديهولك بكرة." },
  { "type": "speak", "en": "¿La foto? La veo. ¿Los libros? Los compré ayer.", "ar": "الصورة؟ شايفها. الكتب؟ اشتريتهم مبارح." }
 ],
 "quiz": [
  { "q": "¿Las fotos? ___ tengo.", "options": [{ "text": "Lo" }, { "text": "La" }, { "text": "Las" }, { "text": "Les" }], "answer": 2, "explain": "las fotos مؤنث جمع = las." },
  { "q": "Le di el libro معناها:", "options": [{ "text": "اديت الكتاب (لله)" }, { "text": "اديتله/لها الكتاب" }, { "text": "اديتهم الكتاب" }], "answer": 1, "explain": "di = اديت، le = له/لها (مفعول غير مباشر)." },
  { "q": "Quiero verlo — ليه lo في الآخر؟", "options": [{ "text": "لأن ver مصدر (غير مصرف)" }, { "text": "غلط إملائي" }, { "text": "لأن lo مشدد" }], "answer": 0, "explain": "مع المصدر الضمير بيلزق في الآخر: verlo, hacerlo, comprarlo." },
  { "q": "Te lo doy mañana فيها:", "options": [{ "text": "ضميرين: te ليك وlo إياه" }, { "text": "ضمير واحد" }, { "text": "غلط نحوي" }], "answer": 0, "explain": "te (ليك) + lo (إياه) = هديهولك. الضميرين بييجوا مع بعض بالترتيب ده." }
 ],
 "exercises": [
  { "task": "جاوب على الأسئلة بضمير: ¿Tienes el libro? / ¿Ves la foto? / ¿Compraste los libros? / ¿Llamaste a Omar?", "hint": "lo/la/los/le.", "code": "Sí, lo tengo. / Sí, la veo. / Sí, los compré. / Sí, le llamé.", "why": "السؤال والجواب السريع هو أحسن تدريب على الضمائر." },
  { "task": "حوّل الجمل لشكلين: Quiero ver la foto. (بضمير قبل الفعل وبضمير لازق)", "hint": "La quiero ver / Quiero verla.", "code": "La quiero ver. = Quiero verla. وبنفس النمط: Lo quiero hacer = Quiero hacerlo.", "why": "الشكلين صح وشائعين، ولازم ودنك تتعود على الاتنين." }
 ]
},
{
 "id": "es13",
 "level": "A2",
 "skill": "core",
 "nav": "الأفعال المنعكسة وgustar",
 "title": "🔄 الأفعال المنعكسة وgustar",
 "subtitle": "me levanto, me llamo... وقلب الجملة مع me gusta",
 "blocks": [
  { "type": "p", "text": "الإسباني بيحب الضمائر المنعكسة: أفعال يومية زي (صحيت، غسلت، نمت) كلها بتتقال بضمير منعكس. وبعدين gustar، الفعل اللي بيقلب الجملة رأساً على عقب." },
  { "type": "h", "text": "الأفعال المنعكسة: اليوم بتاعك" },
  { "type": "table", "head": ["الفعل", "المعنى", "مثال (yo)"], "rows": [
   ["levantarse", "يقوم (من السرير)", "Me levanto a las siete. = بصحى الساعة ٧"],
   ["ducharse", "يستحمى", "Me ducho por la mañana."],
   ["vestirse", "يلبس", "Me visto rápido. = بلبس بسرعة"],
   ["llamarse", "يتسمى", "Me llamo Omar. = اسمي عمر"],
   ["acostarse", "ينام", "Me acuesto a las doce."],
   ["sentarse", "يقعد", "Me siento aquí. = بقعد هنا"],
   ["irse", "يمشي", "Me voy. = أنا ماشي"]
  ]},
  { "type": "note", "text": "الضمائر: me (أنا), te (إنت), se (هو/هي/حضرتك), nos (إحنا), se (هم). بييجوا قبل الفعل: Me levanto. ومع المصدر بيلزقوا: Voy a levantarme." },
  { "type": "h", "text": "gustar: الجملة المقلوبة" },
  { "type": "p", "text": "في الإسباني مش بتقول (أنا بحب القهوة)، بتقول (القهوة بتعجبني): `Me gusta el café.` الفعل بيتصرف مع الحاجة مش معاك: حاجة واحدة = gusta، أكتر من حاجة = gustan: `Me gustan los libros.` = بحب الكتب." },
  { "type": "table", "head": ["الشخص", "الضمير", "مثال"], "rows": [
   ["أنا", "me", "Me gusta el fútbol. = بحب الكورة"],
   ["إنت", "te", "¿Te gusta el té? = بتحب الشاي؟"],
   ["هو/هي", "le", "Le gustan las películas. = بيحب الأفلام"],
   ["إحنا", "nos", "Nos gusta Asiut. = بنحب أسيوط"],
   ["هم", "les", "Les gusta viajar. = بيحبوا يسافروا"]
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "¿A qué hora te levantas, Omar?", "ar": "بتصحى الساعة كام يا عمر؟" },
   { "who": "Omar", "en": "Me levanto a las siete. Me ducho, me visto y desayuno.", "ar": "بصحى الساعة ٧. بستحمى، بلبس، وبفطر." },
   { "who": "Sara", "en": "¿Y qué te gusta desayunar?", "ar": "وبتحب تفطر إيه؟" },
   { "who": "Omar", "en": "Me gusta el café con pan. ¿Y a ti?", "ar": "بحب القهوة بالعيش. وإنتي؟" },
   { "who": "Sara", "en": "A mí me gustan los huevos con té.", "ar": "أنا بحب البيض بالشاي." }
  ]},
  { "type": "speak", "en": "Me levanto a las siete, me ducho, me visto y desayuno.", "ar": "بصحى الساعة ٧، بستحمى، بلبس، وبفطر." },
  { "type": "speak", "en": "Me gusta el café, pero no me gustan los dulces.", "ar": "بحب القهوة، بس مش بحب الحلويات." }
 ],
 "quiz": [
  { "q": "Me gustan los libros — ليه gustan مش gusta؟", "options": [{ "text": "لأن أنا كتير" }, { "text": "لأن الكتب جمع — الفعل بيتبع الحاجة مش الشخص" }, { "text": "لأنها في الماضي" }], "answer": 1, "explain": "gustar بيتصرف مع الحاجة اللي بتعجبك: حاجة = gusta، حاجات = gustan." },
  { "q": "Me llamo Omar — llamo هنا منعكسة لأن:", "options": [{ "text": "الاسم منعكس" }, { "text": "حرفياً: أنا بنادي نفسي عمر" }, { "text": "قاعدة ملهاش سبب" }], "answer": 1, "explain": "llamarse = يتسمى = ينادي نفسه، وده أول فعل منعكس بتتعلمه من غير ما تاخد بالك." },
  { "q": "هي بتحب الأفلام:", "options": [{ "text": "Le gusta las películas" }, { "text": "Le gustan las películas" }, { "text": "Les gusta las películas" }, { "text": "Se gustan películas" }], "answer": 1, "explain": "هي = le، والأفلام جمع = gustan." },
  { "q": "Voy a levantarme — الضمير اتلزق لأن:", "options": [{ "text": "levantar مصدر بعد ir a" }, { "text": "الجملة طويلة" }, { "text": "غلط" }], "answer": 0, "explain": "مع المصدر الضمير المنعكس بيلزق في الآخر: levantarme, ducharme, acostarme." }
 ],
 "exercises": [
  { "task": "اكتب روتينك الصباحي في ٥ جمل بأفعال منعكسة.", "hint": "Me levanto... Me ducho... Me visto...", "code": "Me levanto a las siete. Me ducho. Me visto. Desayuno café con pan. Me voy a la universidad a las ocho.", "why": "الروتين الصباحي هو الطبيعة الحية للأفعال المنعكسة." },
  { "task": "اكتب ٤ جمل بـ gustar: حاجة بتحبها، حاجات بتحبها، حاجة مش بتحبها، وسؤال لصاحبك.", "hint": "Me gusta... / Me gustan... / No me gusta... / ¿Te gusta...?", "code": "Me gusta el café. Me gustan los libros. No me gusta el calor. ¿Te gusta el fútbol?", "why": "gusta/gustan لازم يطلعوا تلقائي من لسانك، والتدريب ده بيخليهم كده." }
 ]
}
);
