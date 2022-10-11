import { Flex, Heading, Link, List, ListItem, Stack, Text, UnorderedList, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import BaseIndexPage from '@/components/common/base-index-page/base-index.page';
import Page from '@/components/common/page/page';

const PoliticaPrivacidade: FC = () => (
  <Page>
    <BaseIndexPage>
      <Flex direction="column">
        <Flex height="20rem" justifyContent="center" bg="blue.300">
          <Flex width="70%" direction="column" justifyContent="center">
            <Heading>Política de Privacidade</Heading>
          </Flex>
        </Flex>

        <Flex justifyContent="center" my="4rem">
          <Stack spacing={4} width="70%" direction="column">
            <Text>
              A sua privacidade é importante para nós. É política do Adotame respeitar a sua privacidade em relação a
              qualquer informação sua que possamos coletar no site Adotame, e outros sites que possuímos e operamos.
            </Text>

            <Text>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
              Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que
              estamos coletando e como será usado.
            </Text>

            <Text>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando
              armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem
              como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </Text>

            <Text>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
              exigido por lei.
            </Text>

            <Text>
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não
              temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas
              respectivas{' '}
              <NextLink href="" passHref>
                <Link>políticas de privacidade</Link>
              </NextLink>
              .
            </Text>

            <Text>
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos
              fornecer alguns dos serviços desejados.
            </Text>

            <Text>
              O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade
              e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações
              pessoais, entre em contato conosco.
            </Text>

            <Text fontWeight="semibold">Compromisso do Usuário</Text>

            <Text>
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Adotame oferece no site e
              com caráter enunciativo, mas não limitativo:
            </Text>

            <UnorderedList spacing={2}>
              <ListItem>
                A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
              </ListItem>

              <ListItem>
                B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas online,
                jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os
                direitos humanos;
              </ListItem>

              <ListItem>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Adotame, de seus
                fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas
                de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
              </ListItem>
            </UnorderedList>

            <Text fontWeight="semibold">Mais informações</Text>

            <Text>
              Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza
              se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos
              que você usa em nosso site.
            </Text>

            <Text>Esta política é efetiva a partir de Oct/2022</Text>
          </Stack>
        </Flex>
      </Flex>
    </BaseIndexPage>
  </Page>
);

export default PoliticaPrivacidade;
