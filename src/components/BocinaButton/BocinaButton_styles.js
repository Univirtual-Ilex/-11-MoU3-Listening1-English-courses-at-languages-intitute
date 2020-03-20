import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    background-color: ${Ilex.violeta2};
    color: white;
    border-radius: 0.5em;
    min-width: 10.4915625em;
    max-width: 15.2313125em;
    min-height: 2.418em;
    font-weight:bold;
    &:hover{
        color: ${Ilex.verde};
    }
    &.running{
        color: ${Ilex.verde};
    }

    .text-center{
    	align-text: center;
    }
    .inline_list{
    	display: flex;
    }
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .content {
        text-align: center;
    }
`
    // crear el template string
    export default styles
    