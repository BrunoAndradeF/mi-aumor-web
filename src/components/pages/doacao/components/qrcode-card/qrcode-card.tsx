import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import useModalDescription from '../../hooks/useModalDescription';

interface Props {
  title: string;
  src: ImageProps['src'];
  description: string;
  alt: ImageProps['alt'];
  layout?: ImageProps['layout'];
  about?: string;
  modalTitle: string;
}

const QRCodeCard: FC<Props> = ({ title, src, description, alt, layout, modalTitle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const { modalDescription } = useModalDescription();

  return (
    <Stack justifyContent="center" align="center" borderRadius="md" p={4} border="1px solid" borderColor="gray.200">
      <Heading>{title}</Heading>

      <Image src={src} width={250} height={250} alt={alt} layout={layout} />

      <Text>{description}</Text>

      <Flex width="100%" justifyContent="space-between">
        <HStack>
          <Badge variant="subtle" colorScheme="green" alignItems="center" textAlign="center" justifyContent="center">
            Pix
          </Badge>
        </HStack>

        <Button colorScheme="cyan" onClick={onOpen} color={colorMode === 'dark' ? 'gray.800' : 'white'}>
          Sobre
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <List>
                {modalDescription?.map((item) => (
                  <ListItem key={item.description}>
                    {item.icon ? <ListIcon as={item.icon} color={item.iconColor} /> : null}
                    {item.description}
                  </ListItem>
                ))}
              </List>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Stack>
  );
};

export default QRCodeCard;
