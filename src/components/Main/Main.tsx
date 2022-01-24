import {IPropsMain} from './Main.props';

const Main = ({children, ...props}: IPropsMain): JSX.Element => {
  return <main {...props}>{children}</main>;
};

export default Main;
