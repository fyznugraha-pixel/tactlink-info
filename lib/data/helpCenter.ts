import { BookOpen, User, Shield } from "lucide-react";

export type HelpCategory = "general" | "attendee" | "admin";

export interface HelpItem {
  question: string;
  answer: string | string[];
  images?: (string | string[])[];
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
                  "/images/helpcenter/admin_p2_8.png",
                  "/images/helpcenter/admin_p2_11.png",
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
                  "/images/helpcenter/q5_step3.png",
                  "/images/helpcenter/q5_step4.png",
                  "/images/helpcenter/q5_step5.png"
              ]
          },
          {
              question: "How can I access the Association Admin Dashboard?",
              answer: [
                  "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account if you are an iOS user and have been registered by the TactLink team as an association admin.",
                  "Step 2: On the Dashboard, admins can view the number and growth of Members, manage member Dues, monitor items that require attention under Needs Attention, and view upcoming events in the Upcoming section."
              ],
              images: [
                  "/images/helpcenter/admin_p4_23.png",
                  ["/images/helpcenter/admin_p3_19.png", "/images/helpcenter/admin_p3_20.png"]
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
                  "/images/helpcenter/admin_p4_23.png",
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
                  "/images/helpcenter/admin_p4_23.png",
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
                  "/images/helpcenter/admin_p4_23.png",
                  "/images/helpcenter/admin_p4_29.png",
                  "/images/helpcenter/admin_p4_30.png"
              ]
          }
      ]
  }
};

const id: HelpData = {
  title: "Ada yang bisa kami bantu?",
  subtitle: "Temukan jawaban, panduan, dan tutorial penggunaan TactLink dengan gampang.",
  searchPlaceholder: "Cari topik bantuan...",
  categories: [
    {
      id: "general",
      title: "Pengenalan",
      description: "Pemahaman dasar soal platform dan fitur TactLink.",
      icon: BookOpen,
    },
    {
      id: "attendee",
      title: "Untuk Peserta",
      description: "Panduan bikin profil, koneksi, dan obrolan.",
      icon: User,
    },
    {
      id: "admin",
      title: "Untuk Admin",
      description: "Cara mudah ngatur event, check-in, dan komunitas.",
      icon: Shield,
    },
  ],
  content: {
    general: [
          {
              question: "Apa itu TactLink?",
              answer: "TactLink adalah platform jejaring digital dan manajemen kontak yang dirancang khusus buat ngebantu kamu, profesional, asosiasi, hingga komunitas dalam membangun koneksi yang bermakna. Di sini, kamu bisa bikin dan membagikan kartu nama digital, ngelola kontak, nyari anggota, sampai ikutan aktivitas networking yang interaktif."
          },
          {
              question: "Gimana sih cara kerja TactLink?",
              answer: "TactLink mengubah cara networking tradisional jadi serba digital. Mulai dari kartu nama, kelola kontak, direktori anggota, sampai networking event—semuanya ada dalam satu platform. Kamu tinggal bikin profil digital, share dengan gampang pakai QR atau link, dan koneksimu otomatis tersimpan rapi. Buat asosiasi atau komunitas, TactLink jadi pusat digital tempat anggota bisa saling sapa, ngobrol, dan kolaborasi. Event organizer juga bisa pakai platform ini buat ngatur acara biar peserta lebih gampang networking."
          },
          {
              question: "Fitur unggulan apa aja yang ada di TactLink?",
              answer: "Banyak banget! Mulai dari Kartu Nama Digital, Manajemen Event, Dashboard Asosiasi, Direktori Pintar, fitur Connect, sampai Chat. Semua fitur ini dirancang biar kamu gampang bangun dan ngelola jaringan profesionalmu cukup di satu tempat."
          },
          {
              question: "Apa sih bedanya Kartu Nama Digital?",
              answer: "Kartu Nama Digital itu versi modern dari kartu cetak biasa, tapi serba elektronik. Di TactLink, kamu bebas ngatur tampilan kartu namamu dan langsung bisa nge-share ke orang lain tanpa harus repot bawa-bawa kertas fisik lagi."
          },
          {
              question: "Gimana TactLink ngebantu event dan networking?",
              answer: "TactLink bikin urusan networking jadi jauh lebih praktis. Peserta, anggota asosiasi, atau profesional bisa saling terhubung dengan mudah. Khusus buat event, TactLink siap bantu memfasilitasi peserta buat ngobrol dan kenalan, baik sebelum, pas hari H, maupun sesudah acara."
          },
          {
              question: "Siapa aja yang cocok pakai TactLink?",
              answer: "Siapa aja! Mulai dari individu, profesional, perusahaan, asosiasi, komunitas, sampai penyelenggara acara (Event Organizer). TactLink bisa memenuhi berbagai kebutuhan networking-mu, dari sekadar nambah koneksi bisnis sampai ngurus aktivitas anggota dan event besar."
          },
          {
              question: "Kenapa aku harus pakai TactLink?",
              answer: "Karena TactLink bikin networking jauh lebih gampang, cepat, dan pastinya ramah lingkungan! Kamu bisa ngurus semua kebutuhan kenalan, bagi kartu nama, sampai jaga hubungan profesional hanya dari satu platform yang rapi."
          },
          {
              question: "Apa yang dimaksud jejaring digital?",
              answer: "Jejaring digital itu cara kita ngebangun dan menjaga koneksi kerja atau bisnis secara online. Jadi, kamu tetap bisa bagi info, ngobrol, dan menjaga hubungan profesional tanpa harus selalu mengandalkan pertemuan fisik."
          },
          {
              question: "Apa bedanya TactLink dengan networking biasa?",
              answer: "TactLink menggabungkan urusan networking, kartu nama digital, event, sampai komunitas ke dalam satu platform aja. Jauh lebih praktis dan ramah lingkungan dibandingkan harus mengumpulkan atau membagikan kartu nama kertas setiap kali ada acara."
          },
          {
          {
              question: "Gimana cara TactLink dukung Tujuan Pembangunan Berkelanjutan (SDGs)?",
              answer: [
                  "SDG 12 – Konsumsi & Produksi Bertanggung Jawab: Kurangi limbah kertas dari cetak kartu nama.",
                  "SDG 13 – Penanganan Perubahan Iklim: Pangkas jejak karbon lewat networking digital.",
                  "SDG 15 – Ekosistem Daratan: Bantu jaga kelestarian alam dan hutan.",
                  "SDG 17 – Kemitraan: Perkuat kolaborasi antar individu, organisasi, dan komunitas lewat platform digital."
              ]
          },
          {
              question: "Bisa nggak sih scan kartu nama fisik pakai TactLink?",
              answer: "Bisa banget! TactLink punya fitur OCR (Optical Character Recognition) buat scan kartu nama fisik. Info dari kartu fisik otomatis masuk ke Smart Directory kamu, jadi lebih gampang disimpan dan dikelola."
          },
          {
              question: "Bisa terhubung dengan orang lain cuma lewat scan QR?",
              answer: "Tentu bisa! Kamu tinggal scan QR code pengguna lain buat langsung akses dan menyimpan kartu nama digital mereka. Tukeran kontak kerjaan jadi lebih cepat dan praktis."
          }
      ],
    attendee: [
          {
              question: "Gimana cara bikin akun TactLink?",
              answer: [
                  "Langkah 1: Buka aplikasi TactLink",
                  "Langkah 2: Lengkapi profil kamu dengan klik “Buat Akun”, lalu masukin nama, email, nomor HP, dan password.",
                  "Langkah 3: Atau, kamu bisa langsung daftar pakai Gmail atau Apple ID (khusus iOS)"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_1.png",
                  "/images/helpcenter/attendee_p1_2.png",
                  "/images/helpcenter/attendee_p1_3.png"
              ]
          },
          {
              question: "Gimana cara ngelengkapin Kartu Nama Digital?",
              answer: [
                  "Langkah 1: Klik “Lengkapi Kartu Saya” di halaman dasbor.",
                  "Langkah 2: Tambahkan foto profil dan isi info perusahaanmu.",
                  "Langkah 3: Jangan lupa tambahkan logo dan link media sosialmu."
              ],
              images: [
                  "/images/helpcenter/attendee_p1_4.png",
                  "/images/helpcenter/attendee_p1_5.png",
                  "/images/helpcenter/attendee_p1_6.png"
              ]
          },
          {
              question: "Gimana cara Scan Kartu Nama Digital orang lain?",
              answer: [
                  "Langkah 1: Klik ikon scan di pojok kanan atas layar",
                  "Langkah 2: Pilih metode tambah kontak yang kamu mau",
                  "Langkah 3: Habis scan, bakal muncul info kontaknya. Terus klik “Selesai”",
                  "Langkah 4: Buka menu “Kontak” dan pilih kontak yang mau kamu ajak koneksi",
                  "Langkah 5: Klik tombol (+) buat connect. Kamu juga bisa lihat info perusahaan, jabatan, dan nomor HP mereka.",
                  "Langkah 6: Setelah klik “Hubungkan”, pilih kartu namamu yang mau kamu share, lalu klik “Berikutnya”.",
                  "Langkah 7: Kalau udah, klik “Kirim Permintaan” buat mulai berteman"
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
              question: "Gimana cara ganti desain/tata letak kartu namaku?",
              answer: [
                  "Langkah 1: Klik kartu nama digital kamu. Kalau mau nambah kartu baru, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Klik \"Ubah tata letak\" buat pilih desain kartu namamu",
                  "Langkah 3: Pilih desain atau layout yang paling pas buat kamu"
              ],
              images: [
                  "/images/helpcenter/attendee_p1_14.png",
                  "/images/helpcenter/attendee_p1_15.png",
                  "/images/helpcenter/attendee_p1_16.png"
              ]
          },
          {
              question: "Gimana cara edit profil?",
              answer: [
                  "Langkah 1: Klik kartu nama digitalmu. Kalau mau bikin profil baru, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Pilih \"Edit\" buat ubah detail profilmu",
                  "Langkah 3: Lengkapi profil seperti nama, email, nomor HP, alamat, sosmed, atau logo"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_17.png",
                  "/images/helpcenter/attendee_p2_18.png",
                  "/images/helpcenter/attendee_p2_19.png"
              ]
          },
          {
              question: "Gimana cara nge-share Kartu Nama Digital?",
              answer: [
                  "Langkah 1: Klik kartu nama digital kamu. Kalau mau nambah profil baru, klik \"Tambahkan kartu baru\"",
                  "Langkah 2: Pilih \"QR Saya\" buat nampilin kode QR kartu namamu",
                  "Langkah 3: Tunjukin QR ini ke orang lain buat di-scan. Kartu nama digitalmu juga bisa di-download lho!"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_20.png",
                  "/images/helpcenter/attendee_p2_21.png",
                  "/images/helpcenter/attendee_p2_22.png"
              ]
          },
          {
              question: "Gimana cara buka fitur Chat (Obrolan)?",
              answer: [
                  "Langkah 1: Buka halaman Beranda, klik foto profilmu, terus pilih menu \"Obrolan (Chats)\"",
                  "Langkah 2: Klik ikon tiga garis di pojok kanan atas, lalu pilih “Obrolan Baru”",
                  "Langkah 3: Daftar kontak yang udah terhubung sama kamu bakal muncul di sini"
              ],
              images: [
                  "/images/helpcenter/attendee_p2_23.png",
                  "/images/helpcenter/attendee_p2_24.png",
                  "/images/helpcenter/attendee_p2_25.png"
              ]
          },
          {
              question: "Gimana cara bikin Grup Chat?",
              answer: [
                  "Langkah 1: Buka halaman Beranda, klik foto profilmu, terus pilih menu \"Obrolan\"",
                  "Langkah 2: Klik ikon tiga garis di pojok kanan atas, lalu pilih “Buat Grup Baru”",
                  "Langkah 3: Masukin foto dan nama grup, tambahin anggota yang mau diundang, terus klik “Buat”"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_26.png",
                  "/images/helpcenter/attendee_p3_27.png",
                  "/images/helpcenter/attendee_p3_28.png"
              ]
          },
          {
              question: "Gimana cara Check-in di Event?",
              answer: [
                  "Langkah 1: Buka menu Event, cari event yang mau kamu datengin di halaman Jelajahi (Discover)",
                  "Langkah 2: Cek info detail soal event-nya",
                  "Langkah 3: Pilih kategori tiket atau event yang sesuai",
                  "Langkah 4: Lakukan Check-in buat dapetin akses",
                  "Langkah 5: Kamu bakal dapet tiket QR sebagai bukti buat masuk ke acara"
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
              question: "Gimana cara gabung ke Asosiasi/Komunitas?",
              answer: [
                  "Langkah 1: Buka daftar asosiasi atau komunitas yang kamu ikuti",
                  "Langkah 2: Cek info lengkap asosiasinya, mulai dari jumlah anggota sampai aktivitas terbaru",
                  "Langkah 3: Cari dan pilih event yang lagi diadain sama asosiasi tersebut",
                  "Langkah 4: Kamu juga bisa ngelihat daftar anggota lain di komunitas itu"
              ],
              images: [
                  "/images/helpcenter/attendee_p3_34.png",
                  "/images/helpcenter/attendee_p3_35.png",
                  "/images/helpcenter/attendee_p3_36.png",
                  "/images/helpcenter/attendee_p3_37.png"
              ]
          },
          {
              question: "Gimana cara Nerima Permintaan Koneksi (Add Friend)?",
              answer: [
                  "Langkah 1: Klik ikon lonceng buat ngecek notifikasi, di situ kelihatan siapa aja yang ngajak konekan",
                  "Langkah 2: Klik profil orang yang ngirim permintaan",
                  "Langkah 3: Langsung klik “Terima” buat konfirmasi, atau klik “Lihat Kontak” kalau pengen kepo profilnya dulu",
                  "Langkah 4: Kalau klik \"Lihat kontak\", bakal muncul detail kartu nama digitalnya. Setelah itu baru klik \"Terima\"."
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
              question: "Gimana cara ngecek Detail Check-in Event?",
              answer: [
                  "Langkah 1: Jadwal Acara. Admin bisa ngecek daftar dan jadwal acara yang lagi dikelola.",
                  "Langkah 2: Detail Acara. Buka halaman detail acara buat ngelihat info lengkapnya.",
                  "Langkah 3: QR Acara. Admin bisa langsung nge-share kode QR acara ke para peserta.",
                  "Langkah 4: Daftar Peserta. Pantau terus daftar peserta yang udah gabung."
              ],
              images: [
                  "/images/helpcenter/admin_p1_4.png",
                  "/images/helpcenter/admin_p1_3.png",
                  "/images/helpcenter/admin_p1_2.png",
                  "/images/helpcenter/admin_p1_1.png"
              ]
          },
          {
              question: "Gimana cara Admin nerapin Alur Check-in Event?",
              answer: [
                  "Langkah 1: Buka fitur “Check-in” buat ngatur daftar peserta acara.",
                  "Langkah 2: Klik “Scan passes” buat scan kode QR peserta. Status kehadiran bakal langsung update saat itu juga.",
                  "Langkah 3: Pilih opsi “Walk-in” kalau ada peserta yang nggak punya QR. Admin bisa masukin nama dan email mereka secara manual."
              ],
              images: [
                  "/images/helpcenter/admin_p1_5.png",
                  "/images/helpcenter/admin_p1_6.png",
                  "/images/helpcenter/admin_p1_7.png"
              ]
          },
          {
              question: "Gimana cara bikin Lucky Draw di TactLink?",
              answer: [
                  "Langkah 1: Masuk ke halaman event, terus klik “Lucky Draw” buat nyiapin hadiah untuk peserta.",
                  "Langkah 2: Tentukan jam buka-tutup Lucky Draw, lalu masukin hadiah apa aja yang mau dibagi-bagiin.",
                  "Langkah 3: Kalau udah berhasil dibuat, ikon Lucky Draw bakal muncul di sebelah kanan layar."
              ],
              images: [
                  "/images/helpcenter/admin_p2_8.png",
                  "/images/helpcenter/admin_p2_9.png",
                  "/images/helpcenter/admin_p2_10.png",
                  "/images/helpcenter/admin_p2_11.png"
              ]
          },
          {
              question: "Gimana cara ngatur Speed Networking?",
              answer: [
                  "Langkah 1: Buka event-nya dan klik “Create Speed Networking”.",
                  "Langkah 2: Tentuin berapa orang per grup dan jumlah ronde yang dimau, habis itu klik “Generate Preview”.",
                  "Langkah 3: Setelah dibuat, bakal muncul layar preview yang nunjukin pembagian tim masing-masing peserta.",
                  "Langkah 4: Dari layar preview tadi, klik “Publish” biar tampilannya live kayak di gambar.",
                  "Langkah 5: Kalau fitur “Speed Networking” sukses dibikin, ikonnya langsung nongol di halaman event."
              ],
              images: [
                  "/images/helpcenter/admin_p2_8.png",
                  "/images/helpcenter/admin_p2_11.png",
                  "/images/helpcenter/admin_p2_12.png",
                  "/images/helpcenter/admin_p2_13.png",
                  "/images/helpcenter/admin_p2_14.png"
              ]
          },
          {
              question: "Gimana cara lihat fitur Asosiasi?",
              answer: [
                  "Langkah 1: Klik “Create New Association” kalau kamu mau nambahin asosiasi baru.",
                  "Langkah 2: Jangan lupa isi foto, nama asosiasi, lokasi, beserta deskripsinya.",
                  "Langkah 3: Pilih salah satu asosiasi yang ada di daftar buat ngelihat info detailnya.",
                  "Langkah 4: Klik menu “members” buat ngecek jumlah anggotanya.",
                  "Langkah 5: Pas di Langkah 3, kamu juga bisa klik “View All” buat mantau info event-nya."
              ],
              images: [
                  "/images/helpcenter/admin_p2_15.png",
                  "/images/helpcenter/admin_p2_16.png",
                  "/images/helpcenter/q5_step3.png",
                  "/images/helpcenter/q5_step4.png",
                  "/images/helpcenter/q5_step5.png"
              ]
          },
          {
              question: "Gimana cara akses Dasbor Admin Asosiasi?",
              answer: [
                  "Langkah 1: Buka link https://tactlink-admin-prod.vercel.app/. Login pakai email yang udah didaftarin atau Apple ID (khusus iOS), pastikan tim TactLink udah daftarin kamu sebagai admin asosiasi ya.",
                  "Langkah 2: Di Dasbor, kamu bisa mantau perkembangan jumlah anggota, ngelola Iuran (Dues), merhatiin hal-hal penting di kolom Needs Attention, dan ngecek jadwal di bagian Upcoming."
              ],
              images: [
                  "/images/helpcenter/admin_p4_23.png",
                  ["/images/helpcenter/admin_p3_19.png", "/images/helpcenter/admin_p3_20.png"]
              ]
          },
          {
              question: "Gimana cara kelola anggota asosiasi?",
              answer: [
                  "Langkah 1: Buka https://tactlink-admin-prod.vercel.app/ dan login pakai akun kamu.",
                  "Langkah 2: Klik ikon di pojok kiri atas buat buka menu web, lalu klik “Members” buat mantau jumlah anggota, email, status, sama peran mereka di asosiasi.",
                  "Langkah 3: Klik “Invite Members” buat ngundang orang masuk asosiasi. Cukup masukin email mereka, lalu klik “Send Invitation”."
              ],
              images: [
                  "/images/helpcenter/admin_p4_23.png",
                  "/images/helpcenter/admin_p4_24.jpeg",
                  "/images/helpcenter/admin_p4_25.png"
              ]
          },
          {
              question: "Gimana cara bikin Event baru?",
              answer: [
                  "Langkah 1: Buka web https://tactlink-admin-prod.vercel.app/ dan login.",
                  "Langkah 2: Klik fitur “Events” buat ngecek detail acara yang ada di asosiasimu.",
                  "Langkah 3: Cek info event yang udah lewat, lagi jalan, atau yang akan datang.",
                  "Langkah 4: Di halaman tadi, tinggal klik \"Create Event\" buat jadwalkan event baru."
              ],
              images: [
                  "/images/helpcenter/admin_p4_23.png",
                  "/images/helpcenter/admin_p4_26.png",
                  "/images/helpcenter/admin_p4_27.png",
                  "/images/helpcenter/admin_p4_28.png"
              ]
          },
          {
              question: "Gimana cara ngatur setting-an asosiasi?",
              answer: [
                  "Langkah 1: Buka web https://tactlink-admin-prod.vercel.app/ dan login.",
                  "Langkah 2: Buka menu pengelolaan pengaturan atau setting asosiasi.",
                  "Langkah 3: Atur format nomor anggota dengan nambahin awalan (prefix). Kamu bisa custom awalannya, atau biarin kosong aja kalau cuma mau pakai nomor urut biasa."
              ],
              images: [
                  "/images/helpcenter/admin_p4_23.png",
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
