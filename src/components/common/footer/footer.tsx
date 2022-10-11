import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import AdotameLogo from '@/components/icons/AdotameLogo';
import { internalUrls } from '@/routes/constants';

const Footer: FC = () => (
  <Box as="footer" mt="auto">
    <Flex borderY="1px solid" borderColor="blackAlpha.500" bg="blackAlpha.300" justifyContent="center" py="1rem">
      <Flex width="80%" justifyContent="space-between" alignItems="center">
        <AdotameLogo imageProps={{ width: 80, height: 60 }} textProps={{ fontSize: '6xl' }} hasName />

        <Breadcrumb fontWeight="medium" fontSize="sm" separator="">
          <BreadcrumbItem>
            <NextLink href={internalUrls.base} passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <NextLink href={internalUrls.doacao} passHref>
              <BreadcrumbLink>Doação</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <NextLink href={`${internalUrls.base}#sobre`} passHref>
              <BreadcrumbLink>Sobre</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Flex>

    <Flex justifyContent="center" py="2rem" borderColor="blackAlpha.500" bg="blackAlpha.300">
      <Flex width="80%" justifyContent="space-between" alignItems="center">
        <Text opacity={0.6}>Adottami | Copyright © 2022 - Todos Direitos Reservados</Text>

        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          separator={
            <Text color="black" opacity={0.3}>
              •
            </Text>
          }
        >
          <BreadcrumbItem>
            <NextLink href={internalUrls.contrato.politicaPrivacidade} passHref>
              <BreadcrumbLink>Política de privacidade</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <NextLink href={internalUrls.contrato.termosDeUso} passHref>
              <BreadcrumbLink>Termos de uso</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
