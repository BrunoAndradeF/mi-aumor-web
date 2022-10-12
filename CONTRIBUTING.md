## Ferramentas recomendadas

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Chakra UI Docs](https://marketplace.visualstudio.com/items?itemName=timitejumola.chakra-ui-doc)
  - [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Convenções

### Files

Os nomes de arquivos devem seguir o `kebab-case`.

### Mensagens de commit

Todas as mensagens de commit devem seguir o padrão:

```txt
#[Número da task] - [assunto]
```

### Pull requests

Pull requests devem ser feitos para a branch `canary`. convention:

`Resolve #[Número da task] - [Título da issue/Assunto(na ausência de issue)]`

> Exemplo: `#572 - Resolve "Ajustar posicionamento de botão na homepage"`

Depois que sua solicitação pull for analisada e você fizer as alterações necessárias, clique em "Marcar como resolvido" em discussões e peça ao(s) revisor(es) para revisar novamente sua pull request.

### Organização de branch

- `main` branch de produção, contendo a versão de produção do projeto
- `canary` como a branch padrão e de desenvolvimento, contendo a versão mais recente do projeto

### Desenvolvimento de branch

`<número-da-task>-<assunto-em-kebab-case>`

> Example: `82-criando-homepage`

- Antes de adicionar um commit, o [Husky](https://typicode.github.io/husky/) é configurado para formatar seu código automaticamente.

### Pastas

A estrutura de arquivos recomendada é a seguinte, para manter os recursos locais mais próximos do arquivo principal:

```
{filename}
 ├─ {filename}.ts(x?)
 ├─ constants.ts
 ├─ types.ts
 ├─ components //componentes locais
 ├─ hooks // hooks locais
 ├─ context // context local

```
