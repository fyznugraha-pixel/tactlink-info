import fitz
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = "C:/Users/faiz/.gemini/antigravity-ide/brain/040e1b6a-0df4-4bfc-9ae9-3fe69f9d2afd/.tempmediaStorage/media_1788329803573.pdf"

doc = fitz.open(pdf_path)
for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    text = page.get_text()
    print(f"--- PAGE {page_num + 1} ---")
    print(text.strip())
