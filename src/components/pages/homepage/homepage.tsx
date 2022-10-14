import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Link, Show, Stack, Text, useColorMode } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import BaseIndexPage from '@/components/common/base-index-page/base-index.page';
import Page from '@/components/common/page/page';
import MiAumorLogo from '@/components/icons/MiAumorLogo';
import { externalUrls, internalUrls } from '@/routes/constants';

import styles from './homepage.module.scss';

const HomePage: FC = () => {
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
    setTimeout(() => router.push(externalUrls.miaumor.instagram), toastAndRedirectDelayTime);
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

                <NextLink href={`${internalUrls.base}#sobre`} passHref>
                  <Link>
                    Saiba mais
                    <ChevronRightIcon />
                  </Link>
                </NextLink>
              </Stack>
            </Stack>
          </Flex>

          <Show above="lg">
            <Image
              src="/assets/images/animalHumanLove.png"
              width={800}
              height={533}
              alt="Man loving a cat and a woman loving a dog"
            />
          </Show>
        </Flex>

        <Flex id="sobre" height="100vh" justifyContent="center" alignItems="center">
          <Stack width="70%" alignItems="center" direction="row" spacing="10%">
            <Show above="lg">
              <Image
                src="/assets/images/catAndDogIlustration.jpg"
                width={1000}
                height={1000}
                alt="Cat and dog loving each other"
                className={styles.catAndDogIlustration}
              />
            </Show>
            <Stack alignItems="center">
              <MiAumorLogo imageProps={{ width: 40, height: 28, layout: 'fixed' }} hasImage hasName responsive />
              <Text fontSize="xl" textAlign={{ base: 'center', lg: 'start' }}>
                É um projeto social voltado para a causa animal, pensado e criado por pessoas apaixonadas por nossos
                animaizinhos de 4 patas. Nosso objetivo é melhorar a qualidade de vida de animais errantes e ajudá-los a
                encontrar um novo lar.
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </BaseIndexPage>
    </Page>
  );
};

export default HomePage;
