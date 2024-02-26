import React from 'react'

import Card from 'react-bootstrap/Card';

function RecetteItem({item}) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
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
