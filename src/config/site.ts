export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Army Escape Wiki",
  shortName: "Army Escape",
  logoText: "AE",
  tagline: "Guide, Gameplay & Updates",
  description: "Explore the Army Escape Wiki for gameplay tips, escape strategies, enemy information, updates, weapons, and everything you need to survive dangerous missions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://armyescape.top",
  supportEmail: "support@armyescape.top",
  gameUrl: "https://apps.apple.com/au/app/army-escape/id6756966480",
  heroVideoId: "",
  social: {},
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
