import fitz
import os

pdf_path = "Helpcenter TactLink - Admin (1).pdf"
doc = fitz.open(pdf_path)

for i in [1, 2]:
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    output_path = f"C:/Users/faiz/.gemini/antigravity-ide/brain/040e1b6a-0df4-4bfc-9ae9-3fe69f9d2afd/pdf_page_{i+1}.png"
    pix.save(output_path)
    print(f"Saved {output_path}")
