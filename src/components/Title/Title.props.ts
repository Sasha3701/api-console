import {ComponentPropsWithoutRef, ReactNode, DetailedHTMLProps, HTMLAttributes} from 'react';

type titleTypes = 'auth' | 'home';

export interface ITitle extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant: titleTypes;
}

export interface IPropsTitle extends ComponentPropsWithoutRef<'h1'> {
  children: ReactNode;
  variant: titleTypes;
}
