import { Certificates } from "./components/Certificates"
import { ContactSection } from "./components/ContactSection"
import { DrivesSection } from "./components/DrivesSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { HeroSection } from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react"
import { ProjectsPreviewSection } from "./components/ProjectsPreviewSection"
import { SeoServicesSection } from "./components/SEOServices/SEOServices"
import { SkillsSection } from "./components/SkillsSection"
import { downloadResumeAsPdf } from "./utils/downloadResume"
import { Footer } from "./components/Footer"
import { ResumeDownloadSection } from "./components/ResumeDownloadSection"
import { ResumeModal } from "./components/ResumeModal"
// import { ServicesDragCards } from "./components/Services/Services"
function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const handleDownloadPdf = () => {
    downloadResumeAsPdf();
  };
  return ( 
    <div className="app_main_container min-h-screen bg-background text-foreground flex flex-col align-center justify-center font-sans transition-colors duration-300">
      <Navbar />
      <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)}/>
      <SeoServicesSection />
      <SkillsSection />
      <DrivesSection />
      <ExperienceSection />
      <ProjectsPreviewSection />
      <Certificates />
      <section id="contact" className="py-20 bg-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                دریافت رزومه و فرم ارتباط کاری
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                دانلود مستقیم فایل متنی رزومه (PDF) و ارسال پیام جهت مشاوره سئو، ممیزی یا شروع پروژه‌های جدید
              </p>
            </div>
            <ResumeDownloadSection
              onOpenPreview={() => setResumeModalOpen(true)}
              onDownloadPdf={handleDownloadPdf}
            />
            <ContactSection />
          </div>
      </section>
      <Footer  onOpenResumeModal={() => setResumeModalOpen(true)}/> 
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownloadPdf={handleDownloadPdf}
      />
    </div>
  )
}

export default App
