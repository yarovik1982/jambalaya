import PrintText from "./modules/PrintText.js"
import { switchBurgerMenu } from "./modules/BurgerMenu.js";

document.addEventListener("click", function(event){
   const el = event.target

   if(el.closest("[data-burger]")){
      
      switchBurgerMenu()
      
      document.querySelectorAll("[data-burger]").forEach(item=>{
         item.classList.toggle("toggle");
      })
   }
   if(el.id === "start-print" || el.id === "span-start"){
      
      PrintText()
   }
}, true)

