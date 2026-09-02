import fitz

pdf_path = "C:/Users/faiz/.gemini/antigravity-ide/brain/040e1b6a-0df4-4bfc-9ae9-3fe69f9d2afd/.tempmediaStorage/media_1788329803508.pdf"

doc = fitz.open(pdf_path)
text = ""
for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    text += f"--- PAGE {page_num + 1} ---\n"
    text += page.get_text() + "\n"

with open("scratch/admin_text_clean.txt", "w", encoding="utf-8") as f:
    f.write(text)
