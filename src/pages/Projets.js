import Footer from '../comp/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const Projets = () => {
    const myStyle = {
      color: "red",
      backgroundColor: "black",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
      <div>
        <div className='container mt-4'>
          <div className='section' style={{padding:" 60px 0"}}>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0" style={{alignItems:"center"}}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Projet Pokemon App</h5>
        <p class="card-text">Using Java.</p>
        <a href="https://github.com/Makoudi-nouhaila/PokemonProjet.git" class="btn btn-primary" style={{alignItems:"center"}}>Preview</a>
      </div>
    </div>
  </div>
  
 
</div>   </div> </div>
      <Footer></Footer>
</div></>
    );
  }

export default Projets;