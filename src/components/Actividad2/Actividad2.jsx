//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
// styles from styled
// Data
// Components
import Container from '../Container'
import { IRow, ICol } from '../Grid'
import ButtonDown from '../ButtonDown'
import ProgressBar from '../ProgressBar'
import Video from '../Video'
// Componente base
const Actividad2_base = ({staticContext, ...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' h={33} {...props}>

            <div className="container">
        		<ProgressBar progress={33} />
        	</div>
            
            <IRow justify='center' className="flex-center" h={90}   gutters={1}>
            	<ICol className="content" w={30} >
            		<div className="  min-h card">
            			<div className="">
            				<p>For the next activity you should watch this video carefully, then complete the chart with the information from the bvideo.</p>
            			</div>
            		</div>
            	</ICol>
            	<ICol className="content" w={40} pt={4} >
            		<div className=" min-h-r " >
            			<Video videoSrc={'./media/video_.mp4'} />
            		</div>
            	</ICol>
            </IRow>
            <IRow pt={0.6}>
                <ICol pt={1}><ButtonDown link={'/actividad2a'} text={'Next'} /></ICol>
            </IRow>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
