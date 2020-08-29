import React from 'react';

import useCustomContext from '@hooks/useCustomContext';
import Input from '@formElements/Input';

function Filter() {
   const { placeholder } = useCustomContext();
   return (
      <form className="filter">
         <Input placeholder={`Filter ${placeholder}`}
            icon
            iconClassName='icon-x'
            iconName='empty filter'
         />

      </form>
   );
}

export default Filter;

Filter.defaultProps = {
   placeholder: ''
};