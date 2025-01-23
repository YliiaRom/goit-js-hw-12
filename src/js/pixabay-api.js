//запрос-Promis

import axios from "axios";
import { createGallery } from "./render-functions";


export const fetchGalleryPromise = (inputValue, pageValue) => {
  //создание ключей и параметров для запросов (fetch)
//данные ключей
const API_KEY  = '48215593-063b757550f958811bbabd770';
const API_URL = 'https://pixabay.com/api/';

//экземпляр для создания объекта с данными(есть метод toString = делает разделение &(searchParams.toString())/ если поставить в рядок автоматически проставится & между ними)
const searchParams = {
  params: {
    key: API_KEY,
    q: `${inputValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: `${pageValue}`,
    per_page: 15
  }
}

//результ = объект ответа от сервера{}

 return axios.get(`${API_URL}`, searchParams);

}
// созд галереи 
export const createGalleryObj = (arrPromise) => {

  const arrGallery = arrPromise.data.hits;

    //перебрать и сделать новый объект - join(объединить в рядок с обозн символом)
    const galleryTemplate = arrGallery.map(el => createGallery(el)).join('');

return galleryTemplate;
}


