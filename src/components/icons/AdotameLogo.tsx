import Image from 'next/image';
import { FC } from 'react';

import { NextImageType } from '@/types/next';

import { ADOTAME_LOGO_ALT, ADOTAME_LOGO_PATH } from './constants';

interface Props extends Omit<NextImageType, 'src'> {}

const AdotameLogo: FC<Props> = ({ ...props }) => <Image src={ADOTAME_LOGO_PATH} alt={ADOTAME_LOGO_ALT} {...props} />;

export default AdotameLogo;
