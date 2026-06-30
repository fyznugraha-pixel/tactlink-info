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
  tagline: "আধুনিক নেটওয়ার্কিংয়ের জন্য স্মার্ট ডিরেক্টরি",
  headline: "স্মার্টলি সংযুক্ত হন। দ্রুত নেটওয়ার্ক করুন। কাগজবিহীন হন।",
  description: "TactLink পেশাদার, সম্প্রদায়, সমিতি এবং ইভেন্ট আয়োজকদের ডিজিটাল প্রোফাইল, স্মার্ট ডিরেক্টরি এবং নির্বিঘ্ন নেটওয়ার্কিং টুলের মাধ্যমে অর্থবহ সংযোগ গড়ে তুলতে সাহায্য করে।",
  logo: "/logo/logotactlink.png",
};

export const navItems = [
  { label: "লিঙ্কসমূহ", href: "#links" },
  { label: "বৈশিষ্ট্য", href: "#features" },
  { label: "সামাজিক", href: "#socials" },
  { label: "দর্শক", href: "#audience" },
];

export const appDownloadLinks = [
  {
    label: "Google Play",
    platform: "Android",
    subLabel: "এখানে পান",
    href: "https://play.google.com/store/apps/details?id=com.tactlink.app",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    platform: "iOS",
    subLabel: "ডাউনলোড করুন",
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
    label: "অফিসিয়াল ওয়েবসাইট ভিজিট করুন",
    description: "TactLink-এর পূর্ণ প্ল্যাটফর্ম, সমাধান এবং কোম্পানির প্রোফাইল অন্বেষণ করুন।",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "অফিসিয়াল",
  },
  {
    label: "TactLink এর সাথে অংশীদার হন",
    description: "সমিতি, সম্প্রদায়, ইভেন্ট এবং সহযোগিতার সুযোগের জন্য।",
    href: "https://www.tactlink.com/contact",
    icon: Building2,
    badge: "অংশীদার",
  },
];

export const secondaryLinks = [
  { label: "যোগাযোগ", href: "https://www.tactlink.com/contact" },
  { label: "সম্পর্কে", href: "https://www.tactlink.com/about" },
  { label: "স্মার্ট ডিরেক্টরি", href: "https://www.tactlink.com/" },
  { label: "ডিজিটাল নেমকার্ড", href: "https://www.tactlink.com/digital-namecard" },
];

export const socialLinks = [
  { label: "LinkedIn", region: "কোম্পানি পেজ", href: "https://www.linkedin.com/company/tactlink", icon: LinkedinIcon, featured: true },
  { label: "Facebook", region: "অফিসিয়াল পেজ", href: "https://web.facebook.com/TactLink", icon: FacebookIcon, featured: true },
  { label: "Instagram", region: "গ্লোবাল", href: "https://www.instagram.com/tactlinksmartdirectory/", icon: InstagramIcon, featured: true },
  { label: "Instagram", region: "Indonesia", href: "https://www.instagram.com/tactlinkindonesia", icon: InstagramIcon },
  { label: "Instagram", region: "Malaysia", href: "https://www.instagram.com/tactlinkmalaysia", icon: InstagramIcon },
  { label: "Instagram", region: "Vietnam", href: "https://www.instagram.com/tactlinkvietnam", icon: InstagramIcon },
  { label: "Instagram", region: "Bangladesh", href: "https://www.instagram.com/tactlinkbangladesh", icon: InstagramIcon },
  { label: "Instagram", region: "Philippines", href: "https://www.instagram.com/tactlinkphilippines", icon: InstagramIcon },
];

export const features = [
  {
    title: "ডিজিটাল নেমকার্ড",
    description: "মুদ্রিত কার্ডের পরিবর্তে একটি স্মার্ট ডিজিটাল পরিচিতি ব্যবহার করুন যা যেকোনো জায়গায় শেয়ার করা যায়।",
    icon: QrCode,
    points: ["QR শেয়ারিং", "প্রোফাইল লিঙ্ক", "তাত্ক্ষণিক বিনিময়"],
  },
  {
    title: "স্মার্ট ডিরেক্টরি",
    description: "যোগাযোগ, সদস্য এবং সম্প্রদায়গুলোকে একটি সন্ধানযোগ্য ডিজিটাল ইকোসিস্টেমে সংগঠিত করুন।",
    icon: Network,
    points: ["সন্ধানযোগ্য সদস্য", "যোগাযোগ ব্যবস্থাপনা", "সর্বদা আপডেট"],
  },
  {
    title: "ইভেন্ট নেটওয়ার্কিং",
    description: "ডিজিটাল নিবন্ধন এবং নেটওয়ার্কিং প্রবাহের মাধ্যমে ব্যবসায়িক ইভেন্টগুলোকে আরও সংযুক্ত করুন।",
    icon: CalendarCheck,
    points: ["ইভেন্ট-প্রস্তুত", "দ্রুত চেক-ইন", "ডিজিটাল ফিশবোল"],
  },
  {
    title: "অ্যাসোসিয়েশন প্ল্যাটফর্ম",
    description: "স্থির স্প্রেডশীট ছাড়িয়ে জীবন্ত সদস্য নেটওয়ার্কের দিকে এগিয়ে যেতে সংস্থাগুলোকে সাহায্য করুন।",
    icon: Users,
    points: ["সদস্য ডিরেক্টরি", "অ্যাডমিন ওয়ার্কফ্লো", "কমিউনিটি গ্রোথ"],
  },
];

export const stats = [
  { value: "20+", label: "পার্টনার সংস্থা" },
  { value: "10K+", label: "তৈরি করা সংযোগ" },
  { value: "8", label: "দেশগুলোতে পৌঁছেছে" },
  { value: "4", label: "ইউএন এসডিজি সমর্থিত" },
];

export const audiences = [
  { title: "পেশাদার", description: "যাঁরা প্রতিদিন নতুন সংযোগের সাথে দেখা করেন, বিনিময় করেন এবং পরিচালনা করেন তাঁদের জন্য।", icon: Contact },
  { title: "সমিতি", description: "যেই সংস্থাগুলোর জীবন্ত সদস্য ডিরেক্টরি এবং আধুনিক অ্যাডমিন টুলের প্রয়োজন তাদের জন্য।", icon: Building2 },
  { title: "সম্প্রদায়", description: "যেই গোষ্ঠীগুলো বিক্ষিপ্ত চ্যাট গ্রুপের বাইরে সদস্যদের সংযুক্ত করতে চায় তাদের জন্য।", icon: Users },
  { title: "ইভেন্ট আয়োজক", description: "নেটওয়ার্কিং ইভেন্ট, প্রদর্শনী, বিজনেস ফোরাম এবং কনফারেন্সের জন্য।", icon: CalendarCheck },
];

export const benefits = [
  { title: "কাগজবিহীন বাই ডিফল্ট", icon: ShieldCheck },
  { title: "গ্লোবাল সম্প্রদায়ের জন্য নির্মিত", icon: Globe2 },
  { title: "দ্রুত প্রোফাইল বিনিময়", icon: Zap },
  { title: "মোবাইল-প্রথম অভিজ্ঞতা", icon: Smartphone },
  { title: "পেশাদার পরিচয়", icon: Sparkles },
  { title: "স্কেলেবল নেটওয়ার্কিং", icon: Rocket },
  { title: "OCR যোগাযোগ ক্যাপচার", icon: ScanLine },
  { title: "অল-ইন-ওয়ান হাব", icon: AppWindow },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};

export const ui = {
  downloadApp: "অ্যাপ ডাউনলোড করুন",
  exploreFeatures: "বৈশিষ্ট্য অন্বেষণ করুন",
  quickLinks: "কুইক লিঙ্ক",
  coreFeatures: "মূল বৈশিষ্ট্য",
  whyChoose: "কেন TactLink বেছে নেবেন",
  connectRegion: "আপনার অঞ্চলের সাথে সংযুক্ত হন",
  whoUses: "কে TactLink ব্যবহার করে?",
  trustedBy: "ক্রমবর্ধমান সংস্থা দ্বারা বিশ্বস্ত",
  readyToStart: "স্মার্ট নেটওয়ার্কিং শুরু করতে প্রস্তুত?",
  readyDesc: "অর্থবহ সংযোগ তৈরি করতে ইতোমধ্যে TactLink ব্যবহার করছেন এমন হাজার হাজার পেশাদারের সাথে যোগ দিন।",
  allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
  heroChecklist: ["কাগজবিহীন", "দ্রুত আদানপ্রদান", "কমিউনিটি বৃদ্ধি"],
  heroFeatures: [
    { title: "QR", desc: "তাত্ক্ষণিক শেয়ার" },
    { title: "প্রোফাইল", desc: "ডিজিটাল পরিচয়" },
    { title: "পরিচিতি", desc: "স্মার্ট সেভ" },
  ],
  trustBadge: "গ্লোবাল মুভমেন্ট",
  trustTitle: "আধুনিক, কাগজবিহীন নেটওয়ার্কিংয়ের জন্য তৈরি।",
  trustDesc: "পেশাদার সম্প্রদায় থেকে শুরু করে আন্তঃসীমান্ত ইভেন্ট পর্যন্ত, TactLink সংস্থাগুলিকে স্ট্যাটিক তালিকাকে সক্রিয় ডিজিটাল নেটওয়ার্কে রূপান্তর করতে সহায়তা করে।",
  ctaTitle: "প্রতিটি সাক্ষাতকে একটি অর্থবহ নেটওয়ার্কে পরিণত করুন।",
  becomePartner: "অংশীদার হন",
  emailTactlink: "ইমেইল TactLink",
  quickLinksTitle: "TactLink-এর সবকিছু, এক ক্লিকেই।",
  quickLinksDesc: "ডাউনলোড, অংশীদারিত্ব, পণ্যের তথ্য এবং অফিসিয়াল TactLink চ্যানেলগুলির জন্য একটি প্রিমিয়াম সামাজিক গেটওয়ে।",
  downloadAppTitle: "TactLink অ্যাপ ডাউনলোড করুন",
  downloadAppHeadline: "আজই স্মার্ট সংযোগ তৈরি করা শুরু করুন।",
  downloadAppDesc: "আপনার ডিজিটাল প্রোফাইল তৈরি করুন, আপনার স্মার্ট ডিরেক্টরি শেয়ার করুন এবং অফিসিয়াল TactLink অ্যাপের মাধ্যমে দ্রুত সংযোগ করুন।",
  openLink: "লিঙ্ক খুলুন",
  start: "শুরু করুন",
  smartDirectory: "স্মার্ট ডিরেক্টরি",
  featuresTitle: "যারা নেটওয়ার্ক তৈরি করে, সম্প্রদায় পরিচালনা করে এবং ইভেন্ট চালায় তাদের জন্য নির্মিত।",
  featuresDesc: "ব্যক্তিগত ডিজিটাল পরিচয় থেকে শুরু করে অ্যাসোসিয়েশন-স্কেল নেটওয়ার্কিং পর্যন্ত, TactLink সংযোগগুলিকে তৈরি করা, পরিচালনা করা এবং বৃদ্ধি করা সহজ করে তোলে।",
  audienceTitle: "প্রতিটি সংযোগ-চালিত ইকোসিস্টেমের জন্য একটি প্ল্যাটফর্ম।",
  audienceDesc: "TactLink সেইসব ব্যক্তি এবং সংস্থাগুলির জন্য তৈরি করা হয়েছে যাদের দ্রুত সংযোগ, পরিষ্কার যোগাযোগ ব্যবস্থাপনা এবং শক্তিশালী কমিউনিটি এঙ্গেজমেন্ট প্রয়োজন।",
  socialTitle: "গ্লোবাল কমিউনিটি জুড়ে TactLink অনুসরণ করুন।",
  socialDesc: "পণ্য কাহিনী, ইভেন্ট, কমিউনিটি হাইলাইটস এবং আঞ্চলিক TactLink কার্যকলাপের সাথে আপডেট থাকুন।",
  footerDesc: "স্মার্ট ডিরেক্টরির সাহায্যে নেটওয়ার্কিং নতুনভাবে ভাবুন। পেশাদার নেটওয়ার্কিং পরিবর্তন করুন, কাগজবিহীন হন, সহযোগিতা বৃদ্ধি করুন এবং আপনার সম্প্রদায়কে বৃদ্ধি করুন।",
  footerSlogan: "স্মার্ট, কাগজবিহীন নেটওয়ার্কিংয়ের জন্য তৈরি।",

};
