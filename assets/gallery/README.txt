HOW TO ADD YOUR OWN PHOTOS
==========================
1. Copy your pictures into this folder (assets/gallery/). JPG, PNG or WebP all work.
   Good example names (examples only, they are not included):
     evan-match-01.jpg, evan-match-02.jpg, evan-training-01.jpg, efaz-match-01.jpg
   Use simple names: lowercase, no spaces.
2. Open assets/gallery/photos.js in any text editor.
3. Add one line per picture inside the square brackets, for example:
     { type: "photo", src: "assets/gallery/evan-match-01.jpg", alt: "Sufiyan Evan playing a forehand", caption: "Match action" },
   - type must be "photo" for real photographs.
   - src is the path from gallery.html, so keep the "assets/gallery/" start.
   - alt is a short description for people using screen readers. Please always fill it in.
   - Keep the comma at the end of every line except the last one.
4. Save, then open gallery.html. Photos show in a grid with matching proportions (cropped to fit)
   and open larger when clicked. Arrow keys move between pictures, Esc closes.

Tips
- Resize large photos to about 1600 pixels wide before adding them so the page loads quickly.
- Only add photos you own or have permission to use.
- The three files in illustrations/ are original drawings, not photographs. Delete their lines in photos.js if you do not want them.
