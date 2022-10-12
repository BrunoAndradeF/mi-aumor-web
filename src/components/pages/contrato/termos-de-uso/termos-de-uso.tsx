import { Flex, Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import BaseIndexPage from '@/components/common/base-index-page/base-index.page';
import Page from '@/components/common/page/page';

const TermosUso: FC = () => (
  <Page>
    <BaseIndexPage>
      <Flex direction="column">
        <Flex height="20rem" justifyContent="center" bg="blue.300">
          <Flex width="70%" direction="column" justifyContent="center">
            <Heading>Termos de Uso</Heading>
          </Flex>
        </Flex>

        <Flex justifyContent="center" my="4rem">
          <Stack spacing={4} width="70%" direction="column">
            <Heading as="h2" size="lg">
              1. Termos
            </Heading>

            <Text>
              Ao acessar ao site Mi Aumor, concorda em cumprir estes termos de serviço, todas as leis e regulamentos
              aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não
              concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste
              site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </Text>

            <Heading as="h2" size="lg">
              2. Uso de Lincença
            </Heading>

            <Text>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
              site Mi Aumor , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma
              licença, não uma transferência de título e, sob esta licença, você não pode:
            </Text>

            <OrderedList spacing={2}>
              <ListItem>modificar ou copiar os materiais;</ListItem>

              <ListItem>
                usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
                comercial);
              </ListItem>

              <ListItem>
                tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Mi Aumor;
              </ListItem>

              <ListItem>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</ListItem>

              <ListItem>
                transferir os materiais para outra pessoa ou espelhe os materiais em qualquer outro servidor.
              </ListItem>
            </OrderedList>

            <Text>
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
              rescindida por Mi Aumor a qualquer momento. Ao encerrar a visualização desses materiais ou após o término
              desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou
              impresso.
            </Text>

            <Heading as="h2" size="lg">
              3. Isenção de responsabilidade
            </Heading>

            <OrderedList spacing={2}>
              <ListItem>
                Os materiais no site da Mi Aumor são fornecidos como estão. Mi Aumor não oferece garantias, expressas ou
                implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação,
                garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de
                propriedade intelectual ou outra violação de direitos.{' '}
              </ListItem>

              <ListItem>
                Além disso, o Mi Aumor não garante ou faz qualquer representação relativa à precisão, aos resultados
                prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses
                materiais ou em sites vinculados a este site.
              </ListItem>
            </OrderedList>

            <Heading as="h2" size="lg">
              4. Limitações
            </Heading>

            <Text>
              Em nenhum caso o Mi Aumor ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem
              limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou
              da incapacidade de usar os materiais em Mi Aumor, mesmo que Mi Aumor ou um representante autorizado da Mi
              Aumor tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas
              jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos
              conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            </Text>

            <Heading as="h2" size="lg">
              5. Precisão dos materiais
            </Heading>

            <Text>
              Os materiais exibidos no site da Mi Aumor podem incluir erros técnicos, tipográficos ou fotográficos. Mi
              Aumor não garante que qualquer material em seu site seja preciso, completo ou atual. Mi Aumor pode fazer
              alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Mi Aumor
              não se compromete a atualizar os materiais.
            </Text>

            <Heading as="h2" size="lg">
              6. Links
            </Heading>

            <Text>
              O Mi Aumor não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum
              site vinculado. A inclusão de qualquer link não implica endosso por Mi Aumor do site. O uso de qualquer
              site vinculado é por conta e risco do usuário.
            </Text>

            <Heading as="h3" size="md">
              Modificações
            </Heading>

            <Text>
              O Mi Aumor pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este
              site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </Text>

            <Heading as="h3" size="md">
              Modificações
            </Heading>

            <Text>
              O Mi Aumor pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este
              site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </Text>

            <Heading as="h3" size="md">
              Lei aplicável
            </Heading>

            <Text>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Mi Aumor e você se submete
              irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </BaseIndexPage>
  </Page>
);

export default TermosUso;
