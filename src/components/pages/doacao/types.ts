import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface IModalDescription {
  icon?: IconType;
  iconColor?: string;
  description: string;
}

export interface IDoacaoContext {
  modalDescription: IModalDescription[];
  setModalDescription: (modalDescription: IModalDescription[]) => void;
}

export interface IDoacaoContextProvider {
  children: ReactNode;
}
