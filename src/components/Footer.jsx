import React from 'react'

function Footer() {
  return (
    <>
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h3><span style={{fontFamily:"cursive",color:"#b85505"}}>EL RAYHANE</span> Cuisine  </h3>
                    <p></p>
                    <div className="footer-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                <h5><strong>Recettes</strong></h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="/Gateaux">Gâteaux</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/Macarons">Macarons</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Hlou Arbi</a>
                        </li>
                       
                        
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h5><strong>Contactez nous</strong></h5>
                    <p><i class="fa-solid fa-phone-volume"></i> +216 98 654 232</p>
                    <p><i class="fa-solid fa-envelope"></i> Elrayhane@gmail.com</p>
                    
                </div>
            </div>
        </div>
    </div>
    <div className='Last-footer'>
        <p>Copyright 2024 El RAYHANE cuisine</p>
    </div>
</>
  )
}



 

export default Footer
