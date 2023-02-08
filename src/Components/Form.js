import React, { useRef } from 'react';

const Form = () => {
  const inputRef = useRef(null);
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
    // console.log(
    //   value
    // )
  };

  const handleReset = () => {
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Form






