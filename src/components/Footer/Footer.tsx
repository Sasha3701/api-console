import styled from 'styled-components';
import {SortIcon} from '../../images';
import {Button} from '../UI';

const CustomFooter = styled.footer`
  padding: 15px;
  border-top: 1px solid var(--color-gray);
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-content: center;
`;

const Footer = (): JSX.Element => {
  return (
    <CustomFooter>
      <Button>Отправить</Button>
      <div>1</div>
      <Button theme="transparent" iconLeft={<SortIcon />}>
        Форматировать
      </Button>
    </CustomFooter>
  );
};

export default Footer;
