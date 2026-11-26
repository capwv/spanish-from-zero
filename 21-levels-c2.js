/* Level C2 skills: listening, reading, writing, speaking (Spanish) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c2-listen",
 "level": "C2",
 "skill": "listening",
 "nav": "استماع: نقاش فلسفي",
 "title": "🎧 استماع: نقاش فلسفي",
 "subtitle": "اسمع نقاش فلسفي بالإسباني",
 "blocks": [
  { "type": "p", "text": "المستوى المتقدم جداً بيتطلب فهم اللغة الأدبية والفلسفية. هنا هتسمع نقاش فلسفي. ركز على الأفكار المجردة والحجج المنطقية." },
  { "type": "dialogue", "lines": [
   { "who": "Filósofo", "en": "La cuestión fundamental de la filosofía es el sentido de la existencia.", "ar": "السؤال الأساسي في الفلسفة هو معنى الوجود." },
   { "who": "Filósofo", "en": "¿Por qué existimos? ¿Cuál es el propósito de nuestra vida?", "ar": "ليه بنوجد؟ إيه هدف حياتنا؟" },
   { "who": "Filósofo", "en": "Los existencialistas sostienen que la existencia precede a la esencia.", "ar": "الوجوديين بيقولوا إن الوجود بيسبق الجوهر." },
   { "who": "Filósofo", "en": "Esto significa que primero existimos y luego definimos quiénes somos.", "ar": "ده معناه إننا بنوجد الأول وبعدين بنحدد مين إحنا." },
   { "who": "Filósofo", "en": "Somos responsables de crear nuestro propio sentido de la vida.", "ar": "إحنا مسؤولين عن خلق معنى حياتنا بنفسنا." },
   { "who": "Filósofo", "en": "La libertad es una carga y un privilegio al mismo tiempo.", "ar": "الحرية عبء وامتياز في نفس الوقت." },
   { "who": "Filósofo", "en": "La angustia existencial surge cuando enfrentamos nuestra libertad absoluta.", "ar": "القلق الوجودي بيظهر لما بنواجه حريتنا المطلقة." },
   { "who": "Filósofo", "en": "Pero también es la fuente de nuestra autenticidad y creatividad.", "ar": "بس ده أيضاً مصدر أصالتنا وإبداعنا." },
   { "who": "Filósofo", "en": "La vida no tiene un sentido intrínseco, debemos dárselo nosotros mismos.", "ar": "الحياة مالهاش معنى جوهري، لازم نحطه إحنا بنفسنا." },
   { "who": "Filósofo", "en": "¿Qué sentido le dan ustedes a su existencia?", "ar": "إنتوا بتحطوا إيه معنى لوجودكم؟" }
  ]},
  { "type": "h", "text": "مصطلحات فلسفية" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["el sentido de la existencia", "معنى الوجود"],
   ["el propósito", "الهدف"],
   ["los existencialistas", "الوجوديين"],
   ["la existencia precede a la esencia", "الوجود يسبق الجوهر"],
   ["la libertad", "الحرية"],
   ["la angustia existencial", "القلق الوجودي"],
   ["la autenticidad", "الأصالة"],
   ["el sentido intrínseco", "المعنى الجوهري"]
  ]},
  { "type": "speak", "en": "La cuestión fundamental de la filosofía es el sentido de la existencia.", "ar": "السؤال الأساسي في الفلسفة هو معنى الوجود." }
 ],
 "quiz": [
  { "q": "السؤال الأساسي في الفلسفة هو إيه؟", "options": [{ "text": "الوجود" }, { "text": "المعرفة" }, { "text": "الحقيقة" }, { "text": "الجمال" }], "answer": 0, "explain": "el sentido de la existencia = معنى الوجود." },
  { "q": "الوجوديين بيقولوا إيه؟", "options": [{ "text": "الجوهر يسبق الوجود" }, { "text": "الوجود يسبق الجوهر" }, { "text": "الوجود والجوهر متساويين" }, { "text": "لا وجود ولا جوهر" }], "answer": 1, "explain": "la existencia precede a la esencia = الوجود يسبق الجوهر." },
  { "q": "إيه اللي بيظهر لما بنواجه حريتنا المطلقة؟", "options": [{ "text": "السعادة" }, { "text": "القلق الوجودي" }, { "text": "الراحة" }, { "text": "الأمان" }], "answer": 1, "explain": "la angustia existencial = القلق الوجودي." },
  { "q": "الحياة مالهاش معنى إيه؟", "options": [{ "text": "جوهري" }, { "text": "سطحي" }, { "text": "مؤقت" }, { "text": "دائم" }], "answer": 0, "explain": "sentido intrínseco = معنى جوهري." },
  { "q": "إحنا مسؤولين عن إيه؟", "options": [{ "text": "خلق معنى حياتنا" }, { "text": "اتباع التقاليد" }, { "text": "طاعة الآخرين" }, { "text": "الهروب من الواقع" }], "answer": 0, "explain": "crear nuestro propio sentido de la vida = خلق معنى حياتنا بنفسنا." },
  { "q": "الحرية إيه؟", "options": [{ "text": "عبء فقط" }, { "text": "امتياز فقط" }, { "text": "عبء وامتياز" }, { "text": "لا عبء ولا امتياز" }], "answer": 2, "explain": "una carga y un privilegio = عبء وامتياز." }
 ],
 "exercises": [
  { "task": "اسمع النقاش 3 مرات وحاول تفهم الحجج الفلسفية.", "hint": "ركز على الأفكار المجردة والحجج المنطقية.", "code": "Escuchar, reflexionar, argumentar.", "why": "النقاشات الفلسفية تحتاج تفكير عميق." },
  { "task": "اكتب مقال فلسفي قصير عن رأيك في معنى الحياة بالإسباني.", "hint": "استخدم لغة فلسفية وأفكار منظمة.", "code": "La existencia... El sentido... La libertad...", "why": "الكتابة الفلسفية تحتاج لغة دقيقة وأفكار عميقة." }
 ]
}

,
{
 "id": "c2-read",
 "level": "C2",
 "skill": "reading",
 "nav": "قراءة: نص أدبي",
 "title": "📖 قراءة: نص أدبي فيه استعارة ومفارقة",
 "subtitle": "اقرأ نص أدبي قصير والتقط الصور البلاغية والمعنى الضمني",
 "blocks": [
  { "type": "p", "text": "القراءة في C2 هي النص الأدبي: استعارات، مفارقات، ومعنى بين السطور. اقرأ النص مرة للمتعة، ومرة للصور البلاغية." },
  { "type": "p", "text": "El verano en Asiut olía a polvo y a mangos. El calor era un animal que dormía en las calles y no quería irse. Pero por las noches, cuando llegaba el viento, la ciudad respiraba de nuevo. Nos sentábamos en el balcón y contábamos estrellas, como si no hubiera nada más que hacer. Mi abuelo decía que cada estrella era una historia que alguien olvidó contar. Yo no sabía si era verdad, pero me gustaba creerle. Años después, lejos de casa, entendí que el verano no era una estación: era una persona.", "ar": "الصيف في أسيوط كانت ريحته تراب ومانجو. الحر كان حيوان بينام في الشوارع ومش عايز يمشي. بس بالليل، لما الهوا بيوصل، المدينة بتتنفس من جديد. كنا بنقعد على البلكونة ونعد النجوم، كأن مفيش حاجة تانية نعملها. جدي كان بيقول إن كل نجمة هي حكاية حد نسي يحكيها. أنا مكنتش عارف لو ده صح، بس كنت بحب أصدقه. بعد سنين، بعيد عن البيت، فهمت إن الصيف مكانش فصل: كان شخص." },
  { "type": "h", "text": "الصور البلاغية في النص" },
  { "type": "table", "head": ["الصورة", "النوع", "المعنى الضمني"], "rows": [
   ["El calor era un animal", "استعارة", "الحر كائن حي ثقيل وعنيد"],
   ["la ciudad respiraba", "تشخيص", "المدينة بتستريح بالليل زي إنسان"],
   ["cada estrella era una historia", "استعارة", "الحكايات الضايعة محفوظة في السما"],
   ["el verano era una persona", "مفارقة ختامية", "الصيف = الجد نفسه؛ الفصل بقى ذكرى إنسان"]
  ]},
  { "type": "speak", "en": "El calor era un animal que dormía en las calles y no quería irse.", "ar": "الحر كان حيوان بينام في الشوارع ومش عايز يمشي." }
 ],
 "quiz": [
  { "q": "المفارقة الختامية (el verano era una persona) بتقصد:", "options": [{ "text": "الصيف كان إنسان فعلاً" }, { "text": "الصيف ارتبط في ذاكرة الكاتب بجدّه — الفصل بقى رمز لشخص" }, { "text": "الصيف بيتكلم" }], "answer": 1, "explain": "الختام بيكشف إن الحكاية كلها عن الجد مش عن الجو." },
  { "q": "la ciudad respiraba de nuevo نوعه البلاغي:", "options": [{ "text": "تشبيه" }, { "text": "تشخيص (personificación)" }, { "text": "مبالغة" }], "answer": 1, "explain": "المدينة بتتنفس = إعطاء صفة إنسانية لجماد." },
  { "q": "como si no hubiera nada más que hacer — hubiera هنا:", "options": [{ "text": "subjuntivo بعد como si (كأن)" }, { "text": "ماضي عادي" }, { "text": "مستقبل" }], "answer": 0, "explain": "como si + imperfecto de subjuntivo = كأن — تركيبة C2 شهيرة." },
  { "q": "me gustaba creerle معناها:", "options": [{ "text": "كنت بكذبه" }, { "text": "كنت بحب أصدقه (رغم الشك)" }, { "text": "كنت بخاف منه" }], "answer": 1, "explain": "gustar + مصدر هنا بيوصل ميل عاطفي رغم عدم اليقين." }
 ],
 "exercises": [
  { "task": "اكتب بالإسباني: أطروحة النص في جملة، والمفارقة الرئيسية، وتقييمك النقدي في جملة (هل الصورة الأخيرة مقنعة؟ ليه؟).", "hint": "La tesis... / La paradoja... / En mi opinión...", "code": "El texto convierte el verano en memoria del abuelo. La paradoja: una estación que resulta ser una persona. En mi opinión, la imagen final es convincente porque prepara al lector con las estrellas-historias.", "why": "القراءة في C2 بتطلب التقاط المفارقة والتقييم النقدي، مش التلخيص." },
  { "task": "اكتب فقرة أدبية قصيرة (٤-٥ جمل) عن ذكرى من طفولتك، باستخدام استعارة واحدة على الأقل.", "hint": "ابدأ بتفصيل حسي: ريحة، صوت، لون.", "code": "El invierno en mi barrio sonaba a radio vieja. El frío era un invitado que entraba sin permiso por las ventanas. Pero mi abuela ponía el té, y la casa se volvía un abrazo. Todavía hoy, el olor del té me lleva a esa cocina.", "why": "الكتابة الأدبية تمرين متقدم بيجمع كل اللي اتدربت عليه في المسار." }
 ]
},
{
 "id": "c2-write",
 "level": "C2",
 "skill": "writing",
 "nav": "كتابة: التحكم في الأسلوب",
 "title": "✍️ كتابة: نفس الفكرة بأسلوبين",
 "subtitle": "اكتب نفس الرسالة رسمية وودية، واتقن التحكم في الريجستر",
 "blocks": [
  { "type": "p", "text": "قمة الكتابة في المسار هي التحكم في الأسلوب (registro): نفس الفكرة تتقال لمدير بشكل، ولصاحب بشكل تاني. المهارة دي هي اللي بتفرق بين واحد بيعرف لغة وواحد بيتحكم فيها." },
  { "type": "h", "text": "خريطة التحويل" },
  { "type": "table", "head": ["ودي", "رسمي"], "rows": [
   ["Hola Carlos,", "Estimado señor García:"],
   ["¿Me pasas el informe?", "Le agradecería que me enviara el informe."],
   ["No puedo ir mañana.", "Lamento comunicarle que no podré asistir mañana."],
   ["¡Gracias, crack!", "Le agradezco de antemano su ayuda."],
   ["Un abrazo,", "Atentamente,"]
  ]},
  { "type": "h", "text": "نموذج: نفس الطلب بأسلوبين" },
  { "type": "p", "text": "ودي: «Oye Carlos, ¿me pasas el informe cuando puedas? Lo necesito para el viernes. ¡Gracias, crack!» — رسمي: «Estimado señor García: Me dirijo a usted para solicitar el informe trimestral. Le agradecería que me lo enviara antes del viernes, si fuera posible. Quedo a la espera de su respuesta. Atentamente, Omar Hassan.»", "ar": "ودي: (اسمع يا كارلوس، تبعتلي التقرير لما تفضى؟ محتاجه يوم الجمعة. متشكر يا بطل!) — رسمي: (الأستاذ الفاضل جارثيا: بخاطب حضرتك لطلب التقرير الربع سنوي. هكون ممنون لو تبعتهولي قبل يوم الجمعة لو أمكن. في انتظار ردكم. مع خالص التقدير، عمر حسن.)" },
  { "type": "speak", "en": "Le agradecería que me lo enviara antes del viernes, si fuera posible.", "ar": "هكون ممنون لو تبعتهولي قبل يوم الجمعة، لو أمكن." }
 ],
 "quiz": [
  { "q": "التحكم في الريجستر يعني:", "options": [{ "text": "كتابة أسرع" }, { "text": "تغيير الأسلوب حسب الموقف والمتلقي" }, { "text": "كلمات صعبة أكتر" }], "answer": 1, "explain": "نفس الفكرة بأسلوب يناسب الموقف — دي قمة مهارات الكتابة في المستوى ده." },
  { "q": "Lamento comunicarle que no podré asistir بديلها الودي:", "options": [{ "text": "No puedo ir" }, { "text": "Jamás iré" }, { "text": "No fui" }], "answer": 0, "explain": "نفس المعنى، ريجستر مختلف." },
  { "q": "si fuera posible — fuera هنا:", "options": [{ "text": "subjuntivo للتهذيب الزائد" }, { "text": "ماضي عادي" }, { "text": "غلط" }], "answer": 0, "explain": "si fuera posible = لو أمكن — صيغة رسمية ناعمة جداً." },
  { "q": "أنهي جملة مش مناسبة في إيميل رسمي؟", "options": [{ "text": "Quedo a su disposición" }, { "text": "¡Gracias, crack!" }, { "text": "Le agradezco de antemano" }], "answer": 1, "explain": "crack صياغة صحاب، ممنوعة في الرسمي." }
 ],
 "exercises": [
  { "task": "خد إيميل ودّي كتبته قبل كده وحوّله لرسمي: السلام، الطلب، والختام.", "hint": "Hola → Estimado... / ¿Me pasas...? → Le agradecería...", "code": "قبل: Hola Sara, ¿me mandas las fotos? — بعد: Estimada señora López: Le agradecería que me enviara las fotografías cuando fuera posible. Atentamente, Omar.", "why": "التحويل بين الأسلوبين هو أسرع تدريب على الوعي بالريجستر." },
  { "task": "اكتب نفس الرسالة (طلب إجازة يوم) مرتين: مرة لمديرك ومرة لصاحبك.", "hint": "نفس المعلومة، أسلوب مختلف تماماً.", "code": "رسمي: Estimado señor director: Le solicito un día libre por motivos personales... — ودي: Oye Karim, mañana no voy a trabajar, necesito un día libre. ¡Nos vemos!", "why": "كتابة نفس المحتوى مرتين بتكشف لك كل مفاتيح الأسلوب." }
 ]
},
{
 "id": "c2-speak",
 "level": "C2",
 "skill": "speaking",
 "nav": "كلام: التحكم في الأسلوب",
 "title": "🗣️ كلام: نفس الفكرة بـ ٣ أساليب",
 "subtitle": "تدرب على تغيير الأسلوب حسب الموقف: رسمي، محايد، ودّي",
 "blocks": [
  { "type": "p", "text": "الكلام في C2 هو التحكم اللحظي في الأسلوب: تتكلم رسمي مع مدير، دارج مع صاحب، أكاديمي في نقاش. اسمع الأمثلة، رددها، سجّل نسختك وقارن. التمرين ده للمذاكرة، مش امتحان." },
  { "type": "h", "text": "نفس الفكرة بـ ٣ أساليب" },
  { "type": "speak", "en": "رسمي: Lamento comunicarle que no podré asistir a la reunión.", "ar": "يؤسفني إبلاغكم إني مش هقدر أحضر الاجتماع." },
  { "type": "speak", "en": "محايد: Lo siento, pero no voy a poder ir a la reunión.", "ar": "متأسف، بس مش هقدر أروح الاجتماع." },
  { "type": "speak", "en": "ودّي: Oye, que no puedo ir a la reunión, ¿vale?", "ar": "اسمع، أنا مش هقدر أروح الاجتماع، ماشي؟" },
  { "type": "h", "text": "مفاتيح التحول" },
  { "type": "list", "items": [
   "الضمير: usted (رسمي) ← tú (ودّي) — والتصريف كله بيتبعها.",
   "الافتتاحية: Lamento comunicarle ← Lo siento ← Oye, que...",
   "الفعل: no podré asistir ← no voy a poder ir ← no puedo ir",
   "الختام: Quedo a su disposición ← Ya está ← ¿Vale?"
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "Omar, enséñame: ¿cómo dices «no puedo ir» al director?", "ar": "عمر، علمني: تقول إزاي (مش هقدر أروح) للمدير؟" },
   { "who": "Omar", "en": "Al director: «Lamento comunicarle que no podré asistir».", "ar": "للمدير: (يؤسفني إبلاغكم إني مش هقدر أحضر)." },
   { "who": "Sara", "en": "¿Y a mí?", "ar": "وليا أنا؟" },
   { "who": "Omar", "en": "A ti: «Oye Sara, que no puedo ir, ¿vale?»", "ar": "ليكي إنتي: (اسمعي يا سارة، أنا مش هقدر أروح، ماشي؟)" },
   { "who": "Sara", "en": "¡Qué diferencia! Es como dos idiomas.", "ar": "يا لفرق! كأنهم لغتين." },
   { "who": "Omar", "en": "Exacto. Dominar el idioma es dominar sus registros.", "ar": "بالظبط. التحكم في اللغة هو التحكم في أساليبها." }
  ]}
 ],
 "quiz": [
  { "q": "أهم مفتاح للتحول بين الأسلوبين:", "options": [{ "text": "سرعة الكلام" }, { "text": "الضمير (tú/usted) والافتتاحية والفعل" }, { "text": "كلمات أطول" }], "answer": 1, "explain": "الريجستر منظومة كاملة: ضمير، افتتاحية، فعل، ختام." },
  { "q": "Oye, que no puedo ir أسلوبها:", "options": [{ "text": "رسمي" }, { "text": "محايد" }, { "text": "ودّي جداً" }], "answer": 2, "explain": "Oye, que... ¿vale? = دارج صحاب خالص." },
  { "q": "Lamento comunicarle تناسب:", "options": [{ "text": "صاحبك" }, { "text": "مديرك أو مراسلة رسمية" }, { "text": "طفل" }], "answer": 1, "explain": "أعلى درجات الرسمية في الكلام." },
  { "q": "Dominar el idioma es dominar sus registros معناها:", "options": [{ "text": "التحكم في اللغة هو التحكم في أساليبها" }, { "text": "اللغة صعبة" }, { "text": "القواعد أهم حاجة" }], "answer": 0, "explain": "خلاصة الدرس كله في جملة." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتقول نفس الفكرة بـ ٣ أساليب: (أنا مش هقدر أحضر بكرة) — رسمي، محايد، ودّي.", "hint": "Lamento... / Lo siento... / Oye, que...", "code": "Lamento comunicarle que no podré asistir mañana. / Lo siento, pero no voy a poder ir mañana. / Oye, que mañana no puedo ir, ¿vale?", "why": "قول نفس الفكرة بـ ٣ أساليب ورا بعض هو أدق تدريب في المستوى ده." },
  { "task": "اسمع التسجيل واسأل نفسك: لو بعت ده لمديري، أنهي نسخة أختار؟ وليه؟", "hint": "الضمير والافتتاحية هما أول ما يتكشف.", "code": "النسخة الرسمية: usted + lamento + quedo a su disposición.", "why": "اختيار الأسلوب الصح للموقف هو المهارة نفسها، مش بس إنتاجها." }
 ]
}

);
