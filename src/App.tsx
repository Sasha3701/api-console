import React from 'react';
import {Button, Dropdown, Input} from './components/UI';
import { CloseIcon, FullIcon, LogoutIcon, NoFullIcon, SortIcon } from './images';

const App = () => {
  return (
    <>
      <Input type="password" name="test" label="Test" />
      <Input optional={true} type="password" name="test" label="Test" />
      <Button>Войти</Button>
      <Button loading={true}>Войти</Button>
      <Button theme='transparent'><FullIcon /></Button>
      <Button theme='transparent'><NoFullIcon /></Button>
      <Button theme='transparent'><CloseIcon /></Button>
      <Button theme='transparent' iconLeft={<SortIcon />}>Форматировать</Button>
      <Button theme='transparent' iconRight={<LogoutIcon />}>Выйти</Button>
      <Dropdown title='Test' status={true}/>
    </>
  );
};

export default App;
