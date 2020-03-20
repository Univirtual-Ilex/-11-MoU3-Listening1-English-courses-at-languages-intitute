import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import InputWords from '../InputWords'

const list_phrases = [
			'    You have to visit this beautiful town    ', 
			'    Hey there!    ', 
			'    a student from the Chemical Technology program    ', 
			'    I come from Quinchía    ', 
			'    Its main products are the coffee and the asparagus    '];

const phrases = list_phrases.map((phrase, i) => 
		<li className="inline_list" key={i}>
			<InputWords  name={phrase} />
		</li>
	)

function Draggables() {

  const [{isDragging}, drag] = useDrag({
    item: { type: div },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>,
  )
}