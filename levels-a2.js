/* Level A2 skills: listening, reading, writing, speaking (Spanish) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-listen",
 "level": "A2",
 "skill": "listening",
 "nav": "استماع: في المطعم",
 "title": "🎧 استماع: طلب الأكل في المطعم",
 "subtitle": "اسمع محادثة بين زبون ونادل في مطعم",
 "blocks": [
  { "type": "p", "text": "المستوى التاني بيبني على اللي فات. هنا هتسمع محادثة حقيقية في مطعم. ركز على الكلمات الجديدة وحاول تفهم المعنى من السياق." },
  { "type": "dialogue", "lines": [
   { "who": "Camarero", "en": "Buenas tardes, ¿tienen reserva?", "ar": "مساء الخير، عندكم حجز؟" },
   { "who": "Omar", "en": "Sí, una mesa para dos, a nombre de Omar.", "ar": "أيوه، ترابيزة لـ 2، باسم عمر." },
   { "who": "Camarero", "en": "Perfecto, síganme. Aquí está el menú.", "ar": "تمام، اتفضلوا. دي المنيو." },
   { "who": "Sara", "en": "Gracias. ¿Qué nos recomienda?", "ar": "شكراً. إيه اللي تنصحنا بيه؟" },
   { "who": "Camarero", "en": "La paella está muy buena hoy.", "ar": "الباella النهاردة تحفة." },
   { "who": "Omar", "en": "Para mí, la paella. ¿Y para ti, Sara?", "ar": "أنا هاخد الباella. وإنتي يا سارة؟" },
   { "who": "Sara", "en": "Yo quiero el salmón, por favor.", "ar": "أنا عايزة السلمون، لو سمحت." },
   { "who": "Camarero", "en": "¿Y para beber?", "ar": "وإيه اللي تشربوه؟" },
   { "who": "Omar", "en": "Dos cafés, por favor.", "ar": "2 قهوة، لو سمحت." },
   { "who": "Camarero", "en": "Muy bien. ¡Buen provecho!", "ar": "تمام. بالهنا والشفا!" }
  ]},
  { "type": "h", "text": "كلمات المطعم" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["la reserva", "الحجز"],
   ["la mesa", "الترابيزة"],
   ["el menú", "المنيو"],
   ["recomendar", "ينصح"],
   ["la paella", "الباella (أكلة إسبانية)"],
   ["el salmón", "السلمون"],
   ["beber", "يشرب"],
   ["¡Buen provecho!", "بالهنا والشفا!"]
  ]},
  { "type": "speak", "en": "Yo quiero el salmón, por favor. Y para beber, un café.", "ar": "أنا عايزة السلمون، لو سمحت. وإيه اللي أشربه، قهوة." }
 ],
 "quiz": [
  { "q": "عمر حجز ترابيزة لكام؟", "options": [{ "text": "1" }, { "text": "2" }, { "text": "3" }, { "text": "4" }], "answer": 1, "explain": "una mesa para dos = ترابيزة لـ 2." },
  { "q": "النادل بينصح بإيه؟", "options": [{ "text": "البيتزا" }, { "text": "الباella" }, { "text": "البرجر" }, { "text": "السلطة" }], "answer": 1, "explain": "La paella está muy buena = الباella تحفة." },
  { "q": "سارة طلبت إيه؟", "options": [{ "text": "الباella" }, { "text": "السلمون" }, { "text": "الفراخ" }, { "text": "اللحم" }], "answer": 1, "explain": "Yo quiero el salmón = أنا عايزة السلمون." },
  { "q": "عمر وسارة هيشربوا إيه؟", "options": [{ "text": "شاي" }, { "text": "عصير" }, { "text": "قهوة" }, { "text": "مية" }], "answer": 2, "explain": "Dos cafés = 2 قهوة." },
  { "q": "`¡Buen provecho!` معناها؟", "options": [{ "text": "مع السلامة" }, { "text": "بالهنا والشفا" }, { "text": "شكراً" }, { "text": "عفواً" }], "answer": 1, "explain": "بتتقال قبل الأكل: بالهنا والشفا." },
  { "q": "`¿Y para beber?` معناها؟", "options": [{ "text": "وإيه اللي تاكلوه؟" }, { "text": "وإيه اللي تشربوه؟" }, { "text": "وإيه الحساب؟" }, { "text": "وإيه العنوان؟" }], "answer": 1, "explain": "beber = يشرب." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة 3 مرات وركز على طريقة الطلب.", "hint": "لاحظ استخدام \"por favor\" في كل طلب.", "code": "Yo quiero... por favor.", "why": "الأسلوب المهذب مهم في المطاعم." },
  { "task": "اكتب طلب كامل في مطعم بالإسباني.", "hint": "ابدأ بالتحية، اطلب الأكل، اطلب الشراب، اشكر.", "code": "Buenas tardes. Yo quiero... Para beber... Gracias.", "why": "دي المحادثة الكاملة في أي مطعم." }
 ]
}

,
{
 "id": "a2-read",
 "level": "A2",
 "skill": "reading",
 "nav": "قراءة: رسالة من صديق",
 "title": "📖 قراءة: رسالة من صديق إسباني",
 "subtitle": "اقرأ رسالة عن الروتين والخطط واستخرج المعلومات",
 "blocks": [
  { "type": "p", "text": "القراءة في A2 هي نصوص قصيرة من الحياة: رسايل، إعلانات، إيميلات. اقرأ الرسالة دي مرة للفكرة العامة، ومرة تانية للتفاصيل." },
  { "type": "p", "text": "Hola Omar:\n¿Qué tal? Yo estoy muy bien. Ahora vivo en Madrid con mi hermano. Trabajo en una cafetería por la mañana y estudio español por la tarde. Ayer fui al mercado y compré fruta y pan. Este fin de semana voy a visitar Toledo con unos amigos. ¿Y tú? ¿Qué hiciste ayer? ¿Qué vas a hacer este fin de semana?\nUn abrazo,\nCarlos", "ar": "أهلاً عمر:\nعامل إيه؟ أنا كويس جداً. دلوقتي ساكن في مدريد مع أخويا. باشتغل في كافتيريا الصبح وبذاكر إسباني الضهر. مبارح رحت السوق واشتريت فاكهة وعيش. الويك إند ده هزور طُليطلة مع شوية أصحاب. وإنت؟ عملت إيه مبارح؟ وهتعمل إيه الويك إند ده؟\nسلام،\nكارلوس" },
  { "type": "h", "text": "كلمات مهمة" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["ahora", "دلوقتي"],
   ["cafetería", "كافتيريا / قهوة"],
   ["por la mañana / por la tarde", "الصبح / الضهر"],
   ["ayer", "مبارح"],
   ["fui", "رحت"],
   ["compré", "اشتريت"],
   ["este fin de semana", "الويك إند ده"],
   ["un abrazo", "سلام (ختام رسايل الصحاب)"]
  ]},
  { "type": "note", "text": "لاحظ الأزمنة: vivo/trabajo (مضارع للروتين)، fui/compré (indefinido لمبارح)، voy a visitar (ir a + مصدر لخطة الويك إند). تلات أزمنة في رسالة واحدة صغيرة." },
  { "type": "speak", "en": "Ahora vivo en Madrid. Trabajo por la mañana y estudio por la tarde.", "ar": "دلوقتي ساكن في مدريد. باشتغل الصبح وبذاكر الضهر." }
 ],
 "quiz": [
  { "q": "كارلوس ساكن فين دلوقتي؟", "options": [{ "text": "أسيوط" }, { "text": "مدريد" }, { "text": "طليطلة" }, { "text": "برشلونة" }], "answer": 1, "explain": "Ahora vivo en Madrid = دلوقتي ساكن في مدريد." },
  { "q": "كارلوس عمل إيه مبارح؟", "options": [{ "text": "زار طليطلة" }, { "text": "راح السوق واشترى فاكهة وعيش" }, { "text": "ذاكر طول اليوم" }], "answer": 1, "explain": "Ayer fui al mercado y compré fruta y pan." },
  { "q": "كارلوس هيعمل إيه الويك إند؟", "options": [{ "text": "هيروح السوق" }, { "text": "هيزور طليطلة مع أصحاب" }, { "text": "هيشتغل في الكافتيريا" }], "answer": 1, "explain": "Este fin de semana voy a visitar Toledo con unos amigos." },
  { "q": "كارلوس بيشتغل امتى؟", "options": [{ "text": "بالليل" }, { "text": "الصبح" }, { "text": "الضهر" }], "answer": 1, "explain": "Trabajo en una cafetería por la mañana." },
  { "q": "Un abrazo في آخر الرسالة معناها:", "options": [{ "text": "مع السلامة الرسمية" }, { "text": "سلام/حضن (ختام رسايل الصحاب)" }, { "text": "متشكر" }], "answer": 1, "explain": "ختام ودي بين الأصحاب، زي (سلام) في رسايلنا." },
  { "q": "الرسالة فيها كام زمن مختلف؟", "options": [{ "text": "واحد" }, { "text": "اتنين" }, { "text": "تلاتة: مضارع وماضي ومستقبل قريب" }], "answer": 2, "explain": "مضارع للروتين، indefinido لمبارح، ir a للخطة." }
 ],
 "exercises": [
  { "task": "اقرأ الرسالة مرة للفكرة ومرة للتفاصيل، وجاوب على سؤالي كارلوس كتابةً (جملتين لكل سؤال).", "hint": "Ayer... / Este fin de semana voy a...", "code": "Ayer estudié español y trabajé. Este fin de semana voy a visitar a mi familia en Asiut.", "why": "الرد على أسئلة الرسالة هو أول خطوة في الكتابة التفاعلية." },
  { "task": "طلّع من الرسالة كل الأفعال في الماضي واكتبها في قائمة.", "hint": "دور على é/í/ó في الآخر.", "code": "fui, compré (وفي المضارع: vivo, trabajo, estudio).", "why": "تمييز الأزمنة بالعين بيبني حس القراءة السريعة." }
 ]
},
{
 "id": "a2-write",
 "level": "A2",
 "skill": "writing",
 "nav": "كتابة: رسالة لصديق",
 "title": "✍️ كتابة: رسالة قصيرة لصديق",
 "subtitle": "اكتب رد على كارلوس: روتينك، يومك مبارح، وخطتك للويك إند",
 "blocks": [
  { "type": "p", "text": "دلوقتي دورك: هتكتب رد على رسالة كارلوس. رسالة الصحاب ليها هيكل ثابت: سلام، خبر عام، تفاصيل، سؤالين، وختام ودي." },
  { "type": "h", "text": "هيكل الرسالة" },
  { "type": "list", "items": [
   "السلام: `Hola Carlos,` / `Querido Carlos,` (عزيزي كارلوس)",
   "الخبر العام: `Estoy muy bien.` / `Todo bien por aquí.`",
   "التفاصيل: جملتين عن روتينك + جملتين عن مبارح",
   "الخطة: `Este fin de semana voy a...`",
   "سؤالين للطرف التاني: `¿Y tú? ¿Qué vas a hacer?`",
   "الختام: `Un abrazo,` / `Un saludo,` + اسمك"
  ]},
  { "type": "h", "text": "نموذج كامل" },
  { "type": "p", "text": "Hola Carlos:\nEstoy muy bien, gracias. Ahora estudio comercio en la universidad y trabajo en una tienda por la tarde. Ayer estudié español y caminé con mis amigos. Este fin de semana voy a ir a Asiut con mi familia. ¿Y tú? ¿Qué vas a hacer en Toledo?\nUn abrazo,\nOmar", "ar": "أهلاً كارلوس:\nأنا كويس جداً، متشكر. دلوقتي بذاكر تجارة في الجامعة وباشتغل في محل الضهر. مبارح ذاكرت إسباني ومشيت مع أصحابي. الويك إند ده هرجع أسيوط مع أهلي. وإنت؟ هتعمل إيه في طليطلة؟\nسلام،\nعمر" },
  { "type": "speak", "en": "Este fin de semana voy a ir a Asiut con mi familia.", "ar": "الويك إند ده هرجع أسيوط مع أهلي." }
 ],
 "quiz": [
  { "q": "الختام الودي لرسالة صاحب:", "options": [{ "text": "Atentamente" }, { "text": "Un abrazo" }, { "text": "Estimado señor" }], "answer": 1, "explain": "Un abrazo / Un saludo بين الصحاب. Atentamente للرسمي." },
  { "q": "عايز تحكي عن مبارح في الرسالة، تستخدم:", "options": [{ "text": "المضارع" }, { "text": "indefinido" }, { "text": "المستقبل" }], "answer": 1, "explain": "مبارح وقت محدد خلص: indefinido (estudié, caminé)." },
  { "q": "عايز تقول خطتك للويك إند:", "options": [{ "text": "Este fin de semana voy a..." }, { "text": "Ayer fui a..." }, { "text": "Siempre voy..." }], "answer": 0, "explain": "ir a + مصدر للخطط القريبة." },
  { "q": "أول سطر في رسالة صاحب:", "options": [{ "text": "Estimado señor Carlos" }, { "text": "Hola Carlos," }, { "text": "Muy señor mío" }], "answer": 1, "explain": "بين الصحاب: Hola + الاسم. الرسمي حاجة تانية خالص (هتيجي في B2)." }
 ],
 "exercises": [
  { "task": "اكتب ردك الكامل على رسالة كارلوس (٦-٨ جمل) بالهيكل اللي فوق.", "hint": "سلام + خبر + روتين + مبارح + خطة + سؤالين + ختام.", "code": "Hola Carlos: Estoy muy bien. Estudio comercio y trabajo por la tarde. Ayer estudié español. Este fin de semana voy a ir a Asiut. ¿Y tú? Un abrazo, Omar.", "why": "أول رسالة كاملة بتكتبها هي القالب اللي هتستخدمه في أي مراسلة قصيرة." },
  { "task": "اقرأ رسالتك بصوت عالي وظبط الأزمنة: مضارع للروتين، ماضي لمبارح، ir a للخطة.", "hint": "لون كل زمن بقلم مختلف.", "code": "روتين = مضارع، مبارح = indefinido، خطة = voy a.", "why": "تلوين الأزمنة بيكشف الغلطات قبل ما تبعت." }
 ]
},
{
 "id": "a2-speak",
 "level": "A2",
 "skill": "speaking",
 "nav": "كلام: مواقف يومية",
 "title": "🗣️ كلام: مواقف يومية",
 "subtitle": "تدرب على الطلب والشراء والسؤال عن الطريق: اسمع، ردد، سجّل، وقارن",
 "blocks": [
  { "type": "p", "text": "الكلام في A2 هو المواقف اليومية: تطلب أكل، تشتري حاجة، تسأل عن مكان. اسمع الجمل، رددها، سجّل صوتك وقارن بالنموذج. التمرين ده للمذاكرة، مش امتحان." },
  { "type": "h", "text": "في المطعم" },
  { "type": "speak", "en": "¿Tienen mesa para dos?", "ar": "عندكم ترابيزة لـ ٢؟" },
  { "type": "speak", "en": "Para mí, el salmón, por favor. ¿Y para beber? Un café.", "ar": "أنا هاخد السلمون، لو سمحت. وإيه أشرب؟ قهوة." },
  { "type": "speak", "en": "La cuenta, por favor.", "ar": "الحساب، لو سمحت." },
  { "type": "h", "text": "في المحل" },
  { "type": "speak", "en": "¿Cuánto cuesta esto?", "ar": "ده بكام؟" },
  { "type": "speak", "en": "¿Tiene una talla más grande?", "ar": "عندك مقاس أكبر؟" },
  { "type": "h", "text": "في الشارع" },
  { "type": "speak", "en": "Perdona, ¿dónde está la estación?", "ar": "لو سمحت، فين المحطة؟" },
  { "type": "speak", "en": "¿Está lejos? — No, está a cinco minutos.", "ar": "بعيدة؟ — لا، خمس دقايق من هنا." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Perdona, ¿dónde está la calle Ramsis?", "ar": "لو سمحت، فين شارع رمسيس؟" },
   { "who": "Sara", "en": "Está cerca. Sigue todo recto y gira a la derecha.", "ar": "قريب. كمل على طول وخش يمين." },
   { "who": "Omar", "en": "¿Está lejos de aquí?", "ar": "بعيد من هنا؟" },
   { "who": "Sara", "en": "No, a cinco minutos andando.", "ar": "لا، خمس دقايق مشي." },
   { "who": "Omar", "en": "¡Muchas gracias!", "ar": "متشكر جداً!" },
   { "who": "Sara", "en": "De nada. ¡Buena suerte!", "ar": "العفو. بالتوفيق!" }
  ]}
 ],
 "quiz": [
  { "q": "La cuenta, por favor بتتقال فين؟", "options": [{ "text": "في البنك" }, { "text": "في المطعم لما تطلب الحساب" }, { "text": "في الشارع" }], "answer": 1, "explain": "la cuenta = الحساب في المطعم/الكافيه." },
  { "q": "¿Cuánto cuesta esto? معناها:", "options": [{ "text": "ده إيه؟" }, { "text": "ده بكام؟" }, { "text": "ده فين؟" }], "answer": 1, "explain": "cuánto cuesta = بكام الثمن." },
  { "q": "Sigue todo recto معناها:", "options": [{ "text": "ارجع ورا" }, { "text": "كمل على طول" }, { "text": "خش شمال" }], "answer": 1, "explain": "todo recto = على طول، من أهم جمل الاتجاهات." },
  { "q": "gira a la derecha معناها:", "options": [{ "text": "خش يمين" }, { "text": "خش شمال" }, { "text": "قف" }], "answer": 0, "explain": "derecha = يمين، izquierda = شمال." }
 ],
 "exercises": [
  { "task": "سجّل صوتك في محادثة مطعم كاملة: تطلب ترابيزة، تطلب أكل وشرب، وتطلب الحساب.", "hint": "¿Tienen mesa...? / Para mí... / La cuenta...", "code": "¿Tienen mesa para dos? Para mí, el salmón, por favor. Y para beber, un café. La cuenta, por favor.", "why": "محادثة المطعم هي أول موقف حقيقي هتستخدم فيه الإسباني في أي سفرية." },
  { "task": "مثّل مشهد السؤال عن الطريق بدورين: سائل وردّاد.", "hint": "Perdona, ¿dónde está...? / Sigue recto, gira...", "code": "سجّل الدورين واسمع نفسك وقارن بالنموذج.", "why": "السؤال عن الطريق فيه استماع وكلام مع بعض، وده تدريب مزدوج." }
 ]
}

);
