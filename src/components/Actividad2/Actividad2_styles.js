import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    color: ${Ilex.color_grisMedio};
    .bloque-columnas{
        column-count:4;
        column-gap: 3.5em;
        orphans:0;
        widows: 0;
        
        li{
            margin: 0.5em 0.5em;


            &:first-child{
                margin: 0em 0;
            }
        }
    }
    .inline_list{
    	display: inline-block;
    	width: 100%;
    }
    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .content {
        text-align: center;
    }
    .max-h{
    	max-height: 10em;
    }
    .min-h{
    	min-height: 10em;
    }

    .min-h-r{
    	min-height: 20em;
    }
    .card{
    	border: solid 0.1em ${Ilex.color_gris_input};
    	box-shadow:0 0.5em 0 0 ${Ilex.color_gris_input};
  		transition: 0.3s;
  		background-color: white;
  		border-radius: 1em;
  		border-bottom: 3em
    }
    .container{
		width: 100%;
		height: 1.5em;
	    padding-right: 14em;
	    padding-left: 14em;
	    margin-right: auto;
	    margin-left: auto;
	}
    .lista-preguntas {
        display:flex;
        flex-direction: column;
        align-items:stretch;
        align-content:space-between;
        flex-wrap:wrap;
        height:25.4em;
        li{
            margin: 0.5em 0.5em;
            width: 10em ;
        }
    }
`

export default styles
    