import React from 'react';
import {
  X,
  Download,
  Mail,
  Phone,
  Briefcase,
  Award,
  Code2,
  Search,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCES,
  SKILLS_DATA,
  CERTIFICATES
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadPdf: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onDownloadPdf
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] bg-card rounded-3xl border border-border shadow-2xl flex flex-col overflow-hidden my-auto animate-in fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between bg-muted/40">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base text-foreground">
              پیش‌نمایش رزومه متنی
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-semibold">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>دانلود PDF</span>
            </button>
            <a href="/files/hoseinshooshi.pdf" download="Hoseyn-Shoushi-Resume.pdf">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-foreground text-primary text-xs font-bold hover:opacity-90"
              >
                <Download className="w-3.5 h-3.5" />
                <span>دانلود رزومه جاب‌ویژن</span>
              </button>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
              aria-label="بستن پنجره"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-right font-sans">
          <div className="pb-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-primary mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-muted-foreground mt-2 max-w-xl leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            <div className="text-xs space-y-1.5 text-muted-foreground bg-muted/40 p-4 rounded-2xl border border-border/50 shrink-0">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono">{PERSONAL_INFO.displayPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono">github.com/{PERSONAL_INFO.githubUsername}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2 pb-2 border-b border-border/60">
              <Briefcase className="w-4 h-4 text-primary" />
              سوابق کاری
            </h2>

            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-bold text-sm sm:text-base text-foreground">
                      {exp.role} — <span className="text-primary">{exp.company}</span>
                    </h3>
                    <span className="text-xs text-muted-foreground font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
                    {exp.narrative}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-foreground/90 pr-2">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2 pb-2 border-b border-border/60">
              <Search className="w-4 h-4 text-primary" />
              مهارت‌ها
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_DATA.map((skill) => (
                <div
                  key={skill.id}
                  className="p-3 rounded-xl bg-muted/30 border border-border/40 flex items-center justify-between"
                >
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.levelPercentage}٪</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2 pb-2 border-b border-border/60">
              <Award className="w-4 h-4 text-primary" />
               سرتیفیکیت‌ها
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-muted/40 border border-border/50">
                  <span className="font-bold text-foreground block">{cert.title}</span>
                  <span className="text-muted-foreground block text-[11px] mt-0.5">
                    Issued By: {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="p-4 border-t border-border bg-muted/30 flex items-center justify-between">
          <button
            type="button"
            onClick={onDownloadPdf}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90"
          >
            <Download className="w-3.5 h-3.5" />
            <span>دانلود نسخه رسمی PDF</span>
          </button>
          <a href="/files/hoseinshooshi.pdf" download="Hoseyn-Shoushi-Resume.pdf">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-foreground text-primary text-xs font-bold hover:opacity-90"
            >
              <Download className="w-3.5 h-3.5" />
              <span>دانلود رزومه جاب‌ویژن</span>
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};
