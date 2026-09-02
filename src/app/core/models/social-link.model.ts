export type SocialPlatform = 'email' | 'github' | 'linkedin';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: string;
  url: string;
}