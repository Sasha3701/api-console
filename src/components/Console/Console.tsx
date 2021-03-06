import {useCallback, useRef} from 'react';
import styled from 'styled-components';
import {Textarea, DragButton} from '../UI';
import {useDispatch, useSelector} from 'react-redux';
import {IPropsConsole, IWrapperConsole} from './Console.props';
import {consoleChangeSize} from '../../store/actions/consoleAction';
import {RootState} from '../../store/reducers/rootReducer';
import {CONTENT} from '../../content';

const WrapperConsole = styled.div<IWrapperConsole>`
  display: grid;
  grid-template-columns: ${({widthIn}): string => `${widthIn === null ? '1fr' : widthIn + 'px'} auto 1fr`};
  padding: ${({padSide}): string => `10px ${padSide}px`};
  box-sizing: border-box;
  height: calc(100% - 50px);
`;

const WrapperDragButton = styled.div`
  justify-self: center;
  align-self: center;
`;

const Console = ({padSide = 15, minWidth = 100, errorInput, handleChange}: IPropsConsole): JSX.Element => {
  const dispatch = useDispatch();
  const {widthIn, value, errorResponse, valueResponse, loadingConsole} = useSelector((state: RootState) => state.console);
  const refIn = useRef<HTMLTextAreaElement>(null);
  const refOut = useRef<HTMLTextAreaElement>(null);
  const refDrag = useRef<HTMLDivElement>(null);

  const handleDrag = useCallback(
    (e) => {
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
    [dispatch, minWidth, padSide]
  );

  const handleChangeDragDown = useCallback(() => {
    document.addEventListener('mousemove', handleDrag);
  }, [handleDrag]);

  const handleChangeDragUp = useCallback(() => {
    document.removeEventListener('mousemove', handleDrag);
  }, [handleDrag]);

  return (
    <WrapperConsole padSide={padSide} widthIn={widthIn}>
      <Textarea
        error={errorInput}
        label={CONTENT.CONSOLE.TEXTAREA.IN.LABEL}
        name={CONTENT.CONSOLE.TEXTAREA.IN.NAME}
        ref={refIn}
        value={value}
        onChange={handleChange}
      />
      <WrapperDragButton ref={refDrag}>
        <DragButton loading={loadingConsole} onMouseDown={handleChangeDragDown} onMouseUp={handleChangeDragUp} />
      </WrapperDragButton>
      <Textarea
        error={errorResponse}
        label={CONTENT.CONSOLE.TEXTAREA.OUT.LABEL}
        name={CONTENT.CONSOLE.TEXTAREA.OUT.NAME}
        variant="out"
        ref={refOut}
        value={valueResponse}
      />
    </WrapperConsole>
  );
};

export default Console;
