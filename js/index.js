import PrintText from "./modules/PrintText.js"

document.addEventListener("click", function(event){
   const el = event.target;
   if(el.closest("[data-burger]")){
      document.querySelectorAll("[data-burger]").forEach(item=>{
         item.classList.toggle("toggle");
      })
   }
   if(el.id === "start-print" || el.id === "span-start"){
      
      PrintText()
   }
}, true)