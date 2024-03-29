import { useState } from 'react';
import './App.css';
import { checkBoxTypes } from './utils/constants';
import usePasswordGenerator from './hooks/usePasswordGenerator';
import CheckboxInput from './components/CheckboxInput';
import StrengthChecker from './components/StrengthChecker';
import Button from './components/Button';
import SliderInput from './components/SliderInput';

function App() {
  const [charLength, setCharLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState(
    checkBoxTypes.map((i) => {
      return {
        title: i,
        state: false,
      };
    })
  );
  const [copied, setCopied] = useState(false);

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCheckboxChange = (index) => {
    let updatedCheckboxData = [...checkBoxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckBoxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className='container'>
      <div className='password-generator'>
        {password && (
          <div className='header'>
            <div className='title'>{password}</div>
            <Button
              text={copied ? 'copied' : 'copy'}
              clickHandler={handleCopy}
              buttonClass='copy-btn'
            />
          </div>
        )}

        <SliderInput
          title='Character Length'
          value={charLength}
          min={4}
          max={20}
          handleChange={(e) => setCharLength(e.target.value)}
        />

        <div className='checkboxes'>
          {checkBoxData.map((checkbox, index) => {
            return (
              <div key={`checkbox-${index}`}>
                <CheckboxInput
                  checkbox={checkbox}
                  handleCheckboxClick={() => handleCheckboxChange(index)}
                />
              </div>
            );
          })}
        </div>

        {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
        {password && <StrengthChecker password={password} />}
        <Button
          text='Generate Password'
          clickHandler={() => generatePassword(checkBoxData, charLength)}
          buttonClass='generate-btn'
        />
      </div>
    </div>
  );
}

export default App;
