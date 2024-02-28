import React from 'react'
import Card from 'react-bootstrap/Card';

function HlouItem({hlo}) {
  return (
   
 <div className="Card">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={hlo.img} />
      <Card.Body>
        <Card.Title><strong>{hlo.nom1}</strong></Card.Title>
        <Card.Text>
           
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default HlouItem
