import type { ComponentType } from "react";
import {
  Building2,
  CalendarCheck,
  Contact,
  Globe2,
  Mail,
  Network,
  QrCode,
  Rocket,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Users,
  Zap,
  AppWindow,
} from "lucide-react";

import {
  AppleIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/BrandIcons";

export type IconType = ComponentType<{
  size?: number;
  className?: string;
}>;

export const brand = {
  name: "TactLink",
  tagline: "Smart Directory for Modern Networking",
  headline: "Connect smarter. Network faster. Go paperless.",
  description:
    "TactLink helps professionals, communities, associations, and event organizers build meaningful connections through digital profiles, smart directories, and seamless networking tools.",
  logo: "/logo/logotactlink.png",
};

export const navItems = [
  { label: "Links", href: "#links" },
  { label: "Features", href: "#features" },
  { label: "Socials", href: "#socials" },
  { label: "Audience", href: "#audience" },
];

export const appDownloadLinks = [
  {
    label: "Google Play",
    platform: "Android",
    subLabel: "Get it on",
    href: "https://play.google.com/store/apps/details?id=com.tactlink.app",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    platform: "iOS",
    subLabel: "Download on the",
    href: "https://apps.apple.com/id/app/tactlink/id1469516661?l=id",
    icon: AppleIcon,
  },
];

export const primaryLinks: Array<{
  label: string;
  description: string;
  href: string;
  icon: IconType;
  badge?: string;
}> = [
  {
    label: "Visit Official Website",
    description: "Explore TactLink’s full platform, solutions, and company profile.",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "Official",
  },
  {
    label: "Partner with TactLink",
    description: "For associations, communities, events, and collaboration opportunities.",
    href: "https://www.tactlink.com/contact",
    icon: Building2,
    badge: "Partner",
  },
];

export const secondaryLinks = [
  {
    label: "Contact",
    href: "https://www.tactlink.com/contact",
  },
  {
    label: "About",
    href: "https://www.tactlink.com/about",
  },
  {
    label: "Smart Directory",
    href: "https://www.tactlink.com/",
  },
  {
    label: "Digital Namecard",
    href: "https://www.tactlink.com/digital-namecard",
  },
];

export const socialLinks: Array<{
  label: string;
  region: string;
  href: string;
  icon: IconType;
  featured?: boolean;
}> = [
  {
    label: "LinkedIn",
    region: "Company Page",
    href: "https://www.linkedin.com/company/tactlink",
    icon: LinkedinIcon,
    featured: true,
  },
  {
    label: "Facebook",
    region: "Official Page",
    href: "https://web.facebook.com/TactLink",
    icon: FacebookIcon,
    featured: true,
  },
  {
    label: "Instagram",
    region: "Global",
    href: "https://www.instagram.com/tactlinksmartdirectory/",
    icon: InstagramIcon,
    featured: true,
  },
  {
    label: "Instagram",
    region: "Indonesia",
    href: "https://www.instagram.com/tactlinkindonesia",
    icon: InstagramIcon,
  },
  {
    label: "Instagram",
    region: "Malaysia",
    href: "https://www.instagram.com/tactlinkmalaysia",
    icon: InstagramIcon,
  },
  {
    label: "Instagram",
    region: "Vietnam",
    href: "https://www.instagram.com/tactlinkvietnam",
    icon: InstagramIcon,
  },
  {
    label: "Instagram",
    region: "Bangladesh",
    href: "https://www.instagram.com/tactlinkbangladesh",
    icon: InstagramIcon,
  },
  {
    label: "Instagram",
    region: "Philippines",
    href: "https://www.instagram.com/tactlinkphilippines",
    icon: InstagramIcon,
  },
];

export const features: Array<{
  title: string;
  description: string;
  icon: IconType;
  points: string[];
}> = [
  {
    title: "Digital Namecard",
    description:
      "Replace printed cards with a smarter digital identity that can be shared anywhere.",
    icon: QrCode,
    points: ["QR sharing", "Profile link", "Instant exchange"],
  },
  {
    title: "Smart Directory",
    description:
      "Organize contacts, members, and communities in one searchable digital ecosystem.",
    icon: Network,
    points: ["Searchable members", "Contact management", "Always updated"],
  },
  {
    title: "Event Networking",
    description:
      "Make business events more connected with digital registration and networking flows.",
    icon: CalendarCheck,
    points: ["Event-ready", "Faster check-in", "Digital fishbowl"],
  },
  {
    title: "Association Platform",
    description:
      "Help organizations move beyond static spreadsheets into living member networks.",
    icon: Users,
    points: ["Member directory", "Admin workflow", "Community growth"],
  },
];

export const stats = [
  {
    value: "20+",
    label: "Partner Organizations",
  },
  {
    value: "10K+",
    label: "Connections Made",
  },
  {
    value: "8",
    label: "Countries Reached",
  },
  {
    value: "4",
    label: "UN SDGs Supported",
  },
];

export const audiences: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: "Professionals",
    description: "For people who meet, exchange, and manage new connections every day.",
    icon: Contact,
  },
  {
    title: "Associations",
    description: "For organizations that need a living member directory and modern admin tools.",
    icon: Building2,
  },
  {
    title: "Communities",
    description: "For groups that want to connect members beyond scattered chat groups.",
    icon: Users,
  },
  {
    title: "Event Organizers",
    description: "For networking events, exhibitions, business forums, and conferences.",
    icon: CalendarCheck,
  },
];

export const benefits = [
  {
    title: "Paperless by default",
    icon: ShieldCheck,
  },
  {
    title: "Built for global communities",
    icon: Globe2,
  },
  {
    title: "Fast profile exchange",
    icon: Zap,
  },
  {
    title: "Mobile-first experience",
    icon: Smartphone,
  },
  {
    title: "Professional identity",
    icon: Sparkles,
  },
  {
    title: "Scalable networking",
    icon: Rocket,
  },
  {
    title: "OCR contact capture",
    icon: ScanLine,
  },
  {
    title: "All-in-one hub",
    icon: AppWindow,
  },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};