
function FirstComponent(){
   return(
      <div className='r-block'
         style={{width:"70%", height:"50vh", background:"rgba(0,0,0,.7)",
         borderRadius:"20px",
         }}
      ></div>
   )
}




const domContainer = document.querySelector('#react-app');
const root = ReactDOM.createRoot(domContainer);
root.render(e(FirstComponent));