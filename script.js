website = new Website();
website.createWebsite();


class Website{

    home = new Home();
    about = new About();
    photography = new Photography();
    videography = new Videography();
    
    createWebsite(){
        const isDesktop = adjustViewport();
        window.addEventListener("resize", () => {
            if (isDesktop) {
                if (window.innerWidth > 1920) resizeViewport("1920px", window.innerHeight,"about");
            }
            else resizeViewport(window.innerWidth, window.innerHeight,"about");
        });

        setHeader();
        setFooter();
        this.about.createPage();
        this.home.createPage();
        this.photography.createPage();
        this.videography.createPage();
        console.log("website created");
    }

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

    createPage(){
        this.setProfileImage();
        this.setProfileInfo();
        this.setContactInfo();
        console.log("about page created");
    }

    setProfileImage(){
        const imageContainer = document.getElementById('aboutImage');
        imageContainer.innerHTML = '<img src="LightMemoirs/Images/About/DSC06071.JPG" class="image-placeholder">';
    }
    
    setProfileInfo(){
    
    }

    setContactInfo(){

    }

}


//Photography Page
class Photography{

    createPage(){
        this.setLayout();
        console.log("photography page created");
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
}


//Videography page
class Videography{

    createPage(){
        console.log("videography page created");
    }

    setLayout(){

    }

    updateVideoDatabase(){

    }
    
}


