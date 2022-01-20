import {ComponentPropsWithoutRef, DetailedHTMLProps, HTMLAttributes} from 'react';

export interface IPropsInput extends ComponentPropsWithoutRef<'input'> {
  label: string;
  error?: boolean;
  optional?: boolean;
  name: string;
}

export interface IInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
}

export interface ILabel extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  error?: boolean;
}
