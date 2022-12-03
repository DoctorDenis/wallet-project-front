import validator from 'validator';

const PasswordStrengthIndicator = ({ password }) => {
  // Перевірка важкості пароля
  const result = validator.isStrongPassword(password, {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: true,
    pointsPerUnique: 5,
    pointsPerRepeat: 3,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10,
  });

  // Додавання кольору та тексу по умові
  const handleIndicator = () => {
    if (result >= 0 && result < 25) {
      return {
        color: '#ff6596',
        width: 25,
      };
    } else if (result >= 25 && result < 50) {
      return {
        color: '#fed057',
        width: 50,
      };
    } else if (result >= 50 && result < 75) {
      return {
        color: '#24cca7',
        width: 75,
      };
    } else if (result >= 75) {
      return {
        color: '#00ad84',
        width: 100,
      };
    } else {
      return '';
    }
  };

  const indicator = handleIndicator();

  const changeIndicatorColor = () => ({
    width: `${indicator.width}%`,
    background: indicator.color,
    height: '4px',
  });

  return (
    <div className="position-absolute top-100 end-0 w-100">
      {password.length > 0 && (
        <div className="progress" style={{ height: '4px' }}>
          <div className="progress-bar" style={changeIndicatorColor()}></div>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;
