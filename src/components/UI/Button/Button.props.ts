import {ComponentPropsWithoutRef, ReactNode} from 'react';

type themeTypes = 'fill' | 'transparent';

export interface IPropsButton extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  loading?: boolean;
  theme?: themeTypes;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}
