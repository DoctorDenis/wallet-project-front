export const selectDefaultColor = theme => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#fff',
      primary: '#fff',
    },
  };
};
