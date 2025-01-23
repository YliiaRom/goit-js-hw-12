

//создание html объекта для вставки

export function createGallery({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) {
  return ` <li class="gallery-item">
  <div class="img-container">
<div class="gallery">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" title=""/></a>
</div>
  </div>
  <div class="img-content">
    <div>
      <h2>Likes</h2>
      <p>${likes}</p>
    </div>
    <div>
      <h2>Views</h2>
      <p>${views}</p>
    </div>
    <div>
      <h2>Comments</h2>
      <p>${comments}</p>
    </div>
    <div>
      <h2>Downloads</h2>
      <p>${downloads}</p>
    </div>
    
  </div>
</li>
  `;}

  //чистка/
export function clearListGallery(galleryList) {
  galleryList.innerHTML = '';
  }


  //рендер
export function renderGallery(galleryList, obj) {
  galleryList.insertAdjacentHTML('beforeend', obj);
}



//loader/
export const createLoader = () => {
  return `<span class="loader"></span>`;
}
export const renderLoader = (galleryList, obj) => {
  galleryList.insertAdjacentHTML('afterend', obj);
}

export const firework = (e) => {
  document.querySelectorAll('.smoke div').forEach((div => {
    let x = div.offsetLeft - e.pageX;
    let y = div.offsetTop - e.pageY;

    let dist = Math.sqrt(x * x + y * y);
    let score = Math.exp(dist * -0.01);
    div.style.transform = "scale("+ score * 4 +") rotate("+ score * 180 +"deg)";
    div.style.opacity = score * 2;
    let randomNum = Math.random() * 720;
    div.style.filter = `hue-rotate(${randomNum}deg)`;
  }))
}



