import {forwardRef} from 'react';
import styled from 'styled-components';
import {ILabel} from '../Input/Input.props';
import {IPropsTetxarea, ITextarea} from './Textarea.props';

const Wrapper = styled.div`
  min-height: 400px;
  min-width: 400px;
  box-sizing: border-box;
`;

const CustomLabel = styled.label<ILabel>`
  display: inline-block;
  color: ${({error}): string => (error ? 'var(--color-error)' : 'var(--color-gray-2)')};
  margin-bottom: 3px;
`;

const CustomTextarea = styled.textarea<ITextarea>`
  display: inline-block;
  border-radius: 5px;
  border: 1px solid ${({error}): string => (error ? 'var(--color-error)' : 'var(--color-gray)')};
  color: var(--color-black);
  padding: 10px;
  font-size: 14px;
  width: 100%;
  height: 97%;
  box-sizing: border-box;
  resize: none;
  &:hover {
    border-color: ${({error}): string => (error ? 'var(--color-error)' : 'var(--color-gray-1)')};
  }
  &:focus {
    border-color: ${({error}): string => (error ? 'var(--color-error)' : 'var(--color-gray-1)')};
    outline: 2px solid ${({error}): string => (error ? 'var(--color-error)' : 'var(--color-gray)')};
  }
`;

const Textarea = forwardRef<HTMLTextAreaElement, IPropsTetxarea>(
  ({label, name, variant = 'in', error = false, ...props}, ref): JSX.Element => {
    return (
      <Wrapper>
        <CustomLabel error={error} htmlFor={name}>
          {label}
        </CustomLabel>
        <CustomTextarea error={error} id={name} ref={ref} variant={variant} {...props} disabled={variant === 'out' && true} />
      </Wrapper>
    );
  }
);

export default Textarea;
