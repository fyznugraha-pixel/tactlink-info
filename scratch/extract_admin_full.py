import fitz
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = "Helpcenter TactLink - Admin (1).pdf"

doc = fitz.open(pdf_path)
text = ""
for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    text += f"--- PAGE {page_num + 1} ---\n"
    text += page.get_text() + "\n"

with open("scratch/admin_full_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
