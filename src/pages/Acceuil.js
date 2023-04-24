import React from 'react'
import Footer from '../comp/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';

const Acceuil = () => {
  const myStyle ={
    background:"#fff" ,
    borderradius: "6px",
    boxshadow:" 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)",
    color: "#495057"

  };

  const myStyle2={
    
    fontsize:" 1.5rem",
    fontweight:"700",
    marginbottom:" .5rem"

  };
  return (
    <div>
      <div className='container mt-4'>
        <div className='section' style={{padding:"60px 0"}}>
          <div className='p-card-body' style={{backgroundColor :"#E3E5D8"}}>
      <MDBCard >
      <MDBCardBody>
        <MDBCardTitle style={myStyle2}>Makoudi Nouhaila</MDBCardTitle>
        <MDBCardText>
        <p>Je suis Nouhaila, une étudiante en cycle d'ingénieur spécialisée dans la filière développement et réseau informatique. Passionnée par les technologies de l'information, je suis constamment à la recherche de nouvelles connaissances et compétences pour améliorer mes aptitudes professionnelles. Mon parcours académique m'a permis de développer mes compétences en programmation, en analyse de données, en conception de systèmes d'information et en gestion de projets informatiques.</p>
        <p>Je suis également une personne très organisée et méthodique, ce qui me permet de gérer efficacement mon temps et mes tâches. Je suis capable de travailler en équipe, d'écouter les idées des autres et de contribuer activement à la réalisation des objectifs communs.</p>
        <p>En tant qu'étudiante en cycle d'ingénieur spécialisée dans la filière développement et réseau informatique, je suis convaincue que je peux apporter une contribution significative à toute entreprise ou organisation qui valorise l'innovation technologique et la créativité.</p>
        </MDBCardText>
        
        
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
  

      </div>
      <Footer></Footer>
    </div>
    
  )
}

export default Acceuil;