const fileInput = document.querySelector(".file-input"), chooseImgBtn = document.querySelector(".choose-image")

fileInput.addEventListener("change", loadImage)
chooseImgBtn.addEventListener("click",()=> fileInput.click());