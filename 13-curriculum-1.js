/* Spanish From Zero — curriculum part 1 (A1 core) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "es1",
 "level": "A1",
 "skill": "core",
 "nav": "الحروف والنطق",
 "title": "🔤 الحروف والنطق الإسباني",
 "subtitle": "أقرأ أي كلمة إسبانية صح من أول مرة",
 "blocks": [
  { "type": "p", "text": "أحلى حاجة في الإسباني إنه لغة صوتية: اللي بتقرأه هو اللي بتقوله، من غير مفاجآت زي الإنجليزي. لو خلصت الدرس ده، هتقدر تقرأ أي كلمة إسبانية بصوت عالي، حتى لو مش فاهم معناها." },
  { "type": "h", "text": "الحروف المتحركة: ٥ بس وثابتة" },
  { "type": "table", "head": ["الحرف", "النطق", "زي إيه بالعربي"], "rows": [
   ["a", "آه", "ألف واضحة: casa = كاسا (بيت)"],
   ["e", "إيه", "إيه قصيرة: tres = تريس (تلاتة)"],
   ["i", "إيي", "ياء: sí = سي (أيوه)"],
   ["o", "أو", "واو قصيرة: no = نو (لا)"],
   ["u", "أو ممدودة", "ضمة واضحة: tú = تو (إنت)"]
  ]},
  { "type": "note", "text": "الحروف المتحركة في الإسباني ليها صوت واحد بس، مش زي الإنجليزي اللي الـ a فيها بتتقال بأربع طرق. دي أسهل حاجة في اللغة كلها." },
  { "type": "h", "text": "٥ حروف ساكنة لازم تاخد بالك منها" },
  { "type": "list", "items": [
   "`h` صامتة خالص: `hola` بتتقال أولا، من غير هاء.",
   "`j` زي حاء عربية بالظبط: `trabajo` = تراباخو (شغل). أهلاً بالحاء!",
   "`ñ` نيا: `España` = إسبانيا. الحرف ده مش موجود في العربي بس سهل: ان + يا.",
   "`ll` في إسبانيا بتتقال يي، وفي أمريكا اللاتينية جي خفيفة: `llamo` = يامو.",
   "`c` قبل e/i في إسبانيا زي ثاء (cena = ثينا)، وفي أمريكا اللاتينية زي سين (cena = سينا). الاتنين صح."
  ]},
  { "type": "h", "text": "التشديد: القاعدة الذهبية" },
  { "type": "p", "text": "لو الكلمة خلصت بحرف متحرك أو n أو s، التشديد على المقطع اللي قبل الأخير: ca-SA, ha-BLO. لو خلصت بأي حرف تاني، التشديد على المقطع الأخير: a-ZUL, es-pa-ÑOL. ولو في علامة (´) فوق حرف متحرك، التشديد عليها مهما كان: ca-FÉ, a-QUÍ. تلات قواعد تظبط نطقك في ٩٥٪ من الكلمات." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Cómo se pronuncia esta palabra?", "ar": "الكلمة دي بتتنطق إزاي؟" },
   { "who": "Sara", "en": "«Jamón». La jota es como la ح del árabe.", "ar": "خامون. الـ j زي حاء العربي." },
   { "who": "Omar", "en": "Ah, entonces: jamón, trabajo, José.", "ar": "آه، يبقى: خامون، تراباخو، خوسيه." },
   { "who": "Sara", "en": "¡Perfecto! Ya lees español.", "ar": "تمام! كده إنت بتقري إسباني خلاص." }
  ]},
  { "type": "speak", "en": "Hola, me llamo Omar. ¿Cómo te llamas tú?", "ar": "أهلاً، أنا اسمي عمر. اسمك إيه إنت؟" },
  { "type": "speak", "en": "La jota suena como la ح: jamón, trabajo, José.", "ar": "الـ j بتتنطق زي الحاء: خامون، تراباخو، خوسيه." }
 ],
 "quiz": [
  { "q": "حرف h في كلمة hola:", "options": [{ "text": "بتتنطق هاء" }, { "text": "صامتة خالص" }, { "text": "بتتنطق خاء" }, { "text": "بتتنطق جيم" }], "answer": 1, "explain": "الـ h في الإسباني صامتة دايماً: hola = أولا." },
  { "q": "حرف j في الإسباني بيتنطق:", "options": [{ "text": "جيم مصرية" }, { "text": "ياء" }, { "text": "حاء عربية" }, { "text": "خاء" }], "answer": 2, "explain": "الـ j زي حاء العربي بالظبط: trabajo = تراباخو." },
  { "q": "كلمة café التشديد فيها على:", "options": [{ "text": "أول مقطع ca" }, { "text": "تاني مقطع fé" }], "answer": 1, "explain": "علامة (´) فوق الـ e بتقولك: التشديد هنا مهما كانت القواعد." },
  { "q": "كلمة español التشديد فيها على المقطع الأخير لأن:", "options": [{ "text": "الكلمة خلصت بحرف l" }, { "text": "الكلمة طويلة" }, { "text": "فيه ñ في النص" }, { "text": "عشان إسبانيا مشهورة" }], "answer": 0, "explain": "الكلمة اللي بتخلص بحرف غير متحرك وغير n/s التشديد فيها على المقطع الأخير." }
 ],
 "exercises": [
  { "task": "اقرأ الكلمات دي بصوت عالي وسجّل نفسك: hola, España, trabajo, llamo, café, azul.", "hint": "فكر في الحاء والحروف الصامتة.", "code": "أولا، إسبانيا، تراباخو، يامو، كافيه، أثول/أسول.", "why": "القراءة بصوت عالي بتثبت قواعد النطق في ودنك ولسانك مع بعض." },
  { "task": "حط التشديد على المقطع الصح: casa, trabajo, papel, escribo.", "hint": "اسأل نفسك: خلصت بإيه؟", "code": "CA-sa, tra-BA-jo, pa-PEL, es-CRI-bo.", "why": "قاعدة آخر حرف بتحل أغلب حالات التشديد من غير معجم." }
 ]
},
{
 "id": "es2",
 "level": "A1",
 "skill": "core",
 "nav": "التحيات والتعارف",
 "title": "👋 التحيات والتعارف",
 "subtitle": "أول محادثة إسبانية في حياتك: السلام، الاسم، والجنسية",
 "blocks": [
  { "type": "p", "text": "تعالى نتكلم. الدرس ده هيخليك تعمل أول محادثة تعارف كاملة بالإسباني: تسلم، تقول اسمك، تسأل الطرف التاني، وتقول إنت منين." },
  { "type": "h", "text": "التحيات" },
  { "type": "table", "head": ["الإسباني", "النطق", "المعنى"], "rows": [
   ["Hola", "أولا", "أهلاً (أي وقت)"],
   ["Buenos días", "بوينوس دياس", "صباح الخير"],
   ["Buenas tardes", "بويناس تارديس", "مساء الخير (بعد الضهر)"],
   ["Buenas noches", "بويناس نوتشيس", "مساء الخير / تصبح على خير"],
   ["¿Qué tal?", "كيه تال؟", "عامل إيه؟ — والرد: Bien, ¿y tú?"],
   ["Mucho gusto", "موتشو جوستو", "تشرفنا"],
   ["Gracias", "جراثياس/جراسياس", "متشكر"],
   ["Por favor", "بور فابور", "لو سمحت"],
   ["Adiós / Hasta luego", "أديوس / أستا لويجو", "مع السلامة / أشوفك بعدين"]
  ]},
  { "type": "note", "text": "Buenos días لحد الضهر، وبعدها buenas tardes. الإسبان بيتغدوا متأخر (٢-٣ بالضهر)، فالـ tardes بتمتد لحد العشية." },
  { "type": "h", "text": "تعريف نفسك" },
  { "type": "list", "items": [
   "`Me llamo Omar.` = أنا اسمي عمر. (حرفياً: أنا بنادي نفسي عمر)",
   "`Soy Sara.` = أنا سارة.",
   "`Soy egipcio / egipcia.` = أنا مصري / مصرية. لاحظ الـ a للمؤنث.",
   "`Soy de Asiut.` = أنا من أسيوط.",
   "`Vivo en El Cairo.` = أنا ساكن في القاهرة.",
   "`¿Y tú?` = وإنت؟ — `¿Y usted?` = وحضرتك؟ (رسمي)"
  ]},
  { "type": "h", "text": "فعل ser (يكون) — أهم فعل في اللغة" },
  { "type": "table", "head": ["الضمير", "ser", "مثال"], "rows": [
   ["yo (أنا)", "soy", "Soy estudiante. = أنا طالب"],
   ["tú (إنت للصحاب)", "eres", "¿Tú eres egipcio? = إنت مصري؟"],
   ["él/ella/usted (هو/هي/حضرتك)", "es", "Ella es profesora. = هي مدرسة"],
   ["nosotros (إحنا)", "somos", "Somos amigos. = إحنا أصحاب"],
   ["vosotros (إنتوا — إسبانيا)", "sois", "Sois estudiantes. = إنتوا طلبة"],
   ["ellos/ustedes (هم/حضرتكم)", "son", "Son de Egipto. = هم من مصر"]
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Hola, buenos días. Me llamo Omar. ¿Cómo te llamas?", "ar": "أهلاً، صباح الخير. أنا اسمي عمر. اسمك إيه؟" },
   { "who": "Sara", "en": "Hola Omar, me llamo Sara. Mucho gusto.", "ar": "أهلاً يا عمر، أنا اسمي سارة. تشرفنا." },
   { "who": "Omar", "en": "Mucho gusto, Sara. ¿De dónde eres?", "ar": "تشرفنا يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "Soy de Asiut. ¿Y tú?", "ar": "أنا من أسيوط. وإنت؟" },
   { "who": "Omar", "en": "Yo también soy de Asiut, pero vivo en El Cairo.", "ar": "أنا كمان من أسيوط، بس ساكن في القاهرة." }
  ]},
  { "type": "speak", "en": "Hola, me llamo Omar. Soy egipcio, de Asiut.", "ar": "أهلاً، أنا اسمي عمر. أنا مصري، من أسيوط." },
  { "type": "speak", "en": "Mucho gusto. ¿De dónde eres tú?", "ar": "تشرفنا. إنت منين؟" }
 ],
 "quiz": [
  { "q": "Mucho gusto بتتقال امتى؟", "options": [{ "text": "لما بتقول مع السلامة" }, { "text": "لما بتتعرف على حد" }, { "text": "لما بتطلب الأكل" }, { "text": "لما بتعتذر" }], "answer": 1, "explain": "Mucho gusto = تشرفنا، بتتقال لحظة التعارف." },
  { "q": "Soy de Asiut معناها:", "options": [{ "text": "أنا ساكن في أسيوط دلوقتي" }, { "text": "أنا من أسيوط (أصلي/جيت منها)" }, { "text": "أنا بحب أسيوط" }, { "text": "أنا رايح أسيوط" }], "answer": 1, "explain": "ser de + مكان = الانتماء للمكان. Vivo en = ساكن في." },
  { "q": "¿Cómo te llamas? الرد الصح:", "options": [{ "text": "Me llamo Sara" }, { "text": "Soy bien" }, { "text": "Hola" }, { "text": "Gracias" }], "answer": 0, "explain": "السؤال بيسأل عن الاسم: Me llamo + اسمك." },
  { "q": "بنت مصرية بتقول:", "options": [{ "text": "Soy egipcio" }, { "text": "Soy egipcia" }, { "text": "Eres egipcia" }, { "text": "Son egipcios" }], "answer": 1, "explain": "المؤنث بياخد -a في النهاية: egipcia. وSoy لأنها بتتكلم عن نفسها." }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل تعرّف فيها نفسك: اسمك، جنسيتك، إنت منين، وساكن فين.", "hint": "Me llamo... Soy... Soy de... Vivo en...", "code": "Me llamo Omar. Soy egipcio. Soy de Asiut. Vivo en El Cairo.", "why": "الجمل دي هي أول ما هتقوله في أي تعارف حقيقي." },
  { "task": "سجّل صوتك وإنت بتقرأ محادثة عمر وسارة بدور عمر، وبعدين بدور سارة.", "hint": "غيّر نبرة صوتك بين الدورين.", "code": "اسمع نفسك وقارن بنطق الأزرار 🔊.", "why": "تمثيل الأدوار بيدرب اللسان والودن على إيقاع المحادثة الحقيقية." }
 ]
},
{
 "id": "es3",
 "level": "A1",
 "skill": "core",
 "nav": "الأسئلة والنفي",
 "title": "❓ الأسئلة والنفي",
 "subtitle": "¿كده؟ — علامات الاستفهام المقلوبة وأدوات السؤال",
 "blocks": [
  { "type": "p", "text": "الإسباني ليه توقيع مشهور: علامة الاستفهام المقلوبة ¿ في أول السؤال. في الدرس ده هتسأل أي سؤال وتنفي أي جملة، وده نص المحادثة اليومية." },
  { "type": "h", "text": "علامات الاستفهام المقلوبة" },
  { "type": "p", "text": "أي سؤال بالإسباني بيبدأ بـ ¿ وبيخلص بـ ؟: `¿Cómo estás?` = عامل إيه؟ ونفس النظام مع التعجب: `¡Qué bien!` = يا سلام! العلامة الأولى بتجهزك من أول الكلمة إن ده سؤال، فبتظبط نبرة صوتك من البداية." },
  { "type": "h", "text": "أدوات السؤال" },
  { "type": "table", "head": ["الأداة", "النطق", "المعنى", "مثال"], "rows": [
   ["¿Qué?", "كيه", "إيه؟", "¿Qué es esto? = ده إيه؟"],
   ["¿Cómo?", "كومو", "إزاي؟", "¿Cómo estás? = عامل إيه؟"],
   ["¿Dónde?", "دوندي", "فين؟", "¿Dónde vives? = ساكن فين؟"],
   ["¿Cuándo?", "كواندو", "امتى؟", "¿Cuándo vienes? = جاي امتى؟"],
   ["¿Quién?", "كيين", "مين؟", "¿Quién es? = ده مين؟"],
   ["¿Cuánto?", "كوانتو", "بكام / قد إيه؟", "¿Cuánto cuesta? = ده بكام؟"],
   ["¿Por qué?", "بور كيه", "ليه؟", "¿Por qué estudias español? = ليه بتدرس إسباني؟"]
  ]},
  { "type": "h", "text": "السؤال بأيوه/لا: النبرة بس" },
  { "type": "p", "text": "مش محتاج تغيّر ترتيب الجملة: `¿Hablas español?` = بتتكلم إسباني؟ نفس ترتيب الجملة العادية، بس النبرة بتطلع في الآخر. زي ما بتقول بالعربي: بتتكلم إسباني؟" },
  { "type": "h", "text": "النفي: no قبل الفعل" },
  { "type": "list", "items": [
   "`No hablo español.` = أنا مش بتكلم إسباني.",
   "`No soy estudiante.` = أنا مش طالب.",
   "`No, gracias.` = لا، متشكر.",
   "`Tampoco.` = ولا أنا / برضه لأ. (رد على نفي: No hablo inglés. - Yo tampoco.)"
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Hablas inglés, Sara?", "ar": "بتتكلمي إنجليزي يا سارة؟" },
   { "who": "Sara", "en": "Sí, hablo inglés. ¿Y tú?", "ar": "أيوه، بتكلم إنجليزي. وإنت؟" },
   { "who": "Omar", "en": "No hablo mucho inglés, pero estudio español.", "ar": "مش بتكلم إنجليزي كتير، بس بذاكر إسباني." },
   { "who": "Sara", "en": "¿Por qué estudias español?", "ar": "ليه بتذاكر إسباني؟" },
   { "who": "Omar", "en": "Porque me gusta. ¿Y tú?", "ar": "عشان بيحبها. وإنتي؟" },
   { "who": "Sara", "en": "Yo también. ¡Es muy divertido!", "ar": "أنا كمان. ده ممتع جداً!" }
  ]},
  { "type": "speak", "en": "¿Hablas español? — No, no hablo español. Estudio español.", "ar": "بتتكلم إسباني؟ — لا، مش بتكلم إسباني. بذاكر إسباني." },
  { "type": "speak", "en": "¿Cuánto cuesta esto? ¿Dónde está la calle Ramsis?", "ar": "ده بكام؟ فين شارع رمسيس؟" }
 ],
 "quiz": [
  { "q": "السؤال بالإسباني بيبدأ بإيه؟", "options": [{ "text": "؟" }, { "text": "¿" }, { "text": "¡" }, { "text": "!" }], "answer": 1, "explain": "علامة الاستفهام المقلوبة ¿ في الأول و؟ في الآخر." },
  { "q": "¿Dónde vives? معناها:", "options": [{ "text": "إزاي حالك؟" }, { "text": "ساكن فين؟" }, { "text": "جاي امتى؟" }, { "text": "ده بكام؟" }], "answer": 1, "explain": "dónde = فين، vives = ساكن." },
  { "q": "عايز تنفي: أنا مش بحب القهوة (me gusta el café)", "options": [{ "text": "Me gusta no el café" }, { "text": "No me gusta el café" }, { "text": "Me no gusta café" }, { "text": "Gusto no café" }], "answer": 1, "explain": "الـ no بتيجي قبل الفعل مباشرة: No me gusta." },
  { "q": "حد قالك: No hablo francés. تقوله ولا أنا:", "options": [{ "text": "También" }, { "text": "Tampoco" }, { "text": "No también" }, { "text": "Sí" }], "answer": 1, "explain": "Tampoco = ولا أنا (بعد نفي). También = أنا كمان (بعد إثبات)." }
 ],
 "exercises": [
  { "task": "اكتب ٥ أسئلة بـ ٥ أدوات مختلفة (qué, cómo, dónde, cuándo, cuánto) تسألهم لصاحبك الإسباني.", "hint": "¿Dónde vives? ¿Cuándo estudias?", "code": "¿Qué estudias? ¿Cómo estás? ¿Dónde vives? ¿Cuándo vienes a Asiut? ¿Cuánto cuesta el libro?", "why": "تكوين السؤال هو أسرع طريق لمحادثة حقيقية." },
  { "task": "حوّل الجمل دي للمنفي: Hablo inglés. / Soy profesor. / Estudio los sábados.", "hint": "no قبل الفعل على طول.", "code": "No hablo inglés. / No soy profesor. / No estudio los sábados.", "why": "النفي في الإسباني سهل وثابت، بس محتاج تدريب لحد ما يبقى تلقائي." }
 ]
},
{
 "id": "es4",
 "level": "A1",
 "skill": "core",
 "nav": "el/la/los/las والجنس والجمع",
 "title": "📦 el/la/los/las والجنس والجمع",
 "subtitle": "كل اسم في الإسباني ليه جنس، وهتلاقي القاعدة سهلة",
 "blocks": [
  { "type": "p", "text": "كل اسم في الإسباني مذكر أو مؤنث، والحلو إن الإسباني بيديك علامات واضحة: الاسم اللي بيخلص بـ o غالباً مذكر، واللي بيخلص بـ a غالباً مؤنث. دي قاعدة بتظبط ٩٠٪ من الأسماء." },
  { "type": "h", "text": "أداة التعريف" },
  { "type": "table", "head": ["", "مذكر", "مؤنث"], "rows": [
   ["مفرد", "el: el libro (الكتاب)", "la: la mesa (الترابيزة)"],
   ["جمع", "los: los libros", "las: las mesas"]
  ]},
  { "type": "h", "text": "أداة التنكير" },
  { "type": "table", "head": ["", "مذكر", "مؤنث"], "rows": [
   ["مفرد", "un: un libro (كتاب)", "una: una mesa (ترابيزة)"],
   ["جمع (بعض)", "unos: unos libros", "unas: unas mesas"]
  ]},
  { "type": "h", "text": "إزاي تعرف الجنس؟" },
  { "type": "list", "items": [
   "مذكر غالباً: أسماء بتخلص بـ `o` (el libro, el vaso)، وبتخلص بـ `-or` (el profesor)، وأيام الأسبوع (el lunes).",
   "مؤنث غالباً: أسماء بتخلص بـ `a` (la casa)، وبتخلص بـ `-ción/-sión` (la lección, la televisión)، وبتخلص بـ `-dad` (la universidad).",
   "احفظها بالأداة دايماً: متقولش libro، قول el libro. الأداة جزء من الاسم."
  ]},
  { "type": "note", "text": "شواذ مشهور: el día (يوم — مذكر رغم الـ a)، el mapa (خريطة)، la mano (إيد — مؤنث رغم الـ o)، la foto (صورة — أصلاً la fotografía). الشواذ قليل وبيتحفظ بالتكرار." },
  { "type": "h", "text": "الجمع" },
  { "type": "p", "text": "الاسم اللي بيخلص بحرف متحرك بياخد `s`: libro → libros, mesa → mesas. اللي بيخلص بحرف ساكن بياخد `es`: profesor → profesores, universidad → universidades. واللي بيخلص بـ z بتقلب c: luz → luces." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Qué hay en la mesa?", "ar": "إيه اللي على الترابيزة؟" },
   { "who": "Sara", "en": "Hay un libro, unos vasos y la foto de la universidad.", "ar": "فيه كتاب، وشوية كوبايات، وصورة الجامعة." },
   { "who": "Omar", "en": "¿La foto? ¿Por qué femenino?", "ar": "لا فوتو؟ ليه مؤنث؟" },
   { "who": "Sara", "en": "Porque es la fotografía. Las palabras terminadas en -ía son femeninas.", "ar": "عشان أصلها la fotografía. الكلمات اللي بتخلص بـ ía مؤنثة." }
  ]},
  { "type": "speak", "en": "El libro, la mesa, los libros, las mesas.", "ar": "الكتاب، الترابيزة، الكتب، الترابيزات." },
  { "type": "speak", "en": "En la mesa hay un vaso, una foto y unos libros.", "ar": "على الترابيزة فيه كوباية، وصورة، وشوية كتب." }
 ],
 "quiz": [
  { "q": "la universidad مؤنثة لأن:", "options": [{ "text": "بتخلص بـ a" }, { "text": "بتخلص بـ -dad" }, { "text": "لأنها مبنى" }, { "text": "مصادفة" }], "answer": 1, "explain": "الأسماء اللي بتخلص بـ -dad دايماً مؤنثة." },
  { "q": "جمع profesor:", "options": [{ "text": "profesors" }, { "text": "profesores" }, { "text": "profesoras" }, { "text": "profesoress" }], "answer": 1, "explain": "الاسم اللي بيخلص بحرف ساكن بياخد es في الجمع." },
  { "q": "el día شاذ لأن:", "options": [{ "text": "مذكر رغم إنه بيخلص بـ a" }, { "text": "مؤنث رغم إنه بيخلص بـ o" }, { "text": "ملوش جمع" }], "answer": 0, "explain": "el día مذكر رغم الـ a، من الشواذ المشهورة." },
  { "q": "¿Qué hay en la mesa? يعني:", "options": [{ "text": "إيه اللي على الترابيزة؟" }, { "text": "فين الترابيزة؟" }, { "text": "ترابيزة مين دي؟" }, { "text": "بكام الترابيزة؟" }], "answer": 0, "explain": "hay = فيه/يوجد، سؤال عن الموجودات." }
 ],
 "exercises": [
  { "task": "حط الأداة الصح (el/la/los/las) قدام: __ casa, __ día, __ lecciones, __ libros, __ universidad, __ mapa.", "hint": "فتكر قواعد النهايات والشواذ.", "code": "la casa, el día, las lecciones, los libros, la universidad, el mapa.", "why": "الأداة الصحيحة هي أول علامة إنك بتتكلم إسباني مظبوط." },
  { "task": "اكتب ٥ أسماء من حجرتك بالجمع مع الأداة.", "hint": "بص حواليك: سرير، كرسي، شباك...", "code": "las camas, las sillas, las ventanas, los libros, los vasos.", "why": "ربط القاعدة بالأشياء اللي حواليك بيخليها تثبت." }
 ]
},
{
 "id": "es5",
 "level": "A1",
 "skill": "core",
 "nav": "الأرقام والوقت",
 "title": "🔢 الأرقام والوقت",
 "subtitle": "عد، اسأل عن الساعة، وافهم المواعيد",
 "blocks": [
  { "type": "p", "text": "الأرقام هي أول حاجة بتستخدمها في أي سفرية: أسعار، مواعيد، أرقام أوض. الإسباني أرقامه منتظمة جداً، وهتعد لحد مية النهارده." },
  { "type": "h", "text": "من ١ لحد ٢٠" },
  { "type": "table", "head": ["الرقم", "الإسباني", "النطق"], "rows": [
   ["1-5", "uno, dos, tres, cuatro, cinco", "أونو، دوس، تريس، كواترو، ثينكو/سينكو"],
   ["6-10", "seis, siete, ocho, nueve, diez", "سيس، سيتيه، أوتشو، نويبي، دييث/دييز"],
   ["11-15", "once, doce, trece, catorce, quince", "أونثي، دوثي، تريثي، كاتورثي، كينثي"],
   ["16-20", "dieciséis ... veinte", "دييسي سيس ... بينتي"]
  ]},
  { "type": "h", "text": "العشرات: نظام ثابت" },
  { "type": "p", "text": "treinta (٣٠)، cuarenta (٤٠)، cincuenta (٥٠)، sesenta (٦٠)، setenta (٧٠)، ochenta (٨٠)، noventa (٩٠)، cien (١٠٠). وبينهم بـ y: ٣١ = treinta y uno (تلاتين وواحد). ٩٩ = noventa y nueve. من غير أي شواذ." },
  { "type": "h", "text": "الساعة" },
  { "type": "list", "items": [
   "`¿Qué hora es?` = الساعة كام؟",
   "`Es la una.` = الساعة واحدة. (مفرد عشان ساعة واحدة بس)",
   "`Son las dos / las tres / las diez.` = الساعة اتنين / تلاتة / عشرة.",
   "`y media` = والنص: Son las tres y media.",
   "`y cuarto / menos cuarto` = وربع / إلا ربع: Son las cinco y cuarto. Son las ocho menos cuarto.",
   "`de la mañana / de la tarde / de la noche` = الصبح / الضهر / بالليل."
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Perdona, ¿qué hora es?", "ar": "لو سمحت، الساعة كام؟" },
   { "who": "Sara", "en": "Son las ocho y media de la mañana.", "ar": "الساعة تمانية ونص الصبح." },
   { "who": "Omar", "en": "¿Y la clase de español? ¿A qué hora es?", "ar": "وحصة الإسباني؟ الساعة كام؟" },
   { "who": "Sara", "en": "Es a las nueve menos cuarto.", "ar": "الساعة تسعة إلا ربع." },
   { "who": "Omar", "en": "¡Vamos! ¡Tenemos quince minutos!", "ar": "يلا بينا! عندنا ربع ساعة!" }
  ]},
  { "type": "speak", "en": "¿Qué hora es? — Son las ocho y media de la mañana.", "ar": "الساعة كام؟ — الساعة تمانية ونص الصبح." },
  { "type": "speak", "en": "La clase es a las nueve menos cuarto.", "ar": "الحصة الساعة تسعة إلا ربع." }
 ],
 "quiz": [
  { "q": "٤٧ بالإسباني:", "options": [{ "text": "cuarenta siete" }, { "text": "cuarenta y siete" }, { "text": "cuatro siete" }, { "text": "setenta y cuatro" }], "answer": 1, "explain": "العشرات بـ y بينهم: cuarenta y siete." },
  { "q": "الساعة واحدة بتقول Es la una مش Son la una لأن:", "options": [{ "text": "عشان ساعة واحدة بس (مفرد)" }, { "text": "قاعدة ملهاش سبب" }, { "text": "عشان الصبح" }], "answer": 0, "explain": "الواحدة مفردة فبنستخدم Es la، وكل الساعات التانية Son las." },
  { "q": "Son las cinco menos cuarto يعني الساعة:", "options": [{ "text": "خمسة وربع" }, { "text": "خمسة إلا ربع" }, { "text": "أربعة ونص" }, { "text": "خمسة ونص" }], "answer": 1, "explain": "menos cuarto = إلا ربع." },
  { "q": "¿A qué hora es la clase? بتسأل عن:", "options": [{ "text": "الساعة دلوقتي" }, { "text": "ميعاد الحصة" }, { "text": "مكان الحصة" }], "answer": 1, "explain": "A qué hora = في أنهي ساعة (للمواعيد)، Qué hora es = الساعة كام دلوقتي." }
 ],
 "exercises": [
  { "task": "اكتب بالإسباني: ٧، ١٥، ٢٣، ٤٨، ٧٥، ٩٩، ١٠٠.", "hint": "العشرات بـ y.", "code": "siete, quince, veintitrés, cuarenta y ocho, setenta y cinco, noventa y nueve, cien.", "why": "الأرقام بتتقال بسرعة في الحياة الحقيقية، فالتلقائية هنا مهمة." },
  { "task": "اكتب ٤ جمل: الساعة كام دلوقتي، وميعاد ٣ حاجات في يومك (قهوة، محاضرة، نوم).", "hint": "Son las... / La clase es a las...", "code": "Son las diez de la mañana. El café es a las once. La clase es a las dos de la tarde. Duermo a las doce de la noche.", "why": "ربط الساعة بجدولك اليومي بيحول الأرقام لأداة بتستخدمها فعلاً." }
 ]
},
{
 "id": "es6",
 "level": "A1",
 "skill": "core",
 "nav": "المضارع: أفعال -AR",
 "title": "⚙️ المضارع: أفعال -AR",
 "subtitle": "أكبر عيلة أفعال في الإسباني، وتصريفها ثابت",
 "blocks": [
  { "type": "p", "text": "الأفعال الإسبانية تلات عائلات حسب نهاية المصدر: -AR زي hablar (يتكلم)، و-ER زي comer (ياكل)، و-IR زي vivir (يعيش). عيلة -AR هي الأكبر، وتصريفها في المضارع ثابت ١٠٠٪." },
  { "type": "h", "text": "تصريف hablar في المضارع" },
  { "type": "table", "head": ["الضمير", "التصريف", "النطق"], "rows": [
   ["yo (أنا)", "hablo", "آبلو"],
   ["tú (إنت)", "hablas", "آبلاس"],
   ["él/ella/usted", "habla", "آبلا"],
   ["nosotros (إحنا)", "hablamos", "آبلاموس"],
   ["vosotros (إنتوا)", "habláis", "آبلايس"],
   ["ellos/ustedes (هم)", "hablan", "آبلان"]
  ]},
  { "type": "note", "text": "القاعدة: شيل -AR وحط النهايات: o, as, a, amos, áis, an. جرب على أي فعل -AR منتظم: estudiar → estudio, estudio, estudia... ولا استثناء." },
  { "type": "h", "text": "١٠ أفعال -AR هتستخدمها كل يوم" },
  { "type": "table", "head": ["الفعل", "المعنى", "مثال"], "rows": [
   ["hablar", "يتكلم", "Hablo español un poco. = بتكلم إسباني شوية"],
   ["estudiar", "يذاكر", "Estudio en la universidad. = بذاكر في الجامعة"],
   ["trabajar", "يشتغل", "Trabajo en El Cairo. = باشتغل في القاهرة"],
   ["escuchar", "يسمع", "Escucho música. = بسمع مزيكا"],
   ["mirar", "يتفرج", "Miro la tele. = بتفرج على التلفزيون"],
   ["comprar", "يشتري", "Compro pan. = باشتري عيش"],
   ["llamar", "ينادي / يكلم تليفون", "Llamo a mi madre. = بكلم ماما"],
   ["necesitar", "يحتاج", "Necesito ayuda. = محتاج مساعدة"],
   ["preguntar", "يسأل", "Pregunto al profesor. = بسأل المدرس"],
   ["caminar", "يمشي", "Camino a la universidad. = بمشي للجامعة"]
  ]},
  { "type": "h", "text": "الضمير اختياري" },
  { "type": "p", "text": "في الإسباني ممكن تشيل الضمير خالص: `Hablo español` كفاية، لأن النهاية -o بتقول إن المتكلم أنا. الضمير بيتقال بس للتأكيد أو التمييز: `Yo hablo español, pero él habla francés.`" },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Qué estudias en la universidad, Sara?", "ar": "بتذاكري إيه في الجامعة يا سارة؟" },
   { "who": "Sara", "en": "Estudio comercio. ¿Y tú?", "ar": "بذاكر تجارة. وإنت؟" },
   { "who": "Omar", "en": "Yo también estudio comercio. ¿Trabajas también?", "ar": "أنا كمان بذاكر تجارة. بتشتغلي كمان؟" },
   { "who": "Sara", "en": "Sí, trabajo por la mañana y estudio por la tarde.", "ar": "أيوه، باشتغل الصبح وبذاكر الضهر." },
   { "who": "Omar", "en": "¡Qué fuerte! Yo solo estudio.", "ar": "برافو عليكي! أنا بذاكر بس." }
  ]},
  { "type": "speak", "en": "Yo hablo español, tú hablas inglés, y ella habla francés.", "ar": "أنا بتكلم إسباني، إنت بتتكلم إنجليزي، وهي بتتكلم فرنساوي." },
  { "type": "speak", "en": "Trabajo por la mañana y estudio por la tarde.", "ar": "باشتغل الصبح وبذاكر الضهر." }
 ],
 "quiz": [
  { "q": "تصريف estudiar مع nosotros:", "options": [{ "text": "estudian" }, { "text": "estudiamos" }, { "text": "estudias" }, { "text": "estudio" }], "answer": 1, "explain": "nosotros بياخد -amos مع أفعال -AR." },
  { "q": "Ella ___ música. (escuchar)", "options": [{ "text": "escucho" }, { "text": "escuchas" }, { "text": "escucha" }, { "text": "escuchan" }], "answer": 2, "explain": "él/ella/usted بياخد -a: escucha." },
  { "q": "ليه ممكن نقول Hablo español من غير Yo؟", "options": [{ "text": "لأن النهاية -o بتقول إن المتكلم أنا" }, { "text": "لأن الضمير غلط في الإسباني" }, { "text": "لأن الجملة قصيرة" }], "answer": 0, "explain": "نهاية الفعل بتحدد الضمير، فالضمير اختياري وبيتحط للتأكيد بس." },
  { "q": "¿Qué estudias? معناها:", "options": [{ "text": "بتذاكر فين؟" }, { "text": "بتذاكر إيه؟" }, { "text": "بتحب تذاكر؟" }, { "text": "امتى بتذاكر؟" }], "answer": 1, "explain": "qué = إيه، estudias = بتذاكر." }
 ],
 "exercises": [
  { "task": "صرّف trabajar وescuchar وcomprar كاملين في المضارع (٦ ضمائر).", "hint": "o, as, a, amos, áis, an.", "code": "trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan — escucho, escuchas, escucha, escuchamos, escucháis, escuchan — compro, compras, compra, compramos, compráis, compran.", "why": "التصريف الكامل مرة واحدة بيثبت النمط في دماغك أسرع من ١٠٠ جملة متفرقة." },
  { "task": "اكتب ٦ جمل عن يومك باستخدام ٦ أفعال مختلفة من الجدول.", "hint": "Escucho... Compro... Camino...", "code": "Escucho música por la mañana. Camino a la universidad. Estudio español por la tarde. Compro pan. Miro la tele. Llamo a mi madre.", "why": "الأفعال دي هي مفردات يومك الحقيقي، فالجمل هتتقال فعلاً." }
 ]
},
{
 "id": "es7",
 "level": "A1",
 "skill": "core",
 "nav": "أفعال -ER/-IR والأفعال الشاذة",
 "title": "🧩 أفعال -ER/-IR والأفعال الشاذة",
 "subtitle": "comer وvivir، وأهم ٤ أفعال شاذة: tener وir وhacer وpoder",
 "blocks": [
  { "type": "p", "text": "بعد -AR، العيلتين التانيين -ER و-IR تصريفهم شبه بعض وقريب من -AR. وبعدين أهم ٤ أفعال شاذة في اللغة كلها، اللي مش هتقدر تكمل جملة من غيرهم." },
  { "type": "h", "text": "تصريف -ER و-IR" },
  { "type": "table", "head": ["الضمير", "comer (ياكل)", "vivir (يعيش/يسكن)"], "rows": [
   ["yo", "como", "vivo"],
   ["tú", "comes", "vives"],
   ["él/ella/usted", "come", "vive"],
   ["nosotros", "comemos", "vivimos"],
   ["vosotros", "coméis", "vivís"],
   ["ellos/ustedes", "comen", "viven"]
  ]},
  { "type": "note", "text": "لاحظ: -ER و-IR زي بعض في كل حاجة ما عدا nosotros وvosotros: comemos/vivimos, coméis/vivís. والفرق عن -AR بسيط: e بدل a." },
  { "type": "h", "text": "أهم ٤ أفعال شاذة" },
  { "type": "table", "head": ["الفعل", "المعنى", "التصريف (yo, tú, él, nosotros, ellos)", "مثال"], "rows": [
   ["tener", "يملك / عنده", "tengo, tienes, tiene, tenemos, tienen", "Tengo dos hermanos. = عندي أخوين"],
   ["ir", "يروح", "voy, vas, va, vamos, van", "Voy a la universidad. = رايح الجامعة"],
   ["hacer", "يعمل", "hago, haces, hace, hacemos, hacen", "¿Qué haces? = بتعمل إيه؟"],
   ["poder", "يقدر", "puedo, puedes, puede, podemos, pueden", "¿Puedo entrar? = ممكن أدخل؟"]
  ]},
  { "type": "h", "text": "تركيبتين ذهبيتين" },
  { "type": "list", "items": [
   "`ir a + مصدر` = هـ/رايح أعمل: `Voy a estudiar español.` = هذاكر إسباني. دي أسهل طريقة للمستقبل القريب.",
   "`tener que + مصدر` = لازم: `Tengo que estudiar.` = لازم أذاكر.",
   "`poder + مصدر` = يقدر: `¿Puedes ayudarme?` = تقدر تساعدني؟",
   "`¿Qué haces?` = بتعمل إيه دلوقتي؟ من أكتر الجمل استخداماً في أي تعارف."
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¿Qué haces este fin de semana, Sara?", "ar": "بتعملي إيه الويك إند ده يا سارة؟" },
   { "who": "Sara", "en": "Voy a El Cairo. Tengo que visitar a mi familia.", "ar": "رايحة القاهرة. لازم أزور أهلي." },
   { "who": "Omar", "en": "¡Qué bien! Yo tengo que estudiar. Tengo un examen el lunes.", "ar": "يا سلام! أنا لازم أذاكر. عندي امتحان يوم الاتنين." },
   { "who": "Sara", "en": "¿Puedes estudiar conmigo el domingo por la noche?", "ar": "تقدر تذاكر معايا يوم الحد بالليل؟" },
   { "who": "Omar", "en": "¡Claro! Vamos a estudiar juntos.", "ar": "أكيد! هنذاكر سوا." }
  ]},
  { "type": "speak", "en": "Voy a estudiar español. Tengo que practicar todos los días.", "ar": "هذاكر إسباني. لازم أتدرب كل يوم." },
  { "type": "speak", "en": "¿Puedes ayudarme? No puedo solo.", "ar": "تقدر تساعدني؟ مش قادر لوحدي." }
 ],
 "quiz": [
  { "q": "تصريف vivir مع nosotros:", "options": [{ "text": "vivimos" }, { "text": "vivemos" }, { "text": "viván" }, { "text": "vivan" }], "answer": 0, "explain": "-IR بياخد -imos مع nosotros: vivimos (متنساش الفرق عن comemos)." },
  { "q": "Voy a estudiar معناها:", "options": [{ "text": "بذاكر دلوقتي" }, { "text": "هذاكر (مستقبل قريب)" }, { "text": "لازم أذاكر" }, { "text": "ذاكرت" }], "answer": 1, "explain": "ir a + مصدر = المستقبل القريب، زي (هـ) بالعربي." },
  { "q": "Tengo que estudiar معناها:", "options": [{ "text": "هذاكر" }, { "text": "عايز أذاكر" }, { "text": "لازم أذاكر" }, { "text": "بقدر أذاكر" }], "answer": 2, "explain": "tener que + مصدر = لازم/وجوب." },
  { "q": "yo مع poder:", "options": [{ "text": "podo" }, { "text": "puedo" }, { "text": "pueda" }, { "text": "poder" }], "answer": 1, "explain": "poder فعل شاذ: puedo, puedes, puede, podemos, pueden." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل بـ ir a + مصدر عن خططك الأسبوع ده.", "hint": "Voy a...", "code": "Voy a estudiar español. Voy a visitar a mi familia en Asiut. Voy a comprar un libro.", "why": "ir a هي أكتر تركيبة هتستخدمها للكلام عن خططك." },
  { "task": "اكتب ٣ جمل بـ tener que و٢ بـ poder عن يومك.", "hint": "Tengo que... / Puedo... / No puedo...", "code": "Tengo que estudiar. Tengo que trabajar mañana. Tengo que llamar a mi madre. Puedo hablar un poco de español. No puedo ir hoy.", "why": "لازم وأقدر أداتين أساسيتين في أي محادثة يومية." }
 ]
}
);
