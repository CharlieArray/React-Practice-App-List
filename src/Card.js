import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}


/*

    The Card component accepts 2 props: title and content.

        title is a string of the card's title.

        content is a string of the card's content.

        These props will be passed in for each Card from the List component.



*/