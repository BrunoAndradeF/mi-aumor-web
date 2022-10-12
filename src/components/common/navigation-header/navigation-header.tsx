import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, IconButton, Link, Stack, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import MiAumorLogo from '@/components/icons/MiAumorLogo';
import { externalUrls, internalUrls } from '@/routes/constants';

import styles from './navigation-header.module.scss';

const NavigationHeader: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex height="4rem" shadow="lg" align="center" justify="center">
      <Stack width={{ base: 'auto', md: '40%' }} justify="space-between" spacing={1} direction="row">
        <NextLink href={internalUrls.base} passHref>
          <Link
            display="flex"
            _hover={{
              textDecoration: 'none',
            }}
          >
            <MiAumorLogo imageProps={{ width: 40, height: 28, layout: 'fixed' }} hasName responsive />
          </Link>
        </NextLink>

        <Stack direction="row" spacing={1}>
          <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            aria-label="Color mode switcher"
            onClick={toggleColorMode}
          >
            Switch Mode
          </IconButton>
          <NextLink href={externalUrls.miaumor.github} passHref>
            <Button as="a" target="_blank" variant="ghost" width="40px">
              <Icon as={AiFillGithub} opacity={0.6} className={styles.github} />
            </Button>
          </NextLink>

          <NextLink href={externalUrls.miaumor.instagram} passHref>
            <Button as="a" target="_blank" variant="ghost" width="40px">
              <Icon as={RiInstagramFill} opacity={0.6} className={styles.instagram} />
            </Button>
          </NextLink>
        </Stack>

        <NextLink href={internalUrls.doacao} passHref>
          <Link variant="outline" outline="none" display="flex" gap="0.25rem" alignItems="center">
            <FaHeart color="var(--chakra-colors-red-500)" />
            Doação
          </Link>
        </NextLink>
      </Stack>
    </Flex>
  );
};

export default NavigationHeader;
