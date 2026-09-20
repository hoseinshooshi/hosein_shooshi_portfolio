import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillItem } from '../types';
type SkillCategory =
  | 'all'
  | 'languages'
  | 'software'
  | 'programming'
  | 'professional';
export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const categories:{
    key: SkillCategory;
    label: string;
    count: number;
  }[] = [
  {
    key: 'all',
    label: 'همه مهارت‌ها',
    count: SKILLS_DATA.length
  },
  {
    key: 'languages',
    label: 'زبان‌های خارجی',
    count: SKILLS_DATA.filter((s) => s.category === 'languages').length
  },
  {
    key: 'software',
    label: 'ابزارها و نرم‌افزارهای تخصصی',
    count: SKILLS_DATA.filter((s) => s.category === 'software').length
  },
  {
    key: 'programming',
    label: 'برنامه‌نویسی و توسعه وب',
    count: SKILLS_DATA.filter((s) => s.category === 'programming').length
  },
  {
    key: 'professional',
    label: 'مهارت‌های تخصصی',
    count: SKILLS_DATA.filter((s) => s.category === 'professional').length
  }
];

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

const getCategoryTitle = (cat: 'languages' | 'software' | 'programming' | 'professional') => {
  switch (cat) {
    case 'languages':
      return 'زبان‌های خارجی';

    case 'software':
      return 'نرم‌افزارها و ابزارهای تخصصی';

    case 'programming':
      return 'برنامه‌نویسی و توسعه وب';
  }
};

  return (
    <section id="skills" className="py-20 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
           توانمندی‌ها و تخصص‌های فنی
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  selectedCategory === cat.key
                    ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                    : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-secondary/30'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`mr-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                  selectedCategory === cat.key ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill: SkillItem) => {
            return (
              <div
                key={skill.id}
                id={`skill-box-${skill.id}`}
                className="rounded-3xl border border-border bg-card p-5 sm:p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-muted text-muted-foreground uppercase">
                      {getCategoryTitle(skill.category)}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-primary font-mono skill-per">
                      <span className='tooltip'>{skill.levelPercentage}٪</span>
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground tracking-tight mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {skill.levelLabel}
                  </p>
                </div>
                <div>
                  <div className="h-2 w-full bg-muted/70 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out bg-primary"
                      style={{
                        width: `${skill.levelPercentage}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground/80 mt-2 font-medium">
                    <span>مقدماتی</span>
                    <span>متوسط</span>
                    <span>پیشرفته</span>
                    <span className="font-bold text-foreground/80">تخصصی</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
