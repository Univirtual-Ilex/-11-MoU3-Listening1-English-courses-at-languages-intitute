
//Import
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './BocinaButton_styles'

// Componente base
const BocinaButton_base = ({className, audio,name ,...props}) => {

    const [running, playAudio] = useState(false)
    const ilxAudio = useRef()
    const handleAudio = () => {

        if (!running) {

            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.pause()
            playAudio(false)
        }
    }
    return (

            <button className={`btn-clean text-center ${className} ${running ? 'running': '' }` } onClick={handleAudio}> 
                <i className='ilx-bocina'></i>
                <audio ref={ilxAudio} className="text-center" onEnded={handleAudio}>
                    <source src={ audio }/>
                    <span>No se puede reproducir el audio</span>
                </audio>
                <span>&emsp;{name}</span>
            </button>

    )
}
const BocinaButton = styled(BocinaButton_base)`${ styles }`
export default BocinaButton
