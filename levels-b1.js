/* Level B1 skills: listening, reading, writing, speaking (Spanish) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b1-listen",
 "level": "B1",
 "skill": "listening",
 "nav": "استماع: في الشغل",
 "title": "🎧 استماع: مقابلة عمل",
 "subtitle": "اسمع مقابلة عمل بالإسباني",
 "blocks": [
  { "type": "p", "text": "المستوى المتوسط بيتطلب فهم أعمق. هنا هتسمع مقابلة عمل حقيقية. ركز على الأسئلة والإجابات وحاول تفهم المعنى الضمني." },
  { "type": "dialogue", "lines": [
   { "who": "Entrevistador", "en": "Buenos días, soy el director de recursos humanos. ¿Cómo está?", "ar": "صباح الخير، أنا مدير الموارد البشرية. عامل إيه؟" },
   { "who": "Omar", "en": "Buenos días, muy bien, gracias. Encantado de estar aquí.", "ar": "صباح الخير، كويس، شكراً. سعيد إني هنا." },
   { "who": "Entrevistador", "en": "Cuénteme sobre su experiencia laboral.", "ar": "قوللي عن خبرتك في الشغل." },
   { "who": "Omar", "en": "Trabajé cinco años en un banco como analista financiero.", "ar": "اشتغلت 5 سنين في بنك كمحلل مالي." },
   { "who": "Entrevistador", "en": "¿Por qué quiere trabajar con nosotros?", "ar": "ليه عايز تشتغل معانا؟" },
   { "who": "Omar", "en": "Me interesa mucho el sector tecnológico y su empresa es líder en innovación.", "ar": "أنا مهتم جداً بمجال التكنولوجيا وشركتكم رائدة في الابتكار." },
   { "who": "Entrevistador", "en": "¿Cuáles son sus puntos fuertes?", "ar": "إيه نقاط قوتك؟" },
   { "who": "Omar", "en": "Soy una persona responsable, trabajadora y me adapto rápido a los cambios.", "ar": "أنا شخص مسؤول، شغال، وبتاقلم بسرعة مع التغييرات." },
   { "who": "Entrevistador", "en": "¿Y sus puntos débiles?", "ar": "وإيه نقاط ضعفك؟" },
   { "who": "Omar", "en": "A veces soy perfeccionista, pero estoy aprendiendo a delegar más.", "ar": "أحياناً أنا مثالي، بس بتعلم أفوض أكتر." }
  ]},
  { "type": "h", "text": "كلمات الشغل" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["la experiencia laboral", "الخبرة في الشغل"],
   ["el analista financiero", "المحلل المالي"],
   ["el sector tecnológico", "مجال التكنولوجيا"],
   ["líder en innovación", "رائد في الابتكار"],
   ["los puntos fuertes", "نقاط القوة"],
   ["los puntos débiles", "نقاط الضعف"],
   ["responsable", "مسؤول"],
   ["perfeccionista", "مثالي"]
  ]},
  { "type": "speak", "en": "Trabajé cinco años en un banco como analista financiero. Me interesa mucho el sector tecnológico.", "ar": "اشتغلت 5 سنين في بنك كمحلل مالي. أنا مهتم جداً بمجال التكنولوجيا." }
 ],
 "quiz": [
  { "q": "عمر اشتغل كام سنة في البنك؟", "options": [{ "text": "3" }, { "text": "5" }, { "text": "7" }, { "text": "10" }], "answer": 1, "explain": "cinco años = 5 سنين." },
  { "q": "عمر كان بيشتغل إيه في البنك؟", "options": [{ "text": "محاسب" }, { "text": "محلل مالي" }, { "text": "مدير" }, { "text": "موظف استقبال" }], "answer": 1, "explain": "analista financiero = محلل مالي." },
  { "q": "ليه عمر عايز يشتغل في الشركة دي؟", "options": [{ "text": "عشان الفلوس" }, { "text": "عشان الموقع" }, { "text": "عشان مجال التكنولوجيا" }, { "text": "عشان الأصدقاء" }], "answer": 2, "explain": "Me interesa el sector tecnológico = مهتم بمجال التكنولوجيا." },
  { "q": "`puntos fuertes` معناها؟", "options": [{ "text": "نقاط الضعف" }, { "text": "نقاط القوة" }, { "text": "الأخطاء" }, { "text": "المهارات" }], "answer": 1, "explain": "puntos fuertes = نقاط القوة." },
  { "q": "عمر بيعتبر نفسه إيه؟", "options": [{ "text": "كسول" }, { "text": "مسؤول" }, { "text": "مش مهتم" }, { "text": "غير منظم" }], "answer": 1, "explain": "responsable = مسؤول." },
  { "q": "`perfeccionista` معناها؟", "options": [{ "text": "مثالي" }, { "text": "كسول" }, { "text": "سريع" }, { "text": "بطيء" }], "answer": 0, "explain": "perfeccionista = مثالي." }
 ],
 "exercises": [
  { "task": "اسمع المقابلة 3 مرات وركز على أسئلة المقابلة.", "hint": "لاحظ كيف يجيب عمر على كل سؤال.", "code": "Escuchar, entender, responder.", "why": "المقابلات تحتاج تحضير مسبق." },
  { "task": "اكتب إجاباتك على 3 أسئلة مقابلة بالإسباني.", "hint": "استخدم أمثلة من خبرتك.", "code": "Mi experiencia... Mis puntos fuertes... Quiero trabajar aquí porque...", "why": "التحضير هو مفتاح النجاح في المقابلات." }
 ]
}

,
{
 "id": "b1-read",
 "level": "B1",
 "skill": "reading",
 "nav": "قراءة: تدوينة عن تجربة",
 "title": "📖 قراءة: تدوينة عن تجربة تعلم لغة",
 "subtitle": "اقرأ نص أطول فيه رأي وتجربة، وتتبع تسلسل الأحداث",
 "blocks": [
  { "type": "p", "text": "القراءة في B1 هي نصوص مترابطة: تدوينات، رسايل طويلة، مقالات بسيطة. المطلوب إنك تتبع الحكاية وتفهم رأي الكاتب، مش بس الكلمات." },
  { "type": "p", "text": "Cuando era niña, siempre soñaba con hablar otro idioma. En mi familia nadie hablaba inglés ni francés, pero a mí me encantaban las películas españolas. Hace un año decidí estudiar español por internet. Al principio fue muy difícil: no entendía nada y quería dejarlo. Pero mi profesora me dijo algo importante: «No tienes que entender todo, solo tienes que seguir». Ahora, después de un año, puedo ver series sin subtítulos y hablar con mis amigos españoles. Lo que más me ayudó fue escuchar música y leer en voz alta todos los días. Si tú también quieres aprender un idioma, mi consejo es simple: empieza hoy y no pares.", "ar": "وأنا صغيرة، كنت بحلم دايماً إني أتكلم لغة تانية. في عيلتي ماحدش بيتكلم إنجليزي ولا فرنساوي، بس أنا كنت بحب الأفلام الإسبانية جداً. من سنة قررت أتعلم إسباني أونلاين. في الأول كان صعب جداً: مش فاهمة حاجة وعايزة أسيبه. بس مدرّستي قالتلي حاجة مهمة: (مش لازم تفهمي كل حاجة، لازم بس تكمّلي). دلوقتي، بعد سنة، أقدر أتفرج على مسلسلات من غير ترجمة وأتكلم مع أصحابي الإسبان. أكتر حاجة ساعدتني كانت سماع مزيكا وقراءة بصوت عالي كل يوم. لو إنت كمان عايز تتعلم لغة، نصيحتي بسيطة: ابدأ النهارده ومتقفش." },
  { "type": "h", "text": "أدوات الربط في النص" },
  { "type": "table", "head": ["الأداة", "المعنى", "دورها"], "rows": [
   ["cuando era niña", "وأنا صغيرة", "بداية الحكاية (imperfecto)"],
   ["hace un año", "من سنة", "نقطة زمنية (indefinido)"],
   ["al principio", "في البداية", "ترتيب الأحداث"],
   ["pero", "بس", "تحول في الحكاية"],
   ["ahora, después de un año", "دلوقتي، بعد سنة", "النتيجة"],
   ["si tú también quieres", "لو إنت كمان عايز", "نصيحة للقارئ"]
  ]},
  { "type": "speak", "en": "No tienes que entender todo, solo tienes que seguir.", "ar": "مش لازم تفهم كل حاجة، لازم بس تكمّل." }
 ],
 "quiz": [
  { "q": "الكاتبة قررت تتعلم إسباني امتى؟", "options": [{ "text": "وهي صغيرة" }, { "text": "من سنة" }, { "text": "الأسبوع اللي فات" }], "answer": 1, "explain": "Hace un año decidí estudiar español = من سنة قررت." },
  { "q": "إيه اللي كان صعب في البداية؟", "options": [{ "text": "القواعد بس" }, { "text": "مش فاهمة حاجة وعايزة تسيبه" }, { "text": "المصاريف" }], "answer": 1, "explain": "No entendía nada y quería dejarlo." },
  { "q": "نصيحة المدرّسة كانت:", "options": [{ "text": "افهم كل حاجة" }, { "text": "كمّل حتى لو مش فاهم كل حاجة" }, { "text": "ذاكر أكتر" }], "answer": 1, "explain": "No tienes que entender todo, solo tienes que seguir." },
  { "q": "إيه اللي ساعدها أكتر حاجة؟", "options": [{ "text": "الكتب المدرسية" }, { "text": "المزيكا والقراءة بصوت عالي كل يوم" }, { "text": "السفر لإسبانيا" }], "answer": 1, "explain": "Escuchar música y leer en voz alta todos los días." },
  { "q": "دلوقتي الكاتبة تقدر:", "options": [{ "text": "تتفرج على مسلسلات من غير ترجمة وتتكلم مع أصحابها" }, { "text": "تدرّس الإسباني" }, { "text": "تكتب كتب" }], "answer": 0, "explain": "Puedo ver series sin subtítulos y hablar con mis amigos." },
  { "q": "quería dejarlo معناها:", "options": [{ "text": "عايزة تكمّله" }, { "text": "عايزة تسيبه" }, { "text": "عايزة تغيّره" }], "answer": 1, "explain": "dejar = يسيب/يوقف، quería (imperfecto) = كانت عايزة." }
 ],
 "exercises": [
  { "task": "اقرأ التدوينة مرة للفكرة ومرة للتفاصيل، واكتب ٣ جمل: مشكلة الكاتبة، النصيحة، والنتيجة.", "hint": "دور على al principio / pero / ahora.", "code": "Al principio no entendía nada. Su profesora le dijo que siga sin entender todo. Ahora ve series sin subtítulos.", "why": "تلخيص مشكلة-نصيحة-نتيجة هو هيكل أي حكاية شخصية." },
  { "task": "طلّع ٥ أدوات ربط من النص واكتب بكل واحدة جملة من حياتك.", "hint": "al principio, pero, ahora, después de, si.", "code": "Al principio estudiaba solo. Pero ahora estudio con amigos. Si tengo tiempo, escucho música española.", "why": "أدوات الربط هي اللي بتحول الجمل لحكاية." }
 ]
},
{
 "id": "b1-write",
 "level": "B1",
 "skill": "writing",
 "nav": "كتابة: احكي تجربة",
 "title": "✍️ كتابة: احكي تجربة في فقرة مترابطة",
 "subtitle": "اكتب ٦-٨ جمل عن تجربة حقيقية بأدوات ربط",
 "blocks": [
  { "type": "p", "text": "الكتابة في B1 هي الفقرة المترابطة: مش جمل متقطعة، ده حكاية فيها بداية ووسط ونهاية. السلاح السري: أدوات الربط." },
  { "type": "h", "text": "أدوات الربط الزمنية" },
  { "type": "table", "head": ["الأداة", "المعنى"], "rows": [
   ["primero", "الأول"],
   ["luego / después", "بعدين / بعد كده"],
   ["de repente", "فجأة"],
   ["al final", "في الآخر"],
   ["además", "وكمان"],
   ["pero / sin embargo", "بس / لكن"]
  ]},
  { "type": "h", "text": "نموذج: تجربة سفر" },
  { "type": "p", "text": "El verano pasado fui a Alejandría con mi familia. Primero visitamos la playa y caminamos por el corniche. Luego comimos pescado en un restaurante cerca del mar. De repente empezó a llover, pero no paramos: seguimos caminando bajo la lluvia. Al final llegamos al hotel cansados pero muy felices. Fue un día increíble y me gustaría volver el año que viene.", "ar": "الصيف اللي فات رحت إسكندرية مع أهلي. الأول زرنا الشط ومشينا على الكورنيش. بعدين كلنا سمك في مطعم جنب البحر. فجأة الدنيا مطرت، بس ماوقفناش: كمّلنا ماشيين تحت المطر. في الآخر وصلنا الفندق تعبانين بس مبسوطين جداً. كان يوم تحفة ونفسي أرجع تاني السنة الجاية." },
  { "type": "note", "text": "لاحظ مزيج الأزمنة: fui/visitamos/comimos (أحداث - indefinido)، empezó/seguimos (أحداث)، cansados pero felices (وصف الحالة). ده هو مستوى B1 في الحكي." },
  { "type": "speak", "en": "Primero visitamos la playa, luego comimos pescado, y al final llegamos al hotel muy felices.", "ar": "الأول زرنا الشط، بعدين كلنا سمك، وفي الآخر وصلنا الفندق مبسوطين جداً." }
 ],
 "quiz": [
  { "q": "de repente معناها:", "options": [{ "text": "في الآخر" }, { "text": "فجأة" }, { "text": "بعدين" }, { "text": "وكمان" }], "answer": 1, "explain": "de repente = فجأة، بتدخل بيها الحدث المفاجئ." },
  { "q": "إيه ترتيب أدوات الربط الصح لحكاية؟", "options": [{ "text": "al final, primero, luego" }, { "text": "primero, luego, al final" }, { "text": "luego, al final, primero" }], "answer": 1, "explain": "الأول، بعدين، في الآخر." },
  { "q": "seguimos caminando معناها:", "options": [{ "text": "وقفنا عن المشي" }, { "text": "كمّلنا ماشيين" }, { "text": "بدأنا نمشي" }], "answer": 1, "explain": "seguir + gerundio = يكمل يعمل حاجة." },
  { "q": "Me gustaría volver معناها:", "options": [{ "text": "رجعت" }, { "text": "نفسي أرجع" }, { "text": "هرجع بكرة" }], "answer": 1, "explain": "me gustaría = نفسي (شرطية للأمنية)." }
 ],
 "exercises": [
  { "task": "اكتب فقرة (٦-٨ جمل) عن يوم مميز في حياتك: رحلة، فرح، أو يوم امتحانات.", "hint": "Primero... Luego... De repente... Al final...", "code": "El año pasado fui al concierto con mis amigos. Primero llegamos temprano. Luego cantamos con el artista. Al final volvimos a casa muy contentos.", "why": "حكاية اليوم المميز هي قالب أي إجابة على (احكيلي عن...) في المحادثات." },
  { "task": "حط ٥ أدوات ربط على الأقل في فقرتك وعلّم عليها.", "hint": "عد الأدوات بعد ما تخلص.", "code": "primero, luego, de repente, pero, al final.", "why": "عدّ أدوات الربط بيقيس ترابط النص بشكل ملموس." }
 ]
},
{
 "id": "b1-speak",
 "level": "B1",
 "skill": "speaking",
 "nav": "كلام: احكي وقول رأيك",
 "title": "🗣️ كلام: احكي تجربة وقول رأيك",
 "subtitle": "تدرب على الحكي والرأي: اسمع، ردد، سجّل، وقارن",
 "blocks": [
  { "type": "p", "text": "الكلام في B1 هو الحكي والرأي: تحكي تجربة بتسلسل، وتقول رأيك بسبب. اسمع الجمل، رددها، سجّل صوتك وقارن. التمرين ده للمذاكرة، مش امتحان." },
  { "type": "h", "text": "جمل الحكي" },
  { "type": "speak", "en": "El verano pasado fui a Alejandría con mi familia.", "ar": "الصيف اللي فات رحت إسكندرية مع أهلي." },
  { "type": "speak", "en": "Primero visitamos la playa y luego comimos pescado.", "ar": "الأول زرنا الشط وبعدين كلنا سمك." },
  { "type": "speak", "en": "De repente empezó a llover, pero seguimos caminando.", "ar": "فجأة الدنيا مطرت، بس كمّلنا ماشيين." },
  { "type": "h", "text": "جمل الرأي" },
  { "type": "speak", "en": "Pienso que el español es muy bonito.", "ar": "شايف إن الإسباني لغة حلوة جداً." },
  { "type": "speak", "en": "En mi opinión, es importante viajar.", "ar": "في رأيي، مهم إن الواحد يسافر." },
  { "type": "speak", "en": "Estoy de acuerdo contigo porque...", "ar": "متفق معاك عشان..." },
  { "type": "speak", "en": "No estoy de acuerdo. Creo que...", "ar": "مش متفق. شايف إن..." },
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "¿Qué hiciste el verano pasado, Omar?", "ar": "عملت إيه الصيف اللي فات يا عمر؟" },
   { "who": "Omar", "en": "Fui a Alejandría con mi familia. Fue increíble.", "ar": "رحت إسكندرية مع أهلي. كان تحفة." },
   { "who": "Sara", "en": "¿Qué es lo que más te gustó?", "ar": "أكتر حاجة عجبتك إيه؟" },
   { "who": "Omar", "en": "Pienso que la playa. En mi opinión, Alejandría es la ciudad más bonita de Egipto.", "ar": "شايف إن الشط. في رأيي، إسكندرية أجمل مدينة في مصر." },
   { "who": "Sara", "en": "No estoy de acuerdo. Creo que Asiut es más tranquila y más bonita.", "ar": "مش متفقة. شايفة إن أسيوط أهدى وأجمل." },
   { "who": "Omar", "en": "¡Ja! Cada uno tiene su opinión.", "ar": "ههه! كل واحد وليه رأيه." }
  ]}
 ],
 "quiz": [
  { "q": "Pienso que... معناها:", "options": [{ "text": "أنا فاكر إن..." }, { "text": "شايف إن..." }, { "text": "سمعت إن..." }], "answer": 1, "explain": "pensar que = يفكر/يشايف إن، من أشهر صيغ الرأي." },
  { "q": "عايز تعترض بأدب:", "options": [{ "text": "¡No!" }, { "text": "No estoy de acuerdo. Creo que..." }, { "text": "Cállate" }], "answer": 1, "explain": "No estoy de acuerdo + creo que = اعتراض مؤدب وواضح." },
  { "q": "¿Qué es lo que más te gustó? معناها:", "options": [{ "text": "إيه اللي عملته؟" }, { "text": "أكتر حاجة عجبتك إيه؟" }, { "text": "إنت فين؟" }], "answer": 1, "explain": "سؤال كلاسيكي بعد أي حكاية: أكتر حاجة عجبتك." },
  { "q": "En mi opinión بتستخدم لـ:", "options": [{ "text": "الحكي" }, { "text": "الرأي" }, { "text": "التحية" }], "answer": 1, "explain": "بتمهد بيها رأيك الشخصي." }
 ],
 "exercises": [
  { "task": "سجّل نفسك بتحكي في دقيقة عن آخر رحلة أو يوم مميز: بداية، حدثين، وختام.", "hint": "Fui a... / Primero... / Luego... / Al final...", "code": "El verano pasado fui a Alejandría. Primero visité la playa. Luego comí pescado. Al final volví muy contento.", "why": "الحكي في دقيقة من غير ورقة هو تدريب B1 الأساسي في الكلام." },
  { "task": "سجّل ٤ جمل رأي: حاجتين متفق عليهم وحاجتين مش متفق عليهم (عن التعلم أونلاين مثلاً).", "hint": "Estoy de acuerdo porque... / No estoy de acuerdo. Creo que...", "code": "Estoy de acuerdo con estudiar online porque es flexible. No estoy de acuerdo con las clases largas. Creo que veinte minutos son suficientes.", "why": "الرأي بسبب هو قلب محادثة B1." }
 ]
}

);
