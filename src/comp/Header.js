import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import '//AApp.css';

function Header(){
    return (
      
            <header className="header" >
                <div className="text-center mb-4" >
                <img src="M.png" alt="photo" className="rounded-circle profile-img" style={{height:"140px",objectfit:"cover",width:"140px"}}/>

                </div>
                <h1 style={{textAlign:"center" , color:"101916"}}  >MAKOUDI NOUHAILA </h1>
                <h2 style={{textAlign:"center"}}>Etudiante Ingénieur en 4eme annee IIR</h2>
            </header>
       



    );
}

export default Header;

//style={{textAlign:"center"}}