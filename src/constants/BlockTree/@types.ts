export interface IProjectProfile {
  logo: string;
  name: string;
  bio: string;
  href: string;
  web?: string;
  tags?: string[];
  desc?: string;
  social?: {
    medium?: string;
    telegram?: string;
    youtube?: string;
    reddit?: string;
    twitter?: string;
    facebook?: string;
    pencial?: string;
    slack?: string;
    github?: string;
    discord?: string;
  }
}

export interface ITag {
  name: string;
  href?: string;
}