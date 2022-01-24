import {nullableTypes} from '../../models';

export interface IPropsConsole {
  padSide?: number;
  widthIn?: nullableTypes<number>;
  minWidth?: number;
  value?: string;
  errorResponse?: boolean;
  valueResponse?: string;
  loadingConsole?: boolean
}
