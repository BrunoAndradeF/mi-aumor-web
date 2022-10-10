import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Flex, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';

import BaseIndexPage from '@/components/common/base-index-page/base-index.page';
import Page from '@/components/common/page/page';
import { internalUrls } from '@/routes/constants';

import QRCodeCard from './components/qrcode-card/qrcode-card';

const Doacao: FC = () => {
  const modalDescription = [
    {
      icon: MdCheckCircle,
      iconColor: 'green.500',
      description: 'Comprar ração para cães e gatos que estão sob nossos cuidados',
    },
    { icon: MdCheckCircle, iconColor: 'green.500', description: 'Consultas, exames e medicamentos' },
    {
      icon: MdCheckCircle,
      iconColor: 'green.500',
      description: 'Ajudar ONGs ou cuidadores necessitados, com o excesso',
    },
    {
      icon: IoMdCloseCircle,
      iconColor: 'red.500',
      description: 'Custos pessoais dos responsáveis',
    },
  ];

  return (
    <Page title="Doação">
      <BaseIndexPage>
        <Flex height="calc(100vh - 4rem)" justify="center" px="1rem">
          <Flex width="70%" direction="column" mt="4rem">
            <Stack spacing={4}>
              <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
                <BreadcrumbItem>
                  <NextLink href={internalUrls.base}>
                    <BreadcrumbLink>Home</BreadcrumbLink>
                  </NextLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <NextLink href={internalUrls.doacao}>
                    <BreadcrumbLink>Doação</BreadcrumbLink>
                  </NextLink>
                </BreadcrumbItem>
              </Breadcrumb>

              <Divider orientation="horizontal" />
            </Stack>

            <Flex justifyContent="center" mt="8rem">
              <QRCodeCard
                src="/assets/images/qrcode.png"
                title="QR Code"
                description="Nosso QR Code!"
                alt="teste"
                modalTitle="Como o dinheiro será usado?"
                modalDescription={modalDescription}
              />
            </Flex>
          </Flex>
        </Flex>
      </BaseIndexPage>
    </Page>
  );
};

export default Doacao;
