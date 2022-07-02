function MyApp() {
   return (
   <div>
      <h1 className="app__title title">Урок 1. Создание компонента.</h1>
      <div className='r-block'
         // style={{width:"70%", height:"50vh", background:"rgba(0,0,0,.7)",
         // borderRadius:"20px",
         // }}
      ></div>
   </div>
   

   );
 }

 const container = document.getElementById('root');
 const root = ReactDOM.createRoot(container);
 root.render(<MyApp />);