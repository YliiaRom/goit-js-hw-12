import{a as L,S as b,i as l}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();function S({largeImageURL:o,webformatURL:t,tags:s,likes:e,views:r,comments:a,downloads:i}){return` <li class="gallery-item">
  <div class="img-container">
<div class="gallery">
    <a href="${o}"><img src="${t}" alt="${s}" title=""/></a>
</div>
  </div>
  <div class="img-content">
    <div>
      <h2>Likes</h2>
      <p>${e}</p>
    </div>
    <div>
      <h2>Views</h2>
      <p>${r}</p>
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
  `}function j(o){o.innerHTML=""}function f(o,t){o.insertAdjacentHTML("beforeend",t)}const w=()=>'<span class="loader"></span>',x=(o,t)=>{o.insertAdjacentHTML("afterend",t)},p=(o,t)=>{const s="48215593-063b757550f958811bbabd770",e="https://pixabay.com/api/",r={params:{key:s,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${t}`,per_page:15}};return L.get(`${e}`,r)},g=o=>o.data.hits.map(e=>S(e)).join(""),d=document.querySelector(".form");document.querySelector("button");const u=document.querySelector(".gallery-list");document.querySelector(".title-gallery");const n=document.querySelector(".btn-load"),v=new b(".gallery a",{captions:!0,captionDelay:50});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".title-gallery"),t=document.querySelector(".sub-title");if(t){let s="";for(let e=0;e<9;e++)s+=`${-e}px ${e}px 0 #d9d9d9`+(e<8?",":"");t.style.textShadow=s}else console.error("Элемент с классом .title не найден!");if(o){let s="";for(let e=0;e<15;e++)s+=`${-e}px ${e}px 0 #d9d9d9`+(e<14?",":"");o.style.textShadow=s}else console.error("Элемент с классом .title не найден!")});let h=1,m="";d.addEventListener("submit",async o=>{try{if(o.preventDefault(),j(u),h=1,m=d.elements.text.value.trim(),m===""){l.warning({title:"Caution",message:"You can input either a string or numbers.",position:"topLeft"}),d.elements.text.value="",n.classList.add("js-hidden");return}if(/[^a-zA-Z0-9\s]/.test(m)){n.classList.add("js-hidden"),l.warning({title:"Caution",message:"Only letters and numbers are allowed for input.",position:"topLeft"}),d.elements.text.value="";return}const s=w();x(u,s);const e=await p(m,h),r=e.data.totalHits;if(e.data.hits.length===0&&(n.classList.add("js-hidden"),l.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"bottomCenter"})),r===0){const y=document.querySelector(".loader");y&&y.remove(),l.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),d.elements.text.value="",n.classList.add("js-hidden");return}const i=g(e),c=document.querySelector(".loader");c&&c.remove(),f(u,i),v.refresh(),u.children.length>0?n.classList.remove("js-hidden"):n.classList.add("js-hidden"),r<15&&n.classList.add("js-hidden"),d.elements.text.value=""}catch{const s=document.querySelector(".loader");s&&s.remove(),l.warning({title:"Sorry,",message:"There was an error fetching the images. Please try again!",position:"center"})}});const q=async o=>{try{o.preventDefault(),h+=1;const t=document.createElement("div");t.textContent="Loading images, please wait...",t.classList.add("js-loader-more"),n.insertAdjacentElement("afterend",t);const s=await p(m,h),e=s.data.totalHits;if(s.data.hits.length===0&&(n.classList.add("js-hidden"),l.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"bottomCenter"})),e===0){const c=document.querySelector(".loader");c&&c.remove(),l.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),d.elements.text.value="",n.classList.add("js-hidden");return}e<15&&n.classList.add("js-hidden");const a=g(s);f(u,a),t.remove(),v.refresh();const i=document.querySelector(".gallery-item");if(i){const c=i.getBoundingClientRect().height*2+80+50;window.scrollBy({top:c,left:0,behavior:"smooth"})}}catch{l.warning({title:"Sorry,",message:"There was an error fetching the images. Please try again!",position:"center"})}};n.addEventListener("click",q);
//# sourceMappingURL=index.js.map
