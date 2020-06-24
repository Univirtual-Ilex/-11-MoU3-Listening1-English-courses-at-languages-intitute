
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import { IRow, ICol } from '../Grid'
import {styles,  UiButtonsContainer } from './Actividad2A_styles'
import Container from '../Container'
import Data from './Actividad2A_data'
// Components

import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import Ilex from '../../App/variables'
import InputWords from '../InputWords'
import BocinaButton from '../BocinaButton'
import Modal from '../Generales/Modal'
import ButtonDown from '../ButtonDown'
// Componente base
// 530 517 video player

const Actividad2A_base = ({staticContext, ...props}) => {

	const [modalFlag, setModal] = useState(false)
	const [ok, setOk] = useState(false)
	const [err, setErr] = useState(false)

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
	const checkData = () => {
		Data.map((data) =>
		{
			if(data.answers_rigth.length > 1)
				if(data.answers_rigth[0] === 1 && data.answers_rigth[1] === 1){
					data.status = 1
					data.right = 1
				}else{
					data.status = 0
					data.right = 0
				}
			else
				if(data.answers_rigth[0] === 1){
					data.status = 1
					data.right = 1
				}else{
					data.status = 0
					data.right = 0
				}
		})
	}
	const checkInputs = (e) => {
		var id = e.target.name.split("%%")[0]
		var input = e.target.name.split("%%")[1]
		console.log(id)
		if(input === 'input1'){
			console.log(Data[id].answers[0], e.target.value)
			if(Data[id].answers[0] == e.target.value){
				Data[id].answers_rigth[0] = 1
				checkData()
			}
			else
				Data[id].answers_rigth[0] = 0
		}
		if(input === 'input2'){
			if(Data[id].answers[1] == e.target.value){
				Data[id].answers_rigth[1] = 1
				checkData()
			}
			else
				Data[id].answers_rigth[1] = 0
		}
	}
	const inputs = Data.map((data,i) => 
			<IRow justify='center' align='center' className="text-center" key={i} >
				<strong> {data.id + '.)'} 
				</strong> 
				<div>
					&emsp;{data.text1} &emsp;
				</div> <InputWords name={i + '%%input1'} onChange={checkInputs} />
				
					{data.text2 ? 
						<div className="inline_list"> 
							&emsp;<p>{data.text2}</p> &emsp; {data.input2 ? <InputWords name={i + '%%input2'} onChange={checkInputs} /> : ''}
						</div>

						:
						''
					}
					
				
			</IRow>
		)
    return (
        <Container bgImage='./src/bg_actividad1.png' h={33} {...props}>
        	<div className="container">
        		<ProgressBar progress={33} />
        	</div>
            <div className="" > 
	            <UiButtonsContainer>
	                <ButtonUi icon='ilx-ayuda' tooltip='Complete the chart with the information from the video you watched' />
	                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={() => window.location.reload()} />
	            </UiButtonsContainer>
	            <IRow pt={1.5} className="text-center">
	                <ICol py={ 0.5 } className="text-center">
	                    <MainTitle color={Ilex.violeta2} size={1.5}>
	                    COMPLETE THE CHART WITH THE IMFORMATION
	                    <br></br>
						FROM THE VIDEO YOU WATCHED
	                    </MainTitle>

	                </ICol>
	                <IRow justify='center' align='center'>
	                    <BocinaButton audio={'./media/video_audio.mp3'} name={"CLICK HERE TO LISTEN THE VIDEO'S AUDIO" } />
	                </IRow>
	            </IRow>

	            <IRow justify='center' align='center' w={100} gutters={0.5} className="text-center mt-0" >
	            	<ICol w={100} >
	            		
	            		{inputs}

	            	</ICol>
	            </IRow>

            </div>

            <IRow pt={7}>
                <ICol pt={1.5}><ButtonDown onClick={checkActivity} text={'CHECK'} /></ICol>
            </IRow>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad2a'} nxtUrl='#/actividad3' />
        </Container>

    )
}
const Actividad2A = styled(Actividad2A_base)`${ styles }`
export default Actividad2A
