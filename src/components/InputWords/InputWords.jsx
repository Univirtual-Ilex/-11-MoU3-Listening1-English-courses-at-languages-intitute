
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './InputWords_styles'
import { Div } from './InputWords_styles'

// Componente base
const InputWords_base = ({name, w, m, ...props}) => {
    return (
        <div {...props}>
           <Div className='btn-clean' name={name} >
           </Div>
        </div>
    )
}
const InputWords = styled(InputWords_base)`${ styles }`
export default InputWords
