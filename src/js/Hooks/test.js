import React from 'react';

function useFilter(initialState, data, additionalFilterKey) {
  const [values, setValues] = React.useState(initialState);

  const filteredText = data.filter(item => {

    for (let key in values) {

      if (item[key]) {
        const a = item[key].toLowerCase();
        const b = additionalFilterKey && item[additionalFilterKey].toLowerCase();
        const inputValues = values[key].toLowerCase();

        if (additionalFilterKey) {
          if (!b.includes(inputValues) && !a.includes(inputValues)) {
            return false;
          }
        }
      }
    }
    return true;
  });

  const handleFilterChange = React.useCallback((e) => {

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }, [setValues]);


  const handleEmptyInput = React.useCallback((e, name) => {
    e.preventDefault();
    setValues({
      ...values,
      [name]: ''
    });
  }, [setValues]);


  return {
    handleFilterChange, values, handleEmptyInput, filteredText

  };
}

export default useFilter;