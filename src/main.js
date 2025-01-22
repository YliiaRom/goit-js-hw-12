//Импорт- для оповещений Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form');
const btnSubmit = document.querySelector('button');
const galleryList = document.querySelector('.gallery-list');
const titleGallery = document.querySelector('.title-gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 50,
});



import { createGallery } from "./js/render-functions/";
import { clearListGallery } from "./js/render-functions";
import { renderGallery } from "./js/render-functions";

import { fetchGalleryPromise } from "./js/pixabay-api";

//loader
import { createLoader } from "./js/render-functions";
import { renderLoader } from "./js/render-functions";


//title decor
document.addEventListener('DOMContentLoaded', () => {
  const titleGallery = document.querySelector('.title-gallery');
  if (titleGallery) {
    let shadow = '';
    for (let i = 0; i < 15; i++) {
      shadow += `${-i}px ${i}px 0 #d9d9d9` + (i < 14 ? ',' : '');
    }
    titleGallery.style.textShadow = shadow; // Применяем тени
  } else {
    console.error('Элемент с классом .title не найден!');
  }
});




form.addEventListener('submit', event => {
  event.preventDefault();
  clearListGallery(galleryList);

  //input value
const inputValue = form.elements.text.value.trim();

//input проверка
if(inputValue === '') {
  iziToast.warning({
    title: 'Caution',
    message: 'You can input either a string or numbers.',
    position: 'topLeft'
});
form.elements.text.value = "";
  return;
}
//проверка на символы
const standartSimbols = /[^a-zA-Z0-9]/;
if(standartSimbols.test(inputValue)) {
  iziToast.warning({
    title: 'Caution',
    message: 'Only letters and numbers are allowed for input.',
    position: 'topLeft',
});
//чистка input
form.elements.text.value = "";
return;
}

const loader = createLoader();
renderLoader(galleryList, loader);


//fetch + inputValue
fetchGalleryPromise(inputValue).then(date => {

//проверка на пустой массив - если ввели несуществующее слово
if(date.total === 0) {
  const loaderObj = document.querySelector('.loader');
  if (loaderObj) loaderObj.remove();
  iziToast.info({
    title: 'Sorry,',
    message: 'there are no images matching your search query. Please try again!',
    position: 'center',
});
form.elements.text.value = '';
return;
}


//распаковать промис
const promiseGallery = date.hits;

//перебрать и сделать новый объект - join(объединить в рядок с обозн символом)
const galleryTemplate = promiseGallery.map(el => createGallery(el)).join('');


//удалить лоадер
const loaderObj = document.querySelector('.loader');
loaderObj.remove();
// добавить в html
renderGallery(galleryList, galleryTemplate); 

lightbox.refresh();

//чистка input
form.elements.text.value = '';
})
.catch(err => {
  
  const loaderObj = document.querySelector('.loader');
  if (loaderObj) {
    loaderObj.remove();
  }
  iziToast.warning({
    title: 'Sorry,',
    message: 'There was an error fetching the images. Please try again!',
    position: 'center',
  });

});

});
