import { FC } from 'react';

import { DoacaoContextProvider } from '@/components/pages/doacao/contexts/DoacaoContext';
import Doacao from '@/components/pages/doacao/doacao';

const DoacaoPage: FC = () => (
  <>
    <DoacaoContextProvider>
      <Doacao />
    </DoacaoContextProvider>
  </>
);

export default DoacaoPage;
