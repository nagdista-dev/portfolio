export type AiFaq = {
  question: string;
  answer: string;
};

export type AiItem = {
  title: string;
  text: string;
};

export type AiContent = {
  eyebrow: string;
  title: string;
  intro: string;
  newsletterTitle: string;
  newsletterBody: string[];
  newsletterCta: string;
  workflowTitle: string;
  workflowIntro: string;
  workflow: AiItem[];
  principlesTitle: string;
  principles: string[];
  buildTitle: string;
  buildBody: string[];
  faqTitle: string;
  faq: AiFaq[];
  contactTitle: string;
  contactBody: string;
};

export const AI_PAGE: Record<"en" | "ar", AiContent> = {
  en: {
    eyebrow: "AI & developer workflows",
    title: "Mahmoud Elnagdy on AI.",
    intro:
      "Mahmoud Elnagdy writes AI in Brief, a daily LinkedIn newsletter that filters the most important AI news for developers. This page collects his AI work, his AI-assisted workflow, and the AI features he builds.",
    newsletterTitle: "AI in Brief",
    newsletterBody: [
      "AI in Brief is a daily newsletter on LinkedIn. It summarizes the most important AI news in a few minutes, with a focus on what matters to developers and technical teams.",
      "It is written in Arabic and read by 2,000+ people on LinkedIn. The goal is simple: less noise, more signal.",
    ],
    newsletterCta: "Read AI in Brief on LinkedIn",
    workflowTitle: "How I use AI",
    workflowIntro:
      "AI is useful when it is treated as a tool, not an authority. These are the places where it earns its keep in my work.",
    workflow: [
      {
        title: "Debugging and code reading",
        text: "I use AI to explain unfamiliar code, compare approaches, and surface edge cases I might miss. I still run and review every change myself.",
      },
      {
        title: "Tests and documentation",
        text: "AI helps me draft test cases and turn implementation details into clear documentation. The final wording and coverage are mine.",
      },
      {
        title: "Arabic and English",
        text: "Bilingual products need more than translation. I use AI to compare phrasing, catch tone mismatches, and check technical terms in both languages.",
      },
      {
        title: "Learning",
        text: "I study English and new technical topics with AI-assisted tools. It is a tutor and a research assistant, not a replacement for practice.",
      },
    ],
    principlesTitle: "What I don't do",
    principles: [
      "I don't ship AI-generated code without reading, running, and testing it.",
      "I don't publish AI-generated facts without checking a primary source.",
      "I don't paste private client data or credentials into tools that don't need them.",
      "I don't use AI to fake experience, metrics, or testimonials.",
    ],
    buildTitle: "AI in products",
    buildBody: [
      "I build with React, Next.js, TypeScript, Node.js, and SQL. That stack is also my base for AI features: chat interfaces, summarization, search, and workflow automation through APIs such as the OpenAI API.",
      "If you need an AI feature inside a web product, the work starts with the product problem, not the model. I can help scope the feature, build the interface, connect the API, and keep the result fast and accessible.",
    ],
    faqTitle: "AI questions",
    faq: [
      {
        question: "Does Mahmoud Elnagdy work with AI?",
        answer:
          "Yes. He writes AI in Brief, a daily LinkedIn newsletter about AI news for developers, and uses AI tools in his development and language-learning workflow.",
      },
      {
        question: "What is AI in Brief?",
        answer:
          "AI in Brief is a daily Arabic-language LinkedIn newsletter curated by Mahmoud Elnagdy. It summarizes the most important AI news for developers in a few minutes.",
      },
      {
        question: "Who is Mahmoud Elnagdy AI?",
        answer:
          "Mahmoud Elnagdy AI refers to the full-stack developer Mahmoud Elnagdy in Cairo, who writes AI in Brief and builds AI-powered web features. He is a different person from the perfume creator with the same name.",
      },
      {
        question: "Is Mahmoud Elnagdy an AI engineer?",
        answer:
          "He is a full-stack developer who builds AI features and writes about AI. His core stack is React, Next.js, TypeScript, Node.js, and SQL, with APIs such as the OpenAI API for AI capabilities.",
      },
      {
        question: "How does Mahmoud Elnagdy use AI in development?",
        answer:
          "For debugging, code reading, test drafts, documentation, and Arabic-English review. Every change is reviewed, run, and tested before it ships.",
      },
      {
        question: "Does Mahmoud Elnagdy build AI features for clients?",
        answer:
          "Yes. He can scope and build AI-powered web features using APIs such as the OpenAI API, inside React, Next.js, Node.js, and SQL products.",
      },
    ],
    contactTitle: "Work on an AI feature?",
    contactBody:
      "Email nagdista@gmail.com or use the contact form. For AI news, read AI in Brief on LinkedIn.",
  },
  ar: {
    eyebrow: "الذكاء الاصطناعي وسير عمل المطور",
    title: "محمود النجدي والذكاء الاصطناعي.",
    intro:
      "النجدي AI هو محمود النجدي: مطور فول ستاك في القاهرة بيكتب AI in Brief، نشرة يومية على LinkedIn بتفلتر أهم أخبار الذكاء الاصطناعي للمطورين. الصفحة دي بتجمع شغله في AI، وطريقة استخدامه للأدوات، وميزات AI اللي بيبنيها.",
    newsletterTitle: "AI in Brief",
    newsletterBody: [
      "AI in Brief نشرة يومية على LinkedIn. بتلخص أهم أخبار الذكاء الاصطناعي في كام دقيقة، بتركيز على اللي يهم المطورين وفرق التقنية.",
      "مكتوبة بالعربي وبيقراها أكتر من 2,000 متابع على LinkedIn. الهدف بسيط: دوشة أقل، ومعلومة أنفع.",
    ],
    newsletterCta: "اقرأ AI in Brief على LinkedIn",
    workflowTitle: "بستخدم AI إزاي",
    workflowIntro:
      "AI بيفيد لما تتعامل معاه كأداة، مش كمرجع. دي الأماكن اللي بيكسب فيها مكانه في شغلي.",
    workflow: [
      {
        title: "فهم الكود والتصحيح",
        text: "بستخدم AI يشرح كود مش مألوف، يقارن حلول، ويطلع حالات حافة ممكن تفوتني. لكن كل تغيير بشغله وبراجعه بنفسي.",
      },
      {
        title: "الاختبارات والتوثيق",
        text: "AI بيساعدني أكتب حالات اختبار وأحول تفاصيل التنفيذ لتوثيق واضح. الصياغة النهائية والتغطية مسؤوليتي.",
      },
      {
        title: "العربي والإنجليزي",
        text: "المنتجات ثنائية اللغة محتاجة أكتر من ترجمة. بستخدم AI أقارن الصياغة، وألاحظ اختلاف النبرة، وأتحقق من المصطلحات التقنية في اللغتين.",
      },
      {
        title: "التعلّم",
        text: "بذاكر إنجليزي ومواضيع تقنية جديدة بأدوات مدعومة بالذكاء الاصطناعي. هي مدرس ومساعد بحث، مش بديل عن التدريب.",
      },
    ],
    principlesTitle: "اللي مش بعمله",
    principles: [
      "مش بنشر كود AI من غير ما أقراه وأشغله وأختبره.",
      "مش بنشر معلومة من AI من غير ما أراجع مصدر أساسي.",
      "مش بحط بيانات عملاء أو مفاتيح دخول في أدوات مش محتاجة.",
      "مش بستخدم AI أزوّق خبرة أو أرقام أو شهادات.",
    ],
    buildTitle: "AI في المنتجات",
    buildBody: [
      "ببني بـReact وNext.js وTypeScript وNode.js وSQL. نفس الستاك ده أساس لميزات AI: واجهات محادثة، تلخيص، بحث، وأتمتة لسير العمل عبر APIs زي OpenAI API.",
      "لو محتاج ميزة AI جوه منتج ويب، الشغل يبدأ من مشكلة المنتج مش من الموديل. أقدر أساعدك تحدد الميزة، تبني الواجهة، توصل الـAPI، وتخلي النتيجة سريعة وسهلة الاستخدام.",
    ],
    faqTitle: "أسئلة عن AI",
    faq: [
      {
        question: "محمود النجدي بيشتغل بالذكاء الاصطناعي؟",
        answer:
          "أيوه. بيكتب AI in Brief، نشرة يومية على LinkedIn عن أخبار AI للمطورين، وبيستخدم أدوات AI في التطوير وتعلّم اللغات.",
      },
      {
        question: "إيه هو AI in Brief؟",
        answer:
          "نشرة يومية بالعربي على LinkedIn بيكتبها محمود النجدي، وبتلخص أهم أخبار الذكاء الاصطناعي للمطورين في كام دقيقة.",
      },
      {
        question: "مين النجدي AI؟",
        answer:
          "النجدي AI هو محمود النجدي، مطور فول ستاك في القاهرة بيكتب نشرة AI in Brief اليومية عن أخبار الذكاء الاصطناعي للمطورين، وبيبني ميزات AI داخل منتجات الويب. هو شخص مختلف عن صانع محتوى العطور اللي بنفس الاسم.",
      },
      {
        question: "محمود النجدي مهندس ذكاء اصطناعي؟",
        answer:
          "هو مطور فول ستاك بيبني ميزات AI وبيعمل محتوى عنها. ستاكه الأساسي React وNext.js وTypeScript وNode.js وSQL، وبيستخدم APIs زي OpenAI API لإضافة قدرات AI.",
      },
      {
        question: "بيستخدم AI في التطوير إزاي؟",
        answer:
          "في فهم الكود والتصحيح، وكتابة الاختبارات والتوثيق، ومراجعة العربي والإنجليزي. كل تغيير بيتراجع ويتشغل ويتختبر قبل النشر.",
      },
      {
        question: "بيبني ميزات AI للعملاء؟",
        answer:
          "أيوه، يقدر يحدد ويبني ميزات AI داخل منتجات ويب بـReact وNext.js وNode.js وSQL، وباستخدام APIs زي OpenAI API.",
      },
    ],
    contactTitle: "عندك فكرة ميزة AI؟",
    contactBody:
      "راسل nagdista@gmail.com أو استخدم فورم التواصل. ولو عايز أخبار AI، اقرأ AI in Brief على LinkedIn.",
  },
};
