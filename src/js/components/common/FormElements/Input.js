import React, { Fragment } from 'react';

import useCustomContext from '@hooks/useCustomContext';

function Input(props) {
	const { type, handleFilterChange, value, name, handleEmptyInput } = useCustomContext();

	return (
		<Fragment>
			<label htmlFor={name}>{props.label}</label>
			<div className="input-wrapper">

				<input
					type={type ? type : 'text'}
					name={name}
					value={value}
					id={name}
					placeholder={props.placeholder}
					onChange={handleFilterChange}
				/>
				{props.icon && <button name={props.iconName} onClick={e => handleEmptyInput(e, name)}
					className={props.iconClassName}
				/>}
			</div>
		</Fragment>
	);
}

export default Input;