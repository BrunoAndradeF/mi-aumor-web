import { Stack, Text, TextProps } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { NextImageType } from '@/types/next';

import styles from './AdottameLogo.module.scss';
import { MIAUMOR_LOGO_ALT, MIAUMOR_LOGO_PATH } from './constants';

interface Props {
  hasName?: boolean;
  responsive?: boolean;
  imageProps?: Omit<NextImageType, 'src'>;
  textProps?: TextProps;
}

const MiAumorLogo: FC<Props> = ({ hasName, responsive, imageProps, textProps }) => (
  <Stack alignItems="center" direction="row" spacing={2}>
    <Image src={MIAUMOR_LOGO_PATH} alt={MIAUMOR_LOGO_ALT} {...imageProps} className={styles.logo} />
    {hasName ? (
      <Text fontSize="xl" fontWeight="semibold" className={responsive ? styles.applicationName : ''} {...textProps}>
        Mi Aumor
      </Text>
    ) : null}
  </Stack>
);

export default MiAumorLogo;
