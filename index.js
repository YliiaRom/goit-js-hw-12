import{a as b,S,i as l}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();function j({largeImageURL:r,webformatURL:e,tags:o,likes:t,views:s,comments:a,downloads:i}){return` <li class="gallery-item">
  <div class="img-container">
<div class="gallery">
    <a href="${r}"><img src="${e}" alt="${o}" title=""/></a>
</div>
  </div>
  <div class="img-content">
    <div>
      <h2>Likes</h2>
      <p>${t}</p>
    </div>
    <div>
      <h2>Views</h2>
      <p>${s}</p>
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
  `}function w(r){r.innerHTML=""}function y(r,e){r.insertAdjacentHTML("beforeend",e)}const x=()=>'<span class="loader"></span>',q=(r,e)=>{r.insertAdjacentHTML("afterend",e)},$=r=>{document.querySelectorAll(".smoke div").forEach(e=>{let o=e.offsetLeft-r.pageX,t=e.offsetTop-r.pageY,s=Math.sqrt(o*o+t*t),a=Math.exp(s*-.01);e.style.transform="scale("+a*4+") rotate("+a*180+"deg)",e.style.opacity=a*2;let i=Math.random()*720;e.style.filter=`hue-rotate(${i}deg)`})},p=(r,e)=>{const o="48215593-063b757550f958811bbabd770",t="https://pixabay.com/api/",s={params:{key:o,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${e}`,per_page:15}};return b.get(`${t}`,s)},g=r=>r.data.hits.map(t=>j(t)).join(""),c=document.querySelector(".form"),m=document.querySelector(".gallery-list"),n=document.querySelector(".btn-load");let v=document.getElementById("smoke");const L=new S(".gallery a",{captions:!0,captionDelay:50});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".title-gallery"),e=document.querySelector(".sub-title");try{if(e){let o="";for(let t=0;t<9;t++)o+=`${-t}px ${t}px 0 #d9d9d9`+(t<8?",":"");e.style.textShadow=o}if(r){let o="";for(let t=0;t<15;t++)o+=`${-t}px ${t}px 0 #d9d9d9`+(t<14?",":"");r.style.textShadow=o}}catch{}});let h=1,u="";c.addEventListener("submit",async r=>{try{if(r.preventDefault(),w(m),h=1,u=c.elements.text.value.trim(),u===""){l.warning({title:"Caution",message:"You can input either a string or numbers.",position:"topLeft"}),c.elements.text.value="",n.classList.add("js-hidden");return}if(/[^a-zA-Z0-9\s]/.test(u)){n.classList.add("js-hidden"),l.warning({title:"Caution",message:"Only letters and numbers are allowed for input.",position:"topLeft"}),c.elements.text.value="";return}const o=x();q(m,o);const t=await p(u,h),s=t.data.totalHits;if(t.data.hits.length===0&&(n.classList.add("js-hidden"),l.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"bottomCenter"})),s===0){const f=document.querySelector(".loader");f&&f.remove(),l.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),c.elements.text.value="",n.classList.add("js-hidden");return}const i=g(t),d=document.querySelector(".loader");d&&d.remove(),y(m,i),L.refresh(),m.children.length>0?n.classList.remove("js-hidden"):n.classList.add("js-hidden"),s<15&&n.classList.add("js-hidden"),c.elements.text.value=""}catch{const o=document.querySelector(".loader");o&&o.remove(),l.warning({title:"Sorry,",message:"There was an error fetching the images. Please try again!",position:"center"})}});const O=async r=>{try{r.preventDefault(),h+=1;const e=document.createElement("div");e.textContent="Loading images, please wait...",e.classList.add("js-loader-more"),n.insertAdjacentElement("afterend",e);const o=await p(u,h),t=o.data.totalHits,s=o.data.hits;if(h>t&&n.classList.add("js-hidden"),s.length===0&&(n.classList.add("js-hidden"),l.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"bottomCenter"})),t===0){const d=document.querySelector(".loader");d&&d.remove(),l.info({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"center"}),c.elements.text.value="",n.classList.add("js-hidden");return}t<15&&n.classList.add("js-hidden");const a=g(o);y(m,a),e.remove(),L.refresh();const i=document.querySelector(".gallery-item");if(i){const d=i.getBoundingClientRect().height*2+80+50;window.scrollBy({top:d,left:0,behavior:"smooth"})}}catch{l.warning({title:"Sorry,",message:"There was an error fetching the images. Please try again!",position:"center"})}};n.addEventListener("click",O);function E(r){let e=document.createElement("div");e.classList.add("elem"),e.style.left=`${r.clientX}px`,e.style.top=`${r.clientY}px`,v.appendChild(e),setTimeout(()=>{e.remove()},3e3)}document.addEventListener("mousemove",E);document.querySelector(".spawner");for(let r=0;r<600;r++){let e=document.createElement("div");v.appendChild(e)}document.addEventListener("mousemove",$);
//# sourceMappingURL=index.js.map
