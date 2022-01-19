import {forwardRef} from 'react';
import styled from 'styled-components';
import {IPropsInput, IInput, ILabel} from './Input.props';

const CustomInput = styled.input<IInput>`
  display: inline-block;
  position: relative;
  border-radius: 5px;
  border: 1px solid ${({error}): string => (error ? `var(--color-error)` : `var(--color-gray)`)};
  padding: 5px 10px;
  font-size: 18px;
  line-height: 30px;
  color: var(--color-black);
  box-sizing: border-box;
  width: 100%;
  &:hover {
    border-color: var(--color-gray-1);
  }
  &:focus {
    border-color: var(--color-gray-1);
    outline: 2px solid var(--color-gray);
  }
`;

const CustomLabel = styled.label<ILabel>`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 20px;
  color: ${({error}): string => (error ? `var(--color-error)` : `var(--color-black)`)};
`;

const OptionalText = styled.p`
  margin: 0;
  position: absolute;
  line-height: 20px;
  font-size: 12px;
  color: var(--color-gray-2);
  top: 0;
  right: 0;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = forwardRef<HTMLInputElement, IPropsInput>(({label = '', name = '', error = false, optional = false, ...props}, ref): JSX.Element => {
  return (
    <Wrapper>
      <CustomLabel error={error} htmlFor={name}>
        {label}
      </CustomLabel>
      <CustomInput ref={ref} id={name} error={error} {...props} />
      {optional ? <OptionalText>Опционально</OptionalText> : null}
    </Wrapper>
  );
});

export default Input;
