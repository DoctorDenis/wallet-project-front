import React from 'react';
import Select from 'react-select';

const Customselect = ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <div>
      <Select
        styles={{
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000000',
          }),

          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            height: '0px',
          }),

          control: (baseStyles, state) => ({
            ...baseStyles,
            marginTop: '40px',
            fontFamily: 'Circe',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.47',
            textAlign: 'left',
            width: '280px',
            height: '32px',
            outline: 'none',
            padding: '0',
            border: 'none',
            borderRadius: 'none',
            borderBottom: '1px solid #E0E0E0',
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            fontFamily: 'Circe',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.47',
            width: '280px',
            margin: '0',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.7);',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(25px)',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? ' #FFFFFF' : 'transparent',
            color: state.isFocused ? '#FF6596' : '#000000',
            cursor: 'pointer',
          }),
        }}
        value={defaultValue(options, value)}
        placeholder="Select a category"
        onChange={value => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
};

export default Customselect;
