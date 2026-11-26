/* Lab content (data). Runs in the browser. */
(function(){
var tools=[
 {
  "id": "order",
  "kind": "order",
  "title": "🧩 رتّب الجملة",
  "desc": "اضغط الكلمات بالترتيب الصح عشان تكوّن الجملة الإسبانية. تقدر تسمع الجملة بعد الحل.",
  "mission": "ترتيب الجمل",
  "items": [
   { "ar": "أنا اسمي أحمد.", "words": ["Me","llamo","Ahmed"], "why": "Me llamo Ahmed." },
   { "ar": "أنا من مصر.", "words": ["Soy","de","Egipto"], "why": "Soy de Egipto." },
   { "ar": "إنت ساكن فين؟", "words": ["¿Dónde","vives","tú?"], "why": "¿Dónde vives tú؟ كلمة السؤال + الفعل + الضمير." },
   { "ar": "هي بتتكلم إسباني كويس.", "words": ["Ella","habla","bien","español"], "why": "Ella habla bien español." },
   { "ar": "أنا أكلت فول.", "words": ["Yo","comí","foul"], "why": "Indefinido: comí." },
   { "ar": "إحنا بنروح السينما.", "words": ["Nosotros","vamos","al","cine"], "why": "vamos + a el = al." },
   { "ar": "أنا بذاكر عشان عايز أدرس في إسبانيا.", "words": ["Estudio","porque","quiero","estudiar","en","España"], "why": "بعد porque الجملة عادية." },
   { "ar": "لو كان معايا فلوس، كنت سافرت.", "words": ["Si","tuviera","dinero",",","viajaría"], "why": "Si + subjuntivo + condicional = شرطية." },
   { "ar": "القهوة اللي بحبها تقيلة.", "words": ["El","café","que","me","gusta","es","fuerte"], "why": "que = اللي، وme gusta = بحب." },
   { "ar": "لازم تيجي.", "words": ["Quiero","que","vengas"], "why": "Quiero que + subjuntivo." }
  ]
 },
 {
  "id": "gram",
  "kind": "choice",
  "title": "⚙️ اختار الجرامر الصح",
  "desc": "كل سؤال فيه جملة ناقصة، اختار الكلمة الصح.",
  "mission": "الجرامر",
  "items": [
   { "q": "Yo ___ estudiante. (ser)", "options": ["soy","eres","es","somos"], "answer": 0, "why": "yo soy = أنا أكون." },
   { "q": "¿Tú ___ a El Cairo? (ir)", "options": ["voy","vas","va","van"], "answer": 1, "why": "tú vas = إنت رايح." },
   { "q": "Ella ___ un coche. (tener)", "options": ["tengo","tienes","tiene","tienen"], "answer": 2, "why": "ella tiene = عندها." },
   { "q": "Nosotros ___ español. (hablar)", "options": ["hablo","hablas","hablamos","hablan"], "answer": 2, "why": "nosotros hablamos = إحنا بنتكلم." },
   { "q": "Yo no ___ español. (hablar)", "options": ["hablo","hablas","hablamos","hablan"], "answer": 0, "why": "yo no hablo = مش بتكلم." },
   { "q": "Ayer ___ una película. (ver, indefinido)", "options": ["veo","ví","vi","veía"], "answer": 2, "why": "vi = شفت (indefinido بدون تشديد)." },
   { "q": "De niño, ___ al fútbol. (jugar, imperfecto)", "options": ["juego","jugué","jugaba","jugaré"], "answer": 2, "why": "عادة في الطفولة = imperfecto: jugaba." },
   { "q": "Quiero que tú ___. (venir, subjuntivo)", "options": ["vienes","vengas","vendrás","venías"], "answer": 1, "why": "Quiero que + subjuntivo: vengas." }
  ]
 },
 {
  "id": "vocab",
  "kind": "choice",
  "title": "📚 اختار المفردات الصح",
  "desc": "كل سؤال فيه كلمة إسبانية، اختار معناها بالعربي.",
  "mission": "المفردات",
  "items": [
   { "q": "el café", "options": ["الشاي","القهوة","العصير","المية"], "answer": 1, "why": "café = قهوة." },
   { "q": "el coche", "options": ["الطيارة","العربية","العجلة","المركب"], "answer": 1, "why": "coche = عربية." },
   { "q": "el trabajo", "options": ["الشغل","اللعب","النوم","الأكل"], "answer": 0, "why": "trabajo = شغل." },
   { "q": "la casa", "options": ["المدرسة","البيت","المحل","الشارع"], "answer": 1, "why": "casa = بيت." },
   { "q": "el libro", "options": ["الكتاب","القلم","الورقة","المكتب"], "answer": 0, "why": "libro = كتاب." },
   { "q": "la estación", "options": ["المطار","المحطة","الميناء","الشارع"], "answer": 1, "why": "estación = محطة." },
   { "q": "el pan", "options": ["الجبنة","العيش","الزبدة","اللحم"], "answer": 1, "why": "pan = عيش." },
   { "q": "el amigo", "options": ["العدو","الصاحب","الأخ","الأب"], "answer": 1, "why": "amigo = صاحب." }
  ]
 },
 {
  "id": "num",
  "kind": "choice",
  "title": "🔢 اختار الرقم الصح",
  "desc": "كل سؤال فيه رقم بالإسباني، اختار الرقم الصح.",
  "mission": "الأرقام",
  "items": [
   { "q": "setenta", "options": ["60","70","80","90"], "answer": 1, "why": "setenta = 70." },
   { "q": "cuarenta y dos", "options": ["24","40","42","44"], "answer": 2, "why": "cuarenta y dos = 40+2 = 42." },
   { "q": "noventa y nueve", "options": ["89","90","99","100"], "answer": 2, "why": "noventa y nueve = 99." },
   { "q": "treinta y cinco", "options": ["25","30","35","45"], "answer": 2, "why": "treinta y cinco = 30+5 = 35." },
   { "q": "Son las ocho y media", "options": ["8:00","8:15","8:30","8:45"], "answer": 2, "why": "y media = ونص: 8:30." },
   { "q": "Son las nueve menos cuarto", "options": ["9:15","8:45","9:00","8:30"], "answer": 1, "why": "menos cuarto = إلا ربع: 8:45." },
   { "q": "el primero de mayo", "options": ["أول مايو","2 مايو","31 مايو","آخر مايو"], "answer": 0, "why": "primero = الأول: أول مايو." }
  ]
 }
];
window.LAB_DEF={slug:"spanish-from-zero",tools:tools};
})();
