import {forwardRef} from 'react';
import styled from 'styled-components';
import {IPropsTitle, ITitle} from './Title.props';

const CustomTitle = styled.h1<ITitle>`
  margin: 0;
  font-size: ${({variant}): string => (variant === 'auth' ? '24px' : '20px')};
`;

const Title = forwardRef<HTMLHeadingElement, IPropsTitle>(({children, variant, ...props}, ref): JSX.Element => {
  return (
    <CustomTitle ref={ref} variant={variant} {...props}>
      {children}
    </CustomTitle>
  );
});

export default Title;
