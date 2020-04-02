import React, {useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import PreguntaTF from '../PreguntaTF'

import ProgressBar from '../ProgressBar'
// Data
import Data from './Actividad_data'

import BocinaButton from '../BocinaButton'

import ButtonCheck from '../ButtonCheck'

const Actividad_base =  ({staticContext, ...props}) => {
	
	const [modalFlag, setModal] = useState(false)
	const [passed, setPassed] = useState(false)
	const dat_leng = Data.length
    const setList = (id, val) =>{
		Data[id].status = val
		checkList()
		}
	const data1 = Data.slice()
	const data2 = data1.splice(3,5)
	var score = 0


	const checkAnswers = () =>{
		console.log(modalFlag, passed)
		var count = 0
		Data.map((data, i) =>{
	        	if(data.rigth !== 1){
	        		setPassed(false)
	        		return setModal(true)
	        	}
	        	else if(i === dat_leng -1 && count === 5){
	        		if(data.rigth === 1){
	        			setPassed(true)
	        			return setModal(true)
	        		}
	        	}else{
	        		count ++
	        	}
	        })
	}
	const checkList = () =>{
		console.log(Data)
		var count = 0
		Data.map((data, i) =>{
	        	if(data.status !== 1){
	        		return setModal(false)
	        	}
	        	else if(i === dat_leng -1 && count === 5){
	        		if(data.status === 1)
	        			checkAnswers()
	        	}else{
	        		count ++
	        	}
	        })
		// console.log(count)
		// setPbar(count * 16.67)
	}

	const setChecked = (arrId, buttonId) => { // we get the checked state, NOTE: the checked state arrive with FALSE = TRUE and viceversa
		Data.map((data) => {
				if(data.id === arrId){
					data.status = 1
					if(buttonId === 1){
						if(data.button1.score === 1)
							data.rigth = 1
						else{
							data.rigth = 0
						}
					}else{
						if(data.button2.score === 1){
							data.rigth = 1
						}
						else
							data.rigth = 0
					}
					checkList()
				}
			})
	}
	const buttons = data1.map((data, i) => 
			<IRow justify={'flex-start'} className="inline_list" pt={2} key={i}>
				<BocinaButton audio={data.audio} name={'AUDIO ' + (i + 1)} />
				<ButtonCheck setCheckedState={setChecked} arrId={data.id} buttonId={1} nameb={'first_button1' + i} text={data.button1.text} className={"ml-1  " + 'first_button1' + i} />
				<ButtonCheck setCheckedState={setChecked} arrId={data.id} buttonId={2} nameb={'first_button1' + i} text={data.button2.text} className={"ml-1  " + 'first_button1' + i} />
			</IRow>
		)
	const buttonsR = data2.map((data,i) => 
			<IRow justify={'flex-start'} className="inline_list" pt={2} key={i}>
				<BocinaButton audio={data.audio} name={'AUDIO ' + (i + 4)} /> 
				<ButtonCheck setCheckedState={setChecked} arrId={data.id} buttonId={1} nameb={'second_button1_' + i} text={data.button1.text} className={"ml-1  " + 'second_button1_' + i} />
				<ButtonCheck setCheckedState={setChecked} arrId={data.id} buttonId={2} nameb={'second_button1_' + i} text={data.button2.text} className={"ml-1  " + 'second_button1_' + i} />
			</IRow>
		)
	
	
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={32} id="area">
        	<div className="container">
        		<ProgressBar progress={0} />
        	</div>
            <div className="" > 
	            <UiButtonsContainer>
	                <ButtonUi icon='ilx-ayuda' tooltip='Click on the audio to hear the description, then answer' />
	                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={() => window.location.reload()} />
	            </UiButtonsContainer>
	            <IRow pt={1.5} className="text-center">
	                <ICol py={ 0.5 }>
	                    <MainTitle color={Ilex.violeta2} size={1.5}>
	                    LISTEN TO THE SHORT DESCRIPTION AND TICK  
	                    <br></br>
						ON THE CORRECT BOX.
	                    </MainTitle>  
	                </ICol>
	            </IRow>

	            <IRow justify='center' align='center' pt={3} w={100} gutters={0.5} className="text-center alex mt-0">
	            	<ICol w={40} >
						{buttons}
	                </ICol>
	                <ICol w={40} >
	                	{buttonsR}
	                </ICol>
	            </IRow>
            </div>
        <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} />
        </Container>
    )

}


const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad