import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRef } from 'react';

import { theme } from '@/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const ref = useRef(theme);
  console.log(ref);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
