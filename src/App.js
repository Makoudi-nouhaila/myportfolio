import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./comp/Header";
import Footer from './comp/Footer';
//import Acceuil from './comp/Acceuil';
//import NavBar from './comp/NavBar';
import Hoome from "./comp/Hoome";
import Layout from "./pages/Layout";
import Acceuil from "./pages/Acceuil";
import Formations from "./pages/Formations";
import Experiences from "./pages/Experiences";
import Publications from "./pages/Publications";
import Projets from "./pages/Projets";
import Certifications from "./pages/Certifications";





function App() {
  return (
    
   <div style={{backgroundColor:"#E3E5D8"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Acceuil />} />
          <Route path="formations" element={<Formations />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="projets" element={<Projets />} />
          <Route path="certifications" element={<Certifications />} />
          


        </Route>
      </Routes>
    </BrowserRouter>
    
</div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);