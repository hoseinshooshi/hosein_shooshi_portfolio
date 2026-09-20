import React from 'react';
import {
  GitBranch,
  Star,
  ExternalLink,
  Terminal,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { WORK_EXPERIENCES, GITHUB_FEATURED_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-background/50 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            سابقه کاری و فعالیت‌های گیت‌هاب
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <h3 className="font-black text-lg text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                سوابق شغلی و تجربیات
              </h3>
              <span className="text-xs font-mono text-muted-foreground">{PERSONAL_INFO.experienceYears}</span>
            </div>
            <div className="relative pr-4 sm:pr-5 border-r-2 border-primary space-y-5">
              {WORK_EXPERIENCES.map((exp) => (
                <article
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/50 transition-colors relative"
                >
                  <span className="absolute -right-[23px] sm:-right-[27px] top-8 w-3 h-3 rounded-full bg-primary border-2 border-card" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-black text-base sm:text-lg text-foreground">
                        {exp.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-primary font-bold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-secondary text-secondary-foreground text-xs font-bold">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 text-justify">
                    {exp.narrative}
                  </p>
                  <div className="p-4 rounded-2xl bg-muted/40 border border-border/50 mb-5 space-y-2">
                    <span className="text-xs font-bold text-foreground block mb-2">دستاوردهای کلیدی:</span>
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-secondary/50 text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <div
              id="github-spotlight-card"
              className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center font-bold">
                    <img src="github.png" width={24} height={24} alt="" />
                  </div>
                  <div>
                    <h3 className="font-black text-base text-foreground">
                     پروفایل در گیت‌هاب
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground">@{PERSONAL_INFO.githubUsername}</p>
                  </div>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-between p-3.5 rounded-2xl bg-[#ffdfb5] text-[#582d1d] font-bold text-xs sm:text-sm hover:opacity-95 transition-opacity mb-6"
              >
                <div className="flex items-center gap-2">
                  <span>مشاهده پروفایل در GitHub</span>
                </div>
                <div className="w-6 h-6 bg-[#644a40] rounded-full flex items-center justify-center text-white text-xs">
                  ←
                </div>
              </a>
              <div className="space-y-3 pt-4 border-t border-border/60">
                <span className="text-xs font-bold text-muted-foreground block">
                  مخازن برگزیده و ابزارهای سئو:
                </span>

                {GITHUB_FEATURED_REPOS.map((repo, rIdx) => (
                  <a
                    key={rIdx}
                    href={`${PERSONAL_INFO.githubUrl}/${repo.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-3.5 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/50 hover:bg-secondary/20 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-primary group-hover:underline">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{repo.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitBranch className="w-3 h-3" />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      {repo.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-card text-foreground">
                        {repo.language}
                      </span>
                      <span className="text-[10px] text-primary flex items-center gap-1 font-bold group-hover:translate-x-[-2px] transition-transform">
                        مشاهده ریپو
                        <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
