//запрос-Promis

export const fetchGalleryPromise = (inputValue) => {
  //создание ключей и параметров для запросов (fetch)
//данные ключей
const API_KEY  = '48215593-063b757550f958811bbabd770';
const API_URL = 'https://pixabay.com/api/';

//экземпляр для создания объекта с данными(есть метод toString = делает разделение &(searchParams.toString())/ если поставить в рядок автоматически проставится & между ними)
const searchParams = new URLSearchParams({
  key: API_KEY,
  q: `${inputValue}`,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 9
});

//fetch
return fetch(`${API_URL}?${searchParams}`).then(response => {
  if(!response.ok){
    throw new Error(response.status); 
  }
  return response.json();
})

}

