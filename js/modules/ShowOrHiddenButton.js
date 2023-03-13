export const HideButton = () => {
   const btn = document.getElementById('start-print');
   return btn.style.cssText = `opacity:0;`+
                              `transition:opacity .5s lenear;`
}

export const ShowButton = () => {
   const btn = document.getElementById('start-print');
   return btn.style.cssText = `opacity:1;`+
                              `transition:opacity .5s lenear;`
}