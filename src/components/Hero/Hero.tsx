import React from 'react';
import {
  Download,
  ArrowDown,
} from 'lucide-react';


interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {


  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          
          <div
            id="hero-primary-bento"
            className="md:col-span-7 lg:col-span-8 bg-[#644a40] text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-4 left-6 opacity-10 text-8xl sm:text-9xl font-black select-none pointer-events-none">
              SEO
            </div>
            <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>همکاری در طراحی، توسعه و بهینه‌سازی سئو وب‌سایت شما</span>
              </div>
            </div>

            <div className="relative z-10 mb-8 max-w-xl">
              <h1
                id="hero-main-heading"
                className="text-3xl sm:text-5xl font-black leading-tight mb-4 tracking-tight"
              >
                رشد ارگانیک،
                <br />
                <span className="text-[#ffdfb5]">طراحی رابط و تجربه کاربری (UI/UX) و توسعه وب‌سایت</span>
              </h1>
              <p
                id="hero-subtitle"
                className="text-sm sm:text-base text-white/85 leading-relaxed"
              >
              بهینه‌سازی سئو On-Page و Off-Page، همراه با پایش، تحلیل و ارائه گزارش‌های دوره‌ای
              </p>
            </div>

            {/* Dual CTAs & Trust Points */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-white/15">
              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#ffdfb5] text-[#582d1d] font-bold text-xs sm:text-sm hover:opacity-95 shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>درخواست مشاوره سئو</span>
                <ArrowDown className="w-4 h-4 rotate-[-45deg]" />
              </a>

              <button
                id="hero-cta-resume"
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-[#ffdfb5]" />
                <span>دانلود رزومه متنی (PDF)</span>
              </button>
            </div>
          </div>
          <div
            id="hero-secondary-bento"
            className="md:col-span-5 lg:col-span-4 bg-secondary text-secondary-foreground rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-border/40 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black tracking-wider uppercase opacity-70">
                  خدمات اختصاصی سئو
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-secondary-foreground leading-snug mb-3">
               ممیزی فنی، تحقیق و تحلیل کلمات کلیدی
              </h2>
              <p className="text-xs sm:text-sm opacity-85 leading-relaxed mb-6">
               تکیه بر روش‌های داده‌محور با تضمین افزایش رتبه شما در گوگل
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-xs border border-border/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] opacity-70 block">تخصص کانونی:</span>
                <strong className="text-xs font-bold text-foreground">Technical & On-Page SEO</strong>
              </div>
              <a
                href="#seo-services"
                className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold hover:scale-105 transition-transform"
                title="مشاهده خدمات سئو"
              >
                ←
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
