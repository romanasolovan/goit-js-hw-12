import{a as P,S,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const b="https://pixabay.com/api/",x="51420403-5f20d185bf97c75fff06f9d5f",q=15;async function f(i,e=1){const o={key:x,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:e};return(await P.get(b,{params:o})).data}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),R=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const e=i.map(o=>`
        <li class="gallery-item">
        <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" width="360" height="200"/>
        </a>
        <div class="info-list">
        <div class="info-item">
        <p class="info-item-title">Likes</p>
        <p class="info-item-text">${o.likes}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Views</p>
        <p class="info-item-text">${o.views}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Comments</p>
        <p class="info-item-text">${o.comments}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Downloads</p>
        <p class="info-item-text">${o.downloads}</p>
        </div>
        </div>
        </li>
        `).join("");u.insertAdjacentHTML("beforeend",e),R.refresh()}function B(){u.innerHTML=""}function g(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}function y(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}const v=document.querySelector(".form"),M=v.querySelector('input[name="search-text"]'),$=document.querySelector(".load-more-btn");let a=1,c="";const w=15;v.addEventListener("submit",async i=>{if(i.preventDefault(),B(),L(),g(),c=M.value.trim(),a=1,!c){n.warning({message:"Please enter a search term!",position:"topRight"}),d();return}try{const e=await f(c,a);e.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(e.hits),Math.ceil(e.totalHits/w)>1&&y())}catch(e){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(e)}finally{d()}});$.addEventListener("click",async()=>{a+=1,g();try{const i=await f(c,a);h(i.hits);const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const o=Math.ceil(i.totalHits/w);a<o?y():(L(),n.info({message:"You've reached the end of search results.",position:"topRight"}))}catch(i){n.error({message:"Failed to load more images.",position:"topRight"}),console.log(i)}finally{d()}});
//# sourceMappingURL=index.js.map
