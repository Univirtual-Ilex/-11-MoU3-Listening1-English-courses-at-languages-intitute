
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PreguntaTF_styles'


// components
import Modal from '../Generales/Modal/Modal'
import PreguntaResultado from '../PreguntaResultado'

// Componente base
const PreguntaTF_base = ({passed ,visibility,answers,...props}) => {
    
    
    return (
        <div {...props}>
            <Modal visible={visibility} w={35} err={!passed} ok={passed} repeatUrl='/actividad1' nxtUrl='/actividad2'>
            	
                {
                    answers.map((question, index) => {
                            if(question.rigth === 1){
                                
                                return (
                                    
                                    <PreguntaResultado key={'ok'+index} ok>{index+1}</PreguntaResultado>
                                )
                            } else {
                                return (
                                    <PreguntaResultado key={'err'+index} err>{index+1}</PreguntaResultado>
                                )
                            }
                    })
                }

            </Modal>
        </div>
    )
}
const PreguntaTF = styled(PreguntaTF_base)`${ styles }`
export default PreguntaTF
