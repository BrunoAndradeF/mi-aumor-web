import { FlexProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import NavigationHeader from '../navigation-header/navigation-header';

interface Props extends FlexProps {
  children?: ReactNode;
}

const BaseIndexPage: FC<Props> = ({ children }) => (
  <>
    <NavigationHeader />

    {children}
  </>
);

export default BaseIndexPage;
