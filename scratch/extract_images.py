import fitz
import os

pdf_path = "Helpcenter TactLink - Admin (1).pdf"
output_dir = "scratch/extracted_images"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

img_count = 19
for page_num in range(2, 4):  # pages 3 and 4
    page = doc.load_page(page_num)
    images = page.get_images(full=True)
    print(f"Page {page_num + 1} has {len(images)} images.")
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        filename = f"admin_p{page_num + 1}_{img_count}.{image_ext}"
        filepath = os.path.join(output_dir, filename)
        with open(filepath, "wb") as f:
            f.write(image_bytes)
        print(f"Saved {filename}")
        img_count += 1
