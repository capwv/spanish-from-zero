/* Level B2 skills: listening, reading, writing, speaking (Spanish) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b2-listen",
 "level": "B2",
 "skill": "listening",
 "nav": "استماع: الأخبار",
 "title": "🎧 استماع: نشرة أخبار",
 "subtitle": "اسمع نشرة أخبار بالإسباني",
 "blocks": [
  { "type": "p", "text": "المستوى المتوسط المتقدم بيتطلب فهم اللغة الرسمية. هنا هتسمع نشرة أخبار. ركز على الأحداث والتفاصيل المهمة." },
  { "type": "dialogue", "lines": [
   { "who": "Locutor", "en": "Buenas noches. Estas son las noticias de hoy.", "ar": "مساء الخير. دي أخبار النهاردة." },
   { "who": "Locutor", "en": "El gobierno anuncia nuevas medidas económicas para impulsar el crecimiento.", "ar": "الحكومة أعلنت إجراءات اقتصادية جديدة لتحفيز النمو." },
   { "who": "Locutor", "en": "Los expertos predicen un aumento del 3% en el PIB para el próximo año.", "ar": "الخبراء بيتوقعوا زيادة 3% في الناتج المحلي السنة الجاية." },
   { "who": "Locutor", "en": "En el ámbito internacional, la cumbre climática concluye con acuerdos históricos.", "ar": "على المستوى الدولي، قمة المناخ خلصت باتفاقات تاريخية." },
   { "who": "Locutor", "en": "Los líderes mundiales se comprometen a reducir las emisiones de carbono.", "ar": "قادة العالم اتعهدوا يقللوا انبعاثات الكربون." },
   { "who": "Locutor", "en": "En deportes, el equipo nacional gana el campeonato mundial.", "ar": "في الرياضة، المنتخب الوطني كسب بطولة العالم." },
   { "who": "Locutor", "en": "Miles de aficionados celebran en las calles la victoria histórica.", "ar": "آلاف المشجعين بيحتفلوا في الشوارع بالفوز التاريخي." },
   { "who": "Locutor", "en": "Y en cultura, el museo nacional inaugura una nueva exposición de arte moderno.", "ar": "وفي الثقافة، المتحف الوطني افتتح معرض جديد للفن الحديث." },
   { "who": "Locutor", "en": "La exposición estará abierta al público hasta fin de mes.", "ar": "المعرض هيفضل مفتوح للجمهور لحد آخر الشهر." },
   { "who": "Locutor", "en": "Esto es todo por hoy. Buenas noches.", "ar": "كده خلصت أخبار النهاردة. مساء الخير." }
  ]},
  { "type": "h", "text": "كلمات الأخبار" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["las medidas económicas", "الإجراءات الاقتصادية"],
   ["impulsar el crecimiento", "تحفيز النمو"],
   ["el PIB", "الناتج المحلي"],
   ["la cumbre climática", "قمة المناخ"],
   ["los acuerdos históricos", "الاتفاقات التاريخية"],
   ["reducir las emisiones", "تقليل الانبعاثات"],
   ["el campeonato mundial", "بطولة العالم"],
   ["la exposición", "المعرض"]
  ]},
  { "type": "speak", "en": "El gobierno anuncia nuevas medidas económicas para impulsar el crecimiento.", "ar": "الحكومة أعلنت إجراءات اقتصادية جديدة لتحفيز النمو." }
 ],
 "quiz": [
  { "q": "الحكومة أعلنت إيه؟", "options": [{ "text": "إجراءات اجتماعية" }, { "text": "إجراءات اقتصادية" }, { "text": "إجراءات سياسية" }, { "text": "إجراءات أمنية" }], "answer": 1, "explain": "medidas económicas = إجراءات اقتصادية." },
  { "q": "الخبراء بيتوقعوا زيادة كام في المائة في الناتج المحلي؟", "options": [{ "text": "1%" }, { "text": "2%" }, { "text": "3%" }, { "text": "5%" }], "answer": 2, "explain": "3% = 3 في المائة." },
  { "q": "قمة المناخ خلصت بإيه؟", "options": [{ "text": "مشاكل" }, { "text": "اتفاقات تاريخية" }, { "text": "خلافات" }, { "text": "تأجيل" }], "answer": 1, "explain": "acuerdos históricos = اتفاقات تاريخية." },
  { "q": "قادة العالم اتعهدوا يعملوا إيه؟", "options": [{ "text": "يزودوا الانبعاثات" }, { "text": "يقللوا الانبعاثات" }, { "text": "يلغوا الانبعاثات" }, { "text": "يتجاهلوا الانبعاثات" }], "answer": 1, "explain": "reducir las emisiones = تقليل الانبعاثات." },
  { "q": "المنتخب الوطني كسب إيه؟", "options": [{ "text": "بطولة أفريقيا" }, { "text": "بطولة آسيا" }, { "text": "بطولة العالم" }, { "text": "بطولة أوروبا" }], "answer": 2, "explain": "campeonato mundial = بطولة العالم." },
  { "q": "المعرض هيفضل مفتوح لحد إمتى؟", "options": [{ "text": "لحد الأسبوع الجاي" }, { "text": "لحد آخر الشهر" }, { "text": "لحد السنة الجاية" }, { "text": "لحد إشعار آخر" }], "answer": 1, "explain": "hasta fin de mes = لحد آخر الشهر." }
 ],
 "exercises": [
  { "task": "اسمع النشرة 3 مرات وحاول تلخص الأخبار الرئيسية.", "hint": "ركز على الأحداث المهمة والتواريخ.", "code": "Escuchar, resumir, analizar.", "why": "الأخبار تحتاج فهم سريع ودقيق." },
  { "task": "اكتب ملخص لأهم 3 أخبار بالإسباني.", "hint": "استخدم لغة رسمية وبسيطة.", "code": "El gobierno anuncia... Los expertos predicen... En deportes...", "why": "الملخصات تساعد على الفهم العميق." }
 ]
}

,
{
 "id": "b2-read",
 "level": "B2",
 "skill": "reading",
 "nav": "قراءة: مقال برأي",
 "title": "📖 قراءة: مقال برأي واضح",
 "subtitle": "اقرأ مقال فيه موقف وحجج، وحدد رأي الكاتب وأدلته",
 "blocks": [
  { "type": "p", "text": "القراءة في B2 هي المقالات الرأيوية: نص فيه موقف واضح وحجج. المطلوب مش بس الفهم، ده تحديد رأي الكاتب وإزاي بيدافع عنه." },
  { "type": "p", "text": "¿Trabajar desde casa o en la oficina? Para muchos, la respuesta es obvia: desde casa. Sin embargo, creo que la oficina tiene ventajas que no podemos ignorar. En primer lugar, la oficina separa el trabajo de la vida personal: cuando sales, el trabajo se queda atrás. En segundo lugar, las conversaciones informales del pasillo crean ideas que ninguna videollamada puede repetir. Es cierto que trabajar desde casa ahorra tiempo de transporte y ofrece flexibilidad, y no digo que debamos volver todos a la oficina cinco días por semana. Pero defender el modelo híbrido no es nostalgia: es reconocer que trabajamos mejor cuando nos vemos de vez en cuando.", "ar": "الشغل من البيت ولا من المكتب؟ لناس كتير، الإجابة واضحة: من البيت. لكن، أنا شايف إن للمكتب مزايا مش ممكن نتجاهلها. أولاً، المكتب بيفصل الشغل عن الحياة الشخصية: لما بتخرج، الشغل بيسيبك. ثانياً، حوارات الطرقة العادية بتخلق أفكار مفيش مكالمة فيديو تقدر تعوضها. صحيح إن الشغل من البيت بيوفر وقت المواصلات وبيدي مرونة، ومش بقول لازم كلنا نرجع للمكتب خمس أيام في الأسبوع. بس الدفاع عن النظام الهجين مش حنين: ده اعتراف إننا بنشتغل أحسن لما بنتقابل من وقت للتاني." },
  { "type": "h", "text": "أدوات المقال الرأيوي" },
  { "type": "table", "head": ["الأداة", "المعنى", "الدور"], "rows": [
   ["sin embargo", "لكن", "تحول ضد التوقع"],
   ["en primer lugar / en segundo lugar", "أولاً / ثانياً", "ترتيب الحجج"],
   ["es cierto que", "صحيح إن", "اعتراف بحجة الطرف التاني"],
   ["no digo que", "مش بقول إن", "تحفظ يحمي الموقف"],
   ["no es nostalgia: es reconocer", "مش حنين: ده اعتراف", "إعادة صياغة قوية للرأي"]
  ]},
  { "type": "speak", "en": "Sin embargo, creo que la oficina tiene ventajas que no podemos ignorar.", "ar": "لكن، أنا شايف إن للمكتب مزايا مش ممكن نتجاهلها." }
 ],
 "quiz": [
  { "q": "رأي الكاتب الأساسي:", "options": [{ "text": "الشغل من البيت أفضل دايماً" }, { "text": "المكتب له مزايا مهمة والنظام الهجين هو الحل" }, { "text": "لازم نرجع للمكتب ٥ أيام" }], "answer": 1, "explain": "الكاتب بيدافع عن المكتب بس بيقبل الهجين: defender el modelo híbrido." },
  { "q": "حجة المكتب الأولى:", "options": [{ "text": "أرخص" }, { "text": "بيفصل الشغل عن الحياة الشخصية" }, { "text": "أسرع" }], "answer": 1, "explain": "La oficina separa el trabajo de la vida personal." },
  { "q": "Es cierto que... بيدخل بيها الكاتب:", "options": [{ "text": "حجته الأساسية" }, { "text": "حجة الطرف التاني قبل ما يرد عليها" }, { "text": "الخلاصة" }], "answer": 1, "explain": "الاعتراف بنقطة الخصم قبل الرد = أسلوب المقالات الرأيوية." },
  { "q": "no es nostalgia: es reconocer — الكاتب بيعمل إيه؟", "options": [{ "text": "بينفي حنينه ويعيد صياغة موقفه" }, { "text": "بيتكلم عن الماضي" }, { "text": "بيغيّر رأيه" }], "answer": 0, "explain": "إعادة الصياغة بتقوي الرأي وتمنع سوء الفهم." },
  { "q": "las conversaciones del pasillo بتخلق إيه؟", "options": [{ "text": "مشاكل" }, { "text": "أفكار مش ممكن تتكرر في مكالمة فيديو" }, { "text": "زحمة" }], "answer": 1, "explain": "حجة التفاعل العفوي في المكتب." },
  { "q": "sin embargo معناها:", "options": [{ "text": "عشان كده" }, { "text": "لكن" }, { "text": "وكمان" }], "answer": 1, "explain": "من أهم أدوات التحول في الإسباني الرسمي." }
 ],
 "exercises": [
  { "task": "اكتب بالإسباني: رأي الكاتب في جملة، وحجتين من حججه، والنقطة اللي اعترف بيها للطرف التاني.", "hint": "دور على sin embargo / en primer lugar / es cierto que.", "code": "Opina que la oficina tiene ventajas importantes. Argumentos: separa el trabajo de la vida personal y crea ideas informales. Concede que trabajar desde casa ahorra tiempo y es flexible.", "why": "تفكيك المقال لرأي وحجج واعتراف هو جوهر قراءة B2." },
  { "task": "اكتب ٣ جمل بنفس أدوات المقال عن موضوع تختاره (التعلم أونلاين مثلاً).", "hint": "Sin embargo... / Es cierto que... / No digo que...", "code": "Es cierto que estudiar online es flexible. Sin embargo, creo que la universidad presencial crea amistades reales. No digo que el online sea malo: es solo otra herramienta.", "why": "نقل الأدوات لموضوع جديد بيثبت إنك امتلكتها فعلاً." }
 ]
},
{
 "id": "b2-write",
 "level": "B2",
 "skill": "writing",
 "nav": "كتابة: إيميل رسمي",
 "title": "✍️ كتابة: إيميل رسمي محترف",
 "subtitle": "اكتب إيميل رسمي كامل: استفسار، طلب، أو شكوى",
 "blocks": [
  { "type": "p", "text": "الإيميل الرسمي بالإسباني له بروتوكول ثابت: سلام رسمي، تقديم، سبب الكتابة، طلب واضح، وختام مهذب. اتعلم الهيكل مرة وهتستخدمه في أي مراسلة رسمية." },
  { "type": "h", "text": "الهيكل والقوالب" },
  { "type": "table", "head": ["الجزء", "القالب"], "rows": [
   ["السلام", "Estimado señor García: / Estimada señora López: / A quien corresponda: (لمن يهمه الأمر)"],
   ["التقديم", "Me dirijo a usted para... (بخاطب حضرتك عشان...)"],
   ["السبب", "Le escribo en relación con... (بكتبلك بخصوص...)"],
   ["الطلب", "Le agradecería que me enviara... (هكون ممنون لو تبعتلي...)"],
   ["التوفر", "Quedo a su disposición para cualquier consulta. (تحت أمرك لأي استفسار)"],
   ["الختام", "Atentamente, / Cordialmente, + الاسم الكامل"]
  ]},
  { "type": "h", "text": "نموذج: استفسار عن كورس" },
  { "type": "p", "text": "Estimada señora López:\nMe dirijo a usted en relación con el curso de español para extranjeros. Soy estudiante de comercio en Egipto y me gustaría recibir más información sobre las fechas y los precios. Le agradecería que me enviara el programa completo del curso. Quedo a su disposición para cualquier consulta.\nAtentamente,\nOmar Hassan", "ar": "الأستاذة الفاضلة لوبيز:\nبخاطب حضرتك بخصوص كورس الإسباني للأجانب. أنا طالب تجارة في مصر وحابب أعرف تفاصيل أكتر عن المواعيد والأسعار. هكون ممنون لو تبعتلي البرنامج الكامل للكورس. تحت أمرك لأي استفسار.\nمع خالص التقدير،\nعمر حسن" },
  { "type": "note", "text": "لاحظ: usted بدل tú طول الإيميل، والأفعال معها: le escribo, le agradecería. وLe agradecería que + subjuntivo هي أرقى صيغة طلب في الإسباني." },
  { "type": "speak", "en": "Me dirijo a usted en relación con el curso de español.", "ar": "بخاطب حضرتك بخصوص كورس الإسباني." }
 ],
 "quiz": [
  { "q": "السلام الصح لإيميل رسمي لشخص مش تعرفه:", "options": [{ "text": "Hola amigo," }, { "text": "Estimado señor García:" }, { "text": "¿Qué tal?" }], "answer": 1, "explain": "Estimado/a señor/a + اللقب هو السلام الرسمي." },
  { "q": "Le agradecería que me enviara... فيها:", "options": [{ "text": "طلب وقح" }, { "text": "طلب رسمي مهذب بـ condicional + subjuntivo" }, { "text": "شكر عادي" }], "answer": 1, "explain": "أرقى صيغة طلب: شرطية + subjuntivo." },
  { "q": "الختام الصح:", "options": [{ "text": "Un abrazo" }, { "text": "Atentamente," }, { "text": "Adiós" }], "answer": 1, "explain": "Atentamente / Cordialmente للرسمي. Un abrazo للصحاب." },
  { "q": "Quedo a su disposición معناها:", "options": [{ "text": "أنا مش متاح" }, { "text": "تحت أمرك لأي استفسار" }, { "text": "هستناك في البيت" }], "answer": 1, "explain": "جملة الختام الكلاسيكية في المراسلات الرسمية." }
 ],
 "exercises": [
  { "task": "اكتب إيميل رسمي لجامعة إسبانية تستفسر فيه عن منحة أو كورس: سلام، تقديم، طلب، ختام.", "hint": "Estimada señora... / Me dirijo a usted... / Le agradecería... / Atentamente.", "code": "Estimado señor director: Me dirijo a usted en relación con las becas de verano. Soy estudiante egipcio y me gustaría recibir información sobre los requisitos. Le agradecería que me enviara el formulario. Atentamente, Omar Hassan.", "why": "الإيميل الرسمي هو أول نص حقيقي هتحتاجه في أي تعامل أكاديمي أو مهني." },
  { "task": "حوّل الرسالة الودية دي لرسمية: Hola Carlos, ¿me pasas el programa? Gracias!", "hint": "Carlos → señor López، tú → usted.", "code": "Estimado señor López: Me dirijo a usted para solicitar el programa del curso. Le agradecería que me lo enviara cuando sea posible. Atentamente, Omar Hassan.", "why": "التحويل بين الودي والرسمي بيدربك على التحكم في الأسلوب." }
 ]
},
{
 "id": "b2-speak",
 "level": "B2",
 "skill": "speaking",
 "nav": "كلام: عرض تقديمي",
 "title": "🗣️ كلام: قدّم عرض قصير منظم",
 "subtitle": "تدرب على هيكل العرض: افتتاحية، نقاط، وختام",
 "blocks": [
  { "type": "p", "text": "الكلام في B2 هو العرض المنظم: تقف وتتكلم دقيقتين-تلاتة بهيكل واضح. اسمع الجمل، رددها، سجّل عرضك وقارن. التمرين ده للمذاكرة، مش امتحان." },
  { "type": "h", "text": "هيكل العرض" },
  { "type": "speak", "en": "Buenos días a todos. Hoy voy a hablar sobre el aprendizaje de idiomas.", "ar": "صباح الخير جميعاً. النهارده هتكلم عن تعلم اللغات." },
  { "type": "speak", "en": "Voy a dividir mi charla en tres puntos.", "ar": "هقسم كلامي لتلات نقاط." },
  { "type": "speak", "en": "En primer lugar... En segundo lugar... Por último...", "ar": "أولاً... ثانياً... وأخيراً..." },
  { "type": "speak", "en": "Un buen ejemplo de esto es...", "ar": "مثال كويس على كده هو..." },
  { "type": "speak", "en": "Para concluir, quiero decir que la práctica diaria es la clave.", "ar": "في الختام، عايز أقول إن التدريب اليومي هو المفتاح." },
  { "type": "speak", "en": "Muchas gracias por su atención. ¿Alguna pregunta?", "ar": "شكراً جزيلاً على حسن استماعكم. أي سؤال؟" },
  { "type": "note", "text": "خريطة أي عرض ناجح: تحية + موضوع + خريطة النقاط + نقطة نقطة بمثال + خلاصة + شكر. احفظ الخريطة مش الكلام." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Sara, ¿me escuchas? Quiero practicar mi presentación.", "ar": "سارة، تسمعيني؟ عايز أتدرب على العرض بتاعي." },
   { "who": "Sara", "en": "¡Claro! Empieza.", "ar": "أكيد! ابدأ." },
   { "who": "Omar", "en": "Buenos días. Hoy voy a hablar sobre el español en Egipto. Voy a dividir mi charla en dos puntos: por qué estudiarlo y cómo practicarlo.", "ar": "صباح الخير. النهارده هتكلم عن الإسباني في مصر. هقسم كلامي لنقطتين: ليه نتعلمه وإزاي نتدرب عليه." },
   { "who": "Sara", "en": "Muy bien. La estructura es clara. ¡Sigue!", "ar": "جميل جداً. الهيكل واضح. كمّل!" }
  ]}
 ],
 "quiz": [
  { "q": "Voy a dividir mi charla en tres puntos دورها:", "options": [{ "text": "خريطة تريح السامع وتقوله هيسمع إيه" }, { "text": "مقدمة طويلة" }, { "text": "ختام" }], "answer": 0, "explain": "خريطة العرض أهم جملة بعد التحية." },
  { "q": "Para concluir بتستخدم في:", "options": [{ "text": "الافتتاحية" }, { "text": "الخلاصة" }, { "text": "النقطة الأولى" }], "answer": 1, "explain": "para concluir = في الختام." },
  { "q": "أنهي ترتيب صح لعرض؟", "options": [{ "text": "خلاصة، تحية، نقاط" }, { "text": "تحية، موضوع، خريطة، نقاط، خلاصة، شكر" }, { "text": "نقاط، تحية، خريطة" }], "answer": 1, "explain": "الهيكل الكامل من التحية للشكر." },
  { "q": "¿Alguna pregunta? بتتقال:", "options": [{ "text": "في الأول" }, { "text": "في النص" }, { "text": "في الآخر بعد الشكر" }], "answer": 2, "explain": "بتقفل بيها العرض وتفتح النقاش." }
 ],
 "exercises": [
  { "task": "جهز وسجّل عرض دقيقتين عن (ليه نتعلم لغة تانية؟) بالهيكل الكامل: تحية، موضوع، خريطة، نقطتين بمثال، خلاصة، شكر.", "hint": "اكتب النقاط على ورقة صغيرة بس، والكلام الحر يجي منك.", "code": "Buenos días. Hoy voy a hablar sobre aprender un segundo idioma. Voy a dividir mi charla en dos puntos. En primer lugar, el trabajo... En segundo lugar, los viajes... Para concluir, un idioma abre puertas. Muchas gracias.", "why": "العرض الكامل المسجل هو أقوى تمرين عملي على مهارات الكلام في المستوى ده: اسمع نفسك، قارن بالنموذج، وحاول تاني." },
  { "task": "اسمع تسجيلك وقيّم نفسك على ٣ حاجات: الهيكل واضح؟ الأمثلة موجودة؟ الخلاصة قوية؟", "hint": "سجّل تاني لو نقص حاجة.", "code": "أعد التسجيل مع التحسين.", "why": "التقييم الذاتي بعد كل تسجيل هو اللي بيحول التدريب لتقدم." }
 ]
}

);
