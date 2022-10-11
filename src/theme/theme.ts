import { extendTheme } from '@chakra-ui/react';

import { LinkStyles as Link } from './components/link';

export const theme = extendTheme({
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        textColor: props.colorMode === 'dark' ? '' : 'blue.900',
      },
    }),
  },
  components: { Link },
});
