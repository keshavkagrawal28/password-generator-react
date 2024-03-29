const StrengthChecker = ({ password }) => {
  const getPasswordStrength = () => {
    const passLength = password.length;

    if (passLength < 1) return '';
    else if (passLength < 4) return 'Very Weak';
    else if (passLength < 8) return 'Poor';
    else if (passLength < 12) return 'Medium';
    else if (passLength < 16) return 'Strong';
    else return 'Very Strong';
  };

  const passStrength = getPasswordStrength();

  return (
    <>
      {passStrength && (
        <div className='passwordStrength'>
          Strength: <span style={{ fontWeight: 'bold' }}>{passStrength}</span>
        </div>
      )}
    </>
  );
};

export default StrengthChecker;
