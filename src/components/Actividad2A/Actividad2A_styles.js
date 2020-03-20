import styled, { css } from 'styled-components'

export const styles = css`
    .row{
        justify-content: center;
    }
    .bloque-izquierdo{
        flex-grow:1;
        padding:3em;
        width:50%;
    }
    .bloque-derecho{
        flex-grow:1;
        padding:3em;
        width:50%;

    }

    .bloque-controles{
    }
    .container{
		width: 100%;
		height: 1.5em;
	    padding-right: 14em;
	    padding-left: 14em;
	    margin-right: auto;
	    margin-left: auto;
	}
	.inline_list{
    	display: flex;
    }
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;
`
export default  {styles,UiButtonsContainer} 
    