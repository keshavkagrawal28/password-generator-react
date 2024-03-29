const CheckboxInput = ({ checkbox, handleCheckboxClick }) => {
  return (
    <>
      <input
        type='checkbox'
        checked={checkbox.state}
        onChange={handleCheckboxClick}
      />
      <label>{checkbox.title}</label>
    </>
  );
};

export default CheckboxInput;
