//Импорт- для оповещений Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form');
const galleryList = document.querySelector('.gallery-list');
const btnLoad = document.querySelector('.btn-load');
let smoke = document.getElementById('smoke');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 50,
});




import { clearListGallery } from "./js/render-functions";
import { renderGallery } from "./js/render-functions";

import { fetchGalleryPromise } from "./js/pixabay-api";
import { createGalleryObj } from "./js/pixabay-api";

//loader
import { createLoader } from "./js/render-functions";
import { renderLoader } from "./js/render-functions";

//firework
import { firework } from "./js/render-functions";



//title decor
document.addEventListener('DOMContentLoaded', () => {
  const titleGallery = document.querySelector('.title-gallery');
  const subTitle = document.querySelector('.sub-title');
  try {

    if (subTitle) {
      let shadow = '';
      for (let i = 0; i < 9; i++) {
        shadow += `${-i}px ${i}px 0 #d9d9d9` + (i < 8 ? ',' : '');
      }
      subTitle.style.textShadow = shadow; 
    } 
  
    if (titleGallery) {
      let shadow = '';
      for (let i = 0; i < 15; i++) {
        shadow += `${-i}px ${i}px 0 #d9d9d9` + (i < 14 ? ',' : '');
      }
      titleGallery.style.textShadow = shadow; 
    } 
  } catch(error) {
    let err = error;
  }

});

let pageValue = 1;
let inputValue = '';


form.addEventListener('submit', async event => {
  try {

  event.preventDefault();

  clearListGallery(galleryList);

  pageValue = 1;

  //input value
 inputValue = form.elements.text.value.trim();

//input проверка
if(inputValue === '') {
  iziToast.warning({
    title: 'Caution',
    message: 'You can input either a string or numbers.',
    position: 'topLeft'
});
form.elements.text.value = "";
btnLoad.classList.add('js-hidden');
  return;
}

//проверка на символы
const standartSimbols = /[^a-zA-Z0-9\s]/;
if(standartSimbols.test(inputValue)) {
  btnLoad.classList.add('js-hidden');
  iziToast.warning({
    title: 'Caution',
    message: 'Only letters and numbers are allowed for input.',
    position: 'topLeft',
});

//чистка input
form.elements.text.value = "";
return;
}


//loader
const loader = createLoader();
renderLoader(galleryList, loader);


 
    const resultFetch = await fetchGalleryPromise(inputValue, pageValue);

    const totalObj = resultFetch.data.totalHits;
    const hitsArray = resultFetch.data.hits;
  
    if(hitsArray.length === 0) {
      btnLoad.classList.add('js-hidden');
      iziToast.info({
        title: "We're sorry,",
        message: "but you've reached the end of search results.",
        position: 'bottomCenter',
    });
    }

  //проверка на пустой массив - если ввели несуществующее слово
  if(totalObj === 0) {

    const loaderObj = document.querySelector('.loader');
    if (loaderObj) loaderObj.remove();

    iziToast.info({
      title: 'Sorry,',
      message: 'there are no images matching your search query. Please try again!',
      position: 'center',
  });

  form.elements.text.value = '';

  btnLoad.classList.add('js-hidden');
  return;
  }

  const galleryTemplate = createGalleryObj(resultFetch);


  

        //удалить лоадер
        const loaderObj = document.querySelector('.loader');
        if (loaderObj) {
          loaderObj.remove();
        }
       
        // добавить gallery в html
        renderGallery(galleryList, galleryTemplate); 

  
    lightbox.refresh();

    if(galleryList.children.length > 0) {
  btnLoad.classList.remove('js-hidden');
    } else {
      btnLoad.classList.add('js-hidden');
    }

    if (totalObj < 15) {
      btnLoad.classList.add('js-hidden');
    }
    
  
    
    //чистка input
    form.elements.text.value = '';
    
  
  //fetch + inputValue
  
  } catch(error) {
    
    const loaderObj = document.querySelector('.loader');
    if (loaderObj) {
      loaderObj.remove();
    }
    iziToast.warning({
      title: 'Sorry,',
      message: 'There was an error fetching the images. Please try again!',
      position: 'center',
    });
  
  };

});


const createMorePhoto = async (event) => {
  try {
    event.preventDefault();

  pageValue += 1;

  //создание loader
const loaderBtnLoad = document.createElement('div');
loaderBtnLoad.textContent = 'Loading images, please wait...';
loaderBtnLoad.classList.add('js-loader-more');
btnLoad.insertAdjacentElement('afterend', loaderBtnLoad);


    const resultLoadPromise = await fetchGalleryPromise(inputValue, pageValue);


  
    //проверка на пустой массив - если ввели несуществующее слово
    const totalObj = resultLoadPromise.data.totalHits;
    const hitsArray = resultLoadPromise.data.hits;


    //конец фото= прятать кнопку
    if (pageValue > totalObj) {
      btnLoad.classList.add('js-hidden');
    }
  
    if(hitsArray.length === 0) {
      btnLoad.classList.add('js-hidden');
      iziToast.info({
        title: "We're sorry,",
        message: "but you've reached the end of search results.",
        position: 'bottomCenter',
    });
    }

   

    if(totalObj === 0) {
      const loaderObj = document.querySelector('.loader');
      if (loaderObj) loaderObj.remove();
      iziToast.info({
        title: 'Sorry,',
        message: 'there are no images matching your search query. Please try again!',
        position: 'center',
    });
    form.elements.text.value = '';
    btnLoad.classList.add('js-hidden');
    return;
    }
    if (totalObj < 15) {
      btnLoad.classList.add('js-hidden');
    }
  
    const galleryTemplate = createGalleryObj(resultLoadPromise);


        // добавить в html
renderGallery(galleryList, galleryTemplate);

loaderBtnLoad.remove()
  
    lightbox.refresh();


    //scroll

   // Прокрутка страницы
   const liElement = document.querySelector('.gallery-item');
   if (liElement) {
     const rectHeight = liElement.getBoundingClientRect().height * 2 + 80 + 50;
    
     window.scrollBy({
       top: rectHeight, 
       left: 0,
       behavior: "smooth",
     });

    }

  } catch (error) {
    iziToast.warning({
      title: 'Sorry,',
      message: 'There was an error fetching the images. Please try again!',
      position: 'center',
    });
  }

}
btnLoad.addEventListener('click', createMorePhoto);


//smoke
 function createSmoke(e) {
  let elem = document.createElement('div');
  elem.classList.add('elem');
  
  elem.style.left = `${e.clientX}px`;
  elem.style.top = `${e.clientY}px`;

  smoke.appendChild(elem);
 
  setTimeout(() => {
    elem.remove();
}, 3000);
   
}
document.addEventListener('mousemove', createSmoke);

let section = document.querySelector('.spawner');
for (let i = 0; i < 600 ; i ++) {
  let div =  document.createElement('div');
  smoke.appendChild(div);
}
document.addEventListener("mousemove", firework);