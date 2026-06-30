import type { ComponentType } from "react";
import {
  Building2, CalendarCheck, Contact, Globe2, Mail, Network, QrCode, Rocket,
  ScanLine, ShieldCheck, Sparkles, Smartphone, Users, Zap, AppWindow,
} from "lucide-react";
import {
  AppleIcon, FacebookIcon, GooglePlayIcon, InstagramIcon, LinkedinIcon,
} from "@/components/BrandIcons";

export type IconType = ComponentType<{
  size?: number;
  className?: string;
}>;

export const brand = {
  name: "TactLink",
  tagline: "Smart Directory para sa Modernong Networking",
  headline: "Kumonekta nang mas matalino. Mag-network nang mas mabilis. Walang papel.",
  description: "Tinutulungan ng TactLink ang mga propesyonal, komunidad, asosasyon, at mga tagapag-organisa ng event na bumuo ng makabuluhang koneksyon sa pamamagitan ng mga digital na profile, smart directories, at walang putol na networking tools.",
  logo: "/logo/logotactlink.png",
};

export const navItems = [
  { label: "Mga Link", href: "#links" },
  { label: "Mga Tampok", href: "#features" },
  { label: "Sosyal", href: "#socials" },
  { label: "Madla", href: "#audience" },
];

export const appDownloadLinks = [
  {
    label: "Google Play",
    platform: "Android",
    subLabel: "Kunin sa",
    href: "https://play.google.com/store/apps/details?id=com.tactlink.app",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    platform: "iOS",
    subLabel: "I-download sa",
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
    label: "Bisitahin ang Opisyal na Website",
    description: "Tuklasin ang buong platform, mga solusyon, at profile ng kumpanya ng TactLink.",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "Opisyal",
  },
  {
    label: "Makipag-partner sa TactLink",
    description: "Para sa mga asosasyon, komunidad, kaganapan, at pagkakataon sa pakikipagtulungan.",
    href: "https://www.tactlink.com/contact",
    icon: Building2,
    badge: "Partner",
  },
];

export const secondaryLinks = [
  { label: "Makipag-ugnayan", href: "https://www.tactlink.com/contact" },
  { label: "Tungkol", href: "https://www.tactlink.com/about" },
  { label: "Smart Directory", href: "https://www.tactlink.com/" },
  { label: "Digital Namecard", href: "https://www.tactlink.com/digital-namecard" },
];

export const socialLinks = [
  { label: "LinkedIn", region: "Pahina ng Kumpanya", href: "https://www.linkedin.com/company/tactlink", icon: LinkedinIcon, featured: true },
  { label: "Facebook", region: "Opisyal na Pahina", href: "https://web.facebook.com/TactLink", icon: FacebookIcon, featured: true },
  { label: "Instagram", region: "Pandaigdigan", href: "https://www.instagram.com/tactlinksmartdirectory/", icon: InstagramIcon, featured: true },
  { label: "Instagram", region: "Indonesia", href: "https://www.instagram.com/tactlinkindonesia", icon: InstagramIcon },
  { label: "Instagram", region: "Malaysia", href: "https://www.instagram.com/tactlinkmalaysia", icon: InstagramIcon },
  { label: "Instagram", region: "Vietnam", href: "https://www.instagram.com/tactlinkvietnam", icon: InstagramIcon },
  { label: "Instagram", region: "Bangladesh", href: "https://www.instagram.com/tactlinkbangladesh", icon: InstagramIcon },
  { label: "Instagram", region: "Philippines", href: "https://www.instagram.com/tactlinkphilippines", icon: InstagramIcon },
];

export const features = [
  {
    title: "Digital Namecard",
    description: "Palitan ang mga naka-print na card ng mas matalinong digital na pagkakakilanlan na maaaring ibahagi kahit saan.",
    icon: QrCode,
    points: ["QR sharing", "Link ng profile", "Mabilisang palitan"],
  },
  {
    title: "Smart Directory",
    description: "Ayusin ang mga contact, miyembro, at komunidad sa iisang mahahanap na digital ecosystem.",
    icon: Network,
    points: ["Mga nahahanap na miyembro", "Pamamahala ng contact", "Laging updated"],
  },
  {
    title: "Event Networking",
    description: "Gawing mas konektado ang mga event sa negosyo gamit ang digital registration at networking flows.",
    icon: CalendarCheck,
    points: ["Handa para sa event", "Mas mabilis na check-in", "Digital fishbowl"],
  },
  {
    title: "Platform ng Asosasyon",
    description: "Tulungan ang mga organisasyon na lumipat mula sa static na spreadsheets tungo sa buhay na member networks.",
    icon: Users,
    points: ["Direktoryo ng miyembro", "Daloy ng admin", "Paglago ng komunidad"],
  },
];

export const stats = [
  { value: "20+", label: "Mga Kasosyong Organisasyon" },
  { value: "10K+", label: "Mga Koneksyong Nagawa" },
  { value: "8", label: "Mga Bansa Naabot" },
  { value: "4", label: "Sinusuportahan ang UN SDGs" },
];

export const audiences = [
  { title: "Mga Propesyonal", description: "Para sa mga taong nagkikita, nagpapalitan, at namamahala ng mga bagong koneksyon araw-araw.", icon: Contact },
  { title: "Mga Asosasyon", description: "Para sa mga organisasyong nangangailangan ng buhay na direktoryo ng miyembro at modernong admin tools.", icon: Building2 },
  { title: "Mga Komunidad", description: "Para sa mga grupong nais ikonekta ang mga miyembro lagpas sa nakakalat na chat groups.", icon: Users },
  { title: "Mga Tagapag-organisa ng Event", description: "Para sa networking events, exhibitions, business forums, at conferences.", icon: CalendarCheck },
];

export const benefits = [
  { title: "Walang papel by default", icon: ShieldCheck },
  { title: "Binuo para sa global na komunidad", icon: Globe2 },
  { title: "Mabilis na palitan ng profile", icon: Zap },
  { title: "Karanasang mobile-first", icon: Smartphone },
  { title: "Propesyonal na pagkakakilanlan", icon: Sparkles },
  { title: "Scalable na networking", icon: Rocket },
  { title: "Pagkuha ng contact gamit ang OCR", icon: ScanLine },
  { title: "All-in-one hub", icon: AppWindow },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};

export const ui = {
  downloadApp: "I-download ang App",
  exploreFeatures: "Tuklasin ang Mga Tampok",
  quickLinks: "Mabilis na Mga Link",
  coreFeatures: "Mga Pangunahing Tampok",
  whyChoose: "Bakit Piliin ang TactLink",
  connectRegion: "Kumonekta sa iyong rehiyon",
  whoUses: "Sino ang gumagamit ng TactLink?",
  trustedBy: "Pinagkakatiwalaan ng mga lumalagong organisasyon",
  readyToStart: "Handa na para sa mas matalinong networking?",
  readyDesc: "Sumali sa libu-libong propesyonal na gumagamit na ng TactLink upang bumuo ng makabuluhang koneksyon.",
  allRightsReserved: "Lahat ng karapatan ay nakalaan.",
  heroChecklist: ["Walang papel", "Mas mabilis na palitan", "Palaguin ang komunidad"],
  heroFeatures: [
    { title: "QR", desc: "Agad na ibahagi" },
    { title: "Profile", desc: "Digital na pagkakakilanlan" },
    { title: "Mga Contact", desc: "Matalinong pag-save" },
  ],
  trustBadge: "GLOBAL NA KILUSAN",
  trustTitle: "Idinisenyo para sa moderno at walang papel na networking.",
  trustDesc: "Mula sa mga propesyonal na komunidad hanggang sa mga cross-border event, tinutulungan ng TactLink ang mga organisasyon na gawing aktibong digital network ang mga static na listahan.",
  ctaTitle: "Gawing makabuluhang network ang bawat pagkikita.",
  becomePartner: "Maging Partner",
  emailTactlink: "I-email ang TactLink",
  quickLinksTitle: "Lahat tungkol sa TactLink, isang tap na lang.",
  quickLinksDesc: "Isang premium social gateway para sa mga download, partnership, impormasyon ng produkto, at opisyal na TactLink channels.",
  downloadAppTitle: "I-download ang TactLink App",
  downloadAppHeadline: "Simulan ang pagbuo ng mas matalinong koneksyon ngayon.",
  downloadAppDesc: "Gumawa ng iyong digital profile, ibahagi ang iyong smart directory, at kumonekta nang mas mabilis sa pamamagitan ng opisyal na TactLink app.",
  openLink: "Buksan ang Link",
  start: "Simulan",
  smartDirectory: "Smart Directory",
  featuresTitle: "Binuo para sa mga taong nag-network, namamahala ng mga komunidad, at nagpapatakbo ng mga event.",
  featuresDesc: "Mula sa personal na digital na pagkakakilanlan hanggang sa networking sa scale ng asosasyon, ginagawang mas madali ng TactLink na lumikha, mamahala, at palaguin ang mga koneksyon.",
  audienceTitle: "Isang platform para sa bawat connection-driven ecosystem.",
  audienceDesc: "Ang TactLink ay binuo para sa mga tao at organisasyon na nangangailangan ng mas mabilis na koneksyon, mas malinis na contact management, at mas malakas na community engagement.",
  socialTitle: "Sundan ang TactLink sa mga global na komunidad.",
  socialDesc: "Manatiling updated sa mga kwento ng produkto, mga event, mga highlight ng komunidad, at mga rehiyonal na aktibidad ng TactLink.",
  footerDesc: "Isipin muli ang networking gamit ang Smart Directory. Baguhin ang propesyonal na networking, mag-go paperless, isulong ang kolaborasyon, at palaguin ang iyong komunidad.",
  footerSlogan: "Binuo para sa mas matalino at walang papel na networking.",

};
