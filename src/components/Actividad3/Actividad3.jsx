//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'

// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
import {Olist} from './Actividad3_styles'
import {Item}from './Actividad3_styles'
import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'
import BocinaButton from '../BocinaButton'
import Data from './Actividad3_data'
import ButtonInfo from '../ButtonInfo'
import ButtonRadio from '../ButtonRadio'
import Modal from '../Generales/Modal'
import ButtonDown from '../ButtonDown'

// Componente base
const Actividad3_base = ({staticContext,...props}) => {

	const [modalFlag, setModal] = useState(false)
	const [ok, setOk] = useState(false)
	const [err, setErr] = useState(false)

	const getChecked = (dataId, ansId) => {
		var data = Data[dataId]

		data.status = 1

		if(data.answers[ansId].right === 1){
			data.right = 1
		}else{
			data.right = 0
		}
	}

	const checkActivity = () => {
		var count = 0
		Data.map((data) => {
			if(data.right === 1){
				count ++
			}else{
				setErr(true)
				setModal(true)
			}
			if(count === 4){
				setOk(true)
				setModal(true)
			}
		})
	}
	const questions = Data.map((data,i) => 
			<ICol w={33} key={i} pt={3} className="q_cont" justify={'center'} align={'center'} >
				<div className="questions"><p>{data.text}</p></div>
				<div className="answers">
				{
					data.answers.map((answer,j) => 
							<ButtonRadio key={j} dataId={i} ansId={j} setCheckedState={getChecked} text={answer.text} nameb={'ans_' + i} />
						)
				}
				</div>
			</ICol>
		)
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={75} h={38.8}>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> CHOOSE THE CORRECT OPTION FROM THE MENU ACCORDING TO THE INFORMATION IN THE CONVERSATION COURSE FROM THE VIDEO</MainTitle>

                <IRow justify='center' align='center'>
                    <BocinaButton audio={'./media/video_audio.mp3'} name={"CLICK HERE TO LISTEN THE VIDEO'S AUDIO" } />
                </IRow>
                
	            <IRow w={90} justify='center' align='center'>
	            	{questions}
	            </IRow>
            </div>

            <IRow pt={2}>
                <ICol pt={1}><ButtonDown onClick={checkActivity} text={'CHECK'} /></ICol>
            </IRow>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad3'} finished={ok} />

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
