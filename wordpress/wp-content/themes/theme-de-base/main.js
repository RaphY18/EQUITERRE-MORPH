import{S as o,A as u,g as s}from"./vendor.d01bfbfa.js";const c=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};c();o.use([u]);let p=document.querySelector(".menu__toggle a"),r=document.querySelector(".hamburger");p.addEventListener("click",()=>{r.style.display="block",r.classList.toggle("open"),r.classList.contains("open")||(r.style.display="none")});let a=document.querySelector(".Nav");document.querySelector(".logo img");window.onscroll=()=>{document.body.scrollTop>=100|document.documentElement.scrollTop>=100?(a.classList.add("colored"),a.classList.remove("transparent")):(a.classList.add("transparent"),a.classList.remove("colored"))};s.fromTo(".terre",{rotate:0},{rotate:360,repeat:-1,duration:15,ease:"linear.out"},2.5);s.timeline().to(".interrogation",{x:"2%",rotate:-25}).to(".interrogation",{y:"-2%",rotate:35}).to(".interrogation",{x:"-2%",rotate:-15}).to(".interrogation",{y:"2%",rotate:10}).to(".interrogation",{x:"2%",rotate:-20,ease:"power1.inOut",yoyo:!0,repeat:-1});s.timeline({repeat:-1}).to(".leaf",{x:"-80%",y:"+=40",rotate:20,duration:1.5,ease:"power4.inout"}).to(".leaf",{x:"80%",y:"+=50",rotate:10,duration:1.5,ease:"power2.in"}).to(".leaf",{x:"-80%",y:"+=60",rotate:20,duration:1.5,ease:"power4.inout"}).to(".leaf",{x:"80%",y:"+=70",rotate:10,duration:1.5,ease:"power2.in"}).to(".leaf",{x:"-80%",y:"+=80",rotate:20,duration:1.5,ease:"power4.inout"}).to(".leaf",{x:"80%",y:"+=90",rotate:10,duration:1.5,ease:"power2.in"}).to(".leaf",{x:"-80%",y:"+=100",rotate:20,duration:1.5,ease:"power4.inout"}).to(".leaf",{x:"80%",y:"+=110",rotate:10,duration:1.5,ease:"power2.in"});new o(".mySwiper",{slidesPerView:1,spaceBetween:10,autoplay:{delay:2500,disableOnInteraction:!0},loop:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}}});new o(".heroSwiper",{slidesPerView:1,spaceBetween:0,autoplay:{delay:2500,disableOnInteraction:!0},loop:!0,pagination:{el:".pagination",clickable:!0}});new o(".partenaireSwiper",{autoplay:{delay:2500,disableOnInteraction:!0},loop:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}});var y=document.getElementById("myModal"),m=document.getElementById("myInput");y.addEventListener("shown.bs.modal",function(){m.focus()});
