const SliderInput = ({ title, value, min, max, handleChange }) => {
  return (
    <>
      <div className='characterLength'>
        <span>
          <label>{title}</label>
          <label>{value}</label>
        </span>
        <input
          type='range'
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SliderInput;
