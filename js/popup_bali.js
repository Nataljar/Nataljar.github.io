// Image popup + slider für Bali

const images = [...document.querySelectorAll('.image')];    // This variable is an array that holds all elements with the class name "image." 
const imagePopup = document.querySelector('.image-popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const body = document.body;

let originalIndex = 0; // Original index when the popup is opened
let currentIndex = 0; // Current index as you swipe
let hammertime;

function initializeSwipe(index) {
  hammertime = new Hammer(largeImage);
  
  hammertime.on('swipeleft', () => {
    if (currentIndex < images.length - 1) {   // checking if current index is not the last iamge
      currentIndex++;
      updateImage(currentIndex);    // update the displayed image
    }
  });

  hammertime.on('swiperight', () => {
    if (currentIndex > 0) {   // checking if current index is not the first iamge
      currentIndex--;
      updateImage(currentIndex);    // update the displayed image
    }
  });

  currentIndex = index; // setting currentIndex to the provided index, which initializes it to the index of the initially opened image
}

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    originalIndex = i;    // setting originalIndex to the index of the clicked image to remember which image was initially opened.
    initializeSwipe(i);
    updateImage(i);
    imagePopup.classList.add('active');
    body.classList.add('body-no-scroll');
  });
});

function updateImage(i) {
  let path = `images/galerie_popup_bali/2200_bali_${i + 1}.jpg`;
  largeImage.src = path;
}

closeBtn.addEventListener('click', () => {
  imagePopup.classList.remove('active');
  body.classList.remove('body-no-scroll');
  if (hammertime) {       // Check if hammertime is defined (i.e., if swipe gestures are enabled), and if so, we destroy the Hammer.js instance to prevent further gesture handling. This step is crucial to ensure that swipe functionality is reset when closing the popup.
    hammertime.destroy();
  }
});

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage(currentIndex);
     if (currentIndex === 0) {
  }
}
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage(currentIndex);
  }
  });


