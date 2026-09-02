import { BookOpen, User, Shield } from "lucide-react";

export type HelpCategory = "general" | "attendee" | "admin";

export interface HelpItem {
  question: string;
  answer: string | string[];
  images?: string[];
}

export interface HelpData {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  categories: {
    id: HelpCategory;
    title: string;
    description: string;
    icon: any; // Lucide icon
  }[];
  content: Record<HelpCategory, HelpItem[]>;
}

const en: HelpData = {
  title: "How can we help you?",
  subtitle: "Find answers, guides, and tutorials for using TactLink.",
  searchPlaceholder: "Search for help topics...",
  categories: [
    {
      id: "general",
      title: "Introduction",
      description: "Basic understanding of TactLink platform and features.",
      icon: BookOpen,
    },
    {
      id: "attendee",
      title: "For Attendees",
      description: "Guides on creating profiles, networking, and chats.",
      icon: User,
    },
    {
      id: "admin",
      title: "For Admins",
      description: "Managing events, check-ins, and associations.",
      icon: Shield,
    },
  ],
  content: {
    general: [
      {
        question: "What is TactLink?",
        answer: "TactLink is a digital networking and contact management platform designed to help individuals, professionals, associations, and communities build meaningful connections. TactLink enables users to create and share digital namecards, manage contacts, discover and connect with members, and participate in interactive networking experiences."
      },
      {
        question: "How TactLink works?",
        answer: "TactLink digitizes traditional networking by bringing digital namecards, contact management, member directories, and event networking into one platform. Users can create their digital identity, share it instantly through a QR code or link, collect and organize connections, and communicate with their network through the platform."
      },
      {
        question: "What features does TactLink offer?",
        answer: "TactLink offers a range of features that support digital networking, including digital business cards, event management, association management, a smart networking directory, connections, and chat."
      },
      {
        question: "How does TactLink support the SDGs?",
        answer: [
          "SDG 12: Reducing the use of paper business cards and printing waste.",
          "SDG 13: Reducing carbon footprints through digital networking.",
          "SDG 15: Supporting the conservation of natural resources and forests.",
          "SDG 17: Strengthening collaboration and partnerships through a digital networking platform."
        ]
      },
      {
        question: "Can I scan a physical business card with TactLink?",
        answer: "TactLink allows you to scan physical business cards using OCR (Optical Character Recognition). The information from the scanned card can be digitized and saved to your Smart Directory."
      }
    ],
    attendee: [
      {
        question: "How to create a TactLink account?",
        answer: "1. Access the application and click 'Create an Account'. 2. Complete your personal details (name, email, mobile number, password). 3. Alternatively, sign up using a Gmail account or Apple ID for iOS users.",
        images: ["/images/helpcenter/attendee_p1_1.png", "/images/helpcenter/attendee_p1_2.png", "/images/helpcenter/attendee_p1_3.png"]
      },
      {
        question: "How to complete your Digital Business Card?",
        answer: "Click 'Complete My Card' to add a profile photo, company details, a logo, and social media links.",
        images: ["/images/helpcenter/attendee_p1_4.png"]
      },
      {
        question: "How to Scan a Digital Business Card?",
        answer: "1. Click the scan icon in the top right corner. 2. Select an available method to add a business card. 3. After scanning, click 'Done'. 4. Go to 'Contacts' and click the contact you want to connect. 5. Click the (+) sign and then 'Send Request'.",
        images: ["/images/helpcenter/attendee_p1_7.png", "/images/helpcenter/attendee_p1_8.png", "/images/helpcenter/attendee_p1_9.png", "/images/helpcenter/attendee_p1_10.png", "/images/helpcenter/attendee_p1_11.png"]
      },
      {
        question: "How to edit your profile?",
        answer: "1. Click your digital business card. 2. Click 'Edit' to change profile details. 3. Complete profile details such as name, email, mobile number, address, social media, and logo.",
        images: ["/images/helpcenter/attendee_p2_20.png", "/images/helpcenter/attendee_p2_21.png", "/images/helpcenter/attendee_p2_22.png"]
      },
      {
        question: "How do I view the chat feature?",
        answer: "1. Go to the Home Page and click your profile photo, then click 'Chats'. 2. Click the three lines in the top right corner, then click 'New Chat' to see connected contacts.",
        images: ["/images/helpcenter/attendee_p3_26.png", "/images/helpcenter/attendee_p3_27.png"]
      },
      {
        question: "How to Check-in Event?",
        answer: "1. Find the event on the Discover page. 2. View event information. 3. Choose the appropriate event category and check-in. 4. Obtain a QR pass as proof of access.",
        images: ["/images/helpcenter/attendee_p3_32.png", "/images/helpcenter/attendee_p3_33.png", "/images/helpcenter/attendee_p3_34.png", "/images/helpcenter/attendee_p3_35.png"]
      }
    ],
    admin: [
      {
        question: "How to Check-in Event Admin Flow?",
        answer: "1. Click the 'Check-in' feature to manage the list of event participants. 2. Click 'Scan passes' to scan the participant's QR code, it will update in real-time. 3. Click 'Walk-in' if the participant does not have a QR code. Admin can enter the participant's name and email directly.",
        images: ["/images/helpcenter/admin_p1_5.png", "/images/helpcenter/admin_p1_6.png", "/images/helpcenter/admin_p1_7.png"]
      },
      {
        question: "How do I create a lucky draw in the TactLink app?",
        answer: "1. Open an event and click 'Lucky Draw'. 2. Set the opening and closing times, then add the prizes. 3. Once created, the Lucky Draw icon will appear on the right side.",
        images: ["/images/helpcenter/admin_p2_8.png", "/images/helpcenter/admin_p2_9.png", "/images/helpcenter/admin_p2_10.png"]
      },
      {
        question: "How to set up speed networking on the TactLink app?",
        answer: "1. Open an event and click 'Speed Networking'. 2. Set the number of members per group and rounds, then 'Generate Preview'. 3. Review the team assignments. 4. Click 'Publish'. 5. The 'Speed Networking' icon will appear on the event page.",
        images: ["/images/helpcenter/admin_p2_11.png", "/images/helpcenter/admin_p2_12.png", "/images/helpcenter/admin_p2_13.png", "/images/helpcenter/admin_p2_14.png", "/images/helpcenter/admin_p2_15.png"]
      },
      {
        question: "How do I view the association feature?",
        answer: "1. Click 'Create New Association' to add a new association. 2. Click on one of the associations in the list to view detailed information. 3. Click 'members' to see the number of participants, or 'View All' to see event information.",
        images: ["/images/helpcenter/admin_p2_16.png", "/images/helpcenter/admin_p3_17.png", "/images/helpcenter/admin_p3_18.png"]
      }
    ]
  }
};

const id: HelpData = {
  title: "Ada yang bisa kami bantu?",
  subtitle: "Temukan jawaban, panduan, dan tutorial penggunaan TactLink.",
  searchPlaceholder: "Cari topik bantuan...",
  categories: [
    {
      id: "general",
      title: "Pengenalan",
      description: "Pemahaman dasar tentang platform dan fitur TactLink.",
      icon: BookOpen,
    },
    {
      id: "attendee",
      title: "Untuk Peserta",
      description: "Panduan membuat profil, jejaring, dan obrolan.",
      icon: User,
    },
    {
      id: "admin",
      title: "Untuk Admin",
      description: "Mengelola acara, check-in, dan asosiasi.",
      icon: Shield,
    },
  ],
  content: {
    general: [
      {
        question: "Apa itu TactLink?",
        answer: "TactLink adalah platform jejaring digital dan manajemen kontak yang dirancang untuk membantu individu, profesional, asosiasi, dan komunitas membangun koneksi yang bermakna. TactLink memungkinkan pengguna membuat dan berbagi kartu nama digital, mengelola kontak, serta berpartisipasi dalam pengalaman jejaring interaktif."
      },
      {
        question: "Bagaimana cara kerja TactLink?",
        answer: "TactLink mendigitalkan jejaring tradisional dengan menyatukan kartu nama digital, manajemen kontak, direktori anggota, dan jejaring acara ke dalam satu platform. Pengguna dapat berbagi identitas digital mereka secara instan melalui kode QR atau tautan."
      },
      {
        question: "Fitur apa saja yang ditawarkan TactLink?",
        answer: "TactLink menawarkan berbagai fitur jejaring digital, termasuk kartu nama digital, manajemen acara, manajemen asosiasi, direktori cerdas, koneksi, dan obrolan (chat)."
      },
      {
        question: "Bagaimana TactLink mendukung SDGs?",
        answer: [
          "SDG 12: Mengurangi penggunaan kartu nama kertas dan limbah cetak.",
          "SDG 13: Mengurangi jejak karbon melalui jejaring digital.",
          "SDG 15: Mendukung konservasi sumber daya alam dan hutan.",
          "SDG 17: Memperkuat kolaborasi dan kemitraan melalui platform digital."
        ]
      },
      {
        question: "Bisakah saya memindai kartu nama fisik dengan TactLink?",
        answer: "TactLink memungkinkan Anda memindai kartu nama fisik menggunakan OCR (Optical Character Recognition). Informasi dari kartu tersebut akan didigitalkan dan disimpan ke Direktori Cerdas Anda."
      }
    ],
    attendee: [
      {
        question: "Bagaimana cara membuat akun TactLink?",
        answer: "1. Akses aplikasi dan klik 'Buat Akun'. 2. Lengkapi data diri (nama, email, nomor HP, kata sandi). 3. Anda juga bisa mendaftar menggunakan akun Gmail atau Apple ID untuk pengguna iOS.",
        images: ["/images/helpcenter/attendee_p1_1.png", "/images/helpcenter/attendee_p1_2.png", "/images/helpcenter/attendee_p1_3.png"]
      },
      {
        question: "Bagaimana cara melengkapi Kartu Nama Digital?",
        answer: "Klik 'Complete My Card' untuk menambahkan foto profil, detail perusahaan, logo, dan tautan media sosial.",
        images: ["/images/helpcenter/attendee_p1_4.png"]
      },
      {
        question: "Bagaimana cara memindai Kartu Nama Digital?",
        answer: "1. Klik ikon pindai di sudut kanan atas. 2. Pilih metode untuk memindai kartu. 3. Setelah selesai, klik 'Done'. 4. Buka 'Contacts', klik kontak yang ingin dihubungkan, lalu tekan tombol (+) dan 'Send Request'.",
        images: ["/images/helpcenter/attendee_p1_7.png", "/images/helpcenter/attendee_p1_8.png", "/images/helpcenter/attendee_p1_9.png", "/images/helpcenter/attendee_p1_10.png", "/images/helpcenter/attendee_p1_11.png"]
      },
      {
        question: "Bagaimana cara mengedit profil?",
        answer: "1. Klik kartu nama digital Anda. 2. Klik 'Edit' untuk mengubah profil. 3. Lengkapi detail seperti nama, email, alamat, media sosial, dan logo.",
        images: ["/images/helpcenter/attendee_p2_20.png", "/images/helpcenter/attendee_p2_21.png", "/images/helpcenter/attendee_p2_22.png"]
      },
      {
        question: "Bagaimana cara membuka fitur obrolan (chat)?",
        answer: "1. Buka Beranda dan klik foto profil Anda, lalu klik 'Chats'. 2. Klik tiga garis di sudut kanan atas, lalu pilih 'New Chat' untuk melihat daftar kontak.",
        images: ["/images/helpcenter/attendee_p3_26.png", "/images/helpcenter/attendee_p3_27.png"]
      },
      {
        question: "Bagaimana cara Check-in Acara?",
        answer: "1. Cari acara di halaman Discover. 2. Lihat informasi acara. 3. Pilih kategori acara dan lakukan check-in. 4. Dapatkan QR pass sebagai bukti akses.",
        images: ["/images/helpcenter/attendee_p3_32.png", "/images/helpcenter/attendee_p3_33.png", "/images/helpcenter/attendee_p3_34.png", "/images/helpcenter/attendee_p3_35.png"]
      }
    ],
    admin: [
      {
        question: "Bagaimana alur Check-in bagi Admin?",
        answer: "1. Klik fitur 'Check-in' untuk mengelola daftar peserta acara. 2. Klik 'Scan passes' untuk memindai kode QR peserta, data akan diperbarui secara real-time. 3. Klik 'Walk-in' jika peserta tidak memiliki kode QR. Admin dapat memasukkan nama dan email peserta secara langsung.",
        images: ["/images/helpcenter/admin_p1_5.png", "/images/helpcenter/admin_p1_6.png", "/images/helpcenter/admin_p1_7.png"]
      },
      {
        question: "Bagaimana cara membuat Lucky Draw di aplikasi TactLink?",
        answer: "1. Buka acara dan klik 'Lucky Draw'. 2. Atur waktu pembukaan dan penutupan, lalu tambahkan hadiah. 3. Ikon Lucky Draw akan muncul di sisi kanan.",
        images: ["/images/helpcenter/admin_p2_8.png", "/images/helpcenter/admin_p2_9.png", "/images/helpcenter/admin_p2_10.png"]
      },
      {
        question: "Bagaimana cara mengatur Speed Networking?",
        answer: "1. Buka acara dan klik 'Speed Networking'. 2. Atur jumlah anggota per grup dan ronde, lalu klik 'Generate Preview'. 3. Tinjau pembagian tim. 4. Klik 'Publish'.",
        images: ["/images/helpcenter/admin_p2_11.png", "/images/helpcenter/admin_p2_12.png", "/images/helpcenter/admin_p2_13.png", "/images/helpcenter/admin_p2_14.png", "/images/helpcenter/admin_p2_15.png"]
      },
      {
        question: "Bagaimana cara melihat fitur Asosiasi?",
        answer: "1. Klik 'Create New Association' untuk menambah asosiasi baru. 2. Klik salah satu asosiasi dalam daftar untuk melihat info detail. 3. Klik 'members' untuk melihat jumlah peserta, atau 'View All' untuk info acara.",
        images: ["/images/helpcenter/admin_p2_16.png", "/images/helpcenter/admin_p3_17.png", "/images/helpcenter/admin_p3_18.png"]
      }
    ]
  }
};

export const helpDictionaries: Record<string, HelpData> = {
  en,
  id,
  vi: en, // Fallbacks
  bn: en,
  tl: en,
};
