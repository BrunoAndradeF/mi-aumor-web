import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Link, Stack, Text, useColorMode } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import BaseIndexPage from '@/components/common/base-index-page/base-index.page';
import Page from '@/components/common/page/page';
import { externalUrls } from '@/routes/constants';

const Homepage: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleRedirectWithToast = () => {
    const toastAndRedirectDelayTime = 6000;

    toast({
      position: 'top-right',
      title: 'Calma lá! Estamos em desenvolvimento',
      description: 'Vamos te redirecionar para nosso instagram enquanto isso!',
      status: 'info',
      duration: toastAndRedirectDelayTime,
      isClosable: true,
    });
    setTimeout(() => router.push(externalUrls.adotame.instagram), toastAndRedirectDelayTime);
  };

  return (
    <Page title="Homepage">
      <BaseIndexPage>
        <Flex
          height="calc(100vh - 4rem)"
          alignItems="center"
          justify="center"
          px="1rem"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex height="100%" width="70%" alignItems="center" justify="center">
            <Stack direction="column" spacing={4} alignItems={{ base: 'center', lg: 'start' }}>
              <Heading textAlign={{ base: 'center', lg: 'start' }}>
                Ajudamos você a encontrar <br /> seu novo animalzinho, adote um vira-lata
              </Heading>

              <Text textAlign={{ base: 'center', lg: 'start' }}>
                Oferecemos animais que precisam um lar amoroso e de tios e tias que os abriguem
              </Text>

              <Stack alignItems="center" direction={{ base: 'column', md: 'row' }} spacing={4}>
                <NextLink href="#" passHref>
                  <Button
                    size="lg"
                    width="12rem"
                    colorScheme="cyan"
                    onClick={handleRedirectWithToast}
                    color={colorMode === 'dark' ? 'gray.800' : 'white'}
                  >
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

          <Flex display={{ base: 'none', lg: 'flex' }}>
            <Image
              src="/assets/images/animalHumanLove.png"
              width={800}
              height={533}
              alt="Man loving a cat and a woman loving a dog"
            />
          </Flex>
        </Flex>
      </BaseIndexPage>
    </Page>
  );
};

export default Homepage;
