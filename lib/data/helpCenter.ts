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
              answer: "TactLink digitizes traditional networking by bringing digital namecards, contact management, member directories, and event networking into one platform. Users can create their digital identity, share it instantly through a QR code or link, collect and organize connections, and communicate with their network through the platform. For associations and communities, TactLink provides a centralized digital environment where members can discover, connect, and collaborate. Organizations can also use TactLink to manage events, facilitate networking, and improve member engagement."
          },
          {
              question: "What features does TactLink offer?",
              answer: "TactLink offers a range of features that support digital networking, including digital business cards, event management, association management, a smart networking directory, connections, and chat. These features help users build, manage, and interact with their professional networks on a single platform."
          },
          {
              question: "What is a Digital Business Card?",
              answer: "Digital Business Card is a digital version of a traditional business card that allows users to share their professional information electronically. With TactLink, users can create and customize their digital business card and share it with others without the need for a physical card."
          },
          {
              question: "How can TactLink support networking and events?",
              answer: "TactLink helps make networking more efficient by connecting participants, members, and professionals through digital networking tools. For events, TactLink can support event management and networking activities, allowing participants to connect and engage with others before, during, or after an event."
          },
          {
              question: "Who can use TactLink?",
              answer: "TactLink can be used by individuals, professionals, organizations, associations, communities, and event organizers. It can support different networking needs, from building professional connections to managing member and event engagement."
          },
          {
              question: "Why should I use TactLink?",
              answer: "TactLink makes networking easier, more efficient, and more sustainable by helping users connect, share their digital business cards, and build professional relationships in one platform."
          },
          {
              question: "What is digital networking?",
              answer: "Digital networking is the process of building and maintaining professional connections through digital platforms. It allows people to connect, share information, and stay in touch without relying solely on traditional face-to-face networking."
          },
          {
              question: "What makes TactLink different from traditional networking?",
              answer: "TactLink combines networking, digital business cards, events, and community connections in one platform. It provides a more convenient and sustainable way to connect compared to relying on physical business cards and traditional networking methods."
          },
          {
              question: "How does TactLink support the Sustainable Development Goals (SDGs)?",
              answer: [
                  "SDG 12 – Responsible Consumption and Production: Reducing the use of paper business cards and printing waste.",
                  "SDG 13 – Climate Action: Reducing carbon footprints through digital networking.",
                  "SDG 15 – Life on Land: Supporting the conservation of natural resources and forests.",
                  "SDG 17 – Partnerships for the Goals: Strengthening collaboration and partnerships among individuals, organizations, and communities through a digital networking platform."
              ]
          },
          {
              question: "Can I scan a physical business card with TactLink?",
              answer: "TactLink allows you to scan physical business cards using OCR (Optical Character Recognition). The information from the scanned card can be digitized and saved to your Smart Directory, making it easier to manage and stay connected with your contacts."
          },
          {
              question: "Can I connect with someone by scanning their QR code?",
              answer: "TactLink allows users to scan a QR code to quickly access and save another user’s digital business card, making it easier to connect and exchange professional information."
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
              answer: "TactLink adalah platform jejaring digital dan manajemen kontak yang dirancang untuk membantu individu, profesional, asosiasi, dan komunitas membangun koneksi yang bermakna. TactLink memungkinkan pengguna membuat dan berbagi kartu nama digital, mengelola kontak, menemukan dan terhubung dengan anggota, serta berpartisipasi dalam pengalaman jejaring interaktif."
          },
          {
              question: "Bagaimana cara kerja TactLink?",
              answer: "TactLink mendigitalkan jejaring tradisional dengan membawa kartu nama digital, manajemen kontak, direktori anggota, dan jejaring acara ke dalam satu platform. Pengguna dapat membuat identitas digital mereka, membagikannya secara instan melalui kode QR atau tautan, mengumpulkan dan mengatur koneksi, serta berkomunikasi dengan jaringan mereka melalui platform. Untuk asosiasi dan komunitas, TactLink menyediakan lingkungan digital terpusat di mana anggota dapat menemukan, terhubung, dan berkolaborasi. Organisasi juga dapat menggunakan TactLink untuk mengelola acara, memfasilitasi jejaring, dan meningkatkan keterlibatan anggota."
          },
          {
              question: "Fitur apa saja yang ditawarkan TactLink?",
              answer: "TactLink menawarkan berbagai fitur yang mendukung jejaring digital, termasuk kartu nama digital, manajemen acara, manajemen asosiasi, direktori jejaring pintar, koneksi, dan obrolan. Fitur-fitur ini membantu pengguna membangun, mengelola, dan berinteraksi dengan jaringan profesional mereka di satu platform."
          },
          {
              question: "Apa itu Kartu Nama Digital?",
              answer: "Kartu Nama Digital adalah versi digital dari kartu nama tradisional yang memungkinkan pengguna membagikan informasi profesional mereka secara elektronik. Dengan TactLink, pengguna dapat membuat dan menyesuaikan kartu nama digital mereka serta membagikannya dengan orang lain tanpa perlu kartu fisik."
          },
          {
              question: "Bagaimana TactLink dapat mendukung jejaring dan acara?",
              answer: "TactLink membantu membuat jejaring lebih efisien dengan menghubungkan peserta, anggota, dan profesional melalui alat jejaring digital. Untuk acara, TactLink dapat mendukung manajemen acara dan aktivitas jejaring, memungkinkan peserta untuk terhubung dan terlibat dengan orang lain sebelum, selama, atau setelah acara."
          },
          {
              question: "Siapa yang dapat menggunakan TactLink?",
              answer: "TactLink dapat digunakan oleh individu, profesional, organisasi, asosiasi, komunitas, dan penyelenggara acara. Platform ini dapat mendukung berbagai kebutuhan jejaring, dari membangun koneksi profesional hingga mengelola keterlibatan anggota dan acara."
          },
          {
              question: "Mengapa saya harus menggunakan TactLink?",
              answer: "TactLink membuat jejaring menjadi lebih mudah, lebih efisien, dan lebih berkelanjutan dengan membantu pengguna terhubung, membagikan kartu nama digital mereka, dan membangun hubungan profesional di satu platform."
          },
          {
              question: "Apa itu jejaring digital?",
              answer: "Jejaring digital adalah proses membangun dan memelihara koneksi profesional melalui platform digital. Ini memungkinkan orang untuk terhubung, berbagi informasi, dan tetap berhubungan tanpa hanya mengandalkan jejaring tatap muka tradisional."
          },
          {
              question: "Apa yang membedakan TactLink dari jejaring tradisional?",
              answer: "TactLink menggabungkan jejaring, kartu nama digital, acara, dan koneksi komunitas dalam satu platform. Platform ini memberikan cara yang lebih nyaman dan berkelanjutan untuk terhubung dibandingkan dengan mengandalkan kartu nama fisik dan metode jejaring tradisional."
          },
          {
              question: "Bagaimana TactLink mendukung Tujuan Pembangunan Berkelanjutan (SDGs)?",
              answer: [
                  "SDG 12 – Konsumsi dan Produksi yang Bertanggung Jawab: Mengurangi penggunaan kartu nama kertas dan limbah pencetakan.",
                  "SDG 13 – Penanganan Perubahan Iklim: Mengurangi jejak karbon melalui jejaring digital.",
                  "SDG 15 – Ekosistem Daratan: Mendukung pelestarian sumber daya alam dan hutan.",
                  "SDG 17 – Kemitraan untuk Mencapai Tujuan: Memperkuat kolaborasi dan kemitraan antar individu, organisasi, dan komunitas melalui platform jejaring digital."
              ]
          },
          {
              question: "Bisakah saya memindai kartu nama fisik dengan TactLink?",
              answer: "TactLink memungkinkan Anda memindai kartu nama fisik menggunakan OCR (Pengenalan Karakter Optik). Informasi dari kartu yang dipindai dapat didigitalkan dan disimpan ke Smart Directory Anda, membuatnya lebih mudah untuk mengelola dan tetap terhubung dengan kontak Anda."
          },
          {
              question: "Dapatkah saya terhubung dengan seseorang dengan memindai kode QR mereka?",
              answer: "TactLink memungkinkan pengguna memindai kode QR untuk dengan cepat mengakses dan menyimpan kartu nama digital pengguna lain, membuatnya lebih mudah untuk terhubung dan bertukar informasi profesional."
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
