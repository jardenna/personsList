import React from 'react';
import context from '@commonReact/context';


//Import file in component and display values = useCustomContext()
const useCustomContext = () => {
	return React.useContext(context);
};

export default useCustomContext;