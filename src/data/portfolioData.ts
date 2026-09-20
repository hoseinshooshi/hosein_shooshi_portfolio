import type {
  SkillItem,
  DriveCategory,
  WorkExperience,
  ProjectPreview,
  CertificateItem,
  SeoServiceItem
} from '../types.ts';

export const PERSONAL_INFO = {
  name: 'حسین شوشی',
  englishName: 'Hoseyn Shoushi',
  title: 'متخصص سئو و توسعه‌دهنده وب',
  shortBio:
    'متخصص سئو و توسعه وب با تمرکز بر سئوی تکنیکال، تحلیل داده، بهینه‌سازی ساختار وب‌سایت و توسعه تجربه‌های کاربری مدرن؛ با تجربه در تولید محتوا، طراحی رابط کاربری و توسعه ابزارهای مبتنی بر وب و هوش مصنوعی.',
  phone: '09050338672',
  displayPhone: '09050338672',
  email: 'hoseynshushi@gmail.com',
  githubUrl: 'https://github.com/hoseinshooshi',
  githubUsername: 'hoseinshooshi',
  whatsappUrl: 'https://wa.me/989050338672',
  location: 'ایران، تهران / همکاری حضوری، دورکاری',
  experienceYears: '۴+ سال تجربه حرفه‌ای',
  statusBadge: 'آماده همکاری در پروژه‌های سئو، توسعه وب و دیجیتال مارکتینگ',
};

export const SEO_SERVICES: SeoServiceItem[] = [
  {
    id: 'technical-seo',
    title: 'سئوی تکنیکال (Technical SEO)',
    shortDesc: 'بهینه‌سازی زیرساخت فنی، معماری سایت، قابلیت خزش و ایندکس برای بهبود عملکرد وب‌سایت در موتورهای جست‌وجو.',
    features: [
      'بهینه‌سازی Core Web Vitals شامل LCP، CLS و INP',
      'پیاده‌سازی و اصلاح داده‌های ساختاریافته Schema Markup و JSON-LD',
      'مدیریت Crawl Budget و بهینه‌سازی فایل Robots.txt و نقشه XML Sitemap',
      'رفع خطاهای خزش، ریدایرکت‌ها، صفحات ۴۰۴ و مشکلات Canonical'
    ],
    iconName: 'Cpu',

    metricLabel: 'بهبود میانگین امتیاز PageSpeed Insights'
  },

  {
    id: 'onpage-content',
    title: 'سئوی داخلی و استراتژی محتوا (On-Page SEO)',
    shortDesc: 'بهینه‌سازی ساختار محتوا بر اساس نیت جست‌وجو، معماری اطلاعات و ارتباط موضوعی صفحات برای افزایش پوشش کلمات کلیدی.',
    features: [
      'تحقیق و تحلیل پیشرفته کلمات کلیدی بر اساس نیت جست‌وجو و کلاسترینگ موضوعی',
      'بهینه‌سازی ساختار هدینگ‌ها، عنوان صفحات و متا دیسکریپشن با تمرکز بر نرخ کلیک',
      'طراحی معماری پیوندهای داخلی و ساختار خوشه‌ای محتوا',
      'بهینه‌سازی تصاویر، تگ‌های Alt و فرمت‌های مدرن مانند WebP'
    ],
    iconName: 'Search',

    metricLabel: 'رشد میانگین ترافیک ارگانیک'
  },

  {
    id: 'offpage-pr',
    title: 'سئوی خارجی و لینک‌سازی اصولی (Off-Page SEO)',
    shortDesc: 'تقویت اعتبار و سیگنال‌های خارجی وب‌سایت با تمرکز بر لینک‌سازی هدفمند، روابط عمومی دیجیتال و تحلیل پروفایل بک‌لینک.',
    features: [
      'تدوین استراتژی رپورتاژ آگهی و لینک‌سازی در رسانه‌های مرتبط و معتبر',
      'تحلیل پروفایل بک‌لینک و شناسایی لینک‌های کم‌کیفیت و مخرب',
      'تقویت حضور برند و ایجاد Brand Mention در منابع و رسانه‌های مرتبط',
      'تحلیل پروفایل لینک رقبا و شناسایی فرصت‌های Link Gap'
    ],
    iconName: 'Share2',

    metricLabel: 'بهبود اعتبار و کیفیت پروفایل بک‌لینک'
  },

  {
    id: 'cro-analytics',
    title: 'تحلیل داده و بهینه‌سازی نرخ تبدیل',
    shortDesc: 'تحلیل رفتار کاربران و داده‌های عملکردی برای تبدیل ترافیک ارگانیک به سرنخ و مشتری باارزش.',
    features: [
      'پیاده‌سازی و مدیریت رویدادهای اختصاصی در Google Analytics 4 و Google Tag Manager',
      'تحلیل و بهینه‌سازی صفحات فرود با رویکرد آزمون و بهبود مستمر',
    ],
    iconName: 'TrendingUp',

    metricLabel: 'بهبود نرخ تبدیل ترافیک ارگانیک'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // زبان‌های خارجی
  {
    id: 'lang-en',
    name: 'انگلیسی',
    levelPercentage: 75,
    levelLabel: 'بالاتر از متوسط (Upper Intermediate)',
    category: 'languages',
    iconName: 'Languages',
    color: '#644a40'
  },
  {
    id: 'lang-es',
    name: 'اسپانیایی',
    levelPercentage: 45,
    levelLabel: 'پایین‌تر از متوسط (Pre-Intermediate)',
    category: 'languages',
    iconName: 'Languages',
    color: '#ffdfb5'
  },

  // نرم‌افزارها و ابزارهای تخصصی
  {
    id: 'tool-gsc',
    name: 'Google Search Console',
    levelPercentage: 90,
    levelLabel: 'پیشرفته',
    category: 'software',
    iconName: 'LineChart',
    color: '#644a40'
  },
  {
    id: 'tool-ahrefs',
    name: 'Ahrefs',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'software',
    iconName: 'BarChart3',
    color: '#ffdfb5'
  },
  {
    id: 'tool-semrush',
    name: 'Semrush',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'software',
    iconName: 'BarChart3',
    color: '#66493e'
  },
  {
    id: 'tool-ga',
    name: 'Google Analytics',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'software',
    iconName: 'PieChart',
    color: '#ffe6c4'
  },
  {
    id: 'tool-figma',
    name: 'Figma',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'software',
    iconName: 'Palette',
    color: '#644a40'
  },
  {
    id: 'tool-illustrator',
    name: 'Adobe Illustrator',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'software',
    iconName: 'Palette',
    color: '#ffdfb5'
  },
  {
    id: 'tool-photoshop',
    name: 'Adobe Photoshop',
    levelPercentage: 40,
    levelLabel: 'مقدماتی',
    category: 'software',
    iconName: 'Image',
    color: '#66493e'
  },
  {
    id: 'tool-adobe-xd',
    name: 'Adobe XD',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'software',
    iconName: 'Palette',
    color: '#ffe6c4'
  },
  {
    id: 'tool-word',
    name: 'Microsoft Word',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'software',
    iconName: 'FileText',
    color: '#644a40'
  },
  {
    id: 'tool-powerpoint',
    name: 'Microsoft PowerPoint',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'software',
    iconName: 'Presentation',
    color: '#ffdfb5'
  },
  {
    id: 'tool-canva',
    name: 'Canva',
    levelPercentage: 80,
    levelLabel: 'پیشرفته',
    category: 'software',
    iconName: 'Palette',
    color: '#66493e'
  },
  {
    id: 'tool-gemini',
    name: 'Gemini AI',
    levelPercentage: 80,
    levelLabel: 'پیشرفته',
    category: 'software',
    iconName: 'Sparkles',
    color: '#ffe6c4'
  },
  {
    id: 'tool-wordpress',
    name: 'WordPress',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'software',
    iconName: 'Laptop',
    color: '#644a40'
  },

  // برنامه‌نویسی و توسعه وب
  {
    id: 'prog-html-css',
    name: 'HTML5 و CSS3',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'programming',
    iconName: 'Code2',
    color: '#ffdfb5'
  },
  {
    id: 'prog-js',
    name: 'JavaScript',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'programming',
    iconName: 'Braces',
    color: '#66493e'
  },
  {
    id: 'prog-react',
    name: 'React',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'programming',
    iconName: 'Layers',
    color: '#ffe6c4'
  },
  {
    id: 'prog-nextjs',
    name: 'Next.js',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'programming',
    iconName: 'Layers',
    color: '#644a40'
  },
  {
    id: 'prog-nodejs',
    name: 'Node.js',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'programming',
    iconName: 'Server',
    color: '#ffdfb5'
  },
  {
    id: 'prog-python',
    name: 'Python',
    levelPercentage: 65,
    levelLabel: 'متوسط',
    category: 'programming',
    iconName: 'Terminal',
    color: '#66493e'
  },

  // مهارت‌های تخصصی
  {
    id: 'skill-seo',
    name: 'سئو',
    levelPercentage: 95,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'TrendingUp',
    color: '#ffe6c4'
  },
  {
    id: 'skill-onpage-seo',
    name: 'سئوی داخلی',
    levelPercentage: 95,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'Search',
    color: '#644a40'
  },
  {
    id: 'skill-offpage-seo',
    name: 'سئوی خارجی و لینک‌سازی',
    levelPercentage: 90,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'Share2',
    color: '#ffdfb5'
  },
  {
    id: 'skill-technical-seo',
    name: 'سئوی تکنیکال',
    levelPercentage: 90,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'Cpu',
    color: '#66493e'
  },
  {
    id: 'skill-keyword-research',
    name: 'تحقیق و تحلیل کلمات کلیدی',
    levelPercentage: 92,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'Search',
    color: '#ffe6c4'
  },
  {
    id: 'skill-competitor-analysis',
    name: 'تحلیل رقبا',
    levelPercentage: 90,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'BarChart3',
    color: '#644a40'
  },
  {
    id: 'skill-content-strategy',
    name: 'استراتژی محتوا',
    levelPercentage: 90,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'FileText',
    color: '#ffdfb5'
  },
  {
    id: 'skill-content-writing',
    name: 'تولید و نگارش محتوا',
    levelPercentage: 90,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'PenTool',
    color: '#66493e'
  },
  {
    id: 'skill-copywriting',
    name: 'کپی‌رایتینگ',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'PenTool',
    color: '#ffe6c4'
  },
  {
    id: 'skill-advertising-design',
    name: 'طراحی تبلیغات',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'Megaphone',
    color: '#644a40'
  },
  {
    id: 'skill-poster-design',
    name: 'طراحی پوستر تبلیغاتی',
    levelPercentage: 85,
    levelLabel: 'پیشرفته',
    category: 'professional',
    iconName: 'Image',
    color: '#ffdfb5'
  }
];
export const DRIVE_CATEGORIES: DriveCategory[] = [
  {
    id: 'drive-text-content',
    title: 'محتواهای متنی',
    description:
      'آرشیو محتوای متنی شامل نمونه‌های تولید محتوا، محتوای تبلیغاتی و متون آماده‌شده برای پروژه‌های مختلف.',
    folderUrl: 'https://drive.google.com/drive/folders/1y78P3gjdE0jvgqXM742oNeBXpm2xNDDi?usp=sharing',
    fileCountText: '۱۶۰ فایل محتوای متنی',
    tags: ['تولید محتوا', 'محتوای متنی', 'محتوای تبلیغاتی'],
    coverGradient: 'from-[#644a40] to-[#8d6757]',
    iconName: 'FileText'
  },

  {
    id: 'drive-instagram-stories',
    title: 'استوری‌های اینستاگرام',
    description:
      'آرشیو نمونه استوری‌های اینستاگرام شامل محتوای تبلیغاتی، اطلاع‌رسانی، معرفی محصول و سایر قالب‌های محتوایی شبکه‌های اجتماعی.',
    folderUrl: 'https://drive.google.com/drive/folders/1Fw1yRfgHd6WYGGKhCI2L9d-wkt_Q2c1q?usp=sharing',
    fileCountText: '۳۷ فایل استوری',
    tags: ['استوری', 'اینستاگرام', 'تبلیغات', 'محتوای شبکه‌های اجتماعی'],
    coverGradient: 'from-[#582d1d] to-[#644a40]',
    iconName: 'Smartphone'
  },

  {
    id: 'drive-logo-sketches',
    title: 'اتودهای طراحی لوگو',
    description:
      'مجموعه اتودها و طرح‌های اولیه طراحی لوگو که مراحل ایده‌پردازی، بررسی فرم و توسعه کانسپت‌های بصری را نشان می‌دهد.',
    folderUrl: 'https://drive.google.com/drive/folders/19Iw21P-EU7Y4hK2R28vCsj1bAR6bQSnK?usp=sharing',
    fileCountText: '۱۳ فایل اتود طراحی لوگو',
    tags: ['طراحی لوگو', 'اتود', 'هویت بصری', 'ایده‌پردازی'],
    coverGradient: 'from-[#66493e] to-[#42382e]',
    iconName: 'PenTool'
  },

  {
    id: 'drive-advertising-banners',
    title: 'بنرهای تبلیغاتی و تصاویر محصول',
    description:
      'مجموعه بنرهای تبلیغاتی و تصاویر محصول با تمرکز بر معرفی، ارائه بصری و استفاده در کمپین‌ها و بسترهای مختلف تبلیغاتی.',
    folderUrl: 'https://drive.google.com/drive/folders/1f8UJax-Yni0U-Vi6Djig7hRQGAnE_-bP?usp=sharing',
    fileCountText: '۲۱ فایل بنر و تصویر محصول',
    tags: ['بنر تبلیغاتی', 'تصویر محصول', 'طراحی تبلیغات', 'ویژوال محصول'],
    coverGradient: 'from-[#42382e] to-[#644a40]',
    iconName: 'Image'
  },

  {
    id: 'drive-print-designs',
    title: 'اعلامیه، فلایر، بروشور و کالیته',
    description:
      'آرشیو طراحی‌های چاپی شامل اعلامیه، فلایر، بروشور و کالیته با نمونه‌هایی از کاربردهای مختلف طراحی گرافیک در پروژه‌های تبلیغاتی و چاپی.',
    folderUrl: 'https://drive.google.com/drive/folders/1zxty2FklRJaC0D7KPz61NskJEBe0IL2h?usp=sharing',
    fileCountText: '۲۰ فایل طراحی چاپی',
    tags: ['فلایر', 'بروشور', 'اعلامیه', 'کالیته'],
    coverGradient: 'from-[#644a40] to-[#582d1d]',
    iconName: 'BookOpen'
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp-1',
    period: 'مهر ۱۴۰۳ – اسفند ۱۴۰۴',
    role: 'کارشناس دیجیتال مارکتینگ و سئو',
    company: 'آکام پیچ فرد',
    narrative:
      'فعالیت در حوزه دیجیتال مارکتینگ و سئو با تمرکز بر بهینه‌سازی حضور آنلاین، تحلیل عملکرد وب‌سایت، اجرای فعالیت‌های سئو داخلی و خارجی و پشتیبانی از فرایند تولید و بهینه‌سازی محتوا. در این دوره، بخشی از فعالیت‌ها در راستای بهبود ساختار محتوایی، تحلیل داده‌های جست‌وجو و اجرای اقدامات مرتبط با رشد ترافیک ارگانیک انجام شد.',
    achievements: [
      'اجرای فعالیت‌های سئوی داخلی و خارجی و بهینه‌سازی صفحات وب‌سایت',
      'تحقیق و تحلیل کلمات کلیدی و تدوین ساختار محتوایی متناسب با نیت جست‌وجو',
      'تحلیل عملکرد وب‌سایت و داده‌های سرچ کنسول برای شناسایی فرصت‌های بهبود'
    ],
    skills: [
      'SEO',
      'On-Page SEO',
      'Off-Page SEO',
      'Keyword Research',
      'Google Search Console',
      'Digital Marketing'
    ]
  },

  {
    id: 'exp-2',
    period: 'مرداد ۱۴۰۱ – شهریور ۱۴۰۳',
    role: 'کارشناس تولید محتوا و کپی‌رایتر',
    company: 'فریلنسر پروژه‌ای',
    narrative:
      'همکاری پروژه‌ای در زمینه تولید و نگارش محتوا، کپی‌رایتینگ و آماده‌سازی محتوای متنی و تبلیغاتی برای پروژه‌های مختلف. در کنار تولید محتوا، فعالیت‌هایی در حوزه طراحی محتوای بصری، استوری‌های اینستاگرام، بنرهای تبلیغاتی و سایر اقلام گرافیکی نیز انجام شد و زمینه ورود تخصصی‌تر به حوزه سئو و دیجیتال مارکتینگ شکل گرفت.',
    achievements: [
      'تولید و نگارش محتوای متنی و تبلیغاتی برای پروژه‌های مختلف',
      'تهیه و بهینه‌سازی محتوای مورد استفاده در وب‌سایت و شبکه‌های اجتماعی',
      'همکاری در طراحی و آماده‌سازی استوری‌های اینستاگرام، بنرهای تبلیغاتی و اقلام گرافیکی'
    ],
    skills: [
      'Content Writing',
      'Copywriting',
      'Content Strategy',
      'SEO Content',
      'Social Media Content',
      'Graphic Design'
    ]
  }
];

export const GITHUB_FEATURED_REPOS = [
  {
    name: 'react-AiChatApp',
    description:
      'اپلیکیشن چت هوشمند فول‌استک با رابط کاربری React و اتصال به API جمینی برای ایجاد تجربه گفت‌وگوی مبتنی بر هوش مصنوعی.',
    language: 'JavaScript',
    stars: '--',
    forks: '--'
  },
  {
    name: 'PUTER-RESUME-ATS',
    description:
      'اپلیکیشن تحلیل رزومه با استفاده از پلتفرم Puter برای بررسی محتوای رزومه و ارزیابی آن با رویکرد سیستم‌های رهگیری متقاضیان.',
    language: 'JavaScript',
    stars: '--',
    forks: '--'
  },
  {
    name: 'diabetes-type2-cdss-screening',
    description:
      'سامانه غربالگری و پشتیبان تصمیم برای ارزیابی ریسک دیابت نوع ۲، شامل بخش پردازش پایتون و رابط کاربری React.',
    language: 'Python',
    stars: '--',
    forks: '--'
  },
  {
    name: 'Heart-Disease-Prediction-using-Logistic-Regression-in-Python',
    description:
      'پیاده‌سازی مدل پیش‌بینی بیماری قلبی با استفاده از الگوریتم رگرسیون لجستیک در پایتون و روش‌های یادگیری ماشین.',
    language: 'Python',
    stars: '--',
    forks: '--'
  }
];


export const PROJECT_WEBSITES: ProjectPreview[] = [
  {
    id: 'project-whack-a-mole',
    title: 'بازی Whack a Mole',
    url: 'https://whack-a-mole-omega-wine.vercel.app/',
    previewImage: '/Whack_a_Mole.png',
    categoryBadge: 'بازی تعاملی وب',
    colorAccent: '#644a40'
  },
  {
    id: 'project-ai-code-converter',
    title: 'AI Code Converter',
    url: 'https://ai-code-conerrter.vercel.app/',
    previewImage: '/AI_Code_Convert.png',
    categoryBadge: 'ابزار هوش مصنوعی و توسعه وب',
    colorAccent: '#ffdfb5'
  },
  {
    id: 'project-snake-game',
    title: 'بازی Snake',
    url: 'https://snake-game-ecru-three.vercel.app/',
    previewImage: 'Snake_Game.png',
    categoryBadge: 'بازی تعاملی وب',
    colorAccent: '#66493e'
  },
  {
    id: 'project-wordle',
    title: 'بازی Wordle',
    url: 'https://wordle-kappa-lime.vercel.app/',
    previewImage: '/WORDL.png',
    categoryBadge: 'بازی کلمه‌ای و تعاملی',
    colorAccent: '#42382e'
  },
  {
    id: 'project-gym-landing',
    title: 'لندینگ پیج باشگاه ورزشی',
    url: 'https://single-page-react-evo-gym.vercel.app/',
    previewImage: '/Single_page_gym_landing.png',
    categoryBadge: 'پروژه تمرینی و طراحی رابط',
    colorAccent: '#644a40'
  },
  {
    id: 'project-ganjoor-mini',
    title: 'گنجور مینی',
    url: 'https://ganjoor-mini.vercel.app/',
    previewImage: '/Ganjoor_mini.png',
    categoryBadge: 'مخزن شعر و داده‌های ادبی',
    colorAccent: '#ffdfb5'
  },
  {
    id: 'project-ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    url: 'https://puter-resume-ats-six.vercel.app/',
    previewImage: '/Resumite.png',
    categoryBadge: 'تحلیل رزومه با هوش مصنوعی',
    colorAccent: '#66493e'
  },
  {
    id: 'project-ai-background-remover',
    title: 'AI Background Remover',
    url: 'https://back-ground-remover-cyan.vercel.app/',
    previewImage: '/Background_remover.png',
    categoryBadge: 'ابزار پردازش تصویر با هوش مصنوعی',
    colorAccent: '#42382e'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'AI (Digital Business Skills)',
    issuer: 'HP',
    badgeColor: '#644a40',
    iconName: 'Award',
    summary: ''
  },
  {
    id: 'cert-2',
    title: 'SEO I',
    issuer: 'HubSpot Academy',
    badgeColor: '#ffdfb5',
    iconName: 'ShieldCheck',
    summary: ''
  },
  {
    id: 'cert-3',
    title: 'SEO II',
    issuer: 'HubSpot Academy',
    badgeColor: '#66493e',
    iconName: 'CheckCircle2',
    summary: ''
  },
  {
    id: 'cert-4',
    title: 'Google Analytics 4 (GA4) Certification',
    issuer: 'Google Skillshop',
    badgeColor: '#42382e',
    iconName: 'LineChart',
    summary: ''
  }
];