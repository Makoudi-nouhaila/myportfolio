import React from 'react';
import Footer from '../comp/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function Certifications(){
    return(

        <div>
          <div class="container mt-4">
            <div>
              <div class="my-3 row">
                <div class="d-flex col-lg-4 col-sm-6 col-12" style={{justifycontent: "space-between"}}>
                  <div class="h-100 card" >
                    <img class="card-img-top" src="certificat1.png"/>
                      <div class="card-body">
                        <div class="card-title h5">DevOps, Cloud, and Agile Foundations</div>
                        <p class="card-text">
                          <span>DevOps, Cloud, and Agile Foundations</span>
                          </p>
                          </div>
                          </div>
                          </div>
                          <div class="d-flex col-lg-4 col-sm-6 col-12">
                            <div class="h-100 card">
                              <img class="card-img-top" src="certificat2.png"/>
                              <div class="card-body">
                                <div class="card-title h5">Python Functions, Files, and Dictionaries</div>
                                <p class="card-text">
                                  <span>Python Functions, Files, and Dictionaries</span>
                               
                                  </p>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                          
                                                    </div>
                                                    </div>
          
        
            <Footer></Footer>
        </div>





    );


}

export default Certifications;