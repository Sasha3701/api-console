import {ComponentPropsWithoutRef} from 'react';
import {IError} from '../../models';

export interface IPropsNotification extends ComponentPropsWithoutRef<'div'> {
  error: IError;
}
