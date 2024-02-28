import React from 'react'
import './Recette.css'
import Card from 'react-bootstrap/Card';

function RecetteItem({item}) {
  return (
    <div className='cardd'>
       <Card style={{ width: '20rem' }}>
      <Card.Img  src={item.img} />
      <Card.Body>
        <Card.Title><strong>{item.tilte}</strong></Card.Title>
        <Card.Text>
            {item.underTitle}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default RecetteItem
