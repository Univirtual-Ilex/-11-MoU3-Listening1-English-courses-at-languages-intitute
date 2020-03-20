
//Import
import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './ButtonInfo_styles'

// Componente base
const ButtonInfo_base = ({ children, audio, imgUrl, ...props}) => {
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
        <div {...props}>
            <button className="btn-clean">
                <span>
                    <img src={imgUrl || 'src/svg/camara.svg'} alt="Ver texto de apyo"/>
                </span>
                <span>
                { children || 'Open'}
                </span>
                <audio ref={ilxAudio}  onEnded={handleAudio}>
                    <source src={ audio }/>
                    <span>No se puede reproducir el audio</span>
                </audio>              
            </button>

        </div>
    )
}
const ButtonInfo = styled(ButtonInfo_base)`${ styles }`
export default ButtonInfo
