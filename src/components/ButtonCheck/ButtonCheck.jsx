
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './ButtonCheck_styles'

// Componente base
const Checkbox = props => (
  <input type="radio" name {...props} />
)
const ButtonCheck_base = ({arrId,setCheckedState, text, buttonId, nameb, ...props}) => {
	const [state, setState] = useState({ checked: false })

	const handleCheckboxChange = event => (
    		setState({ checked: event.target.checked }),
    		setCheckedState(arrId, buttonId)
		)

    return (
        <div {...props}>
        	<label className="container1">
	            <Checkbox className='btn-clean'
	            	defaultChecked={state.checked}
	            	onClick={handleCheckboxChange}
	            	name={nameb}
	            >
            	</Checkbox>
            	<span className="checkmark"> </span>
            	<span className="text">{text} </span>
            </label>
        </div>
    )
}
const ButtonCheck = styled(ButtonCheck_base)`${ styles }`
export default ButtonCheck
