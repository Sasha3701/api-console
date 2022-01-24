import {ChangeEvent, useCallback, useRef, useState} from 'react';
import styled from 'styled-components';
import {Textarea, DragButton} from '../UI';
import {useDispatch, useSelector} from 'react-redux';
import {IPropsConsole, IWrapperConsole} from './Console.props';
import {consoleChangeSize, consoleChangeValue} from '../../store/actions/consoleAction';
import {isJsonString} from '../../utils';
import { RootState } from '../../store/reducers/rootReducer';

const WrapperConsole = styled.div<IWrapperConsole>`
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

const Console = ({padSide = 15, minWidth = 100}: IPropsConsole): JSX.Element => {
  const dispatch = useDispatch();
  const {widthIn, value, errorResponse, valueResponse, loadingConsole} = useSelector((state: RootState) => state.console)
  const refIn = useRef<HTMLTextAreaElement>(null);
  const refOut = useRef<HTMLTextAreaElement>(null);
  const refDrag = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleChangeDrag = useCallback(() => {
    setIsDrag((prevState) => !prevState);
  }, []);

  const handleDrag = useCallback(
    (e) => {
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
    },
    [dispatch, isDrag, minWidth, padSide]
  );

  const customHandleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const valueTextarea = e.target.value;
    if (isJsonString(valueTextarea)) {
      setError(false);
    } else {
      setError(true);
    }
    dispatch(consoleChangeValue(valueTextarea));
  }, [dispatch]);

  return (
    <WrapperConsole padSide={padSide} widthIn={widthIn}>
      <Textarea error={error} label="Запрос:" name="request" ref={refIn} value={value} onChange={customHandleChange} />
      <WrapperDragButton ref={refDrag}>
        <DragButton loading={loadingConsole} onMouseDown={handleChangeDrag} onMouseUp={handleChangeDrag} onMouseMove={handleDrag} />
      </WrapperDragButton>
      <Textarea error={errorResponse} label="Ответ:" name="response" variant="out" ref={refOut} value={valueResponse} />
    </WrapperConsole>
  );
};

export default Console;
