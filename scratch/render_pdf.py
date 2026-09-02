import fitz
import os

pdf_path = "Helpcenter TactLink - Admin (1).pdf"
doc = fitz.open(pdf_path)

# Render page 4 (index 3)
page = doc.load_page(3)
pix = page.get_pixmap(dpi=150)
output_path = "C:/Users/faiz/.gemini/antigravity-ide/brain/040e1b6a-0df4-4bfc-9ae9-3fe69f9d2afd/pdf_page_4.png"
pix.save(output_path)
print(f"Saved {output_path}")
