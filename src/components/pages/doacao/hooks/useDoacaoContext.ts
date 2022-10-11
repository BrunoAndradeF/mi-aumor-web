import { useContext } from 'react';

import { DoacaoContext } from '../contexts/DoacaoContext';

function useDoacaoContext() {
  const value = useContext(DoacaoContext);

  return value;
}

export default useDoacaoContext;
