export const selectStyles = {
  control: styles => ({
    ...styles,

    marginBottom: '40px',
    paddingLeft: '6px',
    border: 'none',
    borderBottom: '1px solid #e0e0e0',
    borderRadius: 'none',
    fontFamily: 'Circe',
    fontSize: '18px',
    lineHeight: '1.5',
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,

    cursor: 'pointer',
    paddingLeft: '20px',
    height: '44px',
    fontFamily: 'Circe',
    fontSize: '18px',
    lineHeight: '1.5',
    borderRadius: '18px',
    ':hover': {
      color: '#ff6596',
      backgroundColor: '#fff',
      fontWeight: '700',
    },
  }),

  menu: styles => ({
    ...styles,

    backgroundColor: 'rgba(242, 242, 242, 0.6)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(25px)',
  }),

  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
};
