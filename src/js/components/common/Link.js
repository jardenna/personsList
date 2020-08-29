import React from 'react';

import useCustomContext from '@hooks/useCustomContext';

function Link() {
	const { header, link, target, title } = useCustomContext();

	return (
		<a
			target={target}
			href={link}
			title={title}>
			{header}
		</a>

	);
}

export default Link;