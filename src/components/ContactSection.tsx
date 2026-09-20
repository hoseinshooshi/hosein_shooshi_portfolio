import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    projectType: 'سئو تکنیکال و Audit',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contactInfo.trim() || !formData.message.trim()) {
      return;
    }
    

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        contactInfo: '',
        projectType: 'سئو تکنیکال و Audit',
        message: ''
      });
    }, 900);
  };

  return (
    <div id="contact-form-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="block rounded-3xl bg-[#644a40] text-white p-6 hover:opacity-95 transition-all shadow-xs"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold opacity-80 uppercase tracking-wider">
                وضعیت: آماده پذیرش پروژه
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-black">ارسال پیام مستقیم در واتساپ</div>
                <div className="text-xs opacity-75 mt-1 font-mono">{PERSONAL_INFO.whatsappUrl}</div>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <Send className="w-5 h-5 hover:rotate-45" />
              </div>
            </div>
          </a>

          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-black text-foreground mb-2">
              ارتباط مستقیم
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              برای مشاوره تخصصی سئو، Audit وب‌سایت یا پیوستن به تیم‌های فنی، می‌توانید از طریق راه‌های زیر با من در ارتباط باشید.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-bold">شماره تماس مستقیم:</span>
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                    {PERSONAL_INFO.displayPhone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-bold">پست الکترونیک:</span>
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-muted/20 border border-border/40">
                <div className="w-10 h-10 rounded-2xl bg-muted text-muted-foreground flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-bold">موقعیت و شیوه همکاری:</span>
                  <span className="text-xs font-semibold text-foreground">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-border/60">
              <div className="grid grid-cols-2 gap-2.5">

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-2xl border border-border bg-card text-xs font-bold text-foreground hover:bg-secondary/40 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>واتس‌اپ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-foreground">
                  ارسال پیام و شرح پروژه
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-secondary/50 border border-border text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-foreground mb-2">
                  پیام شما با موفقیت ثبت شد!
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
                  از تماس شما سپاسگزارم. اطلاعات و درخواست شما با دقت بررسی خواهد شد و به زودی از طریق شماره یا ایمیل با شما تماس خواهم گرفت.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-95 transition-opacity"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" action="https://formsubmit.co/hoseynshushi@gmail.com" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      نام و نام خانوادگی <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="مثال: علیرضا محمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Contact info: Phone or Email */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      شماره تماس یا ایمیل <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-phone-email"
                      type="text"
                      name="email"
                      required
                      placeholder="مثال: 0912... یا email@domain.com"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    نوع خدمت یا موضوع درخواست
                  </label>
                  <select
                    id="contact-project-type"
                    name="subject"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  >
                    <option value="سئو تکنیکال و ممیزی">سئو تکنیکال و ممیزی جامع (SEO Audit)</option>
                    <option value="قرارداد مدیریت سئو ماهانه">قرارداد ماهانه سئو و رشد رتبه گوگل</option>
                    <option value="طراحی و توسعه وب‌سایت">طراحی و توسعه وب‌سایت بهینه و مدرن</option>
                    <option value="تولید محتوا و تاپیک کلاسترینگ">استراتژی محتوا و کلاستر کلمات کلیدی</option>
                    <option value="طراحی گرافیک، بنر و کاتالوگ">طراحی گرافیکی، بنر وب و کاتالوگ</option>
                    <option value="مشاوره یا پیشنهاد همکاری">مشاوره اختصاصی یا پیشنهاد شغلی</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    شرح درخواست یا جزئیات پروژه <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    name="text"
                    rows={4}
                    placeholder="لطفاً آدرس سایت، چالش‌های سئو، نیازمندی‌ها یا اهداف مورد نظر خود را بنویسید..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/60 leading-relaxed"
                  />
                </div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground font-black text-sm sm:text-base hover:opacity-95 shadow-xs transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>در حال ارسال پیام...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ارسال درخواست و دریافت مشاوره</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
