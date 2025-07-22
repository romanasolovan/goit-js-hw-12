import{a as w,S as P,i as r}from"./assets/vendor-DqB7j7Ix.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const S="https://pixabay.com/api/",b="51420403-5f20d185bf97c75fff06f9d5f",x=15;async function f(o,e=1){const i={key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:x,page:e};return(await w.get(S,{params:i})).data}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),q=new P(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const e=o.map(i=>`
        <li class="gallery-item">
        <a href="${i.largeImageURL}">
        <img src="${i.webformatURL}" alt="${i.tags}" loading="lazy" width="360" height="200"/>
        </a>
        <div class="info-list">
        <div class="info-item">
        <p class="info-item-title">Likes</p>
        <p class="info-item-text">${i.likes}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Views</p>
        <p class="info-item-text">${i.views}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Comments</p>
        <p class="info-item-text">${i.comments}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Downloads</p>
        <p class="info-item-text">${i.downloads}</p>
        </div>
        </div>
        </li>
        `).join("");u.insertAdjacentHTML("beforeend",e),q.refresh()}function R(){u.innerHTML=""}function g(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}function M(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const L=document.querySelector(".form"),$=L.querySelector('input[name="search-text"]'),B=document.querySelector(".load-more-btn");let n=1,a="";const v=15;L.addEventListener("submit",async o=>{if(o.preventDefault(),R(),y(),g(),a=$.value.trim(),n=1,!a){r.warning({message:"Please enter a search term!",position:"topRight"}),d();return}try{const e=await f(a,n);e.hits.length===0?r.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(e.hits),e.totalHits>v&&M())}catch(e){r.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(e)}finally{d()}});B.addEventListener("click",async()=>{n+=1,g();try{const o=await f(a,n);h(o.hits);const e=Math.ceil(o.totalHits/v);n>=e&&(y(),r.info({message:"You've reached the end of search results.",position:"topRight"}))}catch(o){r.error({message:"Failed to load more images.",position:"topRight"}),console.log(o)}finally{d()}});
//# sourceMappingURL=index.js.map
