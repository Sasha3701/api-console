import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface IPropsDropdown {
  status: boolean;
  title: string;
  body?: string;
  id?: number;
}

export interface IStatusRequest extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  statusRequest: boolean;
}

export interface IDropdownBody extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean;
}
