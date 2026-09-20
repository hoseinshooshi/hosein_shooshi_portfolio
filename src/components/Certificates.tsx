import React from 'react';
import {
  Award,
} from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export const Certificates: React.FC = () => {


  return (
    <section id="certificates" className="py-20 bg-background/50 border-b border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground text-xs font-bold mb-3 border border-border/50">
              <Award className="w-14 h-14" />
              <h2 className='text-2xl'>گواهینامه‌ها و مدارک تخصصی</h2>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="p-3.5 rounded-2xl border transition-allflex items-center justify-between hover:bg-secondary hover:text-secondary-foreground hover:border-primary/40 hover:shadow-xs'
                    bg-card border-border/60 text-muted-foreground hover:bg-muted/40"
              >
                <div className="flex flex-col items-start gap-2.5">
                  <span className="text-secondary-foreground"><Award className='w-7 h-7 '/></span>
                  <span className="text-md font-bold font-mono text-foreground truncate max-w-full">
                    {cert.title}
                  </span>
                  <span>
                    issued by:{cert.issuer}
                  </span>
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
