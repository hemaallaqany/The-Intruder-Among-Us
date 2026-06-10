# 🎭 بيننا دخيل | An Intruder Among Us

لعبة ذكاء اجتماعي ونقاشات ممتعة مصممة للهواتف الذكية والمتصفحات، تعتمد على الشك، الخداع، والتحقيق بين اللاعبين لمعرفة من هو "الدخيل". اللعبة من فكرة وتصميم **فريق الرنجالة**.

[English Description Below](#-english-version)

---

## 📺 عن اللعبة
لعبة **"بيننا دخيل"** هي لعبة جماعية (Local Party Game) تُلعب على جهاز هاتف واحد يتم تمريره بين اللاعبين. تعتمد اللعبة على طرح أسئلة سرية ومموهة من فئة معينة، حيث يحصل اللاعبون العاديون على سؤال، بينما يحصل "الدخيل" على سؤال مختلف تماماً دون أن يعلم! بعد ذلك تبدأ مرحلة النقاش والإجابات الذكية، وينتهي الدور بالتصويت السري لمعرفة الدخيل.

### ✨ المميزات التقنية:
* **تطبيق ويب تقدمي (PWA):** يمكن تثبيت اللعبة على الهواتف الذكية (Android & iOS) واشتغالها بدون إنترنت بالكامل عبر الـ Service Worker.
* **مكتبة أسئلة مخصصة:** إمكانية إضافة، تعديل، وحذف الفئات والأسئلة مباشرة من التطبيق.
* **إدارة البيانات:** دعم كامل لميزتي **الاستيراد والتصدير** بصيغة `JSON` للحفاظ على أسئلتك المخصصة.
* **نظام تصويت سري متكامل:** يضمن خصوصية تصويت كل لاعب قبل إعلان النتيجة وحساب النقاط تلقائياً.
* **واجهة مستخدم عصرية:** تصميم مظلم (Dark Mode) جذاب ومريح للعين مع تجربة مستخدم سلسة واستجابة كاملة لشاشات الهواتف.

---

## 🎮 طريقة اللعب (How to Play)
1. **إضافة اللاعبين:** قم بإضافة أسماء اللاعبين (الحد الأدنى 4 لاعبين).
2. **تمرير الهاتف:** يظهر اسم اللاعب على الشاشة، يأخذ الهاتف ويضغط للكشف عن سؤاله السري وفئته، ثم يمرره للاعب التالي.
3. **النقاش والتمويه:** بعد معرفة الجميع بأسئلتهم، يقوم كل لاعب بذكر إجابته بصوت عالٍ بشرط ألا يكشف سؤاله الحرفي، بل يلمّح له بذكاء (ليثبت للفريق أنه ليس الدخيل، وفي نفس الوقت دون أن يفهم الدخيل السؤال الأصلي).
4. **كشف الأسئلة والتصويت:** يتم كشف السؤالين (سؤال الفريق وسؤال الدخيل)، ثم يمرر الهاتف مجدداً ليقوم كل لاعب بالتصويت سرياً على من يظن أنه الدخيل.
5. **النتائج والنقاط:** يعلن التطبيق النتيجة (فوز الفريق أو فوز الدخيل) ويحسب النقاط بناءً على دقة التصويت.

---

## 🚀 التشغيل والتثبيت
اللعبة عبارة عن صفحة ويب واحدة (`index.html`) مدعومة بـ JavaScript و CSS بدون أي مكتبات خارجية (Pure Vanilla JS).

### للتشغيل المحلي:
فقط قم بفتح ملف `index.html` في أي متصفح حديث، أو ارفعه على منصات استضافة مجانية مثل **GitHub Pages** أو **Vercel**.

---

# 🎭 An Intruder Among Us

A thrilling social deduction and discussion party game designed for smartphones and browsers. It relies on suspicion, deception, and investigation among players to uncover the "Intruder". Concept and design by **Al-Ranjala Team**.

## 📺 About The Game
**"An Intruder Among Us"** is a local party game played on a single device passed around between players. The game assigns secret, disguised questions from a specific category; normal players get one question, while the "Intruder" gets a completely different one without knowing it! After revealing the questions, the debate begins, ending with a secret voting phase to expose the intruder.

### ✨ Technical Features:
* **Progressive Web App (PWA):** Fully installable on iOS & Android, capable of working 100% offline via Service Worker.
* **Custom Dynamic Library:** Add, edit, or delete categories and questions directly inside the app.
* **Data Management:** Full support for **Import/Export** via `JSON` files to backup your custom question packs.
* **Secret Voting System:** Ensures complete privacy for each player's vote before showing final scores.
* **Modern UI/UX:** Sleek, immersive Dark Mode design utilizing the Cairo font, optimized perfectly for mobile viewports.

---

## 🛠️ Built With / التقنيات المستخدمة
* **HTML5** (Semantic structure & PWA manifests)
* **CSS3** (Custom properties/variables, Glassmorphism, animations, and responsive grids)
* **Vanilla JavaScript** (State management, local storage caching, and game logic)

---

## 📝 رخصة وملاحظة / License & Credits
* **الفكرة والتصميم:** فريق الرنجالة (Al-Ranjala Team).
* جميع الحقوق محفوظة ومتاحة للاستخدام الشخصي والتطوير المفتوح المصدر.
