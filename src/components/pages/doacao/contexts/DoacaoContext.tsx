import { createContext, useMemo, useState } from 'react';

import { IDoacaoContext, IDoacaoContextProvider, IModalDescription } from '../types';

export const DoacaoContext = createContext({} as IDoacaoContext);

export const DoacaoContextProvider = (props: IDoacaoContextProvider) => {
  const [modalDescription, setModalDescription] = useState<IModalDescription[]>([]);

  const value = useMemo(
    () => ({
      modalDescription,
      setModalDescription,
    }),
    [modalDescription],
  );

  return <DoacaoContext.Provider value={value}>{props.children}</DoacaoContext.Provider>;
};
