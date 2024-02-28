import React from 'react'
import Card from 'react-bootstrap/Card';
import './GateauxItem.css'

function GateauxItem({gato}) {
  return (
    <div className="Card">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={gato.img} />
      <Card.Body>
        <Card.Title><strong>{gato.name}</strong></Card.Title>
        <Card.Text>
           
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default GateauxItem
