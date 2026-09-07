import type { ComponentType } from "react";
import {
  Building2, CalendarCheck, Contact, Globe2, Mail, Network, QrCode, Rocket,
  ScanLine, ShieldCheck, Smartphone, Users, Zap, AppWindow,
} from "lucide-react";
import {
  AppleIcon, FacebookIcon, GooglePlayIcon, InstagramIcon, LinkedinIcon,
} from "@/components/BrandIcons";

export type IconType = ComponentType<any>; // 

export const brand = {
  name: "TactLink",
  tagline: "Direktori Pintar untuk Networking Masa Kini",
  headline: "Koneksi cerdas,\nnetworking lebih cepat,\n100% bebas kertas.",
  description: "TactLink hadir untuk bantu para profesional, komunitas, asosiasi, dan event organizer membangun koneksi yang bermakna. Mulai dari profil digital, direktori pintar, sampai fitur networking yang super praktis.",
  logo: "/links/logo/logotactlink.png",
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
    subLabel: "Tersedia di",
    href: "https://play.google.com/store/apps/details?id=com.tactlink.app",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    platform: "iOS",
    subLabel: "Download di",
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
    label: "Kunjungi Website Resmi",
    description: "Cari tahu lebih dalam soal platform, solusi, dan profil TactLink.",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "Resmi",
  },
  {
    label: "Jadi Mitra TactLink",
    description: "Solusi pas buat asosiasi, komunitas, event, atau peluang kolaborasi.",
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
    description: "Tinggalkan kartu kertas! Ganti dengan profil digital cerdas yang bisa kamu bagikan kapan aja, ke mana aja.",
    icon: QrCode,
    points: ["Share via QR", "Link Profil", "Tukar Kontak Instan"],
  },
  {
    title: "Direktori Pintar",
    description: "Kelola kontak, anggota, sampai komunitas dalam satu ruang digital yang rapi dan gampang dicari.",
    icon: Network,
    points: ["Cari Anggota", "Kelola Kontak", "Update Real-time"],
  },
  {
    title: "Networking Event",
    description: "Bikin event bisnismu makin interaktif dengan sistem registrasi digital dan alur networking yang lancar.",
    icon: CalendarCheck,
    points: ["Fitur Event", "Check-in Kilat", "Digital Fishbowl"],
  },
  {
    title: "Platform Asosiasi",
    description: "Tinggalkan rekap excel manual. Saatnya beralih ke platform manajemen komunitas yang lebih hidup.",
    icon: Users,
    points: ["Direktori Anggota", "Dashboard Admin", "Bangun Komunitas"],
  },
];

export const stats = [
  { value: "20+", label: "Organisasi Mitra" },
  { value: "10K+", label: "Koneksi Terbentuk" },
  { value: "8", label: "Negara Dijangkau" },
  { value: "4", label: "SDG PBB Didukung" },
];

export const audiences = [
  { title: "Profesional", description: "Buat kamu yang tiap hari ketemu orang baru, tukeran kontak, dan butuh nyimpen network dengan rapi.", icon: Contact },
  { title: "Asosiasi", description: "Solusi buat organisasi yang butuh direktori anggota interaktif plus sistem admin modern.", icon: Building2 },
  { title: "Komunitas", description: "Pilihan pas buat komunitas yang pengen anggotanya saling kenal, nggak sekadar kumpul di grup chat.", icon: Users },
  { title: "Event Organizer", description: "Partner andalan buat bikin acara networking, pameran, forum bisnis, atau konferensi jadi makin seru.", icon: CalendarCheck },
];

export const benefits = [
  { title: "100% Ramah Lingkungan (Paperless)", icon: ShieldCheck },
  { title: "Dirancang buat Komunitas Global", icon: Globe2 },
  { title: "Tukar Kontak Hitungan Detik", icon: Zap },
  { title: "Desain Nyaman di HP (Mobile-First)", icon: Smartphone },
  { title: "Tampil Lebih Profesional", icon: ShieldCheck },
  { title: "Scale Up Jaringanmu", icon: Rocket },
  { title: "Scan Kartu Nama Fisik (OCR)", icon: ScanLine },
  { title: "Semua Fitur dalam Satu Hub", icon: AppWindow },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};

export const ui = {
  downloadApp: "Download Aplikasi",
  exploreFeatures: "Jelajahi Fitur",
  quickLinks: "Akses Cepat",
  coreFeatures: "Fitur Utama",
  whyChoose: "Kenapa Pilih TactLink?",
  connectRegion: "Temukan TactLink di negaramu",
  whoUses: "Siapa aja sih yang pakai TactLink?",
  trustedBy: "Dipercaya oleh berbagai organisasi berkembang",
  readyToStart: "Siap buat networking yang lebih cerdas?",
  readyDesc: "Gabung sama ribuan profesional lainnya yang udah pakai TactLink buat bangun koneksi yang lebih bermakna.",
  allRightsReserved: "Hak cipta dilindungi undang-undang.",
  heroChecklist: ["Bebas kertas", "Tukar kontak instan", "Bangun komunitas"],
  heroFeatures: [
    { title: "QR", desc: "Bagikan instan" },
    { title: "Profil", desc: "Identitas digital" },
    { title: "Kontak", desc: "Simpan cerdas" },
  ],
  trustBadge: "GERAKAN GLOBAL",
  trustTitle: "Didesain buat networking modern yang 100% bebas kertas.",
  trustDesc: "Mulai dari komunitas profesional sampai event internasional, TactLink siap bantu organisasimu ubah daftar kontak biasa jadi jaringan digital yang lebih hidup.",
  ctaTitle: "Jadikan setiap pertemuan awal dari koneksi yang bermakna.",
  becomePartner: "Jadi Mitra Kami",
  emailTactlink: "Hubungi via Email",
  quickLinksTitle: "Semua info tentang TactLink, cuma sekali klik.",
  quickLinksDesc: "Pusat informasi lengkap mulai dari download aplikasi, info partnership, detail produk, sampai media sosial resmi TactLink.",
  downloadAppTitle: "Download Aplikasi TactLink",
  downloadAppHeadline: "Yuk, mulai bangun koneksi yang lebih cerdas dari sekarang!",
  downloadAppDesc: "Bikin profil digitalmu, bagikan direktori pintarmu, dan jalin koneksi lebih cepat lewat aplikasi resmi TactLink.",
  openLink: "Buka Link",
  start: "Mulai Sekarang", 
  helpCenter: "Pusat Bantuan",
  smartDirectory: "Direktori Pintar",
  featuresTitle: "Cocok banget buat kamu yang suka networking, ngelola komunitas, atau bikin event.",
  featuresDesc: "Dari sekadar kartu nama digital sampai jaringan asosiasi, TactLink bikin urusan kenalan, kelola kontak, dan bangun komunitas jadi jauh lebih gampang.",
  audienceTitle: "Satu platform buat semua ekosistem komunitasmu.",
  audienceDesc: "TactLink dirancang khusus buat kamu dan organisasi yang butuh koneksi cepat, manajemen kontak rapi, dan komunitas yang aktif.",
  socialTitle: "Ikuti keseruan komunitas global TactLink.",
  socialDesc: "Jangan sampai ketinggalan info terbaru soal produk, event seru, dan berbagai aktivitas TactLink di berbagai negara.",
  footerDesc: "Ubah cara kamu berjejaring dengan Direktori Pintar TactLink. Lebarkan sayap profesionalmu tanpa kertas, kolaborasi lebih mudah, dan kembangkan komunitasmu.",
  footerSlogan: "Solusi cerdas buat networking modern bebas kertas.",
};
