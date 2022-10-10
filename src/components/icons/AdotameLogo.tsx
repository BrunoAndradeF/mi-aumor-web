import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { NextImageType } from '@/types/next';

import styles from './AdottameLogo.module.scss';
import { ADOTAME_LOGO_ALT, ADOTAME_LOGO_PATH } from './constants';

interface Props extends Omit<NextImageType, 'src'> {
  hasName?: boolean;
  responsive?: boolean;
}

const AdotameLogo: FC<Props> = ({ hasName, responsive, ...props }) => (
  <Stack alignItems="center" direction="row" spacing={2}>
    <Image src={ADOTAME_LOGO_PATH} alt={ADOTAME_LOGO_ALT} {...props} className={styles.logo} />
    {hasName ? (
      <Text fontSize="xl" fontWeight="semibold" className={responsive ? styles.applicationName : ''}>
        Adotame
      </Text>
    ) : null}
  </Stack>
);

export default AdotameLogo;
