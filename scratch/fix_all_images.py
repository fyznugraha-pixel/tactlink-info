import json
import re

with open('lib/data/helpCenter.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We will just parse out the EN and ID attendee arrays and replace their images keys.

english_attendee = [
    {
        "question": "How to create a TactLink account?",
        "answer": [
            "Step 1: Access The Application",
            "Step 2: Complete your personal details by clicking “Create an Account” and entering your name, email, mobile number, and password.",
            "Step 3: Sign up with Gmail & Apple for iOS users"
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(1, 4)]
    },
    {
        "question": "How to complete your Digital Business Card?",
        "answer": [
            "Step 1: Click “Complete My Card” on your dashboard.",
            "Step 2: Add your profile photo and complete company details.",
            "Step 3: Add a logo and link your social media accounts."
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(4, 7)]
    },
    {
        "question": "How to Scan a Digital Business Card?",
        "answer": [
            "Step 1: Click the scan icon in the top right corner",
            "Step 2: Select an available method to add a business card",
            "Step 3: After scanning, the following screen will appear. Then, click “Done”",
            "Step 4: Go to the “Contacts” feature and click on one of the contacts you want to connect",
            "Step 5: Click the (+) sign to connect, you can also view the company, job title, and contact mobile number.",
            "Step 6: After clicking “Connect” your digital business card will appear. Click the digital business card, then click “Next”.",
            "Step 7: Once successful, click “Send Request” to connect"
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(7, 14)]
    },
    {
        "question": "How do I change the layout of a digital business card?",
        "answer": [
            "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
            "Step 2: Click \"change layout\" to change the layout of your digital business card",
            "Step 3: Select one of the layouts you wish to use"
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(14, 17)]
    },
    {
        "question": "How to edit your profile?",
        "answer": [
            "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
            "Step 2: Click \"Edit\" to change profile details",
            "Step 3: Complete profile details such as name, email, mobile number, address, social media, and logo"
        ],
        "images": [f"/images/helpcenter/attendee_p2_{i}.png" for i in range(17, 20)]
    },
    {
        "question": "How to share Digital Business Card?",
        "answer": [
            "Step 1: Click the digital business card to change the layout, and if you wish to add a business card, click \"Add new card\"",
            "Step 2: Click \"My QR\" to view the digital business card",
            "Step 3: Share this QR code to connect with another people and digital business cards can also be downloaded"
        ],
        "images": [f"/images/helpcenter/attendee_p2_{i}.png" for i in range(20, 23)]
    },
    {
        "question": "How do I view the chat feature?",
        "answer": [
            "Step 1: Go to the Home Page and click your profile photo, a screen like the one above will appear, then click \"Chats\"",
            "Step 2: Click the three lines in the top right corner, then click “New Chat”",
            "Step 3: list of connected contacts will appear"
        ],
        "images": [f"/images/helpcenter/attendee_p2_{i}.png" for i in range(23, 26)]
    },
    {
        "question": "How do I create a group?",
        "answer": [
            "Step 1: Go to the Home Page and click your profile photo, a screen like the one above will appear, then click \"Chats\"",
            "Step 2: Click the three lines in the top right corner, then click “Create New Group”",
            "Step 3: Add a photo and the group name, then add members and click “Create”"
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(26, 29)]
    },
    {
        "question": "How to Check-in Event?",
        "answer": [
            "Step 1: Go to the event feature, Participants find the event on the Discover page.",
            "Step 2: View Detailed event information",
            "Step 3: Choosing the appropriate event category",
            "Step 4: Check in for the event",
            "Step 5: Obtain a QR pass as proof of access"
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(29, 34)]
    },
    {
        "question": "How do I view the association feature?",
        "answer": [
            "Step 1: View the list of associations joined",
            "Step 2: View association information, including the number of members, events, and activities",
            "Step 3: Find and select available events within the association",
            "Step 4: View the list of members in the association."
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(34, 38)]
    },
    {
        "question": "How to Accept a Connection Request on the TactLink App?",
        "answer": [
            "Step 1: Click the bell icon to view notifications and see who sent you a connection request",
            "Step 2: Click the contact who sent the request to connect",
            "Step 3: Click “Accept” to accept the connection request, or click “View Contact” to view the contact’s details",
            "Step 4: Clicking \"View contact\" displays the digital business card, you can then click \"Accept\" to accept the connection request."
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(38, 42)]
    }
]

indonesian_attendee = [
    {
        "question": "Bagaimana cara membuat akun TactLink?",
        "answer": [
            "Langkah 1: Akses Aplikasi",
            "Langkah 2: Lengkapi detail pribadi Anda dengan mengeklik “Buat Akun” dan masukkan nama, email, nomor ponsel, dan kata sandi Anda.",
            "Langkah 3: Daftar menggunakan Gmail atau Apple (untuk pengguna iOS)"
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(1, 4)]
    },
    {
        "question": "Bagaimana cara melengkapi Kartu Nama Digital Anda?",
        "answer": [
            "Langkah 1: Klik “Lengkapi Kartu Saya” di dasbor Anda.",
            "Langkah 2: Tambahkan foto profil dan lengkapi detail perusahaan.",
            "Langkah 3: Tambahkan logo dan tautkan media sosial Anda."
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(4, 7)]
    },
    {
        "question": "Bagaimana cara Memindai Kartu Nama Digital?",
        "answer": [
            "Langkah 1: Klik ikon pindai di sudut kanan atas",
            "Langkah 2: Pilih metode yang tersedia untuk menambahkan kartu nama",
            "Langkah 3: Setelah memindai, layar berikut akan muncul. Kemudian, klik “Selesai”",
            "Langkah 4: Buka fitur “Kontak” dan klik salah satu kontak yang ingin Anda hubungkan",
            "Langkah 5: Klik tanda (+) untuk terhubung, Anda juga dapat melihat perusahaan, jabatan, dan nomor ponsel kontak.",
            "Langkah 6: Setelah mengeklik “Hubungkan” kartu nama digital Anda akan muncul. Klik kartu nama digital tersebut, lalu klik “Berikutnya”.",
            "Langkah 7: Setelah berhasil, klik “Kirim Permintaan” untuk terhubung"
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(7, 14)]
    },
    {
        "question": "Bagaimana cara mengubah tata letak kartu nama digital?",
        "answer": [
            "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama baru, klik \"Tambahkan kartu baru\"",
            "Langkah 2: Klik \"Ubah tata letak\" untuk mengganti desain kartu nama digital Anda",
            "Langkah 3: Pilih salah satu tata letak yang ingin Anda gunakan"
        ],
        "images": [f"/images/helpcenter/attendee_p1_{i}.png" for i in range(14, 17)]
    },
    {
        "question": "Bagaimana cara mengedit profil Anda?",
        "answer": [
            "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama, klik \"Tambahkan kartu baru\"",
            "Langkah 2: Klik \"Edit\" untuk mengubah detail profil",
            "Langkah 3: Lengkapi detail profil seperti nama, email, nomor ponsel, alamat, media sosial, dan logo"
        ],
        "images": [f"/images/helpcenter/attendee_p2_{i}.png" for i in range(17, 20)]
    },
    {
        "question": "Bagaimana cara membagikan Kartu Nama Digital?",
        "answer": [
            "Langkah 1: Klik kartu nama digital untuk mengubah tata letaknya, dan jika Anda ingin menambahkan kartu nama, klik \"Tambahkan kartu baru\"",
            "Langkah 2: Klik \"QR Saya\" untuk melihat kartu nama digital",
            "Langkah 3: Bagikan kode QR ini untuk terhubung dengan orang lain dan kartu nama digital juga dapat diunduh"
        ],
        "images": [f"/images/helpcenter/attendee_p2_{i}.png" for i in range(20, 23)]
    },
    {
        "question": "Bagaimana cara melihat fitur obrolan (chat)?",
        "answer": [
            "Langkah 1: Buka Beranda dan klik foto profil Anda, layar seperti di atas akan muncul, lalu klik \"Obrolan (Chats)\"",
            "Langkah 2: Klik tiga garis di sudut kanan atas, lalu klik “Obrolan Baru”",
            "Langkah 3: Daftar kontak yang terhubung akan muncul"
        ],
        "images": [f"/images/helpcenter/attendee_p2_{i}.png" for i in range(23, 26)]
    },
    {
        "question": "Bagaimana cara membuat grup?",
        "answer": [
            "Langkah 1: Buka Beranda dan klik foto profil Anda, layar seperti di atas akan muncul, lalu klik \"Obrolan\"",
            "Langkah 2: Klik tiga garis di sudut kanan atas, lalu klik “Buat Grup Baru”",
            "Langkah 3: Tambahkan foto dan nama grup, lalu tambahkan anggota dan klik “Buat”"
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(26, 29)]
    },
    {
        "question": "Bagaimana cara Check-in di Acara (Event)?",
        "answer": [
            "Langkah 1: Buka fitur acara, temukan acara di halaman Jelajahi (Discover).",
            "Langkah 2: Lihat informasi detail acara",
            "Langkah 3: Pilih kategori acara yang sesuai",
            "Langkah 4: Lakukan Check-in untuk acara tersebut",
            "Langkah 5: Dapatkan tiket QR sebagai bukti akses masuk"
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(29, 34)]
    },
    {
        "question": "Bagaimana cara melihat fitur asosiasi?",
        "answer": [
            "Langkah 1: Lihat daftar asosiasi yang Anda ikuti",
            "Langkah 2: Lihat informasi asosiasi, termasuk jumlah anggota, acara, dan aktivitas",
            "Langkah 3: Temukan dan pilih acara yang tersedia di dalam asosiasi tersebut",
            "Langkah 4: Lihat daftar anggota dalam asosiasi."
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(34, 38)]
    },
    {
        "question": "Bagaimana cara Menerima Permintaan Koneksi di Aplikasi TactLink?",
        "answer": [
            "Langkah 1: Klik ikon lonceng untuk melihat notifikasi dan melihat siapa yang mengirimi Anda permintaan koneksi",
            "Langkah 2: Klik kontak yang mengirimkan permintaan untuk terhubung",
            "Langkah 3: Klik “Terima” untuk menerima permintaan koneksi, atau klik “Lihat Kontak” untuk melihat detail kontak",
            "Langkah 4: Mengeklik \"Lihat kontak\" akan menampilkan kartu nama digital, Anda kemudian dapat mengeklik \"Terima\" untuk menerima permintaan."
        ],
        "images": [f"/images/helpcenter/attendee_p3_{i}.png" for i in range(38, 42)]
    }
]

parts = content.split('const id: HelpData = {')

def format_json(obj):
    s = json.dumps(obj, indent=4, ensure_ascii=False)
    s = s.replace('"question":', 'question:')
    s = s.replace('"answer":', 'answer:')
    s = s.replace('"images":', 'images:')
    return '\n'.join(['      ' + line for line in s.split('\n')])

en_part = re.sub(r'attendee:\s*\[.*?\]\s*,\s*admin:', f'attendee: {format_json(english_attendee).strip()},\n    admin:', parts[0], flags=re.DOTALL)
id_part = re.sub(r'attendee:\s*\[.*?\]\s*,\s*admin:', f'attendee: {format_json(indonesian_attendee).strip()},\n    admin:', parts[1], flags=re.DOTALL)

final_content = en_part + 'const id: HelpData = {' + id_part

with open('lib/data/helpCenter.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Updated helpCenter.ts with perfectly mapped attendee images.")
