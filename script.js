console.log("hello"); 
const imageContainer = document.getElementById('aboutImage');
console.log("image container got"); 
//imageContainer.innerHTML = '';
//const rootDir = '/LightMemoirs/';
const rootDir = "";
const imageDir = rootDir + "/Images/About/DSC06071.JPG";
//imageContainer.className = "image-placeholder";
//imageContainer.src = imageDir;
console.log("image root" + imageContainer.src);
imageContainer.innerHTML = '<img src="/Images/About/DSC06071.JPG" class="image-placeholder">';
//imageContainer.src = '/LightMemoirs/Images/About/DSC06071.JPG';
console.log("image container set");
//imageContainer.style.backgroundImage = "url('Images/About/DSC06071.JPG')";
//imageContainer.style.backgroundSize = "cover";
//imageContainer.style.backgroundPosition = "center";
//imageContainer.textContent = ""; // Remove placeholder text
//document.body.appendChild(imageContainer);
/**************Photography page**************************/
//mobile config
  //single column
//tablet config
  //2 columns
//desktop config
//3 columns
const gallery = document.getElementById('photographyGallery');

for (let i = 1; i <= 6; i++) {
    //const img = document.createElement('img');
    //img.src = `https://via.placeholder.com/150?text=Image+${i}`;
    //img.alt = `Placeholder ${i}`;
    //gallery.appendChild(img);
}
function resizeViewport(width, height, elementId) {
    let container = document.getElementsByClassName(elementId)
    container.style.width = width;
    container.style.height = height;    
}


function adjustViewport() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop|tablet|ipad/.test(userAgent)) {
        return false;
    } else {
        return true;
    }
}

//console.log("Device size:", adjustViewport("aboutContainer"));
console.log("window width" + window.innerWidth);
const isDesktop = adjustViewport();
window.addEventListener("resize", () => {
    if (isDesktop) {
        if (window.innerWidth > 1920) resizeViewport("1920px", window.innerHeight,"about");
    }
    else resizeViewport(window.innerWidth, window.innerHeight,"about");
});
