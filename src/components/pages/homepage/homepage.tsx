import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';

import NavigationHeader from '@/components/common/navigation-header/navigation-header';
import Page from '@/components/common/page/page';

import styles from './homepage.module.scss';

const Homepage: FC = () => (
  <Page title="Homepage">
    <Box height="100vh" width="100vw">
      <NavigationHeader />

      <Flex height="calc(100vh - 4rem)" alignItems="center" justify="center">
        <Flex height="100%" width="70%" alignItems="center" justify="center">
          <Stack direction="column" spacing={4}>
            <Heading>
              Ajudamos você a encontrar <br /> seu novo animalzinho, adote um vira-lata
            </Heading>

            <Text>Oferecemos animais que precisam um lar amoroso e de tios e tias que os abriguem</Text>

            <Stack alignItems="center" direction="row" spacing={4}>
              <NextLink href="#" passHref>
                <Button as="a" target="_blank" size="lg" width="12rem" colorScheme="cyan" color="white">
                  Adotar um pet
                </Button>
              </NextLink>

              <NextLink href="#" passHref>
                <Link>
                  Saiba mais
                  <ChevronRightIcon />
                </Link>
              </NextLink>
            </Stack>
          </Stack>
        </Flex>

        <Image
          src="/assets/images/animalHumanLove.jpg"
          width={800}
          height={533}
          alt="Man loving a cat and a woman loving a dog"
          className={styles.dogsImage}
        />
      </Flex>
    </Box>
  </Page>
);

export default Homepage;
