import { extendTheme } from '@chakra-ui/react';

import { LinkStyles as Link } from './components/link';

export const theme = extendTheme({
  components: {
    Link,
  },
});
