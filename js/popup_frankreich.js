// Image popup + slider für Frankreich 

const images = [...document.querySelectorAll('.image')];   
const imagePopup = document.querySelector('.image-popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const body = document.body;

let originalIndex = 0; // Original index when the popup is opened
let currentIndex = 0; // Current index as you swipe

function initializeSwipe(index) {
  let hammertime = new Hammer(largeImage);
  
  hammertime.on('swipeleft', () => {
    if (currentIndex < images.length - 1) {  
      currentIndex++;
      updateImage(currentIndex);   
    }
    // Update arrow visibility
    leftArrow.style.display = 'block';
    rightArrow.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
  });

  hammertime.on('swiperight', () => {
    if (currentIndex > 0) {   
      currentIndex--;
      updateImage(currentIndex);   
    }
    // Update arrow visibility
    rightArrow.style.display = 'block'; 
    leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
  });

  currentIndex = index; 
}

images.forEach((item, i) => {   
  item.addEventListener('click', () => {
    originalIndex = i;   
    initializeSwipe(i);
    updateImage(i);
    imagePopup.classList.add('active');
    body.classList.add('body-no-scroll');

    // Update arrow visibility based on the current index 
    leftArrow.style.display = i === 0 ? 'none' : 'block';
    rightArrow.style.display = i === images.length - 1 ? 'none' : 'block';
  });
});

function updateImage(i) {
  let path = `images/galerie_popup_frankreich/2200_bretagne_${i + 1}.jpg`;
  largeImage.src = path;
}

closeBtn.addEventListener('click', () => {
  imagePopup.classList.remove('active');
  body.classList.remove('body-no-scroll');
  if (hammertime) {      
    hammertime.destroy();
  }
});

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage(currentIndex);
  }
  // Update arrow visibility
  rightArrow.style.display = 'block'; 
  leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';

});

rightArrow.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage(currentIndex);
  }
  // Update arrow visibility
  leftArrow.style.display = 'block'; 
  rightArrow.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
  });