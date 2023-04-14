import React from 'react'
import './segmented.css'


const Segmented = (props) => {
	const [value, setValue] = React.useState(props.defaultValue ? props.defaultValue : [])
	const [selectedLabel, setSelectedLabel] = React.useState(0)
	let flag = props.value ? props.value : value

	const handleChange = (e) => {
		setSelectedLabel(parseInt(e.target.value))
	}
	return (

		<div className='wg-segmented'>
			<div className='wg-segmented-group'>
				{props.options.map((item, index) => {
					// console.log("label", item.label);
					// console.log("value", item.value);
					console.log("disabled", item.disabled);


					return (
						<label className={`wg-segmented-item ${index === selectedLabel ? 'wg-segmented-item-selected' : ''} ` + [props.disabled ? "wg-segmented-disabled " : " "]}
							key={index}
						>
							<input onClick={handleChange}
								className='wg-segmented-item-input'
								type={"radio"}
								checked={props.checked}
								value={props.value ? props.value : index}
								disabled={props.disabled}
							/>
							<div className={'wg-segmented-item-label ' + [props.disabled || item.disabled ? "wg-segmented-disabled " : " "]} title={item}>
								{item.label ? item.label : item}
							</div>
						</label>
					)
				})}
			</div>

		</div>


	)
}

export default Segmented
