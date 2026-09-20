import { PERSONAL_INFO, WORK_EXPERIENCES, SKILLS_DATA, CERTIFICATES } from '../data/portfolioData';

export function downloadResumeAsPdf() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('لطفاً باز شدن پنجره‌های پاپ‌آپ را در مرورگر مجاز بگذارید.');
    return;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>رزومه ${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Vazirmatn', Tahoma, sans-serif;
      line-height: 1.6;
      color: #202020;
      background: #ffffff;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 { font-size: 26px; color: #644a40; margin-bottom: 4px; }
    .subtitle { font-size: 15px; color: #582d1d; font-weight: bold; margin-bottom: 12px; }
    .bio { font-size: 13px; color: #555; margin-bottom: 24px; border-bottom: 2px solid #ffdfb5; padding-bottom: 16px; }
    .contact-info { font-size: 12px; margin-bottom: 24px; display: flex; gap: 20px; flex-wrap: wrap; background: #f9f9f9; padding: 12px; border-radius: 8px; }
    h2 { font-size: 18px; color: #644a40; border-bottom: 1px solid #d8d8d8; padding-bottom: 6px; margin-top: 24px; margin-bottom: 12px; }
    .exp-item { margin-bottom: 16px; }
    .exp-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
    .exp-desc { font-size: 12px; color: #444; margin-top: 4px; text-align: justify; }
    .achievements { margin-top: 6px; font-size: 12px; padding-right: 18px; color: #333; }
    .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 12px; }
    .skill-box { background: #f9f9f9; padding: 8px; border-radius: 6px; display: flex; justify-content: space-between; }
    @media print {
      body { padding: 0; }
      @page { margin: 1.5cm; }
    }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="subtitle">${PERSONAL_INFO.title}</div>
  <div class="bio">${PERSONAL_INFO.shortBio}</div>

  <div class="contact-info">
    <div><strong>شماره تماس:</strong> ${PERSONAL_INFO.displayPhone}</div>
    <div><strong>ایمیل:</strong> ${PERSONAL_INFO.email}</div>
    <div><strong>گیت‌هاب:</strong> github.com/${PERSONAL_INFO.githubUsername}</div>
    <div><strong>موقعیت:</strong> ${PERSONAL_INFO.location}</div>
  </div>

  <h2>سوابق کاری</h2>
  ${WORK_EXPERIENCES.map(
    (exp) => `
    <div class="exp-item">
      <div class="exp-header">
        <span>${exp.role} — ${exp.company}</span>
        <span>${exp.period}</span>
      </div>
      <div class="exp-desc">${exp.narrative}</div>
      <ul class="achievements">
        ${exp.achievements.map((a) => `<li>${a}</li>`).join('')}
      </ul>
    </div>
  `
  ).join('')}

  <h2>مهارت‌ها</h2>
  <div class="skills-grid">
    ${SKILLS_DATA.map(
      (s) => `
      <div class="skill-box">
        <span>${s.name}</span>
        <strong>${s.levelPercentage}٪ (${s.levelLabel})</strong>
      </div>
    `
    ).join('')}
  </div>

  <h2>سرتیفیکیت‌ها</h2>
  <div class="skills-grid">
    ${CERTIFICATES.map(
      (c) => `
      <div class="skill-box">
        <span>${c.title} (${c.issuer})</span>
      </div>
    `
    ).join('')}
  </div>

  <script>
    window.onload = function() {
      window.print();
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
