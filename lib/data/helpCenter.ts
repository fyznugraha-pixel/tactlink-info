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
                  "Step 1: Click “Complete My Card” on your dashboard.",
                  "Step 2: Add your profile photo and complete company details.",
                  "Step 3: Add a logo and link your social media accounts."
              ],
              images: [
                  "/images/helpcenter/attendee_p1_4.png",
                  "/images/helpcenter/attendee_p1_5.png",
                  "/images/helpcenter/attendee_p1_6.png"
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
                  "/images/helpcenter/attendee_p1_12.png",
                  "/images/helpcenter/attendee_p1_13.png"
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
                  "/images/helpcenter/attendee_p1_14.png",
                  "/images/helpcenter/attendee_p1_15.png",
                  "/images/helpcenter/attendee_p1_16.png"
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
                  "/images/helpcenter/attendee_p2_17.png",
                  "/images/helpcenter/attendee_p2_18.png",
                  "/images/helpcenter/attendee_p2_19.png"
              ]
          },
          {
              question: "How to share Digital Business Card?",
              answer: [
                  "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
                  "Step 2: Click \"My QR\" to view the digital business card",
                  "Step 3: Share this QR code to connect with another people and digital business cards can also be downloaded"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_20.png",
                  "/images/helpcenter/attendee_p2_21.png",
                  "/images/helpcenter/attendee_p2_22.png"
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
                  "/images/helpcenter/attendee_p2_23.png",
                  "/images/helpcenter/attendee_p2_24.png",
                  "/images/helpcenter/attendee_p2_25.png"
              ]
          },
          {
              question: "How do I create a group?",
              answer: [
                  "Step 1: Go to the Home Page and click your profile photo, a screen like the one above will appear, then click \"Chats\"",
                  "Step 2: Click the three lines in the top right corner, then click “Create New Group”",
                  "Step 3: Add a photo and the group name, then add members and click “Create”"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_26.png",
                  "/images/helpcenter/attendee_p3_27.png",
                  "/images/helpcenter/attendee_p3_28.png"
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
                  "/images/helpcenter/attendee_p3_29.png",
                  "/images/helpcenter/attendee_p3_30.png",
                  "/images/helpcenter/attendee_p3_31.png",
                  "/images/helpcenter/attendee_p3_32.png",
                  "/images/helpcenter/attendee_p3_33.png"
              ]
          },
          {
              question: "How do I view the association feature?",
              answer: [
                  "Step 1: View the list of associations joined",
                  "Step 2: View association information, including the number of members, events, and activities",
                  "Step 3: Find and select available events within the association",
                  "Step 4: View the list of members in the association."
              ],
              images: [
                  "/images/helpcenter/attendee_p3_34.png",
                  "/images/helpcenter/attendee_p3_35.png",
                  "/images/helpcenter/attendee_p3_36.png",
                  "/images/helpcenter/attendee_p3_37.png"
              ]
          },
          {
              question: "How to Accept a Connection Request on the TactLink App?",
              answer: [
                  "Step 1: Click the bell icon to view notifications and see who sent you a connection request",
                  "Step 2: Click the contact who sent the request to connect",
                  "Step 3: Click “Accept” to accept the connection request, or click “View Contact” to view the contact’s details",
                  "Step 4: Clicking \"View contact\" displays the digital business card, you can then click \"Accept\" to accept the connection request."
              ],
              images: [
                  "/images/helpcenter/attendee_p3_38.png",
                  "/images/helpcenter/attendee_p3_39.png",
                  "/images/helpcenter/attendee_p3_40.png",
                  "/images/helpcenter/attendee_p3_41.png"
              ]
          }
      ],
    admin: [
          {
              question: "How to Check-in Event Detail?",
              answer: [
                  "Step 1: Event Schedule. Admin views the list and schedule of managed events.",
                  "Step 2: Event Detail. Admin opens the event details to view event information.",
                  "Step 3: Event QR. Admin can share the event QR code with participants.",
                  "Step 4: Participant List. Admin can view the participant list."
              ],
              images: [
                  "/images/helpcenter/admin_p1_4.png",
                  "/images/helpcenter/admin_p1_3.png",
                  "/images/helpcenter/admin_p1_2.png",
                  "/images/helpcenter/admin_p1_1.png"
              ]
          },
          {
              question: "How to Check-in Event Admin Flow?",
              answer: [
                  "Step 1: Click the “Check-in” feature to manage the list of event participants.",
                  "Step 2: Click “Scan passes” to scan the participant's QR code, it will update in real-time.",
                  "Step 3: Click “Walk-in” if the participant does not have a QR code. Admin can enter the participant’s name and email directly."
              ],
              images: [
                  "/images/helpcenter/admin_p1_5.png",
                  "/images/helpcenter/admin_p1_6.png",
                  "/images/helpcenter/admin_p1_7.png"
              ]
          },
          {
              question: "How do I create a lucky draw in the TactLink app?",
              answer: [
                  "Step 1: Open an event and click “Lucky Draw” to create prizes for event participants.",
                  "Step 2: Set the Lucky Draw opening and closing times, then add the prizes to be given to participants.",
                  "Step 3: Once the Lucky Draw is created, the Lucky Draw icon will appear on the right side."
              ],
              images: [
                  "/images/helpcenter/admin_p2_8.png",
                  "/images/helpcenter/admin_p2_9.png",
                  "/images/helpcenter/admin_p2_10.png",
                  "/images/helpcenter/admin_p2_11.png"
              ]
          },
          {
              question: "How to set up speed networking on the TactLink app?",
              answer: [
                  "Step 1: Open an event and click “Create Speed Networking” to create prizes for event participants.",
                  "Step 2: Set the number of members per group and the desired number of rounds, then click “Generate Preview”.",
                  "Step 3: After creating Speed Networking, a preview will appear showing which team each participant is assigned to.",
                  "Step 4: From Step 3, click “Publish” to display the screen.",
                  "Step 5: Once “Speed Networking” is successfully created, its icon will appear on the event page."
              ],
              images: [
                  "",
                  "",
                  "/images/helpcenter/admin_p2_12.png",
                  "/images/helpcenter/admin_p2_13.png",
                  "/images/helpcenter/admin_p2_14.png"
              ]
          },
          {
              question: "How do I view the association feature on the TactLink App?",
              answer: [
                  "Step 1: Click “Create New Association” to add a new association.",
                  "Step 2: Complete the photo, association name, location, and description.",
                  "Step 3: Click on one of the associations in the list to view detailed information.",
                  "Step 4: Click “members” to see the number of participants.",
                  "Step 5: In Step 3, click “View All” to view event information."
              ],
              images: [
                  "/images/helpcenter/admin_p2_15.png",
                  "/images/helpcenter/admin_p2_16.png",
                  "/images/helpcenter/admin_p3_17.png",
                  "/images/helpcenter/admin_p3_18.png",
                  "/images/helpcenter/admin_p3_17.png"
              ]
          },
          {
              question: "How can I access the Association Admin Dashboard?",
              answer: [
                  "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account if you are an iOS user and have been registered by the TactLink team as an association admin.",
                  "Step 2: On the Dashboard, admins can view the number and growth of Members, manage member Dues, monitor items that require attention under Needs Attention, and view upcoming events in the Upcoming section."
              ],
              images: [
                  "/images/helpcenter/admin_p3_19.png",
                  "/images/helpcenter/admin_p3_20.png"
              ]
          },
          {
              question: "How can I manage association members?",
              answer: [
                  "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account if you are an iOS user.",
                  "Step 2: Click the icon in the top-left corner to explore the web features, then click “Members” to view the number of members, email addresses, status, and association roles.",
                  "Step 3: Click “Invite Members” to add association members by entering their email addresses, then click “Send Invitation”."
              ],
              images: [
                  "/images/helpcenter/admin_p3_21.jpeg",
                  "/images/helpcenter/admin_p4_24.jpeg",
                  "/images/helpcenter/admin_p4_25.png"
              ]
          },
          {
              question: "How can I create a new event?",
              answer: [
                  "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account.",
                  "Step 2: Click the “Events” feature to view event details within the association.",
                  "Step 3: View information about past, in-progress, and upcoming events.",
                  "Step 4: In step 3, click \"Create Event\" to schedule a new event."
              ],
              images: [
                  "/images/helpcenter/admin_p3_21.jpeg",
                  "/images/helpcenter/admin_p4_26.png",
                  "/images/helpcenter/admin_p4_27.png",
                  "/images/helpcenter/admin_p4_28.png"
              ]
          },
          {
              question: "How can I manage association settings?",
              answer: [
                  "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account.",
                  "Step 2: Manage association-related settings.",
                  "Step 3: Set the membership number format by adding a prefix to member numbers. The prefix can be customized or left blank to use sequential numbers without a prefix."
              ],
              images: [
                  "/images/helpcenter/admin_p3_21.jpeg",
                  "/images/helpcenter/admin_p4_29.png",
                  "/images/helpcenter/admin_p4_30.png"
              ]
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
                  "Langkah 1: Klik “Lengkapi Kartu Saya” di dasbor Anda.",
                  "Langkah 2: Tambahkan foto profil dan lengkapi detail perusahaan.",
                  "Langkah 3: Tambahkan logo dan tautkan media sosial Anda."
              ],
              images: [
                  "/images/helpcenter/attendee_p1_4.png",
                  "/images/helpcenter/attendee_p1_5.png",
                  "/images/helpcenter/attendee_p1_6.png"
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
                  "/images/helpcenter/attendee_p1_12.png",
                  "/images/helpcenter/attendee_p1_13.png"
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
                  "/images/helpcenter/attendee_p1_14.png",
                  "/images/helpcenter/attendee_p1_15.png",
                  "/images/helpcenter/attendee_p1_16.png"
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
                  "/images/helpcenter/attendee_p2_17.png",
                  "/images/helpcenter/attendee_p2_18.png",
                  "/images/helpcenter/attendee_p2_19.png"
              ]
          },
          {
              question: "Bagaimana cara membagikan Kartu Nama Digital?",
              answer: [
                  "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Klik \"QR Saya\" untuk melihat kartu nama digital",
                  "Langkah 3: Bagikan kode QR ini untuk terhubung dengan orang lain dan kartu nama digital juga dapat diunduh"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_20.png",
                  "/images/helpcenter/attendee_p2_21.png",
                  "/images/helpcenter/attendee_p2_22.png"
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
                  "/images/helpcenter/attendee_p2_23.png",
                  "/images/helpcenter/attendee_p2_24.png",
                  "/images/helpcenter/attendee_p2_25.png"
              ]
          },
          {
              question: "Bagaimana cara membuat grup?",
              answer: [
                  "Langkah 1: Buka Beranda dan klik foto profil Anda, layar seperti di atas akan muncul, lalu klik \"Obrolan\"",
                  "Langkah 2: Klik tiga garis di sudut kanan atas, lalu klik “Buat Grup Baru”",
                  "Langkah 3: Tambahkan foto dan nama grup, lalu tambahkan anggota dan klik “Buat”"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_26.png",
                  "/images/helpcenter/attendee_p3_27.png",
                  "/images/helpcenter/attendee_p3_28.png"
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
                  "/images/helpcenter/attendee_p3_29.png",
                  "/images/helpcenter/attendee_p3_30.png",
                  "/images/helpcenter/attendee_p3_31.png",
                  "/images/helpcenter/attendee_p3_32.png",
                  "/images/helpcenter/attendee_p3_33.png"
              ]
          },
          {
              question: "Bagaimana cara melihat fitur asosiasi?",
              answer: [
                  "Langkah 1: Lihat daftar asosiasi yang Anda ikuti",
                  "Langkah 2: Lihat informasi asosiasi, termasuk jumlah anggota, acara, dan aktivitas",
                  "Langkah 3: Temukan dan pilih acara yang tersedia di dalam asosiasi tersebut",
                  "Langkah 4: Lihat daftar anggota dalam asosiasi."
              ],
              images: [
                  "/images/helpcenter/attendee_p3_34.png",
                  "/images/helpcenter/attendee_p3_35.png",
                  "/images/helpcenter/attendee_p3_36.png",
                  "/images/helpcenter/attendee_p3_37.png"
              ]
          },
          {
              question: "Bagaimana cara Menerima Permintaan Koneksi di Aplikasi TactLink?",
              answer: [
                  "Langkah 1: Klik ikon lonceng untuk melihat notifikasi dan melihat siapa yang mengirimi Anda permintaan koneksi",
                  "Langkah 2: Klik kontak yang mengirimkan permintaan untuk terhubung",
                  "Langkah 3: Klik “Terima” untuk menerima permintaan koneksi, atau klik “Lihat Kontak” untuk melihat detail kontak",
                  "Langkah 4: Mengeklik \"Lihat kontak\" akan menampilkan kartu nama digital, Anda kemudian dapat mengeklik \"Terima\" untuk menerima permintaan."
              ],
              images: [
                  "/images/helpcenter/attendee_p3_38.png",
                  "/images/helpcenter/attendee_p3_39.png",
                  "/images/helpcenter/attendee_p3_40.png",
                  "/images/helpcenter/attendee_p3_41.png"
              ]
          }
      ],
    admin: [
          {
              question: "Bagaimana cara melihat Detail Check-in Acara (Event Detail)?",
              answer: [
                  "Langkah 1: Jadwal Acara. Admin melihat daftar dan jadwal acara yang dikelola.",
                  "Langkah 2: Detail Acara. Admin membuka detail acara untuk melihat informasi acara.",
                  "Langkah 3: QR Acara. Admin dapat membagikan kode QR acara kepada peserta.",
                  "Langkah 4: Daftar Peserta. Admin dapat melihat daftar peserta."
              ],
              images: [
                  "/images/helpcenter/admin_p1_4.png",
                  "/images/helpcenter/admin_p1_3.png",
                  "/images/helpcenter/admin_p1_2.png",
                  "/images/helpcenter/admin_p1_1.png"
              ]
          },
          {
              question: "Bagaimana Alur Check-in Acara untuk Admin?",
              answer: [
                  "Langkah 1: Klik fitur “Check-in” untuk mengelola daftar peserta acara.",
                  "Langkah 2: Klik “Scan passes” untuk memindai kode QR peserta, status akan diperbarui secara real-time.",
                  "Langkah 3: Klik “Walk-in” jika peserta tidak memiliki kode QR. Admin dapat memasukkan nama dan email peserta secara langsung."
              ],
              images: [
                  "/images/helpcenter/admin_p1_5.png",
                  "/images/helpcenter/admin_p1_6.png",
                  "/images/helpcenter/admin_p1_7.png"
              ]
          },
          {
              question: "Bagaimana cara membuat Lucky Draw di aplikasi TactLink?",
              answer: [
                  "Langkah 1: Buka acara dan klik “Lucky Draw” untuk membuat hadiah bagi peserta acara.",
                  "Langkah 2: Atur waktu buka dan tutup Lucky Draw, lalu tambahkan hadiah yang akan diberikan kepada peserta.",
                  "Langkah 3: Setelah Lucky Draw berhasil dibuat, ikon Lucky Draw akan muncul di sisi kanan."
              ],
              images: [
                  "/images/helpcenter/admin_p2_8.png",
                  "/images/helpcenter/admin_p2_9.png",
                  "/images/helpcenter/admin_p2_10.png",
                  "/images/helpcenter/admin_p2_11.png"
              ]
          },
          {
              question: "Bagaimana cara mengatur Speed Networking di aplikasi TactLink?",
              answer: [
                  "Langkah 1: Buka acara dan klik “Create Speed Networking”.",
                  "Langkah 2: Atur jumlah anggota per grup dan jumlah ronde yang diinginkan, lalu klik “Generate Preview”.",
                  "Langkah 3: Setelah membuat Speed Networking, pratinjau (preview) akan muncul menunjukkan ke tim mana setiap peserta ditugaskan.",
                  "Langkah 4: Dari Langkah 3, klik “Publish” untuk menampilkan layar seperti pada gambar.",
                  "Langkah 5: Setelah “Speed Networking” berhasil dibuat, ikonnya akan muncul di halaman acara."
              ],
              images: [
                  "",
                  "",
                  "/images/helpcenter/admin_p2_12.png",
                  "/images/helpcenter/admin_p2_13.png",
                  "/images/helpcenter/admin_p2_14.png"
              ]
          },
          {
              question: "Bagaimana cara melihat fitur Asosiasi di Aplikasi TactLink?",
              answer: [
                  "Langkah 1: Klik “Create New Association” untuk menambahkan asosiasi baru.",
                  "Langkah 2: Lengkapi foto, nama asosiasi, lokasi, dan deskripsi.",
                  "Langkah 3: Klik salah satu asosiasi dalam daftar untuk melihat informasi lebih rinci.",
                  "Langkah 4: Klik “members” untuk melihat jumlah peserta.",
                  "Langkah 5: Pada Langkah 3, klik “View All” untuk melihat informasi acara."
              ],
              images: [
                  "/images/helpcenter/admin_p2_15.png",
                  "/images/helpcenter/admin_p2_16.png",
                  "/images/helpcenter/admin_p3_17.png",
                  "/images/helpcenter/admin_p3_18.png",
                  "/images/helpcenter/admin_p3_17.png"
              ]
          },
          {
              question: "Bagaimana cara mengakses Dasbor Admin Asosiasi?",
              answer: [
                  "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/. Masuk menggunakan email yang terdaftar atau akun Apple (untuk pengguna iOS) jika Anda telah didaftarkan oleh tim TactLink sebagai admin asosiasi.",
                  "Langkah 2: Di Dasbor, admin dapat melihat jumlah dan pertumbuhan Anggota, mengelola Iuran (Dues) anggota, memantau hal-hal yang memerlukan perhatian (Needs Attention), serta melihat acara mendatang di bagian Upcoming."
              ],
              images: [
                  "/images/helpcenter/admin_p3_19.png",
                  "/images/helpcenter/admin_p3_20.png"
              ]
          },
          {
              question: "Bagaimana cara mengelola anggota asosiasi?",
              answer: [
                  "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/ dan masuk menggunakan email atau akun Apple Anda.",
                  "Langkah 2: Klik ikon di sudut kiri atas untuk menjelajahi fitur web, lalu klik “Members” untuk melihat jumlah anggota, alamat email, status, dan peran dalam asosiasi.",
                  "Langkah 3: Klik “Invite Members” untuk menambahkan anggota asosiasi dengan memasukkan alamat email mereka, lalu klik “Send Invitation”."
              ],
              images: [
                  "/images/helpcenter/admin_p3_21.jpeg",
                  "/images/helpcenter/admin_p4_24.jpeg",
                  "/images/helpcenter/admin_p4_25.png"
              ]
          },
          {
              question: "Bagaimana cara membuat acara baru?",
              answer: [
                  "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/ dan masuk dengan akun Anda.",
                  "Langkah 2: Klik fitur “Events” untuk melihat detail acara di dalam asosiasi.",
                  "Langkah 3: Lihat informasi tentang acara yang sudah lewat, sedang berlangsung, dan yang akan datang.",
                  "Langkah 4: Pada langkah 3, klik \"Create Event\" untuk menjadwalkan acara baru."
              ],
              images: [
                  "/images/helpcenter/admin_p3_21.jpeg",
                  "/images/helpcenter/admin_p4_26.png",
                  "/images/helpcenter/admin_p4_27.png",
                  "/images/helpcenter/admin_p4_28.png"
              ]
          },
          {
              question: "Bagaimana cara mengelola pengaturan asosiasi?",
              answer: [
                  "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/ dan masuk dengan akun Anda.",
                  "Langkah 2: Kelola pengaturan terkait asosiasi.",
                  "Langkah 3: Atur format nomor keanggotaan dengan menambahkan awalan (prefix) pada nomor anggota. Awalan ini dapat disesuaikan atau dibiarkan kosong untuk menggunakan angka berurutan tanpa awalan."
              ],
              images: [
                  "/images/helpcenter/admin_p3_21.jpeg",
                  "/images/helpcenter/admin_p4_29.png",
                  "/images/helpcenter/admin_p4_30.png"
              ]
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
