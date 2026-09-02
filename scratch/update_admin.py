import json
import re

english_admin = [
    {
        "question": "How to Check-in Event Detail?",
        "answer": [
            "Step 1: Event Schedule. Admin views the list and schedule of managed events.",
            "Step 2: Event Detail. Admin opens the event details to view event information.",
            "Step 3: Event QR. Admin can share the event QR code with participants.",
            "Step 4: Participant List. Admin can view the participant list."
        ],
        "images": ["/images/helpcenter/admin_p1_1.png", "/images/helpcenter/admin_p1_2.png", "/images/helpcenter/admin_p1_3.png", "/images/helpcenter/admin_p1_4.png"]
    },
    {
        "question": "How to Check-in Event Admin Flow?",
        "answer": [
            "Step 1: Click the “Check-in” feature to manage the list of event participants.",
            "Step 2: Click “Scan passes” to scan the participant's QR code, it will update in real-time.",
            "Step 3: Click “Walk-in” if the participant does not have a QR code. Admin can enter the participant’s name and email directly."
        ],
        "images": ["/images/helpcenter/admin_p1_5.png", "/images/helpcenter/admin_p1_6.png", "/images/helpcenter/admin_p1_7.png"]
    },
    {
        "question": "How do I create a lucky draw in the TactLink app?",
        "answer": [
            "Step 1: Open an event and click “Lucky Draw” to create prizes for event participants.",
            "Step 2: Set the Lucky Draw opening and closing times, then add the prizes to be given to participants.",
            "Step 3: Once the Lucky Draw is created, the Lucky Draw icon will appear on the right side."
        ],
        "images": ["/images/helpcenter/admin_p2_8.png", "/images/helpcenter/admin_p2_9.png", "/images/helpcenter/admin_p2_10.png"]
    },
    {
        "question": "How to set up speed networking on the TactLink app?",
        "answer": [
            "Step 1: Open an event and click “Create Speed Networking” to create prizes for event participants.",
            "Step 2: Set the number of members per group and the desired number of rounds, then click “Generate Preview”.",
            "Step 3: After creating Speed Networking, a preview will appear showing which team each participant is assigned to.",
            "Step 4: From Step 3, click “Publish” to display the screen.",
            "Step 5: Once “Speed Networking” is successfully created, its icon will appear on the event page."
        ],
        "images": ["/images/helpcenter/admin_p2_11.png", "/images/helpcenter/admin_p2_12.png", "/images/helpcenter/admin_p2_13.png", "/images/helpcenter/admin_p2_14.png", "/images/helpcenter/admin_p2_15.png"]
    },
    {
        "question": "How do I view the association feature on the TactLink App?",
        "answer": [
            "Step 1: Click “Create New Association” to add a new association.",
            "Step 2: Complete the photo, association name, location, and description.",
            "Step 3: Click on one of the associations in the list to view detailed information.",
            "Step 4: Click “members” to see the number of participants.",
            "Step 5: In Step 3, click “View All” to view event information."
        ],
        "images": ["/images/helpcenter/admin_p2_16.png", "/images/helpcenter/admin_p3_17.png", "/images/helpcenter/admin_p3_18.png"]
    },
    {
        "question": "How can I access the Association Admin Dashboard?",
        "answer": [
            "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account if you are an iOS user and have been registered by the TactLink team as an association admin.",
            "Step 2: On the Dashboard, admins can view the number and growth of Members, manage member Dues, monitor items that require attention under Needs Attention, and view upcoming events in the Upcoming section."
        ]
    },
    {
        "question": "How can I manage association members?",
        "answer": [
            "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account if you are an iOS user.",
            "Step 2: Click the icon in the top-left corner to explore the web features, then click “Members” to view the number of members, email addresses, status, and association roles.",
            "Step 3: Click “Invite Members” to add association members by entering their email addresses, then click “Send Invitation”."
        ]
    },
    {
        "question": "How can I create a new event?",
        "answer": [
            "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account.",
            "Step 2: Click the “Events” feature to view event details within the association.",
            "Step 3: View information about past, in-progress, and upcoming events.",
            "Step 4: In step 3, click \"Create Event\" to schedule a new event."
        ]
    },
    {
        "question": "How can I manage association settings?",
        "answer": [
            "Step 1: Click link https://tactlink-admin-prod.vercel.app/. Log in using your registered email or Apple account.",
            "Step 2: Manage association-related settings.",
            "Step 3: Set the membership number format by adding a prefix to member numbers. The prefix can be customized or left blank to use sequential numbers without a prefix."
        ]
    }
]

indonesian_admin = [
    {
        "question": "Bagaimana cara melihat Detail Check-in Acara (Event Detail)?",
        "answer": [
            "Langkah 1: Jadwal Acara. Admin melihat daftar dan jadwal acara yang dikelola.",
            "Langkah 2: Detail Acara. Admin membuka detail acara untuk melihat informasi acara.",
            "Langkah 3: QR Acara. Admin dapat membagikan kode QR acara kepada peserta.",
            "Langkah 4: Daftar Peserta. Admin dapat melihat daftar peserta."
        ],
        "images": ["/images/helpcenter/admin_p1_1.png", "/images/helpcenter/admin_p1_2.png", "/images/helpcenter/admin_p1_3.png", "/images/helpcenter/admin_p1_4.png"]
    },
    {
        "question": "Bagaimana Alur Check-in Acara untuk Admin?",
        "answer": [
            "Langkah 1: Klik fitur “Check-in” untuk mengelola daftar peserta acara.",
            "Langkah 2: Klik “Scan passes” untuk memindai kode QR peserta, status akan diperbarui secara real-time.",
            "Langkah 3: Klik “Walk-in” jika peserta tidak memiliki kode QR. Admin dapat memasukkan nama dan email peserta secara langsung."
        ],
        "images": ["/images/helpcenter/admin_p1_5.png", "/images/helpcenter/admin_p1_6.png", "/images/helpcenter/admin_p1_7.png"]
    },
    {
        "question": "Bagaimana cara membuat Lucky Draw di aplikasi TactLink?",
        "answer": [
            "Langkah 1: Buka acara dan klik “Lucky Draw” untuk membuat hadiah bagi peserta acara.",
            "Langkah 2: Atur waktu buka dan tutup Lucky Draw, lalu tambahkan hadiah yang akan diberikan kepada peserta.",
            "Langkah 3: Setelah Lucky Draw berhasil dibuat, ikon Lucky Draw akan muncul di sisi kanan."
        ],
        "images": ["/images/helpcenter/admin_p2_8.png", "/images/helpcenter/admin_p2_9.png", "/images/helpcenter/admin_p2_10.png"]
    },
    {
        "question": "Bagaimana cara mengatur Speed Networking di aplikasi TactLink?",
        "answer": [
            "Langkah 1: Buka acara dan klik “Create Speed Networking”.",
            "Langkah 2: Atur jumlah anggota per grup dan jumlah ronde yang diinginkan, lalu klik “Generate Preview”.",
            "Langkah 3: Setelah membuat Speed Networking, pratinjau (preview) akan muncul menunjukkan ke tim mana setiap peserta ditugaskan.",
            "Langkah 4: Dari Langkah 3, klik “Publish” untuk menampilkan layar seperti pada gambar.",
            "Langkah 5: Setelah “Speed Networking” berhasil dibuat, ikonnya akan muncul di halaman acara."
        ],
        "images": ["/images/helpcenter/admin_p2_11.png", "/images/helpcenter/admin_p2_12.png", "/images/helpcenter/admin_p2_13.png", "/images/helpcenter/admin_p2_14.png", "/images/helpcenter/admin_p2_15.png"]
    },
    {
        "question": "Bagaimana cara melihat fitur Asosiasi di Aplikasi TactLink?",
        "answer": [
            "Langkah 1: Klik “Create New Association” untuk menambahkan asosiasi baru.",
            "Langkah 2: Lengkapi foto, nama asosiasi, lokasi, dan deskripsi.",
            "Langkah 3: Klik salah satu asosiasi dalam daftar untuk melihat informasi lebih rinci.",
            "Langkah 4: Klik “members” untuk melihat jumlah peserta.",
            "Langkah 5: Pada Langkah 3, klik “View All” untuk melihat informasi acara."
        ],
        "images": ["/images/helpcenter/admin_p2_16.png", "/images/helpcenter/admin_p3_17.png", "/images/helpcenter/admin_p3_18.png"]
    },
    {
        "question": "Bagaimana cara mengakses Dasbor Admin Asosiasi?",
        "answer": [
            "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/. Masuk menggunakan email yang terdaftar atau akun Apple (untuk pengguna iOS) jika Anda telah didaftarkan oleh tim TactLink sebagai admin asosiasi.",
            "Langkah 2: Di Dasbor, admin dapat melihat jumlah dan pertumbuhan Anggota, mengelola Iuran (Dues) anggota, memantau hal-hal yang memerlukan perhatian (Needs Attention), serta melihat acara mendatang di bagian Upcoming."
        ]
    },
    {
        "question": "Bagaimana cara mengelola anggota asosiasi?",
        "answer": [
            "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/ dan masuk menggunakan email atau akun Apple Anda.",
            "Langkah 2: Klik ikon di sudut kiri atas untuk menjelajahi fitur web, lalu klik “Members” untuk melihat jumlah anggota, alamat email, status, dan peran dalam asosiasi.",
            "Langkah 3: Klik “Invite Members” untuk menambahkan anggota asosiasi dengan memasukkan alamat email mereka, lalu klik “Send Invitation”."
        ]
    },
    {
        "question": "Bagaimana cara membuat acara baru?",
        "answer": [
            "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/ dan masuk dengan akun Anda.",
            "Langkah 2: Klik fitur “Events” untuk melihat detail acara di dalam asosiasi.",
            "Langkah 3: Lihat informasi tentang acara yang sudah lewat, sedang berlangsung, dan yang akan datang.",
            "Langkah 4: Pada langkah 3, klik \"Create Event\" untuk menjadwalkan acara baru."
        ]
    },
    {
        "question": "Bagaimana cara mengelola pengaturan asosiasi?",
        "answer": [
            "Langkah 1: Buka tautan https://tactlink-admin-prod.vercel.app/ dan masuk dengan akun Anda.",
            "Langkah 2: Kelola pengaturan terkait asosiasi.",
            "Langkah 3: Atur format nomor keanggotaan dengan menambahkan awalan (prefix) pada nomor anggota. Awalan ini dapat disesuaikan atau dibiarkan kosong untuk menggunakan angka berurutan tanpa awalan."
        ]
    }
]

with open('lib/data/helpCenter.ts', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('const id: HelpData = {')

def format_json(obj):
    s = json.dumps(obj, indent=4, ensure_ascii=False)
    s = s.replace('"question":', 'question:')
    s = s.replace('"answer":', 'answer:')
    s = s.replace('"images":', 'images:')
    return '\n'.join(['      ' + line for line in s.split('\n')])

# Currently admin is at the end of the english block
en_part = re.sub(r'admin:\s*\[.*?\]\s*', f'admin: {format_json(english_admin).strip()}\n  ', parts[0], flags=re.DOTALL)
id_part = re.sub(r'admin:\s*\[.*?\]\s*', f'admin: {format_json(indonesian_admin).strip()}\n  ', parts[1], flags=re.DOTALL)

final_content = en_part + 'const id: HelpData = {' + id_part

with open('lib/data/helpCenter.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Updated helpCenter.ts with 9 admin questions.")
