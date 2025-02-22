class Website{

    home = new Home();
    about = new About();
    photography = new Photography();
    videography = new Videography();

    adjustViewport() {
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

    setHeader(){

    }

    setFooter(){

    }

    createWebsite(){
        const isDesktop = this.adjustViewport();
        window.addEventListener("resize", () => {
            if (isDesktop) {
                if (window.innerWidth > 1920) resizeViewport("1920px", window.innerHeight,"about");
            }
            else this.resizeViewport(window.innerWidth, window.innerHeight,"about");
        });

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
        imageContainer.innerHTML = '<img src="/Images/About/DSC06071.JPG" class="image-placeholder">';
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

//main
const website = new Website();
website.createWebsite();

