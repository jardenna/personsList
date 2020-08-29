import React from 'react';

function useFilter(initialState, data, aditionalFilterKey) {
   const [values, setValues] = React.useState(initialState);

   const filteredText = data.filter(item => {

      for (let key in values) {

         if (item[key]) {
            const a = item[key].toLowerCase();
            const b = aditionalFilterKey && item[aditionalFilterKey].toLowerCase();
            const inputValues = values[key].toLowerCase();

            if (aditionalFilterKey) {
               if (!b.includes(inputValues) && !a.includes(inputValues)) {
                  return false;
               }
            }
         }
      }
      return true;
   });

   const handleFilterChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      setValues({
         ...values,
         [name]: value
      });
   };

   const handleEmptyInput = (e, name) => {
      e.preventDefault();
      setValues({
         ...values,
         [name]: ''
      });
   };

   return {
      handleFilterChange, values, handleEmptyInput, filteredText

   };
}

export default useFilter;