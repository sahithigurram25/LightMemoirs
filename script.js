console.log("hello"); 
const imageContainer = document.getElementById('imageContainer');
console.log("image container got"); 
//imageContainer.innerHTML = '';
//const rootDir = '/LightMemoirs/';
const rootDir = "";
const imageDir = rootDir + "LightMemoirs/Images/About/DSC06071.JPG";
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