import React from 'react'

const Boilerplate = () => {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Boilerplate