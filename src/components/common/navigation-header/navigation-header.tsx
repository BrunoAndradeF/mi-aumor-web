import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, IconButton, Link, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import styles from './navigation-header.module.scss';

const NavigationHeader: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex height="4rem" shadow="lg" align="center" justify="center">
      <Flex width={{ base: 'auto', md: '40%' }} justify="space-between">
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        >
          Switch Mode
        </IconButton>

        <Flex>
          <NextLink href="https://github.com/Felipe1496/adotame" passHref>
            <Button as="a" target="_blank" variant="ghost" width="40px">
              <Icon as={AiFillGithub} opacity={0.6} className={styles.github} />
            </Button>
          </NextLink>

          <NextLink href="https://www.instagram.com/adotame_/" passHref>
            <Button as="a" target="_blank" variant="ghost" width="40px">
              <Icon as={RiInstagramFill} opacity={0.6} className={styles.instagram} />
            </Button>
          </NextLink>
        </Flex>

        <NextLink href="#" passHref>
          <Link isExternal variant="outline" outline="none" display="flex" gap="0.25rem" alignItems="center">
            <FaHeart color="var(--chakra-colors-red-500)" />
            Doação
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default NavigationHeader;
