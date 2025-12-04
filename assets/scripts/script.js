
document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.getElementById("hero-img");

    const normalImage = "./assets/images/knight.avif";
    const flashImage = "./assets/images/knightwave.avif"; 

    // Automatically swap 1 second after page load
    setTimeout(function () {
        heroImage.src = flashImage;

        setTimeout(function () {
            heroImage.src = normalImage;
        }, 1000); // revert after 1 second
    }, 1000); // initial delay after page load
});


const attackButton = document.getElementById("attack-button");
const defendButton = document.getElementById("defend-button");
const heroImage = document.getElementById("hero-img");


const normalImage = "./assets/images/knight.avif";
const attackImage = "./assets/images/knightattacked.avif";
const blockImage = "./assets/images/knightblock.avif";
const sadknightImage = "./assets/images/knightsad.avif";
const cryknightImage = "./assets/images/knightcry.avif";

defendButton.addEventListener("click", function () {
    heroImage.src = blockImage;
    heroImage.style.paddingLeft = "0px";

    setTimeout(function () {
        heroImage.src = normalImage;
    }, 1000); // 1 second delay
});

attackButton.addEventListener("click", function () {
    heroImage.src = attackImage;

    setTimeout(function () {
        heroImage.src = sadknightImage;
    }, 1000); // 1 second delay
    setTimeout(function () {
        heroImage.style.paddingLeft = "150px";
    }, 2000); // 2 second delay
    
    setTimeout(function () {
        heroImage.src = cryknightImage;
    }, 2000); // 2 second delay
        

});

// Function to handle image swapping
function setupHoverSwap(tipId, imgId, img1Src, img2Src) {
    const tipElement = document.getElementById(tipId);
    const imgElement = document.getElementById(imgId);
    let intervalId;
    let toggle = false;

    tipElement.addEventListener('mouseenter', () => {
        intervalId = setInterval(() => {
            toggle = !toggle;
            imgElement.src = toggle ? img2Src : img1Src;
        }, 1000); // 1000ms = 1 second
    });

    tipElement.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        imgElement.src = img1Src; // Reset to the first image when mouse leaves
        toggle = false;
    });
}

// Setup hover swapping for each tip
setupHoverSwap('tip1', 'tip-img-1', './assets/images/knight.avif', './assets/images/knightshout.avif');
setupHoverSwap('tip2', 'tip-img-2', './assets/images/knight1.avif', './assets/images/knightblock.avif');