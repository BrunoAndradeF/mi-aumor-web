import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Flex, Icon, IconButton, Link, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import styles from './navigation-header.module.scss';

const NavigationHeader: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex height="4rem" shadow="lg" align="center" justify="center">
        <Flex width="40%" justify="space-between">
          <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            aria-label="Color mode switcher"
            onClick={toggleColorMode}
          >
            Switch Mode
          </IconButton>

          <Flex>
            <NextLink href="https://github.com/Felipe1496/adotame" passHref>
              <Link isExternal variant="ghost">
                <Icon as={AiFillGithub} className={styles.github} />
              </Link>
            </NextLink>

            <NextLink href="https://www.instagram.com/adotame_/" passHref>
              <Link isExternal variant="ghost">
                <Icon as={RiInstagramFill} className={styles.instagram} />
              </Link>
            </NextLink>
          </Flex>

          <NextLink href="#" passHref>
            <Link isExternal variant="outline" outline="none" display="flex" gap="0.25rem" alignItems="center">
              <FaHeart color="var(--chakra-colors-red-500)" />
              Sponsor
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </header>
  );
};

export default NavigationHeader;
