import {useCallback, useRef, useState} from 'react';
import styled from 'styled-components';
import {Textarea, DragButton} from '../UI';
import {useDispatch} from 'react-redux';
import {IPropsConsole} from './Console.props';
import {consoleChangeSize} from '../../store/actions/consoleAction';

const WrapperConsole = styled.div<IPropsConsole>`
  display: grid;
  grid-template-columns: ${({widthIn}): string => `${widthIn === null ? '1fr' : widthIn + 'px'} auto 1fr`};
  padding: ${({padSide}): string => `10px ${padSide}px`};
  box-sizing: border-box;
  height: 100%;
`;

const WrapperDragButton = styled.div`
  justify-self: center;
  align-self: center;
`;

const Console = ({padSide = 15, widthIn = null, minWidth = 100}: IPropsConsole): JSX.Element => {
  const dispatch = useDispatch();
  const refIn = useRef<HTMLTextAreaElement>(null);
  const refOut = useRef<HTMLTextAreaElement>(null);
  const refDrag = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const handleChangeDrag = useCallback(() => {
    setIsDrag((prevState) => !prevState);
  }, []);

  const handleDrag = useCallback((e) => {
    if (!isDrag) {
      return;
    }
    const widthDragButton = refDrag.current?.offsetWidth! / 2;
    const posXCursor = e.pageX - widthDragButton;
    const posXInput = refIn.current?.offsetWidth!;
    const posXOutput = refOut.current?.offsetWidth!;
    const widthWindow = document.documentElement.clientWidth;
    if (
      (posXInput <= minWidth || posXOutput <= minWidth) &&
      (posXCursor <= minWidth + widthDragButton || widthWindow - posXCursor <= minWidth + widthDragButton + padSide * 2)
    ) {
      return;
    }
    const size = posXCursor - refIn.current?.offsetLeft!;
    dispatch(consoleChangeSize(size));
  }, [dispatch, isDrag, minWidth, padSide]);

  return (
    <WrapperConsole padSide={padSide} widthIn={widthIn}>
      <Textarea label="Запрос:" name="request" ref={refIn} />
      <WrapperDragButton ref={refDrag}>
        <DragButton onMouseDown={handleChangeDrag} onMouseUp={handleChangeDrag} onMouseMove={handleDrag} />
      </WrapperDragButton>
      <Textarea label="Ответ:" name="response" variant="out" ref={refOut} />
    </WrapperConsole>
  );
};

export default Console;
