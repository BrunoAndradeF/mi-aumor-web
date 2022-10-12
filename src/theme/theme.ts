import { extendTheme } from '@chakra-ui/react';

import { LinkStyles as Link } from './components/link';

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: { default: 'blue.900', _dark: 'white' },
    },
  },
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        textColor: 'primary',
      },
    }),
  },
  components: { Link },
});
