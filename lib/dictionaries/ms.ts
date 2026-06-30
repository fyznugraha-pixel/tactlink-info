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
  tagline: "Direktori Pintar untuk Rangkaian Moden",
  headline: "Berhubung lebih pintar. Rangkaian lebih pantas. Tanpa kertas.",
  description: "TactLink membantu profesional, komuniti, persatuan, dan penganjur acara membina hubungan bermakna melalui profil digital, direktori pintar, dan alat rangkaian yang lancar.",
  logo: "/logo/logotactlink.png",
};

export const navItems = [
  { label: "Pautan", href: "#links" },
  { label: "Ciri-ciri", href: "#features" },
  { label: "Sosial", href: "#socials" },
  { label: "Audiens", href: "#audience" },
];

export const appDownloadLinks = [
  {
    label: "Google Play",
    platform: "Android",
    subLabel: "Dapatkan di",
    href: "https://play.google.com/store/apps/details?id=com.tactlink.app",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    platform: "iOS",
    subLabel: "Muat turun di",
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
    label: "Lawati Laman Web Rasmi",
    description: "Terokai platform penuh, penyelesaian, dan profil syarikat TactLink.",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "Rasmi",
  },
  {
    label: "Rakan Kongsi TactLink",
    description: "Untuk persatuan, komuniti, acara, dan peluang kerjasama.",
    href: "https://www.tactlink.com/contact",
    icon: Building2,
    badge: "Rakan",
  },
];

export const secondaryLinks = [
  { label: "Hubungi", href: "https://www.tactlink.com/contact" },
  { label: "Mengenai", href: "https://www.tactlink.com/about" },
  { label: "Direktori Pintar", href: "https://www.tactlink.com/" },
  { label: "Kad Nama Digital", href: "https://www.tactlink.com/digital-namecard" },
];

export const socialLinks = [
  { label: "LinkedIn", region: "Halaman Syarikat", href: "https://www.linkedin.com/company/tactlink", icon: LinkedinIcon, featured: true },
  { label: "Facebook", region: "Halaman Rasmi", href: "https://web.facebook.com/TactLink", icon: FacebookIcon, featured: true },
  { label: "Instagram", region: "Global", href: "https://www.instagram.com/tactlinksmartdirectory/", icon: InstagramIcon, featured: true },
  { label: "Instagram", region: "Indonesia", href: "https://www.instagram.com/tactlinkindonesia", icon: InstagramIcon },
  { label: "Instagram", region: "Malaysia", href: "https://www.instagram.com/tactlinkmalaysia", icon: InstagramIcon },
  { label: "Instagram", region: "Vietnam", href: "https://www.instagram.com/tactlinkvietnam", icon: InstagramIcon },
  { label: "Instagram", region: "Bangladesh", href: "https://www.instagram.com/tactlinkbangladesh", icon: InstagramIcon },
  { label: "Instagram", region: "Philippines", href: "https://www.instagram.com/tactlinkphilippines", icon: InstagramIcon },
];

export const features = [
  {
    title: "Kad Nama Digital",
    description: "Gantikan kad bercetak dengan identiti digital yang lebih pintar dan boleh dikongsi di mana sahaja.",
    icon: QrCode,
    points: ["Perkongsian QR", "Pautan profil", "Pertukaran segera"],
  },
  {
    title: "Direktori Pintar",
    description: "Atur kenalan, ahli, dan komuniti dalam satu ekosistem digital yang boleh dicari.",
    icon: Network,
    points: ["Carian ahli", "Pengurusan kenalan", "Sentiasa dikemas kini"],
  },
  {
    title: "Rangkaian Acara",
    description: "Jadikan acara perniagaan lebih terhubung dengan pendaftaran digital dan aliran rangkaian.",
    icon: CalendarCheck,
    points: ["Sedia untuk acara", "Daftar masuk lebih pantas", "Fishbowl digital"],
  },
  {
    title: "Platform Persatuan",
    description: "Bantu organisasi beralih dari hamparan statik ke rangkaian ahli yang hidup.",
    icon: Users,
    points: ["Direktori ahli", "Aliran kerja admin", "Pertumbuhan komuniti"],
  },
];

export const stats = [
  { value: "20+", label: "Organisasi Rakan Kongsi" },
  { value: "10K+", label: "Hubungan Terbina" },
  { value: "8", label: "Negara Dijangkau" },
  { value: "4", label: "SDG PBB Disokong" },
];

export const audiences = [
  { title: "Profesional", description: "Untuk mereka yang bertemu, bertukar, dan mengurus hubungan baru setiap hari.", icon: Contact },
  { title: "Persatuan", description: "Untuk organisasi yang memerlukan direktori ahli hidup dan alat admin moden.", icon: Building2 },
  { title: "Komuniti", description: "Untuk kumpulan yang ingin menghubungkan ahli di luar kumpulan sembang yang tersebar.", icon: Users },
  { title: "Penganjur Acara", description: "Untuk acara rangkaian, pameran, forum perniagaan, dan persidangan.", icon: CalendarCheck },
];

export const benefits = [
  { title: "Tanpa kertas (Paperless)", icon: ShieldCheck },
  { title: "Dibina untuk komuniti global", icon: Globe2 },
  { title: "Pertukaran profil pantas", icon: Zap },
  { title: "Pengalaman mudah alih diutamakan", icon: Smartphone },
  { title: "Identiti profesional", icon: Sparkles },
  { title: "Rangkaian yang boleh diskalakan", icon: Rocket },
  { title: "Tangkapan kenalan OCR", icon: ScanLine },
  { title: "Hab semua-dalam-satu", icon: AppWindow },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};

export const ui = {
  downloadApp: "Muat Turun Aplikasi",
  exploreFeatures: "Terokai Ciri-ciri",
  quickLinks: "Pautan Pantas",
  coreFeatures: "Ciri Utama",
  whyChoose: "Mengapa Memilih TactLink",
  connectRegion: "Berhubung dengan wilayah anda",
  whoUses: "Siapa yang menggunakan TactLink?",
  trustedBy: "Dipercayai oleh organisasi yang berkembang",
  readyToStart: "Bersedia untuk rangkaian lebih pintar?",
  readyDesc: "Sertai ribuan profesional yang telah menggunakan TactLink untuk membina hubungan bermakna.",
  allRightsReserved: "Hak cipta terpelihara.",
  heroChecklist: ["Tanpa kertas", "Tukar lebih pantas", "Kembangkan komuniti"],
  heroFeatures: [
    { title: "QR", desc: "Kongsi segera" },
    { title: "Profil", desc: "Identiti digital" },
    { title: "Kenalan", desc: "Simpan pintar" },
  ],
  trustBadge: "PERGERAKAN GLOBAL",
  trustTitle: "Direka untuk rangkaian moden tanpa kertas.",
  trustDesc: "Dari komuniti profesional hingga ke acara merentas sempadan, TactLink membantu organisasi mengubah senarai statik kepada rangkaian digital yang aktif.",
  ctaTitle: "Ubah setiap pertemuan menjadi rangkaian yang bermakna.",
  becomePartner: "Jadi Rakan Kongsi",
  emailTactlink: "E-mel TactLink",
  quickLinksTitle: "Semua tentang TactLink, dalam satu sentuhan.",
  quickLinksDesc: "Gerbang sosial premium untuk muat turun, perkongsian, maklumat produk, dan saluran rasmi TactLink.",
  downloadAppTitle: "Muat Turun Aplikasi TactLink",
  downloadAppHeadline: "Mula bina hubungan yang lebih pintar hari ini.",
  downloadAppDesc: "Cipta profil digital anda, kongsi direktori pintar anda, dan berhubung lebih pantas melalui aplikasi rasmi TactLink.",
  openLink: "Buka Pautan",
  start: "Mula",
  smartDirectory: "Direktori Pintar",
  featuresTitle: "Dibina untuk mereka yang membina rangkaian, mengurus komuniti, dan menjalankan acara.",
  featuresDesc: "Dari identiti digital peribadi hingga rangkaian skala persatuan, TactLink menjadikan sambungan lebih mudah dicipta, diurus, dan dikembangkan.",
  audienceTitle: "Satu platform untuk setiap ekosistem yang didorong oleh hubungan.",
  audienceDesc: "TactLink dibina untuk orang dan organisasi yang memerlukan hubungan lebih pantas, pengurusan kenalan yang lebih kemas, dan penglibatan komuniti yang lebih kuat.",
  socialTitle: "Ikuti TactLink di seluruh komuniti global.",
  socialDesc: "Kekal kemas kini dengan cerita produk, acara, sorotan komuniti, dan aktiviti TactLink serantau.",
  footerDesc: "Fikirkan semula rangkaian dengan Direktori Pintar. Ubah rangkaian profesional, tanpa kertas, dorong kolaborasi, dan kembangkan komuniti anda.",
  footerSlogan: "Dibina untuk rangkaian yang lebih pintar dan tanpa kertas.",

};
