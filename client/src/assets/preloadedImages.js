// src/assets/preloadedImages.js

const images = [
  'images/hero-img.webp',
  'images/hero-text.webp',
  '/icons/chars/s.webp',
  '/icons/chars/c.webp',
  '/icons/chars/h.webp',
  '/icons/chars/o.webp',
  '/icons/chars/o.webp',
  '/icons/chars/l.webp',
  '/icons/chars/a.webp',
];

export const preloadImages = () => {
  return new Promise((resolve, reject) => {
    let loadedCount = 0;
    const total = images.length;

    for (let src of images) {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === total) resolve(); // ✅ كل الصور اتحملت بنجاح
      };

      img.onerror = () => {
        reject(new Error(`فشل تحميل الصورة: ${src}`)); // ❌ صورة فشلت = فشل كلي
      };
    }

    // Optional: add timeout to avoid hanging forever
    setTimeout(() => {
      reject(new Error("Timeout while loading images")); // ⏱️ حمولة بطيئة جدًا = فشل
    }, 4000);
  });
};
