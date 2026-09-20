import React, { useState } from 'react';
import {
  Search,
  Cpu,
  Share2,
  TrendingUp,
  CheckCircle2,
  FileSearch,
  ExternalLink
} from 'lucide-react';
import { SEO_SERVICES } from '../../data/portfolioData';

export const SeoServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'auditSteps'>('services');

  const auditSteps = [
  {
    step: '۱',
    title: 'ممیزی فنی و بررسی معماری وب‌سایت (Technical SEO Audit)',
    desc: 'خزش و بررسی ساختار وب‌سایت با Screaming Frog برای شناسایی لینک‌های شکسته، ریدایرکت‌های زنجیره‌ای، مشکلات متادیتا، وضعیت robots.txt و نقشه سایت.'
  },
  {
    step: '۲',
    title: 'تحلیل داده‌های سرچ کنسول و شناسایی فرصت‌های رشد',
    desc: 'تحلیل کوئری‌ها و صفحات با ایمپرشن بالا و نرخ کلیک پایین، بررسی وضعیت ایندکس و شناسایی تغییرات و فرصت‌های بهبود عملکرد در نتایج جست‌وجو.'
  },
  {
    step: '۳',
    title: 'استراتژی کلاسترینگ و معماری محتوایی (Topic Clusters)',
    desc: 'طراحی صفحات محوری (Pillar Pages) و خوشه‌های محتوایی مرتبط با هدف ایجاد ساختاری منسجم، پوشش موضوعی کامل و تقویت ارتباط میان صفحات.'
  },
  {
    step: '۴',
    title: 'بهینه‌سازی فنی و Core Web Vitals',
    desc: 'بهینه‌سازی فونت‌ها، تصاویر و فایل‌های CSS و JavaScript، بهبود نحوه بارگذاری منابع و رفع عوامل مؤثر بر عملکرد و تجربه کاربری.'
  },
  {
    step: '۵',
    title: 'لینک‌سازی اصولی و تحلیل رقبا (Off-Page SEO)',
    desc: 'تحلیل پروفایل بک‌لینک رقبا، شناسایی فرصت‌های لینک‌سازی مرتبط، اجرای رپورتاژهای هدفمند و پایش کیفیت و اعتبار لینک‌های ورودی.'
  }
];

  return (
    <section id="seo-services" className="py-20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
             خدمات تخصصی سئو (SEO) و بهینه‌سازی فنی وب‌سایت
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
                سئو فراتر از تولید محتوا و لینک‌سازی است؛ ترکیبی از دانش فنی وب، تحلیل داده و استراتژی هدفمند برای ایجاد رشد پایدار و بهبود جایگاه وب‌سایت در نتایج جست‌وجوی گوگل.
            </p>
          </div>
          <div className="inline-flex p-1 rounded-xl bg-card border border-border self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'services'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              حوزه‌های خدمات سئو
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('auditSteps')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'auditSteps'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              مراحل گام‌به‌گام ممیزی (Audit)
            </button>
          </div>
        </div>
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SEO_SERVICES.map((service, index) => {
              const iconMap: Record<string, React.ElementType> = {
                Cpu,
                Search,
                Share2,
                TrendingUp
              };
              const Icon = iconMap[service.iconName] || Search;

              return (
                <div
                  key={service.id + index.toString()}
                  id={`seo-card-${service.id}`}
                  className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-xs group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-foreground mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                    <div className="space-y-2.5 pt-4 border-t border-border/60">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {activeTab === 'auditSteps' && (
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center">
                <FileSearch className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                 فرایند ۵ مرحله‌ای ممیزی و تحلیل عوامل مؤثر بر افت رتبه وب‌سایت
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  هر پروژه سئو با تحلیل دقیق، ترسیم مسیر اجرایی و مستندسازی کامل آغاز می‌شود.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {auditSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl bg-muted/40 border border-border/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="p-6 rounded-2xl bg-secondary text-secondary-foreground border border-border/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-secondary-foreground text-secondary font-bold text-sm flex items-center justify-center mb-4">
                    ✓
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-secondary-foreground mb-2">
                    تحویل گزارش کامل ممیزی سئو
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary-foreground/80 leading-relaxed">
                    ارائه گزارش جامع از خطاهای فنی، مشکلات ساختاری و موانع ایندکس وب‌سایت، به‌همراه نقشه راه اجرایی و اولویت‌بندی اقدامات بر اساس میزان تأثیرگذاری بر عملکرد و رتبه سایت.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  تماس با من
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
