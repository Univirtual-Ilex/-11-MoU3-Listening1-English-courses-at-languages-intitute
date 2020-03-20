import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

       
.contenedorButton{
    text-align:right;
    padding-right:3em;
}

li{
    margin:0.5em 0;
}

.questions{
	background-color: ${Ilex.violeta2};
	max-width: 15.114em;
	height: 2.42em;
	margin: auto;
	border-radius: 0.5em;
	box-shadow:0 0.3em 0 0 ${Ilex.color_gris_input};
	text-align:center;
	color: white;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
}
.answers{
	margin-top: 1em;
	display: flex;
	justify-content: center;

}
.inline_list{
	margin-top: 0.5em;
	display: flex;
}
`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`


export default styles
    