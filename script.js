class Website{
    isDesktop;
    home = new Home();
    about = new About();
    photography = new Photography();
    videography = new Videography();

    isDesktopResolution(){
        const userAgent = navigator.userAgent.toLowerCase();
    
        if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop|tablet|ipad/.test(userAgent)) {
            return false;
        } else {
            return true;
        }
    }

    resizeViewport(width, height, elementId) {
        let container = document.getElementsByClassName(elementId)
        container.style.width = width;
        container.style.height = height;    
    }

    adjustViewport() {
        this.isDesktop = this.isDesktopResolution();
        window.addEventListener("resize", () => {
            if (this.isDesktop) {
                if (window.innerWidth > 1920) resizeViewport("1920px", window.innerHeight,"about");
            }
            else this.resizeViewport(window.innerWidth, window.innerHeight,"about");
        });
    }

    
    setHeader(){

    }

    setFooter(){

    }

    setContactPanel(){

    }

    setTagsPanel(){

    }

    setNavigationPanels(){
        this.setContactPanel();
        this.setTagsPanel();
    }

    createWebsite(){
        this.adjustViewport();
        this.setHeader();
        this.setFooter();
        this.about.createPage();
        this.home.createPage();
        this.photography.createPage();
        this.videography.createPage();
        console.log("website created");
    }
}
//Home page
class Home{
    createPage(){
        console.log("home page created");
    }
}
//About Page
class About{
    imagePath;
    infoText;

    setProfileImage(){
        const imageContainer = document.getElementById('aboutImage');
        imageContainer.innerHTML = '<img src="Images/About/DSC06071.JPG" class="image-placeholder">';
    }
    
    setProfileInfo(){
    
    }

    setContactInfo(){

    }

    createPage(){
        this.setProfileImage();
        this.setProfileInfo();
        this.setContactInfo();
        console.log("about page created");
    }


}


//Photography Page
class Photography{
    resolution;
    photosCount;

    Photography(isDesktop, photosCount){
        this.isDesktop = isDesktop;
        this.photosCount = photosCount;
    }

        /**
     * Build/update a grid sized cols x rows and populate images.
     * @param {number} cols - number of columns (e.g. 4)
     * @param {number} rows - number of rows (e.g. 10)
     * @param {string[]} imagePaths - array of image path strings to use
     *                                (will wrap if fewer than cols*rows)
     */
    setPhotoGridSize(cols, rows, imagePaths) {
        const grid = document.getElementById('photo-grid');
        if (!grid) return;

        // 1) set CSS variable so grid columns & rows update
        grid.style.setProperty('--cols', String(cols));
        grid.style.setProperty('--rows', String(rows));

        // 2) clear previous items
        grid.innerHTML = '';

        // 3) ensure we have the correct number of cells
        const total = cols * rows;
        // If there are no images provided, create empty placeholders
        const imgs = (Array.isArray(imagePaths) && imagePaths.length > 0) ? imagePaths : [];

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
    setLayout(){
        const gallery = document.getElementById('photographyGallery');
        for (let i = 1; i <= 6; i++) {
            //const img = document.createElement('img');
            //img.src = `https://via.placeholder.com/150?text=Image+${i}`;
            //img.alt = `Placeholder ${i}`;
            //gallery.appendChild(img);
        }
    }
    
    updatePhotoDatabase(){
    
    }

    createPage(){
        this.setLayout();
        console.log("photography page created");
    }

}


//Videography page
class Videography{

    
    setLayout(){

    }

    updateVideoDatabase(){

    }

    createPage(){
        console.log("videography page created");
    }
    
}

class DeviceType{
    static MONITOR = "monitor";
    static MOBILE = "mobile";
    static TABLET = "tablet"; 
}
class NavigationPanels{


    NavigationPanels(){

    }
    setNavigationPanels(){

    }
}
//main
const website = new Website();
website.createWebsite();

