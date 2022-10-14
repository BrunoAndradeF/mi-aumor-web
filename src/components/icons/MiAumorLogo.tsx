import { Stack, StackProps, Text, TextProps } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { NextImageType } from '@/types/next';

import { MIAUMOR_LOGO_ALT, MIAUMOR_LOGO_PATH } from './constants';
import styles from './MiAumorLogo.module.scss';

interface Props extends StackProps {
  hasName?: boolean;
  responsive?: boolean;
  imageProps?: Omit<NextImageType, 'src'>;
  textProps?: TextProps;
  hasImage?: boolean;
}

const MiAumorLogo: FC<Props> = ({ hasName, responsive, imageProps, textProps, hasImage, ...props }) => (
  <Stack alignItems="center" direction="row" spacing={2} textAlign="center" {...props}>
    {hasImage ? <Image src={MIAUMOR_LOGO_PATH} alt={MIAUMOR_LOGO_ALT} {...imageProps} className={styles.logo} /> : null}
    {hasName ? (
      <Text fontSize="xl" fontWeight="semibold" className={responsive ? styles.applicationName : ''} {...textProps}>
        Mi Aumor
      </Text>
    ) : null}
  </Stack>
);

export default MiAumorLogo;
