import{a as v,S as L,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();function f({largeImageURL:r,webformatURL:t,tags:o,likes:n,views:e,comments:a,downloads:i}){return` <li class="gallery-item">
  <div class="img-container">
<div class="gallery">
    <a href="${r}"><img src="${t}" alt="${o}" title=""/></a>
</div>
  </div>
  <div class="img-content">
    <div>
      <h2>Likes</h2>
      <p>${n}</p>
    </div>
    <div>
      <h2>Views</h2>
      <p>${e}</p>
    </div>
    <div>
      <h2>Comments</h2>
      <p>${a}</p>
    </div>
    <div>
      <h2>Downloads</h2>
      <p>${i}</p>
    </div>
    
  </div>
</li>
  `}function b(r){r.innerHTML=""}function p(r,t){r.insertAdjacentHTML("beforeend",t)}const S=()=>'<span class="loader"></span>',j=(r,t)=>{r.insertAdjacentHTML("afterend",t)},g=(r,t)=>{const o="48215593-063b757550f958811bbabd770",n="https://pixabay.com/api/",e={params:{key:o,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${t}`,per_page:15}};return v.get(`${n}`,e)},s=document.querySelector(".form");document.querySelector("button");const m=document.querySelector(".gallery-list");document.querySelector(".title-gallery");const l=document.querySelector(".btn-load"),h=new L(".gallery a",{captions:!0,captionDelay:50});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".title-gallery");if(r){let t="";for(let o=0;o<15;o++)t+=`${-o}px ${o}px 0 #d9d9d9`+(o<14?",":"");r.style.textShadow=t}else console.error("Элемент с классом .title не найден!")});let y=1,d="";s.addEventListener("submit",async r=>{try{if(r.preventDefault(),b(m),d=s.elements.text.value.trim(),d===""){c.warning({title:"Caution",message:"You can input either a string or numbers.",position:"topLeft"}),s.elements.text.value="",l.classList.add("js-hidden");return}if(/[^a-zA-Z0-9]/.test(d)){l.classList.add("js-hidden"),c.warning({title:"Caution",message:"Only letters and numbers are allowed for input.",position:"topLeft"}),s.elements.text.value="";return}const o=S();j(m,o);const n=await g(d,y);console.log(n.data);const e=n.data.hits;if(console.log(e),n.data.total===0){const u=document.querySelector(".loader");u&&u.remove(),c.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),s.elements.text.value="",l.classList.add("js-hidden");return}const a=e.map(u=>f(u)).join("");document.querySelector(".loader").remove(),p(m,a),h.refresh(),n.data.total>1&&l.classList.remove("js-hidden"),s.elements.text.value=""}catch{const o=document.querySelector(".loader");o&&o.remove(),c.warning({title:"Sorry,",message:"There was an error fetching the images. Please try again!",position:"center"})}});const q=async()=>{y+=1;try{const r=await g(d,y),t=r.data.hits;if(console.log(t),r.data.total===0){const e=document.querySelector(".loader");e&&e.remove(),c.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),s.elements.text.value="",l.classList.add("js-hidden");return}const o=t.map(e=>f(e)).join("");console.log(o),document.querySelector(".loader").remove(),p(m,o),h.refresh(),console.log(t)}catch{}};l.addEventListener("click",q);
//# sourceMappingURL=index.js.map
