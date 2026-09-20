import React from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  FolderGit2,
  ArrowUp,
  FileText,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const importantLinks = [
    { label: 'خدمات تخصصی سئو', href: '#seo-services' },
    { label: 'مهارت‌ها', href: '#skills' },
    { label: 'درایوهای نمونه‌کار (استوری، بنر، کاتالوگ)', href: '#drives' },
    { label: 'سابقه کاری و گیت‌هاب', href: '#experience' },
    { label: 'وب‌سایت‌ها و ابزارها', href: '#projects' },
    { label: 'کروسل گواهینامه‌ها', href: '#certificates' },
    { label: 'فرم ارتباط', href: '#contact' }
  ];

  return (
    <footer id="main-footer" className="bg-card border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border/80">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                ح
              </div>
              <div>
                <span className="font-extrabold text-lg text-foreground block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-primary font-medium">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              همراه شما در ارتقای رتبه‌های ارگانیک گوگل، بازطراحی ساختار فنی وب و تدوین استراتژی‌های مقیاس‌پذیر دیجیتال.
            </p>
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 max-w-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-secondary-foreground flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  شماره تماس مستقیم:
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-black font-mono text-primary hover:underline"
                >
                  {PERSONAL_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  ایمیل:
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-foreground hover:text-primary transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                aria-label="گیت‌هاب"
                title="گیت‌هاب"
              >
                <div className="w-5 h-5 rounded-2xl bg-foreground text-background flex items-center justify-center font-bold">
                    <img src="github.png" width={16} height={16} alt="" />
                  </div>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                aria-label="واتس‌اپ"
                title="واتس‌اپ"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                aria-label="مشاهده رزومه متنی"
                title="مشاهده رزومه متنی"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="font-bold text-sm sm:text-base text-foreground mb-4 pb-2 border-b border-border/60">
              لینک‌های مهم و دسترسی سریع
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-sm sm:text-base text-foreground mb-4 pb-2 border-b border-border/60">
              دسترسی به درایوها و مدارک
            </h3>

            <a
              href="#drives"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-xs font-bold text-foreground transition-colors w-full justify-center"
            >
              <FolderGit2 className="w-4 h-4 text-primary" />
              <span>مشاهده پوشه‌های گوگل درایو</span>
            </a>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity w-full justify-center"
            >
              <FileText className="w-4 h-4" />
              <span>دانلود یا پیش‌نمایش رزومه (PDF)</span>
            </button>
          </div>

        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            طراحی و پیاده‌سازی شده توسط <strong className="text-foreground">{PERSONAL_INFO.name}</strong>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-secondary/40 text-foreground transition-colors font-semibold"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
