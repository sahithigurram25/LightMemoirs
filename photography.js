
//Photography Page
// photography.js — builds a simple photo grid inside #photo-grid when loaded
class Photography {
    constructor(isDesktop = true, photosCount = 40) {
        this.isDesktop = isDesktop;
        this.isTablet = false;
        this.isMobile = false;
        this.photosCount = photosCount;
        console.log('Creating photography page');
    }

    setPhotoGridSize(cols, rows, imagePaths = []) {
        const grid = document.getElementById('photo-grid');
        if (!grid) return;

        grid.style.setProperty('--cols', String(cols));
        grid.style.setProperty('--rows', String(rows));
        grid.innerHTML = '';

        const total = cols * rows;
        const imgs = Array.isArray(imagePaths) && imagePaths.length ? imagePaths : [];

        for (let i = 0; i < total; i++) {
            const src = imgs.length ? imgs[i % imgs.length] : null;
            const item = document.createElement('div');
            item.className = 'photo-item';

            if (src) {
                const img = document.createElement('img');
                img.src = src;
                img.alt = `Photo ${i + 1}`;
                img.loading = 'lazy';
                item.appendChild(img);
            } else {
                // optional placeholder content when no image
                item.textContent = ''; // or insert an icon/placeholder element
            }

            grid.appendChild(item);
        }
    }

    createPage() {
        let cols = 4; // default desktop
        if (this.isTablet) cols = 2;
        if (this.isMobile) cols = 1;

            const rows = Math.ceil(this.photosCount / cols);

            // generate inline SVG placeholders as data URLs (so no external requests)
            const images = [];
            for (let i = 0; i < this.photosCount; i++) {
                const label = i + 1;
                const size = 800; // base size for placeholder
                const bg = (i % 2 === 0) ? '#e6eef8' : '#f0e6f8';
                const fg = '#555';
                const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' font-family='Arial, Helvetica, sans-serif' font-size='72' fill='${fg}' dominant-baseline='middle' text-anchor='middle'>${label}</text></svg>`;
                const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
                images.push(dataUrl);
            }

            this.setPhotoGridSize(cols, rows, images);
            console.log('photography page created');
    }
}

// Instantiate when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const photographyPage = new Photography(true, 40);
    photographyPage.createPage();
});