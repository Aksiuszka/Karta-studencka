import React, { useState } from 'react';
import { useEffect } from 'react';
import { InputBox } from './styled';

function InputItem({ label, ...rest }) {
  const [inputProps, setInputProps] = useState({
    translate: 'translate(0, 0.8rem)',
    scale: 'scale(1)',
  });
  console.log(rest);

  useEffect(() => {
    console.log(rest.value);
    if (!rest.value) {
      setInputProps({ translate: 'translate(0, 0.8rem)', scale: 'scale(1)' });
    } else {
      setInputProps({ translate: 'translate(0, 0.12rem)', scale: 'scale(0.8)' });
    }
  }, [rest.value]);
  return (
    <InputBox {...inputProps}>
      <input {...rest} />
      <label>{label}</label>
    </InputBox>
  );
}

export default InputItem;
