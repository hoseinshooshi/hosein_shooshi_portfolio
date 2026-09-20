import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  Smartphone,
  Image as ImageIcon,
  BookOpen,
  Layers,
  Palette,
  Cloud,
  FolderOpen
} from 'lucide-react';
import { DRIVE_CATEGORIES } from '../data/portfolioData';
import type { DriveCategory } from '../types';

export const DrivesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const handleCopyLink = (item: DriveCategory) => {
    navigator.clipboard.writeText(item.folderUrl);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };


  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Image':
        return ImageIcon;
      case 'BookOpen':
        return BookOpen;
      case 'Layers':
        return Layers;
      case 'Palette':
        return Palette;
      default:
        return FolderOpen;
    }
  };

  return (
    <section id="drives" className="py-20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold mb-3 border border-border/50">
              <Cloud className="w-3.5 h-3.5" />
              <span>آرشیو نمونه‌کارها در Google Drive</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
              مجموعه فایل‌های گرافیکی شامل استوری‌های اینستاگرام، بنرهای تبلیغاتی، کاتالوگ‌ها و فلایرها در فولدرهای تفکیک‌شده Google Drive سازمان‌دهی شده‌اند و برای مشاهده و دانلود مستقیم در دسترس هستند.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DRIVE_CATEGORIES.map((drive: DriveCategory) => {
            const Icon = getIcon(drive.iconName);
            const isCopied = copiedId === drive.id;

            return (
              <div
                key={drive.id}
                id={`drive-card-${drive.id}`}
                className="rounded-3xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-primary/50 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-xl bg-muted text-muted-foreground uppercase">
                      {drive.fileCountText}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                    {drive.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {drive.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {drive.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-xl bg-secondary/60 text-secondary-foreground font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-border/60 flex items-center gap-2">
                  <a
                    href={drive.folderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-95 transition-opacity"
                  >
                    <span>مشاهده در گوگل درایو</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyLink(drive)}
                    className="p-2.5 rounded-2xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors"
                    title="کپی لینک پوشه"
                    aria-label="کپی لینک پوشه درایو"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
