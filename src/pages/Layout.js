import { Outlet, Link } from "react-router-dom";
import Header from "../comp/Header";
import Footer from "../comp/Footer";

const Layout = () => {
  return (
    <>
    <Header></Header>

      <nav className="navbar navbar-expand-lg " style={{backgroundColor :"#355245"}} >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{color:"#AFC1B6" , fontFamily:"fantasy"}}>Acceuil</Link>
          </li>
          <li className="nav-item">
            <Link to="/Formations" className="nav-link" style={{color:"#AFC1B6" , fontFamily:"fantasy"}}>Formations</Link>
          </li>
          <li className="nav-item">
            <Link to="/Experiences" className="nav-link" style={{color:"#AFC1B6" , fontFamily:"fantasy"}}>Experiences</Link>
          </li>
          <li className="nav-item">
            <Link to="/projets" className="nav-link" style={{color:"#AFC1B6" , fontFamily:"fantasy"}}>projets</Link>
          </li>
          <li className="nav-item">
            <Link to="/certifications" className="nav-link" style={{color:"#AFC1B6" , fontFamily:"fantasy"}}>certifications</Link>
          </li>
          
          
        </ul>
      </nav>

      <Outlet />
      
    </>
  )
};

export default Layout;