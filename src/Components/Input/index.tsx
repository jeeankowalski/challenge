import React, { useState, useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  InputContainer,
  InputElement,
  Label,
  Icon,
  IconClear,
} from './styles';

interface InputProps extends TextInputProps {
  label: string;
  icon?: string;
  clearButton?: boolean;
  clearButtonCallback?: () => void;
}

const Input = ({label, icon, clearButton, clearButtonCallback, ...rest}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputElementRef = useRef<TextInput>(null);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };    

  const handleClearButtonClick = () => {
    if (inputElementRef.current)
      inputElementRef.current.clear();

    if (clearButtonCallback) clearButtonCallback();

    if (inputElementRef.current)
      inputElementRef.current.focus();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer isFocused={isFocused}>
        {!!icon && <Icon name={icon} />}

        <InputElement
          ref={inputElementRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        {!!clearButton && (
          <TouchableOpacity onPress={() => handleClearButtonClick()}>
            <IconClear name="close" />
          </TouchableOpacity>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;

Input.defaultProps = {
  icon: '',
  clearButton: false,  
  clearButtonCallback: undefined,
};