import React from 'react'
import { useSelector } from 'react-redux'
import './Materiels.css'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Materiels() {
  const {materielsList}=useSelector(state=>state.recetteReducer)

  return (
    <div>
    <div className='Mater'>
    <h2><strong>Ustensiles de cuisine : la liste des <br/>indispensables !</strong></h2><br/>
    <img src="https://www.rustica.fr/images/ustensiles-cuisine.jpg" alt="image is not available"></img>
    
    <p>Vous souhaitez trier vos placards ou démarrer en cuisine ? Il est parfois difficile de savoir quels ustensiles de cuisine sont<br/> vraiment utiles. Alors on achète ce qui nous semble important puis un jour on réalise qu’il nous manque un fouet pour mélanger <br/>notre pâte à crêpe, puis qu’il nous manque une maryse pour bien racler nos plats…<br/>
     Bref, nous allons vous donner la liste des indispensables à avoir dans son tiroir de cuisine.</p>
     </div>
    <div className="Mat">
      
      {materielsList.map(e=><div className="CardMat"><Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={e.img} />
      <Card.Body>
        <Card.Title><strong>{e.tilte1}</strong></Card.Title>
        <Card.Text>
           {e.description}
        </Card.Text>
        
        <Button>{e.price}</Button>
      </Card.Body>
    </Card></div>)}
    </div>
    </div>
  )
}

export default Materiels

