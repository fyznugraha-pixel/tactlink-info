import re

with open('lib/data/helpCenter.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Q3 (Scan a Digital Business Card)
# It has `"", ""` at the end of the images array. We want to replace it.
content = re.sub(
    r'"/images/helpcenter/attendee_p1_11\.png",\s*"",\s*""',
    '"/images/helpcenter/attendee_p1_11.png",\n                  "/images/helpcenter/attendee_p1_12.png",\n                  "/images/helpcenter/attendee_p1_13.png"',
    content
)

# Fix Q4 (Change layout)
# It has `["/images/helpcenter/attendee_p1_12.png", "/images/helpcenter/attendee_p1_13.png", "/images/helpcenter/attendee_p1_14.png"]`
content = re.sub(
    r'"/images/helpcenter/attendee_p1_12\.png",\s*"/images/helpcenter/attendee_p1_13\.png",\s*"/images/helpcenter/attendee_p1_14\.png"',
    '"/images/helpcenter/attendee_p1_14.png",\n                  "/images/helpcenter/attendee_p1_15.png",\n                  "/images/helpcenter/attendee_p1_16.png"',
    content
)

with open('lib/data/helpCenter.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed images via regex.")
