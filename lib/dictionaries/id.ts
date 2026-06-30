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
  tagline: "Direktori Pintar untuk Networking Modern",
  headline: "Terhubung lebih pintar. Networking lebih cepat. Tanpa kertas.",
  description: "TactLink membantu profesional, komunitas, asosiasi, dan penyelenggara acara membangun koneksi bermakna melalui profil digital, direktori pintar, dan alat networking yang mulus.",
  logo: "/logo/logotactlink.png",
};

export const navItems = [
  { label: "Tautan", href: "#links" },
  { label: "Fitur", href: "#features" },
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
    subLabel: "Unduh di",
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
    label: "Kunjungi Situs Resmi",
    description: "Jelajahi platform lengkap, solusi, dan profil perusahaan TactLink.",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "Resmi",
  },
  {
    label: "Bermitra dengan TactLink",
    description: "Untuk asosiasi, komunitas, acara, dan peluang kolaborasi.",
    href: "https://www.tactlink.com/contact",
    icon: Building2,
    badge: "Mitra",
  },
];

export const secondaryLinks = [
  { label: "Kontak", href: "https://www.tactlink.com/contact" },
  { label: "Tentang", href: "https://www.tactlink.com/about" },
  { label: "Direktori Pintar", href: "https://www.tactlink.com/" },
  { label: "Kartu Nama Digital", href: "https://www.tactlink.com/digital-namecard" },
];

export const socialLinks = [
  { label: "LinkedIn", region: "Halaman Perusahaan", href: "https://www.linkedin.com/company/tactlink", icon: LinkedinIcon, featured: true },
  { label: "Facebook", region: "Halaman Resmi", href: "https://web.facebook.com/TactLink", icon: FacebookIcon, featured: true },
  { label: "Instagram", region: "Global", href: "https://www.instagram.com/tactlinksmartdirectory/", icon: InstagramIcon, featured: true },
  { label: "Instagram", region: "Indonesia", href: "https://www.instagram.com/tactlinkindonesia", icon: InstagramIcon },
  { label: "Instagram", region: "Malaysia", href: "https://www.instagram.com/tactlinkmalaysia", icon: InstagramIcon },
  { label: "Instagram", region: "Vietnam", href: "https://www.instagram.com/tactlinkvietnam", icon: InstagramIcon },
  { label: "Instagram", region: "Bangladesh", href: "https://www.instagram.com/tactlinkbangladesh", icon: InstagramIcon },
  { label: "Instagram", region: "Philippines", href: "https://www.instagram.com/tactlinkphilippines", icon: InstagramIcon },
];

export const features = [
  {
    title: "Kartu Nama Digital",
    description: "Ganti kartu cetak dengan identitas digital yang lebih pintar dan dapat dibagikan di mana saja.",
    icon: QrCode,
    points: ["Berbagi via QR", "Tautan profil", "Pertukaran instan"],
  },
  {
    title: "Direktori Pintar",
    description: "Atur kontak, anggota, dan komunitas dalam satu ekosistem digital yang mudah dicari.",
    icon: Network,
    points: ["Pencarian anggota", "Manajemen kontak", "Selalu diperbarui"],
  },
  {
    title: "Networking Acara",
    description: "Jadikan acara bisnis lebih terhubung dengan pendaftaran digital dan alur networking.",
    icon: CalendarCheck,
    points: ["Siap untuk acara", "Check-in lebih cepat", "Fishbowl digital"],
  },
  {
    title: "Platform Asosiasi",
    description: "Bantu organisasi beralih dari spreadsheet statis ke jaringan anggota yang hidup.",
    icon: Users,
    points: ["Direktori anggota", "Alur kerja admin", "Pertumbuhan komunitas"],
  },
];

export const stats = [
  { value: "20+", label: "Organisasi Mitra" },
  { value: "10K+", label: "Koneksi Terbentuk" },
  { value: "8", label: "Negara Dijangkau" },
  { value: "4", label: "SDG PBB Didukung" },
];

export const audiences = [
  { title: "Profesional", description: "Untuk mereka yang bertemu, bertukar, dan mengelola koneksi baru setiap hari.", icon: Contact },
  { title: "Asosiasi", description: "Untuk organisasi yang membutuhkan direktori anggota hidup dan alat admin modern.", icon: Building2 },
  { title: "Komunitas", description: "Untuk grup yang ingin menghubungkan anggota di luar grup obrolan yang tersebar.", icon: Users },
  { title: "Penyelenggara Acara", description: "Untuk acara networking, pameran, forum bisnis, dan konferensi.", icon: CalendarCheck },
];

export const benefits = [
  { title: "Tanpa kertas (Paperless)", icon: ShieldCheck },
  { title: "Dibangun untuk komunitas global", icon: Globe2 },
  { title: "Pertukaran profil cepat", icon: Zap },
  { title: "Pengalaman mengutamakan seluler", icon: Smartphone },
  { title: "Identitas profesional", icon: Sparkles },
  { title: "Networking yang dapat diskalakan", icon: Rocket },
  { title: "Tangkapan kontak OCR", icon: ScanLine },
  { title: "Hub serba ada", icon: AppWindow },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};

export const ui = {
  downloadApp: "Unduh Aplikasi",
  exploreFeatures: "Jelajahi Fitur",
  quickLinks: "Tautan Cepat",
  coreFeatures: "Fitur Utama",
  whyChoose: "Mengapa Memilih TactLink",
  connectRegion: "Terhubung dengan wilayah Anda",
  whoUses: "Siapa yang menggunakan TactLink?",
  trustedBy: "Dipercaya oleh organisasi yang berkembang",
  readyToStart: "Siap untuk networking lebih pintar?",
  readyDesc: "Bergabunglah dengan ribuan profesional yang telah menggunakan TactLink untuk membangun koneksi bermakna.",
  allRightsReserved: "Hak cipta dilindungi undang-undang.",
  heroChecklist: ["Tanpa kertas", "Tukar lebih cepat", "Kembangkan komunitas"],
  heroFeatures: [
    { title: "QR", desc: "Bagikan instan" },
    { title: "Profil", desc: "Identitas digital" },
    { title: "Kontak", desc: "Simpan cerdas" },
  ],
  trustBadge: "GERAKAN GLOBAL",
  trustTitle: "Dirancang untuk networking modern tanpa kertas.",
  trustDesc: "Dari komunitas profesional hingga acara lintas batas, TactLink membantu organisasi mengubah daftar statis menjadi jaringan digital yang aktif.",
  ctaTitle: "Ubah setiap pertemuan menjadi jaringan yang bermakna.",
  becomePartner: "Jadilah Mitra",
  emailTactlink: "Email TactLink",
  quickLinksTitle: "Semua tentang TactLink, dalam satu sentuhan.",
  quickLinksDesc: "Gerbang sosial premium untuk unduhan, kemitraan, informasi produk, dan saluran resmi TactLink.",
  downloadAppTitle: "Unduh Aplikasi TactLink",
  downloadAppHeadline: "Mulai bangun koneksi yang lebih cerdas hari ini.",
  downloadAppDesc: "Buat profil digital Anda, bagikan direktori pintar Anda, dan terhubung lebih cepat melalui aplikasi resmi TactLink.",
  openLink: "Buka Tautan",
  start: "Mulai",
  smartDirectory: "Direktori Pintar",
  featuresTitle: "Dibuat untuk mereka yang membangun jaringan, mengelola komunitas, dan menjalankan acara.",
  featuresDesc: "Dari identitas digital pribadi hingga jaringan skala asosiasi, TactLink membuat koneksi lebih mudah dibuat, dikelola, dan dikembangkan.",
  audienceTitle: "Satu platform untuk setiap ekosistem yang digerakkan oleh koneksi.",
  audienceDesc: "TactLink dibangun untuk orang-orang dan organisasi yang membutuhkan koneksi lebih cepat, manajemen kontak yang lebih rapi, dan keterlibatan komunitas yang lebih kuat.",
  socialTitle: "Ikuti TactLink di seluruh komunitas global.",
  socialDesc: "Tetap terhubung dengan cerita produk, acara, sorotan komunitas, dan aktivitas TactLink regional.",
  footerDesc: "Pikirkan kembali networking dengan Direktori Pintar. Ubah networking profesional, tanpa kertas, dorong kolaborasi, dan kembangkan komunitas Anda.",
  footerSlogan: "Dibuat untuk networking yang lebih cerdas dan tanpa kertas.",

};
