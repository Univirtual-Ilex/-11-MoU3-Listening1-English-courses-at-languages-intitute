//Import
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './Draggable_styles'
import { gsap, TweenMax } from 'gsap'
//import ThrowPropsPlugin from "gsap/ThrowPropsPlugin"
import { Draggable} from 'gsap/Draggable'
import InputWords from '../InputWords'
import Ilex from '../../App/variables.js'

// Componente base
// Es un draggable con drop target
// PROPS
/**
 * areaDrag: #id del elemento que se va a usar como contenedor importante usar el #
 * audio: String url de la locación del audio
 * name: Contenido del texto del elemento arrastrable. No usa propchildren
 * target: #id del elemento al que va a apuntar
 * elementId: es un identificador que funciona para definir la identidad de cada instancia
 * // Base
 * ref: Recibe la referencia o el conjunto de referencias html del elemento al que apuntará como droppable
 */

const Draggable_base = React.forwardRef(({ areaDrag, name, target, elementId, status, check, ...props }, ref ) => {
		const [background, setBackground] = useState('transparent')
    const itemDraggable = useRef()
    
    useEffect ( () => {

        gsap.registerPlugin(Draggable)
        Draggable.create( itemDraggable.current , { 
            type: 'x,y',
            edgeResistance:0.65,
            bounds:areaDrag,
            throwProps:true,
            zIndex:500,
            // liveSnap: { points:[{x:100, y:100}], radius: 50}, // {x:100, y:100}, {x:50, y:50}, {x:100, y:100} Puntos en la posición 0x y 0y tambien en la 50x y 50y
            inertia:true,
            /*snap: {
				        x: function(endValue) {
				        	console.log("hola ", endValue)
				            return Math.round(endValue / itemDraggable.current.offsetWidth) * itemDraggable.current.offsetWidth;
				        },
				        y: function(endValue) {
				        	console.log("hola ", endValue)
				            return Math.round(endValue / 32) * 32;
				        }
				    },*/
            onDrag: function (e) {
                console.log(this.x, this.y)

                // console.log(this.hitTest(target))
                // console.log(ref[0].current.dataset.target)
            },
            onDragEnd: function (e) {
                ref.forEach(item => {
                    if(item.current.id === target) {
                        if (!this.hitTest(item.current)) {
                            TweenMax.to(this.target, 0.2, {x:0, y:0})
                            setBackground('transparent')
                            check(elementId, 1)
                        } else {
                        	/*TweenMax.to(this.target, 0.2, {
                        		x: function(endValue) {
										            return Math.round(endValue / itemDraggable.current.offsetWidth) * itemDraggable.current.offsetWidth;
										        },
										        y: function(endValue) {
										            return Math.round(endValue / 32) * 32;
										        }
                        	})*/
                        	setBackground(Ilex.verde)
                          console.log('Enviando id del elemento : ' + elementId)
                          
                          check(elementId, 0)
                        }
                        console.log('Area x:', item.current.offsetLeft, 'Area y: ', item.current.offsetTop)
                        
                        return item
                    }
                })
            }
        })
    } , [areaDrag, target, ref, elementId, status, check])


    return (
        <div {...props}  ref={itemDraggable}  >
            <InputWords name={name} className='draggable' style={{backgroundColor: `${background}`}}>
            </InputWords>

        </div>
        
    )
})

const DraggableItem = styled(Draggable_base)`${ styles }`

export default DraggableItem
