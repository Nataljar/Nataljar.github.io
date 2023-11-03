// Image popup + slider für Frankreich 

const images = [...document.querySelectorAll('.image')];      // es wird nach class="image" gesucht und in ein Array verpackt

const imagePopup = document.querySelector('.image-popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const body = document.body;

let index = 0; // will track our current image;

images.forEach((item, i) => {                           // Eine Schleife wird verwendet, um jedem Element der Variable images einen Klickereignislistener hinzuzufügen.
  item.addEventListener('click', () => {
    updateImage(i);                                     // Funktion wird beim klicken auf ein Bild aufgerufen und der Bildindex an die Funktion übergeben
    imagePopup.classList.toggle('active');              // durch das Hinzufügen von active wird das popup Fenster sichtbar
    body.classList.toggle("body-no-scroll"); /* this class is added so that the scrolling of the html page isn't working */
})
})

const updateImage = (i) => {
  let path = `images/galerie_popup_frankreich/2200_bretagne_${i + 1}.jpg`;                     // Der path wird mit dem entsprechenden Bildpfad generiert und dem largeImage-Element zugewiesen.
  largeImage.src = path;
  index = i;                                            // Der index wird auf den übergebenen Index aktualisiert
}

closeBtn.addEventListener('click', () => {              // Ein Klickereignislistener wird zum Schließen-Schaltflächen-Element hinzugefügt. Wenn darauf geklickt wird, wird das Bild-Popup durch das Hinzufügen oder Entfernen der CSS-Klasse 'active' ausgeblendet.
  imagePopup.classList.toggle('active');
  body.classList.toggle("body-no-scroll");
})

leftArrow.addEventListener('click', () => {             //Ein Klickereignislistener wird zum Linkspfeil-Element hinzugefügt. Wenn darauf geklickt wird und der aktuelle Index größer als 0 ist, wird das vorherige Bild durch Aufrufen der updateImage-Funktion mit dem vorherigen Index aktualisiert.
  if (index > 0) {
    updateImage(index - 1);
  }
})

rightArrow.addEventListener('click', () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
})