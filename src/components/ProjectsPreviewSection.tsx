import React from 'react';
import {
  ExternalLink,
  ArrowUpLeft
} from 'lucide-react';
import { PROJECT_WEBSITES } from '../data/portfolioData';
import type { ProjectPreview } from '../types';

export const ProjectsPreviewSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
             پروژه‌ها، وب‌سایت‌ها و ابزارهای توسعه‌یافته
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
                پیش‌نمایش وب‌سایت‌ها و پروژه‌های آنلاین طراحی و توسعه‌یافته، همراه با دسترسی مستقیم و لینک مشاهده هر پروژه.            </p>
          </div>

          <div className="text-xs text-muted-foreground self-start md:self-auto bg-muted/60 px-3.5 py-2 rounded-xl border border-border/50">
            <span>تعداد پروژه‌های معرفی شده: </span>
            <strong className="text-foreground">{PROJECT_WEBSITES.length} وب‌سایت فعال</strong>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECT_WEBSITES.map((project: ProjectPreview) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-primary/50 hover:shadow-xs transition-all group"
            >              
              <div className="relative overflow-hidden bg-muted/80 border-b border-border">
                <div className="h-8 bg-muted/90 px-4 flex items-center justify-between border-b border-border/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-mono truncate max-w-[160px]">
                    {project.url.replace('https://', '')}
                  </div>
                  <div className="w-6" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-sm"
                    >
                      <span>مشاهده سایت</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-primary uppercase block mb-1">
                    {project.categoryBadge}
                  </span>
                  <h3 className="font-bold text-base text-foreground truncate group-hover:text-primary transition-colors" title={project.title}>
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-2xl border border-border bg-muted/40 hover:bg-primary hover:text-primary-foreground text-foreground transition-all shrink-0"
                  title="باز کردن وب‌سایت"
                  aria-label={`باز کردن ${project.title}`}
                >
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
