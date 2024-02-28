import React from 'react'

function Contact() {
  return (
   
    <section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contactez-Nous</h2>
    <p className="text-center w-responsive mx-auto mb-5">
Avez-vous des questions? N'hésitez pas à nous contacter directement. Notre équipe reviendra <br/>vers vous dans quelques heures pour vous aider.</p>

    <div class="row">

       
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="name" class="">Votre Nom</label>
                            <input type="text" id="name" name="name" class="form-control"/>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="email" class="">votre email</label>
                            <input type="text" id="email" name="email" class="form-control"/>
                            
                        </div>
                    </div>
                   

                </div>
              
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                        <label for="subject" class="">Sujet</label>
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            
                        </div>
                    </div>
                </div>
               
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form">
                        <label for="message">Votre Message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
                

            </form>
          <br/>
            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();" >Envoyer</a>
            </div>
            <div className="status"></div>
        </div>
        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Kairouan , 3115</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+216 98 654 232</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>Elrayhane@gmail.com</p>
                </li>
            </ul>
        </div>
      

    </div>

</section>
  )
}


export default Contact
