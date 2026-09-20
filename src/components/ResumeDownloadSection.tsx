import React from 'react';
import {
  Download,
  Eye,
  CheckCircle2,
} from 'lucide-react';

interface ResumeDownloadProps {
  onOpenPreview: () => void;
  onDownloadPdf: () => void;
}
 
export const ResumeDownloadSection: React.FC<ResumeDownloadProps> = ({
  onOpenPreview,
  onDownloadPdf
}) => {
  return (
    <div id="resume-download-block" className="mb-14">
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              دریافت رزومه متنی کامل (PDF)
            </h3>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                فرمت استاندارد PDF
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 w-full flex flex-col gap-3">
            <button
              id="download-resume-pdf-btn"
              type="button"
              onClick={onDownloadPdf}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm sm:text-base hover:opacity-95 shadow-sm transition-all hover:translate-y-[-2px] active:translate-y-0"
            >
              <Download className="w-5 h-5" />
              <span>دانلود مستقیم فایل PDF رزومه</span>
            </button>

            <button
              id="preview-resume-modal-btn"
              type="button"
              onClick={onOpenPreview}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-muted/60 border border-border text-foreground text-xs sm:text-sm font-semibold hover:bg-muted transition-colors"
            >
              <Eye className="w-4 h-4 text-primary" />
              <span>پیش‌نمایش آنلاین رزومه در مرورگر</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
