// import Burger from './modules/Burger.js'

document.addEventListener("click", function(event){
   const el = event.target;
   if(el.closest("[data-burger]")){
      document.querySelectorAll("[data-burger]").forEach(item=>{
         item.classList.toggle("toggle");
      })
   }
}, true)