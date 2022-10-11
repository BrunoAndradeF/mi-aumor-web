import { useContext } from 'react';

import { DoacaoContext } from '../contexts/DoacaoContext';

function useModalDescription() {
  const value = useContext(DoacaoContext);

  return value;
}

export default useModalDescription;
