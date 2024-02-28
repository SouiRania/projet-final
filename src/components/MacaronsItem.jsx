import React from 'react'
import Card from 'react-bootstrap/Card';
import './GateauxItem.css'

function MacaronsItem({mac}) {
  return (
    <div className='Card'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={mac.img} />
      <Card.Body>
        <Card.Title><strong>{mac.nom}</strong></Card.Title>
        <Card.Text>
           
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default MacaronsItem
