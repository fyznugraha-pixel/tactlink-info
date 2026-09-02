import fitz
import os

pdf_path = "Helpcenter TactLink - Admin (1).pdf"
doc = fitz.open(pdf_path)

for i in [2]:  # Page 3
    page = doc.load_page(i)
    image_list = page.get_images(full=True)
    print(f"Page {i+1} has {len(image_list)} images.")
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        with open(f"scratch/q5_image_{img_index}.{image_ext}", "wb") as f:
            f.write(image_bytes)
        print(f"Saved scratch/q5_image_{img_index}.{image_ext}")
