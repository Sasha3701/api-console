import React from 'react';
import {Button, Input} from './components/UI';
import { FullIcon } from './images';

const App = () => {
  return (
    <>
      <Input type="password" name="test" label="Test" />
      <Input optional={true} type="password" name="test" label="Test" />
      <Button>Войти</Button>
      <Button loading={true}>Войти</Button>
      <Button theme='transparent' iconLeft={<FullIcon />}></Button>
    </>
  );
};

export default App;
