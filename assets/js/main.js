(() => {
  const FORM_LIVE = true;
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/abdalrhman.fayyad.dev@gmail.com";
  const d = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ---------- Arabic / English ---------- */
  const AR = {
    "logo": "عبد الرحمن", "name": "عبد الرحمن فياض",
    "nav.about": "عنّي", "nav.skills": "المهارات", "nav.projects": "المشاريع", "nav.journey": "المسيرة", "nav.certs": "الشهادات", "nav.cta": "تواصل معي",
    "hero.pill": "متاح لوظائف المبتدئين والتدريب",
    "hero.h1": '<span class="w" style="--i:0">مرحباً،</span> <span class="w" style="--i:1">أنا</span> <span class="w grad-text" style="--i:2">عبد الرحمن</span> <span class="w grad-text" style="--i:3">فياض</span>',
    "hero.lead": "أبني الأنظمة الخلفية باستخدام <strong><bdi>C#</bdi></strong> و<strong><bdi>ASP.NET Core</bdi></strong> و<strong><bdi>SQL Server</bdi></strong>. أتدرّب حالياً في Orange Coding Academy، وأبني نظاماً لإدارة المدارس كمشروع تخرّج.",
    "hero.work": "تصفّح أعمالي", "hero.cv": "سيرتي الذاتية",
    "b1": "الواجهة الخلفية", "b2": "قواعد البيانات", "b3": "بكالوريوس علم الحاسوب<small>كانون الثاني 2027</small>",
    "s1.b": "الثامن", "s1.l": "الصف الذي كتبت فيه أول برنامج <bdi>C++</bdi>", "s2.l": "سنوات في دراسة علم الحاسوب", "s3.l": "أنظمة حقيقية بنيتها أو أعمل عليها", "s4.l": "سنة التخرّج، كانون الثاني",
    "about.k": "عنّي", "about.h": 'أحب أن أفهم <span class="grad-text">كيف تعمل الأشياء</span>',
    "about.p1": "أنا <strong>طالب علم حاسوب في جامعة آل البيت</strong>، وعلى وشك التخرّج.",
    "about.p2": "اخترت هذا المجال في الصف الثامن عندما تعرّفت على <strong><bdi>C++</bdi></strong>. وزاد شغفي في مساق الخوارزميات، حيث بنيت نظام ملاحة يجد أقصر طريق بين المدن الأردنية.",
    "about.p3": "بعدها انتقلت إلى تطوير الويب، وأكثر ما أستمتع به هو <strong>الـ Backend</strong>. كلما تعلّمت شيئاً جديداً أعود لأحسّن أعمالي القديمة، وحالياً أعيد بناء مشروع الخوارزميات كتطبيق ويب باستخدام ASP.NET.",
    "skills.k": "المهارات", "skills.h": "الأدوات التي أعمل بها",
    "sk1": "الواجهة الخلفية", "sk2": "الواجهة الأمامية", "sk3": "الأدوات", "sk4": "مهارات شخصية",
    "sk4.t": '<li><b style="--c:#0891b2"><svg class="icon"><use href="#i-puzzle"/></svg></b>حل المشكلات</li><li><b style="--c:#2563eb"><svg class="icon"><use href="#i-book"/></svg></b>التعلّم الذاتي</li><li><b style="--c:#7c3aed"><svg class="icon"><use href="#i-users"/></svg></b>العمل الجماعي</li>',
    "pr.k": "المشاريع", "pr.h": "أشياء بنيتها", "pr.sub": "اسحب لترى المزيد، ومرّر الماوس على البطاقة أو اضغط عليها لتنقلب وتعرض التفاصيل.",
    "details": "التفاصيل", "back": "رجوع", "code": "الكود", "problem": "المشكلة", "solution": "الحل", "goal": "الهدف", "built": "التقنيات",
    "p1.st": "قيد التطوير · مشروع التخرّج", "p1.t": "نظام إدارة المدرسة", "p1.d": "نظام ثنائي اللغة يعتمد على الصلاحيات لإدارة المدرسة بالكامل. أنا مسؤول عن بناء الـ API.",
    "p1.pb": "المدارس تتابع الطلاب والعلامات والحضور على الورق وفي ملفات متفرقة.", "p1.sl": "نظام واحد بالعربية والإنجليزية، لكل شخص في المدرسة دور وصلاحيات.",
    "p2.st": "النسخة الويب قريباً", "p2.t": "نظام الملاحة الأردني", "p2.d": "تطبيق Console يخطط الرحلات بين المدن الأردنية ويجد أفضل طريق.",
    "p2.pb": "من الصعب معرفة أفضل ترتيب لزيارة عدة أماكن.", "p2.sl": "خوارزمية Dijkstra مع أسلوب Greedy لتخطيط المسار.",
    "p3.st": "منشور", "p3.t": "موقعي الشخصي", "p3.d": "هذا الموقع، صمّمته وبنيته خلال تدريبي في Orange Coding Academy.",
    "p3.pb": "مكان واحد يعرّف بي وبما أبنيه وكيف تتواصل معي.", "p3.sl": "HTML و CSS و JavaScript مكتوبة يدوياً، بالعربية والإنجليزية، ومستضاف على GitHub Pages.",
    "jr.k": "المسيرة", "jr.h": "رحلتي في التعلّم",
    "j1.w": "تشرين الأول 2026 – الآن", "j1.p": "تدريب في تطوير الويب: صفحات متجاوبة باستخدام HTML و CSS (Flexbox و Grid)، و Bootstrap، و Git و GitHub.",
    "j2.w": "أيلول 2026", "j2.p": "تعلّمت <bdi>C#</bdi> من الأساسيات، وكتبت استعلامات SQL و Stored Procedures، وبنيت REST APIs باستخدام .NET Core واختبرتها بـ Postman.",
    "j3.w": "تشرين الأول 2023 – كانون الثاني 2027 (متوقع)", "j3.t": "بكالوريوس علم الحاسوب · جامعة آل البيت", "j3.p": "أساس قوي في الخوارزميات وهياكل البيانات، وأولى خطواتي في تطوير الويب.",
    "ce.k": "الشهادات", "ce.h": "شهادات ودورات", "cert.view": "عرض الشهادة",
    "c1.d": "لغة <bdi>C#</bdi>، واستعلامات SQL Server و Stored Procedures، و REST APIs باستخدام .NET Core.", "c1.w": "أيلول 2026",
    "c2.t": "تدريب تطوير الويب", "c2.d": "صفحات ويب متجاوبة باستخدام HTML و CSS و Bootstrap، والعمل الجماعي باستخدام Git و GitHub.", "c2.w": "تشرين الأول 2026 · قيد التدريب",
    "ct.k": "تواصل", "ct.h": "لنبنِ شيئاً معاً", "ct.p": "أبحث عن وظيفة Backend أو Full-Stack للمبتدئين أو فرصة تدريب. راسلني وسأرد عليك.",
    "ct.email": "البريد الإلكتروني", "copy": "نسخ", "ct.loc": "الموقع", "ct.city": "عمّان، الأردن",
    "f.h": "أرسل لي رسالة", "f.name": "اسمك", "f.email": "بريدك الإلكتروني", "f.msg": "رسالتك", "f.send": "إرسال الرسالة",
    "whatis": "ماذا يفعل",
    "how": "كيف بنيته",
    "live": "تجربة مباشرة",
    "p4.st": "منشور · تطبيق قابل للتثبيت",
    "p4.t": "متتبّع المحاضرات",
    "p4.d": "تطبيق ويب لمتابعة محاضرات الفصل الدراسي، يعمل بدون إنترنت ويمكن تثبيته على الهاتف والآيباد.",
    "p4.pb": "ينشئ قائمة محاضرات كل مادة من أيامها وتواريخ التدريس، ويمكنك شطب المحاضرات الملغاة وتسمية كل محاضرة ووضع علامة عند دراستها.",
    "p4.sl": "HTML و CSS و JavaScript في ملف واحد، والبيانات محفوظة في المتصفح، مع Service Worker ليعمل بدون إنترنت.",
    "p5.st": "Orange Coding Academy · مهمة JavaScript",
    "p5.t": "مستشفى المدينة",
    "p5.d": "صفحة لتسجيل المرضى تعرض كل مريض جديد كبطاقة.",
    "p5.pb": "نموذج لبيانات المريض، وكل تسجيل يصبح بطاقة على الصفحة ويبقى بعد إعادة التحميل.",
    "p5.sl": "كلاس Patient في JavaScript، وعرض عبر الـ DOM، وحفظ في localStorage.",
    "p6.st": "Orange Coding Academy · مهمة JavaScript",
    "p6.t": "Caffe Z",
    "p6.d": "صفحة مقهى تطلب فيها مشروبك وتراه فوراً.",
    "p6.pb": "يعبّئ الزائر نموذج الطلب: الاسم والعمر والجنس والمشروب، ساخن أو بارد.",
    "p6.sl": "JavaScript تقرأ النموذج وتعرض الطلب على الصفحة باستخدام الـ DOM.",
    "code.cap": "كود حقيقي من نظام إدارة المدرسة: عندما يحفظ مستخدمان نفس البيانات في نفس اللحظة، يرجع الـ API خطأ 409 واضحاً بالعربية والإنجليزية بدلاً من أن يتعطل بخطأ 500.",
    "ft": "مطوّر Full-Stack مبتدئ · عمّان، الأردن"
  };
  const WORDS = { en: ["Junior Full-Stack Developer", "Backend developer with ASP.NET Core", "Computer Science student"], ar: ["مطوّر Full-Stack مبتدئ", "مطوّر Backend باستخدام ASP.NET Core", "طالب علم حاسوب"] };
  const MSG = {
    en: { theme: ["Switch to light mode", "Switch to dark mode"], lang: "عرض الموقع بالعربية", sending: "Sending…", ok: "Thanks! Your message was sent. I'll reply soon.", err: "Couldn't send. Please email me directly at the address on the left.", need: "Please fill in your name, a valid email and a message.", preview: "Preview: on the live site this message goes straight to my inbox.", copied: "Copied", selected: "Selected" },
    ar: { theme: ["التبديل إلى الوضع الفاتح", "التبديل إلى الوضع الداكن"], lang: "View the site in English", sending: "جارٍ الإرسال…", ok: "شكراً! وصلتني رسالتك وسأرد عليك قريباً.", err: "تعذّر الإرسال. راسلني مباشرة على البريد الظاهر.", need: "يرجى كتابة اسمك وبريد إلكتروني صحيح ورسالتك.", preview: "معاينة: في الموقع الحقيقي تصلني هذه الرسالة على بريدي مباشرة.", copied: "تم النسخ", selected: "تم التحديد" }
  };
  const i18nEls = [...document.querySelectorAll("[data-i18n]")];
  i18nEls.forEach(el => (el.dataset.en = el.innerHTML));
  const lang = () => (d.lang === "ar" ? "ar" : "en");
  const typed = document.querySelector(".typed");
  let typeTimer = 0;
  function applyLang(l) {
    d.lang = l; d.dir = l === "ar" ? "rtl" : "ltr";
    i18nEls.forEach(el => { const k = el.dataset.i18n; el.innerHTML = l === "ar" && AR[k] ? AR[k] : el.dataset.en; });
    const lb = document.getElementById("lang");
    lb.innerHTML = l === "ar" ? '<span>EN</span>' : '<span class="lang-ar" lang="ar">ع</span>';
    lb.setAttribute("aria-label", MSG[l].lang); totop.setAttribute("aria-label", l === "ar" ? "العودة إلى الأعلى" : "Back to top");
    updateThemeLabel();
    prev.setAttribute("aria-label", l === "ar" ? "المشروع السابق" : "Previous project"); next.setAttribute("aria-label", l === "ar" ? "المشروع التالي" : "Next project");
    track.scrollLeft = 0; requestAnimationFrame(buildDots);
    typed.textContent = WORDS[l][0];
    startTyping();
  }
  document.getElementById("lang").addEventListener("click", () => { const l = lang() === "ar" ? "en" : "ar"; store.set("af-lang", l); applyLang(l); onScroll(); });

  /* ---------- Light / Dark ---------- */
  const themeBtn = document.getElementById("theme");
  function updateThemeLabel() { themeBtn.setAttribute("aria-label", MSG[lang()].theme[d.classList.contains("light") ? 1 : 0]); }
  themeBtn.addEventListener("click", () => { const light = d.classList.toggle("light"); store.set("af-theme", light ? "light" : "dark"); updateThemeLabel(); draw(true); });

  /* ---------- Loading screen (once per visit) ---------- */
  const loader = document.getElementById("loader");
  let seen = false; try { seen = sessionStorage.getItem("af-seen") === "1"; sessionStorage.setItem("af-seen", "1"); } catch (e) {}
  if (reduce || seen) { d.classList.add("no-loader"); }
  else {
    d.classList.add("loading");
    const t0 = performance.now();
    const finish = () => setTimeout(() => { loader.classList.add("done"); d.classList.remove("loading"); }, Math.max(0, 1250 - (performance.now() - t0)));
    if (document.readyState === "complete") finish(); else addEventListener("load", finish, { once: true });
    setTimeout(() => { loader.classList.add("done"); d.classList.remove("loading"); }, 3000);
  }

  /* ---------- Header, progress, timeline, active link ---------- */
  const totop = document.getElementById("totop");
  totop.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
  const header = document.querySelector("[data-header]"), bar = document.querySelector(".progress"), tline = document.getElementById("timeline");
  const links = [...document.querySelectorAll(".nav a[href^='#']")];
  const secs = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  function onScroll() {
    const max = d.scrollHeight - innerHeight;
    const prog = max > 0 ? scrollY / max : 0;
    bar.style.setProperty("--p", prog); totop.style.setProperty("--p", prog); totop.classList.toggle("show", scrollY > 700);
    header.classList.toggle("scrolled", scrollY > 24);
    const r = tline.getBoundingClientRect();
    tline.style.setProperty("--t", reduce ? 1 : Math.min(1, Math.max(0, (innerHeight * 0.75 - r.top) / r.height)));
    let cur = null; for (const s of secs) if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id;
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  }
  addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll);

  /* ---------- Reveal below-the-fold content ---------- */
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const el = e.target; el.classList.add("shown"); requestAnimationFrame(() => el.classList.remove("pre")); io.unobserve(el); }), { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(el => { el.style.setProperty("--d", (Number(el.dataset.reveal) || 0) * 90 + "ms"); if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pre"); io.observe(el); } });
  }

  /* ---------- Count-up ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting || reduce) return;
    const el = e.target, to = +el.dataset.count, from = +(el.dataset.from || 0), t0 = performance.now();
    const step = now => { const k = Math.min(1, (now - t0) / 1400); el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step); cio.unobserve(el);
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  /* ---------- Typing role ---------- */
  function startTyping() {
    clearTimeout(typeTimer); if (reduce) return;
    const words = WORDS[lang()]; let w = 0, c = words[0].length, del = true;
    const tick = () => {
      const word = words[w]; typed.textContent = word.slice(0, c);
      if (!del && c === word.length) { del = true; typeTimer = setTimeout(tick, 2000); return; }
      if (del && c === 0) { del = false; w = (w + 1) % words.length; typeTimer = setTimeout(tick, 250); return; }
      c += del ? -1 : 1; typeTimer = setTimeout(tick, del ? 32 : 65);
    };
    typeTimer = setTimeout(tick, 2600);
  }

  /* ---------- Mouse effects: spotlight, hero glow, magnetic buttons, cert tilt, glowing cursor ---------- */
  if (fine && !reduce) {
    document.addEventListener("pointermove", e => {
      const card = e.target.closest(".card");
      if (card) { const r = card.getBoundingClientRect(); card.style.setProperty("--mx", e.clientX - r.left + "px"); card.style.setProperty("--my", e.clientY - r.top + "px"); }
    }, { passive: true });
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); hero.style.setProperty("--hx", e.clientX - r.left + "px"); hero.style.setProperty("--hy", e.clientY - r.top + "px"); });
    document.querySelectorAll(".magnet").forEach(b => {
      b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`; });
      b.addEventListener("pointerleave", () => { b.style.transition = "transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .3s"; b.style.transform = ""; setTimeout(() => (b.style.transition = ""), 500); });
    });
    document.querySelectorAll(".tilt").forEach(c => {
      c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`; });
      c.addEventListener("pointerleave", () => (c.style.transform = ""));
    });
    const dot = document.querySelector(".cur-dot"), ring = document.querySelector(".cur-ring");
    let mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; d.classList.add("cursor-on"); ring.classList.toggle("hover", !!e.target.closest("a, button, .flip, input, textarea")); }, { passive: true });
    document.addEventListener("pointerleave", () => d.classList.remove("cursor-on"));
    (function follow() { rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = `translate(${rx}px, ${ry}px)`; requestAnimationFrame(follow); })();
  }

  /* ---------- Flip cards ---------- */
  document.querySelectorAll(".flip").forEach(card => {
    const set = on => { card.classList.toggle("on", on); card.querySelectorAll(".front .turn").forEach(t => t.setAttribute("aria-pressed", on)); };
    card.querySelectorAll(".turn").forEach(t => t.addEventListener("click", e => { e.stopPropagation(); set(!card.classList.contains("on")); }));
    card.addEventListener("click", e => { if (!fine && !e.target.closest("a, button")) set(!card.classList.contains("on")); });
  });

  /* ---------- Projects slider ---------- */
  const track = document.getElementById("track"), prev = document.getElementById("prev"), next = document.getElementById("next"), dotsEl = document.getElementById("dots");
  const cards = [...track.querySelectorAll(".flip")];
  const step = () => cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
  const pos = () => Math.round(Math.abs(track.scrollLeft) / Math.abs(step() || 1));
  const maxPos = () => Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / Math.abs(step() || 1)));
  const sign = () => (d.dir === "rtl" ? -1 : 1);
  function buildDots() { dotsEl.innerHTML = ""; for (let i = 0; i <= maxPos(); i++) dotsEl.appendChild(document.createElement("i")); updateNav(); }
  function updateNav() {
    const p = pos(), m = maxPos();
    [...dotsEl.children].forEach((dot, i) => dot.classList.toggle("on", i === p));
    prev.disabled = p <= 0; next.disabled = p >= m;
  }
  const go = n => track.scrollBy({ left: n * Math.abs(step()) * sign(), behavior: reduce ? "auto" : "smooth" });
  prev.addEventListener("click", () => go(-1)); next.addEventListener("click", () => go(1));
  track.addEventListener("keydown", e => { if (e.key === "ArrowRight") { e.preventDefault(); go(sign()); } if (e.key === "ArrowLeft") { e.preventDefault(); go(-sign()); } });
  let raf2 = 0; track.addEventListener("scroll", () => { cancelAnimationFrame(raf2); raf2 = requestAnimationFrame(updateNav); }, { passive: true });
  addEventListener("resize", buildDots);
  // drag with the mouse on desktop
  let down = false, startX = 0, startL = 0, moved = false;
  track.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse" || e.button !== 0) return; down = true; moved = false; startX = e.clientX; startL = track.scrollLeft; });
  addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - startX; if (!moved && Math.abs(dx) > 6) { moved = true; track.classList.add("dragging"); } if (moved) track.scrollLeft = startL - dx; });
  addEventListener("pointerup", () => { if (!down) return; down = false; if (moved) { track.classList.remove("dragging"); const p = pos(); track.scrollTo({ left: p * Math.abs(step()) * sign(), behavior: "smooth" }); } });
  track.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  buildDots();

  /* ---------- Mobile menu ---------- */
  const mb = document.getElementById("menu-btn"), nav = document.getElementById("nav");
  mb.addEventListener("click", () => { const o = mb.getAttribute("aria-expanded") !== "true"; mb.setAttribute("aria-expanded", o); nav.classList.toggle("open", o); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { mb.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); }));

  /* ---------- Copy email ---------- */
  const copy = document.getElementById("copy");
  copy.addEventListener("click", async () => {
    const el = document.getElementById("email");
    try { await navigator.clipboard.writeText(el.textContent); copy.textContent = MSG[lang()].copied; }
    catch (e) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); copy.textContent = MSG[lang()].selected; }
    setTimeout(() => (copy.textContent = lang() === "ar" ? AR.copy : "Copy"), 1800);
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById("form"), note = document.getElementById("note");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const m = MSG[lang()], data = Object.fromEntries(new FormData(form));
    note.className = "note";
    if (!data.name.trim() || !/^\S+@\S+\.\S+$/.test(data.email) || !data.message.trim()) { note.textContent = m.need; note.classList.add("err"); return; }
    if (data._honey) return;
    if (!FORM_LIVE) { note.textContent = m.preview; note.classList.add("ok"); return; }
    note.textContent = m.sending;
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, message: data.message, _subject: "New message from your portfolio", _template: "table" }) });
      if (!res.ok) throw new Error(res.status);
      form.reset(); note.textContent = m.ok; note.classList.add("ok");
    } catch (err) { note.textContent = m.err; note.classList.add("err"); }
  });

  /* ---------- Starfield ---------- */
  const cv = document.getElementById("stars"), ctx = cv.getContext("2d");
  let stars = [], W = 0, H = 0, raf = 0;
  function size() {
    const k = Math.min(devicePixelRatio || 1, 2), r = cv.getBoundingClientRect();
    W = r.width; H = r.height; cv.width = W * k; cv.height = H * k; ctx.setTransform(k, 0, 0, k, 0, 0);
    stars = Array.from({ length: Math.round(W * H / 6500) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .2, a: Math.random() * 6, s: Math.random() * .015 + .004, v: Math.random() * .12 + .02 }));
  }
  function draw(still) {
    const color = getComputedStyle(d).getPropertyValue("--star").trim(), light = d.classList.contains("light");
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      if (!still) { s.a += s.s; s.y -= s.v; if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; } }
      ctx.globalAlpha = (light ? .12 : .25) + Math.abs(Math.sin(s.a)) * (light ? .35 : .75);
      ctx.fillStyle = !light && s.r > 1.2 ? "#a5f3fc" : color;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
  }
  function loop() { draw(false); raf = requestAnimationFrame(loop); }
  size(); draw(true);
  if (!reduce) { raf = requestAnimationFrame(loop); document.addEventListener("visibilitychange", () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(loop); }); }
  addEventListener("resize", () => { size(); draw(true); });

  applyLang(lang());
  onScroll();
})();
