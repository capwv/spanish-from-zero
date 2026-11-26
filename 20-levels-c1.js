/* Level C1 skills: listening, reading, writing, speaking (Spanish) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c1-listen",
 "level": "C1",
 "skill": "listening",
 "nav": "استماع: محاضرة أكاديمية",
 "title": "🎧 استماع: محاضرة أكاديمية",
 "subtitle": "اسمع محاضرة أكاديمية بالإسباني",
 "blocks": [
  { "type": "p", "text": "المستوى المتقدم بيتطلب فهم اللغة الأكاديمية والمعقدة. هنا هتسمع محاضرة أكاديمية. ركز على المصطلحات العلمية والأفكار المعقدة." },
  { "type": "dialogue", "lines": [
   { "who": "Profesor", "en": "Buenos días, hoy hablaremos sobre la inteligencia artificial y su impacto en la sociedad.", "ar": "صباح الخير، النهاردة هنتكلم عن الذكاء الاصطناعي وتأثيره على المجتمع." },
   { "who": "Profesor", "en": "La IA ha revolucionado múltiples sectores, desde la medicina hasta la educación.", "ar": "الذكاء الاصطناعي غير مجالات كتير، من الطب للتعليم." },
   { "who": "Profesor", "en": "Los algoritmos de aprendizaje automático permiten a las máquinas aprender de los datos.", "ar": "خوارزميات التعلم الآلي بتخلي الأجهزة تتعلم من البيانات." },
   { "who": "Profesor", "en": "Sin embargo, plantea desafíos éticos significativos que debemos abordar.", "ar": "بس في نفس الوقت بيطرح تحديات أخلاقية كبيرة لازم نواجهها." },
   { "who": "Profesor", "en": "La privacidad de los datos es una preocupación creciente en la era digital.", "ar": "خصوصية البيانات بقت قلق متزايد في العصر الرقمي." },
   { "who": "Profesor", "en": "Es fundamental establecer marcos regulatorios adecuados para su desarrollo.", "ar": "من المهم إننا نضع أطر تنظيمية مناسبة لتطويره." },
   { "who": "Profesor", "en": "La colaboración entre tecnólogos, éticos y legisladores es esencial.", "ar": "التعاون بين التكنولوجيين والأخلاقيين والمشرعين ضروري." },
   { "who": "Profesor", "en": "Debemos garantizar que la IA beneficie a toda la humanidad.", "ar": "لازم نضمن إن الذكاء الاصطناعي يفيد البشرية كلها." },
   { "who": "Profesor", "en": "En conclusión, la IA es una herramienta poderosa que requiere un uso responsable.", "ar": "في الختام، الذكاء الاصطناعي أداة قوية بتحتاج استخدام مسؤول." },
   { "who": "Profesor", "en": "¿Tienen alguna pregunta sobre el tema?", "ar": "عندكم أي أسئلة عن الموضوع؟" }
  ]},
  { "type": "h", "text": "مصطلحات أكاديمية" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["la inteligencia artificial", "الذكاء الاصطناعي"],
   ["el aprendizaje automático", "التعلم الآلي"],
   ["los algoritmos", "الخوارزميات"],
   ["los desafíos éticos", "التحديات الأخلاقية"],
   ["la privacidad de los datos", "خصوصية البيانات"],
   ["los marcos regulatorios", "الأطر التنظيمية"],
   ["la colaboración", "التعاون"],
   ["el uso responsable", "الاستخدام المسؤول"]
  ]},
  { "type": "speak", "en": "La inteligencia artificial ha revolucionado múltiples sectores, desde la medicina hasta la educación.", "ar": "الذكاء الاصطناعي غير مجالات كتير، من الطب للتعليم." }
 ],
 "quiz": [
  { "q": "المحاضرة بتتكلم عن إيه؟", "options": [{ "text": "الطب" }, { "text": "التعليم" }, { "text": "الذكاء الاصطناعي" }, { "text": "الاقتصاد" }], "answer": 2, "explain": "inteligencia artificial = الذكاء الاصطناعي." },
  { "q": "الذكاء الاصطناعي غير مجالات إيه؟", "options": [{ "text": "الرياضة والفن" }, { "text": "الطب والتعليم" }, { "text": "السياسة والاقتصاد" }, { "text": "الدين والفلسفة" }], "answer": 1, "explain": "desde la medicina hasta la educación = من الطب للتعليم." },
  { "q": "خوارزميات التعلم الآلي بتخلي الأجهزة تعمل إيه؟", "options": [{ "text": "تتكلم" }, { "text": "تتعلم من البيانات" }, { "text": "تمشي" }, { "text": "تطير" }], "answer": 1, "explain": "aprender de los datos = تتعلم من البيانات." },
  { "q": "الذكاء الاصطناعي بيطرح تحديات إيه؟", "options": [{ "text": "تقنية" }, { "text": "أخلاقية" }, { "text": "اقتصادية" }, { "text": "سياسية" }], "answer": 1, "explain": "desafíos éticos = تحديات أخلاقية." },
  { "q": "إيه اللي بقت قلق متزايد في العصر الرقمي؟", "options": [{ "text": "الأمان" }, { "text": "الخصوصية" }, { "text": "السرعة" }, { "text": "التكلفة" }], "answer": 1, "explain": "privacidad de los datos = خصوصية البيانات." },
  { "q": "المحاضر بيقترح إيه لتطوير الذكاء الاصطناعي؟", "options": [{ "text": "التطوير السريع" }, { "text": "الاستخدام المسؤول" }, { "text": "التجاهل" }, { "text": "المنع" }], "answer": 1, "explain": "uso responsable = استخدام مسؤول." }
 ],
 "exercises": [
  { "task": "اسمع المحاضرة 3 مرات وحاول تلخص الأفكار الرئيسية.", "hint": "ركز على المصطلحات العلمية والأفكار المعقدة.", "code": "Escuchar, analizar, sintetizar.", "why": "المحاضرات الأكاديمية تحتاج فهم عميق." },
  { "task": "اكتب مقال قصير عن رأيك في الذكاء الاصطناعي بالإسباني.", "hint": "استخدم مصطلحات أكاديمية وأفكار منظمة.", "code": "La inteligencia artificial... En mi opinión... Es fundamental...", "why": "الكتابة الأكاديمية تحتاج لغة رسمية وأفكار منظمة." }
 ]
}

,
{
 "id": "c1-read",
 "level": "C1",
 "skill": "reading",
 "nav": "قراءة: نص أكاديمي",
 "title": "📖 قراءة: نص أكاديمي فيه موقف وتحفظات",
 "subtitle": "اقرأ نص طويل نسبياً والتقط الأطروحة والتحفظات الضمنية",
 "blocks": [
  { "type": "p", "text": "القراءة في C1 هي النصوص الأكاديمية: أفكار مركبة، تحفظات لغوية (hedging)، ومواقف مش معلنة صراحة. اقرأ النص مرة للأطروحة، ومرة للتحفظات." },
  { "type": "p", "text": "La relación entre la lengua y el pensamiento ha sido debatida durante décadas. Según la hipótesis de la relatividad lingüística, la lengua que hablamos influiría en nuestra forma de ver el mundo. En cierta medida, los datos parecen apoyar esta idea: los hablantes de lenguas con más palabras para la nieve, por ejemplo, distinguen más tipos de nieve. No obstante, sería precipitado concluir que la lengua determina el pensamiento. La mayoría de los investigadores coincide en que la influencia existe, pero es sutil y depende del contexto. Cabe señalar, además, que muchos experimentos no han podido repetirse. En definitiva, la hipótesis sigue abierta: ni confirmada ni refutada del todo.", "ar": "العلاقة بين اللغة والتفكير محل نقاش من عقود. حسب فرضية النسبية اللغوية، اللغة اللي بنتكلمها ممكن تأثر على طريقة رؤيتنا للعالم. لحد ما، البيانات بتبان داعمة للفكرة: الناس اللي لغتهم فيها كلمات أكتر للتلج، مثلاً، بيميزوا أنواع تلج أكتر. لكن، هيكون متسرع إننا نستنتج إن اللغة بتحدد التفكير. أغلب الباحثين متفقين إن التأثير موجود، بس خفيف وبيعتمد على السياق. وجدير بالذكر، كمان، إن تجارب كتير متكررتش بنجاح. في الخلاصة، الفرضية لسه مفتوحة: لا مثبتة ولا مرفوضة تماماً." },
  { "type": "h", "text": "أدوات التحفظ الأكاديمي (hedging)" },
  { "type": "table", "head": ["الأداة", "المعنى", "الإشارة اللي بتوصلها"], "rows": [
   ["influiría", "ممكن يأثر (شرطية)", "مش متأكد ١٠٠٪"],
   ["en cierta medida", "لحد ما", "تحديد قوة الادعاء"],
   ["parecen apoyar", "بتبان داعمة", "مش إثبات قاطع"],
   ["sería precipitado concluir", "هيكون متسرع نستنتج", "رفض مهذب للتعميم"],
   ["cabe señalar", "وجدير بالذكر", "إضافة نقطة أكاديمية"],
   ["ni confirmada ni refutada del todo", "لا مثبتة ولا مرفوضة تماماً", "موقف متوازن"]
  ]},
  { "type": "speak", "en": "Sería precipitado concluir que la lengua determina el pensamiento.", "ar": "هيكون متسرع إننا نستنتج إن اللغة بتحدد التفكير." }
 ],
 "quiz": [
  { "q": "أطروحة النص:", "options": [{ "text": "اللغة بتحدد التفكير" }, { "text": "الفرضية مفتوحة: تأثير موجود بس خفيف ومش محسوم" }, { "text": "اللغة ملهاش أي تأثير" }], "answer": 1, "explain": "La mayoría coincide en que la influencia existe, pero es sutil... sigue abierta." },
  { "q": "influiría (شرطية) بتوصل إيه؟", "options": [{ "text": "يقين كامل" }, { "text": "احتمال مش محسوم" }, { "text": "نفي" }], "answer": 1, "explain": "الشرطية هنا أداة تحفظ: الفرضية مش مثبتة." },
  { "q": "نقطة ضمنية فهمناها من الأسلوب:", "options": [{ "text": "الكاتب مش بيحسم رأيه وبيحذر من التعميم" }, { "text": "الكاتب ضد الفرضية تماماً" }, { "text": "الكاتب مع الفرضية تماماً" }], "answer": 0, "explain": "sería precipitado concluir + cabe señalar = كاتب حذر مش بيحسم." },
  { "q": "cabe señalar معناها:", "options": [{ "text": "وجدير بالذكر" }, { "text": "لكن" }, { "text": "مثلاً" }], "answer": 0, "explain": "أداة أكاديمية لإدخال نقطة إضافية مهمة." },
  { "q": "إيه اللي بيضعف الفرضية حسب النص؟", "options": [{ "text": "مفيش بيانات" }, { "text": "تجارب كتير متكررتش بنجاح" }, { "text": "الناس مش مهتمة" }], "answer": 1, "explain": "muchos experimentos no han podido repetirse." }
 ],
 "exercises": [
  { "task": "اكتب بالإسباني: أطروحة النص في جملة، وحجة داعمة واحدة، ونقطة ضمنية فهمتها من الأسلوب مش من التصريح.", "hint": "لاحظ الشرطية وen cierta medida.", "code": "La hipótesis sigue abierta: la influencia existe pero es sutil. Un argumento: los hablantes distinguen más tipos de nieve. Un implicite: el autor es prudente y no toma partido.", "why": "القراءة في C1 بتطلب التقاط الضمني ودرجات التحفظ، مش بس الفكرة العامة." },
  { "task": "طلّع ٤ أدوات تحفظ من النص واكتب بكل واحدة جملة عن موضوع من تخصصك.", "hint": "sería precipitado / en cierta medida / cabe señalar / parecen.", "code": "En cierta medida, los datos parecen apoyar la teoría. Cabe señalar que el estudio es pequeño.", "why": "التحفظ الأكاديمي هو اللي بيفرق كتابة B2 عن C1." }
 ]
},
{
 "id": "c1-write",
 "level": "C1",
 "skill": "writing",
 "nav": "كتابة: الفقرة الأكاديمية",
 "title": "✍️ كتابة: اكتب فقرة أكاديمية محكمة",
 "subtitle": "جملة موضوع، توسيع، مثال، تحفظ، خلاصة — في فقرة واحدة",
 "blocks": [
  { "type": "p", "text": "الكتابة في C1 هي الفقرة المحكمة: مش أفكار متفرقة، ده بنيان له هيكل. الفقرة الأكاديمية الكاملة = جملة موضوع + توسيع + مثال + تحفظ + خلاصة." },
  { "type": "h", "text": "هيكل الفقرة" },
  { "type": "list", "items": [
   "جملة الموضوع: `El aprendizaje de idiomas transforma la mente.` (فكرة واحدة واضحة)",
   "التوسيع: `Es decir, no solo añade palabras, sino que cambia la forma de pensar.` (es decir = يعني)",
   "المثال: `Por ejemplo, los bilingües cambian de perspectiva según la lengua que usan.`",
   "التحفظ: `Aunque los estudios son recientes y deben interpretarse con cautela.` (aunque = رغم إن)",
   "الخلاصة: `Por tanto, aprender una lengua es aprender una mirada.` (por tanto = لذلك)"
  ]},
  { "type": "h", "text": "نموذج كامل" },
  { "type": "p", "text": "En la mayoría de los casos, las redes sociales tienden a debilitar las relaciones profundas más que fortalecerlas, sobre todo porque las reacciones rápidas sustituyen a la conversación real. Un ejemplo claro es la cena familiar: todos miran sus pantallas en lugar de hablarse. Aunque es cierto que las redes conectan a personas lejanas, este beneficio no compensa la pérdida de cercanía diaria. Por tanto, usarlas con límites parece la opción más razonable.", "ar": "في أغلب الحالات، السوشيال ميديا بتميل لإضعاف العلاقات العميقة أكتر ما بتقويها، خصوصاً عشان التفاعلات السريعة بتاخد مكان الحوار الحقيقي. مثال واضح هو عشا العيلة: الكل باصص في شاشته بدل ما يكلم بعض. ورغم إن صحيح إن السوشيال بتوصل الناس البعيدة، الميزة دي مش بتعوض فقدان القرب اليومي. لذلك، استخدامها بحدود يبان هو الخيار الأعقل." },
  { "type": "speak", "en": "Aunque es cierto que las redes conectan, este beneficio no compensa la pérdida de cercanía.", "ar": "رغم إن صحيح إن السوشيال بتوصل الناس، الميزة دي مش بتعوض فقدان القرب." }
 ],
 "quiz": [
  { "q": "هيكل الفقرة الأكاديمية:", "options": [{ "text": "مثال، موضوع، خلاصة" }, { "text": "موضوع، توسيع، مثال، تحفظ، خلاصة" }, { "text": "خلاصة، موضوع، مثال" }], "answer": 1, "explain": "الخمس خطوات بالترتيب ده بتدي فقرة محكمة." },
  { "q": "Es decir معناها:", "options": [{ "text": "مثلاً" }, { "text": "يعني (توضيح)" }, { "text": "لكن" }], "answer": 1, "explain": "أداة التوسيع والتوضيح." },
  { "q": "Aunque es cierto que... بتعمل إيه؟", "options": [{ "text": "بتقوي الحجة" }, { "text": "بتعترف بنقطة الخصم قبل الرد (تحفظ)" }, { "text": "بتنهي الفقرة" }], "answer": 1, "explain": "التحفظ بيخلي الحجة أقوى لأنه بيبين إنك شايف الجهتين." },
  { "q": "Por tanto معناها:", "options": [{ "text": "لذلك / وبالتالي" }, { "text": "مثلاً" }, { "text": "رغم كده" }], "answer": 0, "explain": "أداة الخلاصة الرسمية." }
 ],
 "exercises": [
  { "task": "اكتب فقرة أكاديمية واحدة (٥-٧ جمل) عن: ¿Es bueno estudiar online؟ بالهيكل الكامل.", "hint": "موضوع + es decir + por ejemplo + aunque + por tanto.", "code": "Estudiar online transforma la educación. Es decir, permite aprender desde cualquier lugar. Por ejemplo, un estudiante de Asiut puede seguir cursos de Madrid. Aunque requiere mucha disciplina. Por tanto, es una opción valiosa pero exigente.", "why": "فقرة واحدة محكمة أحسن من صفحة كاملة متقطعة — ده تدريب C1 الحقيقي." },
  { "task": "راجع فقرتك وعلّم على كل عنصر من الهيكل الخمسة بكلمة.", "hint": "اكتب (موضوع/توسيع/مثال/تحفظ/خلاصة) جنب كل جملة.", "code": "لو عنصر ناقص، زوّده وأعد كتابة الفقرة.", "why": "المراجعة بالهيكل بتحول الكتابة العفوية لكتابة محكمة." }
 ]
},
{
 "id": "c1-speak",
 "level": "C1",
 "skill": "speaking",
 "nav": "كلام: نقاش أكاديمي",
 "title": "🗣️ كلام: لغة النقاش الأكاديمي",
 "subtitle": "تدرب على عرض رأيين متعارضين بتوازن: اسمع، ردد، سجّل، وقارن",
 "blocks": [
  { "type": "p", "text": "الكلام في C1 مش جمل أطول، ده مواقف أدق: تعرض الجهتين بإنصاف، تتفق جزئياً، وتطلب توضيح من غير ما تبان ضعيف. اسمع الجمل، رددها، سجّل نقاشك وقارن. التمرين ده للمذاكرة، مش امتحان." },
  { "type": "h", "text": "جمل النقاش المتوازن" },
  { "type": "speak", "en": "Por un lado, es verdad que la tecnología conecta. Por otro lado, nos distrae.", "ar": "من ناحية، صحيح إن التكنولوجيا بتوصلنا. من ناحية تانية، بتشتتنا." },
  { "type": "speak", "en": "Estoy de acuerdo hasta cierto punto, pero hay que considerar el coste.", "ar": "متفق لحد ما، بس لازم نحسب التكلفة." },
  { "type": "speak", "en": "¿A qué te refieres exactamente con «flexibilidad»?", "ar": "تقصد إيه بالظبط بـ (مرونة)؟" },
  { "type": "speak", "en": "En conjunto, yo diría que los beneficios superan a los riesgos.", "ar": "بشكل عام، هقول إن الفوايد بتغلب المخاطر." },
  { "type": "note", "text": "مستويات الثقة في الكلام: afirmo que (متأكد) → creo que (شايف) → me parece que (يبان لي) → diría que (هقول — تحفظ). اختار درجتك بقصد." },
  { "type": "dialogue", "lines": [
   { "who": "Sara", "en": "¿Debería la universidad ser gratuita, Omar?", "ar": "التعليم الجامعي المفروض يبقى مجاني يا عمر؟" },
   { "who": "Omar", "en": "Por un lado, la gratuidad abre puertas para los estudiantes pobres.", "ar": "من ناحية، المجانية بتفتح أبواب للطلبة الغلابة." },
   { "who": "Sara", "en": "¿Pero por otro lado?", "ar": "بس من ناحية تانية؟" },
   { "who": "Omar", "en": "El coste para el Estado es enorme. Estoy de acuerdo contigo hasta cierto punto, pero también hay que pensar en la calidad.", "ar": "التكلفة على الدولة ضخمة. متفق معاكي لحد ما، بس كمان لازم نفكر في الجودة." },
   { "who": "Sara", "en": "¿Entonces tu conclusión?", "ar": "يبقى خلاصتك إيه؟" },
   { "who": "Omar", "en": "En conjunto, yo diría que unas tasas bajas con becas fuertes son más sabias que la gratuidad total.", "ar": "بشكل عام، هقول إن مصاريف قليلة مع منح قوية أحكم من المجانية الكاملة." }
  ]}
 ],
 "quiz": [
  { "q": "Estoy de acuerdo hasta cierto punto معناها:", "options": [{ "text": "متفق تماماً" }, { "text": "متفق جزئياً" }, { "text": "مش متفق" }], "answer": 1, "explain": "hasta cierto punto = لحد ما — اتفاق جزئي محسوب." },
  { "q": "¿A qué te refieres con...؟ بتستخدم لـ:", "options": [{ "text": "الاعتراض" }, { "text": "طلب توضيح" }, { "text": "التحية" }], "answer": 1, "explain": "طلب التوضيح بصيغة دقيقة ومؤدبة." },
  { "q": "Por un lado... por otro lado... بيعملوا إيه؟", "options": [{ "text": "بيقدموا الجهتين بتوازن" }, { "text": "بيدخلوا مثال" }, { "text": "بينهوا النقاش" }], "answer": 0, "explain": "التركيبة الكلاسيكية لعرض وجهتين." },
  { "q": "أنهي صيغة فيها أقل درجة ثقة؟", "options": [{ "text": "afirmo que" }, { "text": "creo que" }, { "text": "diría que" }], "answer": 2, "explain": "diría que (شرطية) ألين صيغة — تحفظ واضح." }
 ],
 "exercises": [
  { "task": "سجّل نقاش مع نفسك في دقيقتين: اعرض رأيين متعارضين عن (¿Debería la universidad ser gratuita؟) باستخدام ٤ جمل من الدرس على الأقل.", "hint": "جهة، وجهة تانية، اتفاق جزئي، خلاصة متوازنة.", "code": "Por un lado, la gratuidad abre puertas. Por otro lado, el coste es enorme. Estoy de acuerdo hasta cierto punto con los dos lados. En conjunto, diría que unas tasas bajas con becas son la mejor opción.", "why": "عرض الجهتين بإنصاف هو أعلى تدريب على التفكير المنظم في الكلام." },
  { "task": "اسمع تسجيلك وحط علامة كل ما تستخدم جملة نقاش من الدرس. الهدف: ٤ على الأقل.", "hint": "عد الجمل، وسجّل تاني لو أقل.", "code": "Por un lado / por otro lado / hasta cierto punto / en conjunto.", "why": "العدّ بيحول الجمل من معلومة لعادة لسان." }
 ]
}

);
