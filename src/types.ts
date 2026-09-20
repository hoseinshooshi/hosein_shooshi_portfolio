export interface SkillItem {
  id: string;
  name: string;
  levelPercentage: number;
  levelLabel: string;
  category: 'languages' | 'software' | 'programming' | 'professional';
  iconName: string;
  color?: string;
}

export interface DriveCategory {
  id: string;
  title: string;
  description: string;
  folderUrl: string;
  fileCountText: string;
  tags: string[];
  coverGradient: string;
  iconName: string;
}

export interface WorkExperience {
  id: string;
  period: string;
  role: string;
  company: string;
  narrative: string;
  achievements: string[];
  skills: string[];
}

export interface ProjectPreview {
  id: string;
  title: string;
  url: string;
  previewImage: string;
  categoryBadge: string;
  colorAccent: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  badgeColor: string;
  iconName: string;
  summary: string;
}

export interface SeoServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  iconName: string;
  metricLabel: string;
}
