export interface IProProfile {
  href: string;
  logo: string;
  name: string;
  bio: string;
  web?: string;
  tags?: string[]; //1
  desc?: string;
  social?: { //图标直接用className来实现
    github?: string;
    medium?: string;
    telegram?: string;
    youtube?: string;
    reddit?: string;
    twitter?: string;
    facebook?: string;
    pencial?: string;
    slack?: string;
    discord?: string;
  }
}

export type IProjectProfile = Array<IProProfile>;

export interface ITag {
  name: string;
  href?: string;
}