import{S as l,i as d}from"./assets/vendor-e663445a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="44852213-a2483cc0047435af0fdb3dda4",f="https://pixabay.com/api/";async function p(n,o=1,s=40){try{const t=await fetch(`${f}?key=${u}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery");function m(){c.innerHTML=""}function h(n){const o=n.map(t=>`
        <a href="${t.largeImageURL}" class="gallery__item">
            <img 
            src="${t.webformatURL}" 
            alt="${t.tags}" 
            class="gallery__image"/>
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${t.likes}</p>
                <p class="info-item"><b>Views:</b> ${t.views}</p>
                <p class="info-item"><b>Comments:</b> ${t.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
            </div>
        </a>
    `).join("");c.insertAdjacentHTML("beforeend",o),new l(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,fadeSpeed:400,docClose:!0,swipeClose:!0,loop:!0,preloading:!0}).refresh()}function a(n){d.info({message:n,position:"topRight"})}function y(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#search-form"),o=document.querySelector("#search-input");n.addEventListener("submit",async s=>{s.preventDefault();const t=o.value.trim();if(!t){a("Please enter a search term!");return}m(),y(),p(t).then(e=>{e.length===0?a("Sorry, there are no images matching your search query. Please try again!"):h(e)}).catch(e=>{a("An error occurred while fetching images. Please try again later.")}).finally(()=>{g()})})});
//# sourceMappingURL=commonHelpers.js.map
