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
function resizeViewport(width, height) {
    let container = document.getElementById("aboutContainer")
    container.style.width = width;
    container.style.height = height;
}


function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/.test(userAgent)) {
        resizeViewport("480px", "800px");
        return "Mobile";
    } else if (/tablet|ipad/.test(userAgent)) {
        resizeViewport("768px", "1024px");
        return "Tablet";
    } else {
        resizeViewport("1920px","1080px");
        return "Desktop";
    }
}

console.log("Device Type:", getDeviceType());