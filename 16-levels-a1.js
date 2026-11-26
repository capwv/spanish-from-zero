/* Level A1 skills: listening, reading, writing, speaking (Spanish) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a1-listen",
 "level": "A1",
 "skill": "listening",
 "nav": "استماع: التعارف",
 "title": "🎧 استماع: أول محادثة تعارف بالإسباني",
 "subtitle": "اسمع محادثة بسيطة بين شخصين بيتعرفوا على بعض",
 "blocks": [
  { "type": "p", "text": "دي أول محادثة استماع ليك بالإسباني. القاعدة: اسمع الأول من غير ما تقرأ، حاول تلقط الكلمات اللي تعرفها. بعدين اسمع تاني مع القراءة." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "¡Hola! Me llamo Omar. ¿Y tú?", "ar": "أهلاً! أنا اسمي عمر. وإنتي؟" },
   { "who": "Sara", "en": "Hola Omar, soy Sara. ¡Encantada!", "ar": "أهلاً يا عمر، أنا سارة. تشرفنا!" },
   { "who": "Omar", "en": "Encantado, Sara. ¿De dónde eres?", "ar": "تشرفنا يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "Soy de Asiut. ¿Y tú?", "ar": "أنا من أسيوط. وإنت؟" },
   { "who": "Omar", "en": "Soy de El Cairo. ¿A qué te dedicas?", "ar": "أنا من القاهرة. بتعملي إيه في الحياة؟" },
   { "who": "Sara", "en": "Soy estudiante de comercio. ¿Y tú?", "ar": "أنا طالبة تجارة. وإنت؟" },
   { "who": "Omar", "en": "Trabajo en un banco. ¿Cuántos años tienes?", "ar": "أنا شغال في بنك. عندك كام سنة؟" },
   { "who": "Sara", "en": "Tengo veinte años. ¿Y tú?", "ar": "عندي 20 سنة. وإنت؟" },
   { "who": "Omar", "en": "Tengo veintidós años. ¿Hablas español?", "ar": "عندي 22 سنة. بتتكلمي إسباني؟" },
   { "who": "Sara", "en": "Un poco. Estudio español en la universidad.", "ar": "شوية. بتعلم إسباني في الجامعة." }
  ]},
  { "type": "h", "text": "اسمع وركز" },
  { "type": "list", "items": [
   "اسمع المحادثة مرة من غير ما تقرأ الترجمة.",
   "حاول تلقط: الأسماء، المدن، السن، الشغل.",
   "اسمع تاني وقارن بالنص.",
   "اسمع تالت وردد معاهم بصوت عالي."
  ]},
  { "type": "speak", "en": "Hola, me llamo Omar. Soy de El Cairo. Tengo veintidós años. Trabajo en un banco.", "ar": "أهلاً، أنا اسمي عمر. أنا من القاهرة. عندي 22 سنة. شغال في بنك." }
 ],
 "quiz": [
  { "q": "سارة منين؟", "options": [{ "text": "القاهرة" }, { "text": "أسيوط" }, { "text": "إسبانيا" }, { "text": "الإسكندرية" }], "answer": 1, "explain": "قالت: Soy de Asiut." },
  { "q": "عمر بيشتغل إيه؟", "options": [{ "text": "طالب" }, { "text": "في بنك" }, { "text": "دكتور" }, { "text": "مدرس" }], "answer": 1, "explain": "Trabajo en un banco = شغال في بنك." },
  { "q": "`Encantada` معناها؟", "options": [{ "text": "مع السلامة" }, { "text": "تشرفنا" }, { "text": "متشكرة" }, { "text": "صباح الخير" }], "answer": 1, "explain": "بتتقال لما تتعرف على حد: فرحت بيك." },
  { "q": "سارة بتذاكر إيه؟", "options": [{ "text": "طب" }, { "text": "هندسة" }, { "text": "تجارة" }, { "text": "حقوق" }], "answer": 2, "explain": "Soy estudiante de comercio = طالبة تجارة." },
  { "q": "`¿Cuántos años tienes?` معناها؟", "options": [{ "text": "إنت اسمك إيه؟" }, { "text": "عندك كام سنة؟" }, { "text": "إنت منين؟" }, { "text": "بتشتغل إيه؟" }], "answer": 1, "explain": "tener + años = السن. Cuántos años = كام سنة." },
  { "q": "سارة عندها كام سنة؟", "options": [{ "text": "١٨" }, { "text": "٢٠" }, { "text": "٢٢" }, { "text": "٢٥" }], "answer": 1, "explain": "veinte = عشرين." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة 3 مرات: مرة من غير نص، مرة مع النص، ومرة ردد معاهم.", "hint": "ركز على نطق Encantado و Me llamo.", "code": "اسمع، افهم، ردد.", "why": "التكرار هو مفتاح الاستماع." },
  { "task": "اكتب 3 أسئلة ممكن تسألها لأي حد بيتعرف عليك بالإسباني.", "hint": "اسمه، منين، بيعمل إيه.", "code": "¿Cómo te llamas? ¿De dónde eres? ¿A qué te dedicas?", "why": "دي أول 3 أسئلة في أي تعارف." }
 ]
},
{
 "id": "a1-read",
 "level": "A1",
 "skill": "reading",
 "nav": "قراءة: التعارف",
 "title": "📖 قراءة: أول نص تعارف بالإسباني",
 "subtitle": "اقرأ نص بسيط عن التعارف وافهم المعنى",
 "blocks": [
  { "type": "p", "text": "اقرأ النص ده بصوت عالي. حاول تفهم المعنى من غير ما تترجم كل كلمة. ركز على الكلمات اللي تعرفها." },
  { "type": "p", "text": "Hola, me llamo Ahmed. Soy egipcio y tengo veinte años. Vivo en Asiut con mi familia. Soy estudiante de comercio en la universidad. Me gusta el café y el fútbol. Hablo árabe y un poco de español. ¡Encantado!", "ar": "أهلاً، أنا اسمي أحمد. أنا مصري وعندي 20 سنة. ساكن في أسيوط مع عيلتي. أنا طالب تجارة في الجامعة. بحب القهوة والكورة. بتكلم عربي وشوية إسباني. تشرفنا!" },
  { "type": "h", "text": "كلمات مهمة" },
  { "type": "table", "head": ["الإسباني", "العربي"], "rows": [
   ["me llamo", "أنا اسمي"],
   ["soy", "أنا"],
   ["tengo", "عندي"],
   ["vivo", "ساكن"],
   ["estudiante", "طالب"],
   ["me gusta", "بحب"],
   ["hablo", "بتكلم"],
   ["encantado", "تشرفنا"]
  ]},
  { "type": "speak", "en": "Hola, me llamo Ahmed. Soy egipcio y tengo veinte años. Vivo en Asiut con mi familia.", "ar": "أهلاً، أنا اسمي أحمد. أنا مصري وعندي 20 سنة. ساكن في أسيوط مع عيلتي." }
 ],
 "quiz": [
  { "q": "أحمد منين؟", "options": [{ "text": "القاهرة" }, { "text": "أسيوط" }, { "text": "إسبانيا" }, { "text": "الإسكندرية" }], "answer": 1, "explain": "Vivo en Asiut = ساكن في أسيوط." },
  { "q": "أحمد بيحب إيه؟", "options": [{ "text": "الشاي" }, { "text": "القهوة والكورة" }, { "text": "العصير" }, { "text": "الكتب" }], "answer": 1, "explain": "Me gusta el café y el fútbol = بحب القهوة والكورة." },
  { "q": "أحمد بيتكلم إيه؟", "options": [{ "text": "عربي بس" }, { "text": "إسباني بس" }, { "text": "عربي وشوية إسباني" }, { "text": "إنجليزي" }], "answer": 2, "explain": "Hablo árabe y un poco de español = بتكلم عربي وشوية إسباني." },
  { "q": "`Encantado` معناها؟", "options": [{ "text": "مع السلامة" }, { "text": "تشرفنا" }, { "text": "متشكر" }, { "text": "صباح الخير" }], "answer": 1, "explain": "بتتقال لما تتعرف على حد: فرحت بيك." },
  { "q": "أحمد بيذاكر إيه؟", "options": [{ "text": "طب" }, { "text": "هندسة" }, { "text": "تجارة" }, { "text": "حقوق" }], "answer": 2, "explain": "estudiante de comercio = طالب تجارة." },
  { "q": "أحمد عنده كام سنة؟", "options": [{ "text": "١٨" }, { "text": "٢٠" }, { "text": "٢٢" }, { "text": "٢٥" }], "answer": 1, "explain": "veinte = عشرين." }
 ],
 "exercises": [
  { "task": "اقرأ النص 3 مرات: مرة بصوت عالي، مرة بصوت منخفض، ومرة في سرك.", "hint": "ركز على نطق الكلمات الجديدة.", "code": "اقرأ، افهم، كرر.", "why": "التكرار هو مفتاح القراءة." },
  { "task": "اكتب 3 جمل عن نفسك بالإسباني.", "hint": "اسمك، منين، بتعمل إيه.", "code": "Me llamo... Soy de... Tengo... años.", "why": "دي أول 3 جمل في أي تعارف." }
 ]
}

,
{
 "id": "a1-write",
 "level": "A1",
 "skill": "writing",
 "nav": "كتابة: بطاقة تعارف",
 "title": "✍️ كتابة: بطاقة تعارف شخصية",
 "subtitle": "اكتب أول نص إسباني: اسمك، سنك، مدينتك، وهواياتك",
 "blocks": [
  { "type": "p", "text": "الكتابة في A1 هي بطاقة التعارف: ٥-٦ جمل قصيرة بتعرّف فيها نفسك. النموذج اللي تحت هو القالب، وبعده هتكتب بتاعتك." },
  { "type": "h", "text": "نموذج" },
  { "type": "p", "text": "Hola, me llamo Omar. Tengo veinte años. Soy egipcio, de Asiut. Soy estudiante de comercio. Me gusta el fútbol y la música. Hablo árabe y un poco de español. ¡Mucho gusto!", "ar": "أهلاً، أنا اسمي عمر. عندي ٢٠ سنة. أنا مصري، من أسيوط. أنا طالب تجارة. بحب الكورة والمزيكا. بتكلم عربي وشوية إسباني. تشرفنا!" },
  { "type": "h", "text": "قوالب الجمل" },
  { "type": "table", "head": ["القالب", "المعنى"], "rows": [
   ["Me llamo...", "اسمي..."],
   ["Tengo ... años.", "عندي ... سنة"],
   ["Soy de...", "أنا من..."],
   ["Vivo en...", "أنا ساكن في..."],
   ["Soy estudiante de... / Trabajo en...", "أنا طالب في... / باشتغل في..."],
   ["Me gusta... / Me gustan...", "بحب..."],
   ["Hablo... y un poco de...", "بتكلم... وشوية..."]
  ]},
  { "type": "note", "text": "الترتيب مش مقدس: ابدأ بالسلام والاسم، وبعدين أي معلومة. المهم إن كل جملة كاملة وفعلها مصرف صح." },
  { "type": "speak", "en": "Hola, me llamo Omar. Tengo veinte años. Soy de Asiut.", "ar": "أهلاً، أنا اسمي عمر. عندي ٢٠ سنة. أنا من أسيوط." }
 ],
 "quiz": [
  { "q": "عايز تقول (عندي ٢٠ سنة):", "options": [{ "text": "Soy veinte años" }, { "text": "Tengo veinte años" }, { "text": "Estoy veinte años" }, { "text": "Hago veinte años" }], "answer": 1, "explain": "السن في الإسباني بـ tener: Tengo veinte años (عندي عشرين سنة)." },
  { "q": "Me gusta ___ fútbol.", "options": [{ "text": "el" }, { "text": "la" }, { "text": "los" }, { "text": "un" }], "answer": 0, "explain": "el fútbol مذكر، ومع gustar بنستخدم أداة التعريف." },
  { "q": "أنهي جملة صح؟", "options": [{ "text": "Me llamo Omar y tengo veinte años" }, { "text": "Me llamo Omar y soy veinte años" }, { "text": "Llamo Omar tengo veinte" }], "answer": 0, "explain": "Me llamo + Tengo ... años هو القالب الصح." },
  { "q": "بحب الكتب (جمع):", "options": [{ "text": "Me gusta los libros" }, { "text": "Me gustan los libros" }, { "text": "Me gusto los libros" }], "answer": 1, "explain": "الكتب جمع، فالفعل gustan." }
 ],
 "exercises": [
  { "task": "اكتب بطاقة تعارف بتاعتك: ٦ جمل باستخدام القوالب.", "hint": "Me llamo... Tengo... Soy de... Vivo en... Me gusta... Hablo...", "code": "Hola, me llamo Ahmed. Tengo veinte años. Soy egipcio, de Asiut. Vivo en El Cairo. Me gusta el café. Hablo árabe y un poco de español.", "why": "بطاقة التعارف هي أول نص رسمي بتكتبه وأكتر نص هتستخدمه." },
  { "task": "اقرأ بطاقتك بصوت عالي ٣ مرات، وبعدين اكتب بطاقة لصديق خيالي من إسبانيا.", "hint": "Se llama... Tiene... Es de... Le gusta...", "code": "Se llama María. Tiene veintidós años. Es de Madrid. Le gusta la música.", "why": "الكتابة عن شخص تالت بتدربك على تصريف él/ella." }
 ]
},
{
 "id": "a1-speak",
 "level": "A1",
 "skill": "speaking",
 "nav": "كلام: التعارف شفهياً",
 "title": "🗣️ كلام: التعارف شفهياً",
 "subtitle": "تدرب على أول محادثة تعارف: اسمع، ردد، سجّل، وقارن",
 "blocks": [
  { "type": "p", "text": "الكلام في A1 هو التعارف: تسلم، تقول اسمك، تسأل، وترد. اسمع الجمل بصوت عالي، رددها ورا النموذج، وبعدين سجّل صوتك وقارن. التمرين ده للمذاكرة، مش امتحان." },
  { "type": "h", "text": "جمل التعارف الأساسية" },
  { "type": "speak", "en": "Hola, ¿qué tal? Me llamo Omar.", "ar": "أهلاً، عامل إيه؟ أنا اسمي عمر." },
  { "type": "speak", "en": "¿Cómo te llamas? — Me llamo Sara.", "ar": "اسمك إيه؟ — أنا اسمي سارة." },
  { "type": "speak", "en": "¿De dónde eres? — Soy de Asiut. ¿Y tú?", "ar": "إنت منين؟ — أنا من أسيوط. وإنت؟" },
  { "type": "speak", "en": "Mucho gusto. — Encantada.", "ar": "تشرفنا. — وأنا كمان." },
  { "type": "h", "text": "تدريب النطق: كلمات A1 اللي بتتلخبط" },
  { "type": "list", "items": [
   "`gracias` = جراثياس (إسبانيا) / جراسياس (أمريكا اللاتينية). الاتنين صح.",
   "`egipcio` = إيخيبثيو / إيخيبسيو. الـ g قبل i زي الحاء.",
   "`universidad` = أونيبيرسيداد. الـ v في الإسباني بين b و v.",
   "`años` = أنيوس. الـ ñ = نيا."
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Hola, ¿qué tal?", "ar": "أهلاً، عامل إيه؟" },
   { "who": "Sara", "en": "Bien, ¿y tú?", "ar": "كويسة، وإنت؟" },
   { "who": "Omar", "en": "Muy bien. Me llamo Omar. ¿Cómo te llamas?", "ar": "كويس جداً. أنا اسمي عمر. اسمك إيه؟" },
   { "who": "Sara", "en": "Me llamo Sara. Mucho gusto, Omar.", "ar": "أنا اسمي سارة. تشرفنا يا عمر." },
   { "who": "Omar", "en": "Encantado, Sara. ¿De dónde eres?", "ar": "تشرفنا يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "Soy de Asiut. ¿Y tú?", "ar": "أنا من أسيوط. وإنت؟" }
  ]}
 ],
 "quiz": [
  { "q": "¿Cómo te llamas? الرد:", "options": [{ "text": "Me llamo Sara" }, { "text": "Soy bien" }, { "text": "Hola" }], "answer": 0, "explain": "السؤال عن الاسم: Me llamo + اسمك." },
  { "q": "¿De dónde eres? بتسأل عن:", "options": [{ "text": "الاسم" }, { "text": "السن" }, { "text": "البلد/المدينة" }, { "text": "الشغل" }], "answer": 2, "explain": "De dónde = منين (مكان)." },
  { "q": "بنت بترد على Mucho gusto بتقول:", "options": [{ "text": "Encantado" }, { "text": "Encantada" }, { "text": "Gracias" }], "answer": 1, "explain": "المؤنث Encantada والمذكر Encantado." },
  { "q": "¿Qué tal? معناها:", "options": [{ "text": "عامل إيه؟" }, { "text": "اسمك إيه؟" }, { "text": "إنت فين؟" }], "answer": 0, "explain": "تحية يومية، والرد المعتاد: Bien, ¿y tú?" }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتقول التعارف الكامل: سلام، اسمك، مدينتك، وMucho gusto.", "hint": "اسمع النموذج الأول مرتين.", "code": "Hola, me llamo Omar. Soy de Asiut. Mucho gusto.", "why": "التسجيل والمقارنة بالنموذج هو أسرع تدريب على النطق." },
  { "task": "مثّل المحادثة بدورين: مرة عمر ومرة سارة، بصوت عالي.", "hint": "غيّر نبرتك بين الدورين وخلي بالك من Encantado/Encantada.", "code": "سجّل الدورين واسمع نفسك.", "why": "تمثيل الأدوار بيدرب على إيقاع المحادثة الحقيقية." }
 ]
}

);
