import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface IPropsMain extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
