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
              answer: [
                  "Step 1: Access The Application",
                  "Step 2: Complete your personal details by clicking “Create an Account” and entering your name, email, mobile number, and password.",
                  "Step 3: Sign up with Gmail & Apple for iOS users"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_1.png",
                  "/images/helpcenter/attendee_p1_2.png",
                  "/images/helpcenter/attendee_p1_3.png"
              ]
          },
          {
              question: "How to complete your Digital Business Card?",
              answer: [
                  "Click “Complete My Card” to add a profile photo, company details, a logo, and social media links."
              ],
              images: [
                  "/images/helpcenter/attendee_p1_4.png"
              ]
          },
          {
              question: "How to Scan a Digital Business Card?",
              answer: [
                  "Step 1: Click the scan icon in the top right corner",
                  "Step 2: Select an available method to add a business card",
                  "Step 3: After scanning, the following screen will appear. Then, click “Done”",
                  "Step 4: Go to the “Contacts” feature and click on one of the contacts you want to connect",
                  "Step 5: Click the (+) sign to connect, you can also view the company, job title, and contact mobile number.",
                  "Step 6: After clicking “Connect” your digital business card will appear. Click the digital business card, then click “Next”.",
                  "Step 7: Once successful, click “Send Request” to connect"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_7.png",
                  "/images/helpcenter/attendee_p1_8.png",
                  "/images/helpcenter/attendee_p1_9.png",
                  "/images/helpcenter/attendee_p1_10.png",
                  "/images/helpcenter/attendee_p1_11.png",
                  "",
                  ""
              ]
          },
          {
              question: "How do I change the layout of a digital business card?",
              answer: [
                  "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
                  "Step 2: Click \"change layout\" to change the layout of your digital business card",
                  "Step 3: Select one of the layouts you wish to use"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_12.png",
                  "/images/helpcenter/attendee_p1_13.png",
                  "/images/helpcenter/attendee_p1_14.png"
              ]
          },
          {
              question: "How to edit your profile?",
              answer: [
                  "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
                  "Step 2: Click \"Edit\" to change profile details",
                  "Step 3: Complete profile details such as name, email, mobile number, address, social media, and logo"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_20.png",
                  "/images/helpcenter/attendee_p2_21.png",
                  "/images/helpcenter/attendee_p2_22.png"
              ]
          },
          {
              question: "How to share Digital Business Card?",
              answer: [
                  "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
                  "Step 2: Click \"My QR\" to view the digital business card",
                  "Step 3: Share this QR code to connect with another people and digital business cards can also be downloaded"
              ]
          },
          {
              question: "How do I view the chat feature?",
              answer: [
                  "Step 1: Go to the Home Page and click your profile photo, a screen like the one above will appear, then click \"Chats\"",
                  "Step 2: Click the three lines in the top right corner, then click “New Chat”",
                  "Step 3: list of connected contacts will appear"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_26.png",
                  "/images/helpcenter/attendee_p3_27.png",
                  ""
              ]
          },
          {
              question: "How do I create a group?",
              answer: [
                  "Step 1: Go to the Home Page and click your profile photo, a screen like the one above will appear, then click \"Chats\"",
                  "Step 2: Click the three lines in the top right corner, then click “Create New Group”",
                  "Step 3: Add a photo and the group name, then add members and click “Create”"
              ]
          },
          {
              question: "How to Check-in Event?",
              answer: [
                  "Step 1: Go to the event feature, Participants find the event on the Discover page.",
                  "Step 2: View Detailed event information",
                  "Step 3: Choosing the appropriate event category",
                  "Step 4: Check in for the event",
                  "Step 5: Obtain a QR pass as proof of access"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_32.png",
                  "/images/helpcenter/attendee_p3_33.png",
                  "/images/helpcenter/attendee_p3_34.png",
                  "/images/helpcenter/attendee_p3_35.png",
                  ""
              ]
          },
          {
              question: "How do I view the association feature?",
              answer: [
                  "Step 1: View the list of associations joined",
                  "Step 2: View association information, including the number of members, events, and activities",
                  "Step 3: Find and select available events within the association",
                  "Step 4: View the list of members in the association."
              ]
          },
          {
              question: "How to Accept a Connection Request on the TactLink App?",
              answer: [
                  "Step 1: Click the bell icon to view notifications and see who sent you a connection request",
                  "Step 2: Click the contact who sent the request to connect",
                  "Step 3: Click “Accept” to accept the connection request, or click “View Contact” to view the contact’s details",
                  "Step 4: Clicking \"View contact\" displays the digital business card, you can then click \"Accept\" to accept the connection request."
              ]
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
              answer: [
                  "Langkah 1: Akses Aplikasi",
                  "Langkah 2: Lengkapi detail pribadi Anda dengan mengeklik “Buat Akun” dan masukkan nama, email, nomor ponsel, dan kata sandi Anda.",
                  "Langkah 3: Daftar menggunakan Gmail atau Apple (untuk pengguna iOS)"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_1.png",
                  "/images/helpcenter/attendee_p1_2.png",
                  "/images/helpcenter/attendee_p1_3.png"
              ]
          },
          {
              question: "Bagaimana cara melengkapi Kartu Nama Digital Anda?",
              answer: [
                  "Klik “Lengkapi Kartu Saya” untuk menambahkan foto profil, detail perusahaan, logo, dan tautan media sosial."
              ],
              images: [
                  "/images/helpcenter/attendee_p1_4.png"
              ]
          },
          {
              question: "Bagaimana cara Memindai Kartu Nama Digital?",
              answer: [
                  "Langkah 1: Klik ikon pindai di sudut kanan atas",
                  "Langkah 2: Pilih metode yang tersedia untuk menambahkan kartu nama",
                  "Langkah 3: Setelah memindai, layar berikut akan muncul. Kemudian, klik “Selesai”",
                  "Langkah 4: Buka fitur “Kontak” dan klik salah satu kontak yang ingin Anda hubungkan",
                  "Langkah 5: Klik tanda (+) untuk terhubung, Anda juga dapat melihat perusahaan, jabatan, dan nomor ponsel kontak.",
                  "Langkah 6: Setelah mengeklik “Hubungkan” kartu nama digital Anda akan muncul. Klik kartu nama digital tersebut, lalu klik “Berikutnya”.",
                  "Langkah 7: Setelah berhasil, klik “Kirim Permintaan” untuk terhubung"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_7.png",
                  "/images/helpcenter/attendee_p1_8.png",
                  "/images/helpcenter/attendee_p1_9.png",
                  "/images/helpcenter/attendee_p1_10.png",
                  "/images/helpcenter/attendee_p1_11.png",
                  "",
                  ""
              ]
          },
          {
              question: "Bagaimana cara mengubah tata letak kartu nama digital?",
              answer: [
                  "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama baru, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Klik \"Ubah tata letak\" untuk mengganti desain kartu nama digital Anda",
                  "Langkah 3: Pilih salah satu tata letak yang ingin Anda gunakan"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_12.png",
                  "/images/helpcenter/attendee_p1_13.png",
                  "/images/helpcenter/attendee_p1_14.png"
              ]
          },
          {
              question: "Bagaimana cara mengedit profil Anda?",
              answer: [
                  "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Klik \"Edit\" untuk mengubah detail profil",
                  "Langkah 3: Lengkapi detail profil seperti nama, email, nomor ponsel, alamat, media sosial, dan logo"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_20.png",
                  "/images/helpcenter/attendee_p2_21.png",
                  "/images/helpcenter/attendee_p2_22.png"
              ]
          },
          {
              question: "Bagaimana cara membagikan Kartu Nama Digital?",
              answer: [
                  "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Klik \"QR Saya\" untuk melihat kartu nama digital",
                  "Langkah 3: Bagikan kode QR ini untuk terhubung dengan orang lain dan kartu nama digital juga dapat diunduh"
              ]
          },
          {
              question: "Bagaimana cara melihat fitur obrolan (chat)?",
              answer: [
                  "Langkah 1: Buka Beranda dan klik foto profil Anda, layar seperti di atas akan muncul, lalu klik \"Obrolan (Chats)\"",
                  "Langkah 2: Klik tiga garis di sudut kanan atas, lalu klik “Obrolan Baru”",
                  "Langkah 3: Daftar kontak yang terhubung akan muncul"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_26.png",
                  "/images/helpcenter/attendee_p3_27.png",
                  ""
              ]
          },
          {
              question: "Bagaimana cara membuat grup?",
              answer: [
                  "Langkah 1: Buka Beranda dan klik foto profil Anda, layar seperti di atas akan muncul, lalu klik \"Obrolan\"",
                  "Langkah 2: Klik tiga garis di sudut kanan atas, lalu klik “Buat Grup Baru”",
                  "Langkah 3: Tambahkan foto dan nama grup, lalu tambahkan anggota dan klik “Buat”"
              ]
          },
          {
              question: "Bagaimana cara Check-in di Acara (Event)?",
              answer: [
                  "Langkah 1: Buka fitur acara, temukan acara di halaman Jelajahi (Discover).",
                  "Langkah 2: Lihat informasi detail acara",
                  "Langkah 3: Pilih kategori acara yang sesuai",
                  "Langkah 4: Lakukan Check-in untuk acara tersebut",
                  "Langkah 5: Dapatkan tiket QR sebagai bukti akses masuk"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_32.png",
                  "/images/helpcenter/attendee_p3_33.png",
                  "/images/helpcenter/attendee_p3_34.png",
                  "/images/helpcenter/attendee_p3_35.png",
                  ""
              ]
          },
          {
              question: "Bagaimana cara melihat fitur asosiasi?",
              answer: [
                  "Langkah 1: Lihat daftar asosiasi yang Anda ikuti",
                  "Langkah 2: Lihat informasi asosiasi, termasuk jumlah anggota, acara, dan aktivitas",
                  "Langkah 3: Temukan dan pilih acara yang tersedia di dalam asosiasi tersebut",
                  "Langkah 4: Lihat daftar anggota dalam asosiasi."
              ]
          },
          {
              question: "Bagaimana cara Menerima Permintaan Koneksi di Aplikasi TactLink?",
              answer: [
                  "Langkah 1: Klik ikon lonceng untuk melihat notifikasi dan melihat siapa yang mengirimi Anda permintaan koneksi",
                  "Langkah 2: Klik kontak yang mengirimkan permintaan untuk terhubung",
                  "Langkah 3: Klik “Terima” untuk menerima permintaan koneksi, atau klik “Lihat Kontak” untuk melihat detail kontak",
                  "Langkah 4: Mengeklik \"Lihat kontak\" akan menampilkan kartu nama digital, Anda kemudian dapat mengeklik \"Terima\" untuk menerima permintaan."
              ]
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
