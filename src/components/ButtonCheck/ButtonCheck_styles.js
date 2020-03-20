import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

max-width: 7em;
.container1 {
  position: relative;
  cursor: pointer;
}
.container1 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5em;
  margin-right: 1em;
  border-radius: 0.2em;
  width: 1.5em;
  background-color: #eee;
}

.text{
	position: absolute;
	top: 0;
	left: 1.7em;
	height: 1.5;
	border-radius: 0.2em;
	width: auto;
	color: ${Ilex.textos};
}

/* On mouse-over, add a grey background color */
.container1:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container1 input:checked ~ .checkmark {
  background-color: ${Ilex.verde};
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}





`

export default styles
    