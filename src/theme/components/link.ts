import { ChakraVariantType } from '@/types/chakra';

export const LinkStyles = {
  variants: {
    ghost: (props: ChakraVariantType) => ({
      display: 'flex',
      padding: '10px',
      borderRadius: 'md',
      opacity: '0.5',
      _hover: {
        bg: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.200',
        opacity: '0.8',
      },
    }),
    outline: (props: ChakraVariantType) => ({
      border: '1px solid',
      borderColor: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.200',
      bg: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.50',
      py: '5px',
      px: '10px',
      borderRadius: 'md',
      _hover: {
        textDecoration: 'none',
        bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'gray.100',
      },
    }),
  },
};
