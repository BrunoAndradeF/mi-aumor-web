import { extendTheme } from '@chakra-ui/react';

import { LinkStyles as Link } from './components/link';

export const theme = extendTheme({
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  colors: {
    primary: { light: '#CDF8F9' },
  },
  components: { Link },
});
