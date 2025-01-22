import{S as u,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function m({largeImageURL:o,webformatURL:t,tags:n,likes:i,views:e,comments:r,downloads:a}){return` <li class="gallery-item">
  <div class="img-container">
<div class="gallery">
    <a href="${o}"><img src="${t}" alt="${n}" title=""/></a>
</div>
  </div>
  <div class="img-content">
    <div>
      <h2>Likes</h2>
      <p>${i}</p>
    </div>
    <div>
      <h2>Views</h2>
      <p>${e}</p>
    </div>
    <div>
      <h2>Comments</h2>
      <p>${r}</p>
    </div>
    <div>
      <h2>Downloads</h2>
      <p>${a}</p>
    </div>
    
  </div>
</li>
  `}function f(o){o.innerHTML=""}function p(o,t){o.insertAdjacentHTML("beforeend",t)}const y=()=>'<span class="loader"></span>',h=(o,t)=>{o.insertAdjacentHTML("afterend",t)},g=o=>{const t="48215593-063b757550f958811bbabd770",n="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${n}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},s=document.querySelector(".form");document.querySelector("button");const d=document.querySelector(".gallery-list");document.querySelector(".title-gallery");const v=new u(".gallery a",{captions:!0,captionDelay:50});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".title-gallery");if(o){let t="";for(let n=0;n<15;n++)t+=`${-n}px ${n}px 0 #d9d9d9`+(n<14?",":"");o.style.textShadow=t}else console.error("Элемент с классом .title не найден!")});s.addEventListener("submit",o=>{o.preventDefault(),f(d);const t=s.elements.text.value.trim();if(t===""){c.warning({title:"Caution",message:"You can input either a string or numbers.",position:"topLeft"}),s.elements.text.value="";return}if(/[^a-zA-Z0-9]/.test(t)){c.warning({title:"Caution",message:"Only letters and numbers are allowed for input.",position:"topLeft"}),s.elements.text.value="";return}const i=y();h(d,i),g(t).then(e=>{if(e.total===0){const l=document.querySelector(".loader");l&&l.remove(),c.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),s.elements.text.value="";return}const a=e.hits.map(l=>m(l)).join("");document.querySelector(".loader").remove(),p(d,a),v.refresh(),s.elements.text.value=""}).catch(e=>{const r=document.querySelector(".loader");r&&r.remove(),c.warning({title:"Sorry,",message:"There was an error fetching the images. Please try again!",position:"center"})})});
//# sourceMappingURL=index.js.map
