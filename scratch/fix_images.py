import json
import re

with open('lib/data/helpCenter.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Q3 (Scan a Digital Business Card)
content = content.replace(
    '"/images/helpcenter/attendee_p1_7.png",\n                  "/images/helpcenter/attendee_p1_8.png",\n                  "/images/helpcenter/attendee_p1_9.png",\n                  "/images/helpcenter/attendee_p1_10.png",\n                  "/images/helpcenter/attendee_p1_11.png",\n                  "",\n                  ""',
    '"/images/helpcenter/attendee_p1_7.png",\n                  "/images/helpcenter/attendee_p1_8.png",\n                  "/images/helpcenter/attendee_p1_9.png",\n                  "/images/helpcenter/attendee_p1_10.png",\n                  "/images/helpcenter/attendee_p1_11.png",\n                  "/images/helpcenter/attendee_p1_12.png",\n                  "/images/helpcenter/attendee_p1_13.png"'
)

# Fix Q4 (Change layout)
content = content.replace(
    '"images": [\n                  "/images/helpcenter/attendee_p1_12.png",\n                  "/images/helpcenter/attendee_p1_13.png",\n                  "/images/helpcenter/attendee_p1_14.png"\n              ]',
    '"images": [\n                  "/images/helpcenter/attendee_p1_14.png",\n                  "/images/helpcenter/attendee_p1_15.png",\n                  "/images/helpcenter/attendee_p1_16.png"\n              ]'
)

with open('lib/data/helpCenter.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed images for Q3 and Q4.")
