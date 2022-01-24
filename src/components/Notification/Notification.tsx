import {forwardRef, memo} from 'react';
import styled from 'styled-components';
import {CONTENT} from '../../content';
import {SmileIcon} from '../../images';
import {IPropsNotification} from './Notification.props';

const Container = styled.div`
  width: 100%;
  padding: 10px 10px 10px 42px;
  border-radius: 5px;
  background-color: var(--color-error-light);
  position: relative;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin: 0;
  color: var(--color-error);
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0;
  color: var(--color-error);
`;

const Smile = styled(SmileIcon)`
  position: absolute;
  top: 13px;
  left: 10px;
`;

const Notification = forwardRef<HTMLDivElement, IPropsNotification>(({error, ...props}, ref): JSX.Element => {
  return (
    <Container ref={ref} {...props}>
      <Smile />
      <Title>{CONTENT.NOTIFICATION.TITLE}</Title>
      <Description>{`{id: "${error.id}", explain: "${error.explain}"}`}</Description>
    </Container>
  );
});

export default memo(Notification);
