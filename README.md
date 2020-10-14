<h1> Asssociação adote-me </h1>
<p> Software implementado para o trabalho prático da disciplina de Engenharia de Software II </p><br>
<img src="web/src/assets/logo2.png">
<p align="center"><br>
  <img src="https://img.shields.io/badge/-NodeJS-green" />
  <img src="https://img.shields.io/badge/-ReactJS-blue" />
  <img src="https://img.shields.io/github/languages/count/AndersonUfop/TrabalhoPratico-ES-2?style=plastic">
  <img src="https://img.shields.io/github/languages/top/AndersonUfop/TrabalhoPratico-ES-2?style=plastic">
</p>
<br>
<br>
<h2>Índice</h2>

- <a href="#-o-projeto">O Projeto</a>
- <a href="#-layout">Layout</a>
- <a href="#-tecnologias">Tecnologias</a>
- <a href="#-organização-das-pastas">Organização das pastas</a>
- <a href="#-testes">Testes</a>
- <a href="#-como-executar-o-projeto">Como executar o projeto</a>
- <a href="#-desenvolvedores">Desenvolvedores</a>
- <a href="#-licença">Licença</a>

<h2>💻 O Projeto</h2>

<p> A aplicação Adote-me tem como objetivo divulgar pets para adoção, o usuário poderá ver os pets que estão cadastrados e entrar em contato com quem está anunciando.
Também é possível anunciar pets pela plataforma, mas antes o usuário deverá cadastrar suas informações.

<h2>🎨 Layout</h2>

<img src=".img/img1.jpg">
<img src=".img/img2.jpg">
<img src=".img/img3.jpg">
<img src=".img/img4.jpg">
Para ter acesso a este layout, você pode entrar por este link do  [Figma](https://www.figma.com/file/IGV0ptubUS3gEOW1FrsfwQ/Associa%C3%A7%C3%A3o-adote-me?node-id=0%3A1).

<h2>🛠 Tecnologias</h2>
As seguintes ferramentas foram usadas na construção do projeto:

#### **Backend**

- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**
- **[NodeJS](https://nodejs.org/en/)**
- **[KnexJS](http://knexjs.org/)**
- **[SQLITE](https://www.sqlite.org/docs.html)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Multer](https://www.npmjs.com/package/multer)**
- **[Crypto](https://crypto.com/en/index.html)**
- **[CORS](http://expressjs.com/en/resources/middleware/cors.html)**

### **Frontend**

- **[TypeScript](https://www.typescriptlang.org/)**
- **[ReactJS](https://pt-br.reactjs.org/)**
- **[react-router-dom](https://reactrouter.com/web/guides/quick-start)**
- **[react-dropzone](https://react-dropzone.js.org/)**
- **[react-icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**

Para a realização dos testes foi utilizada a ferramenta **[Jest](https://jestjs.io/)**

<h2>📁 Organização das pastas</h2>
<h3> Backend </h3>
As pastas do backend foram organizadas da seguinte maneira:

- __src__: Ficam todos os arquivos com as funcionalidades do backend da aplicação.
  - __tests__: Ficam os testes do backend.
  - __config__: Arquivos de configurações.
  - __models__: Arquivos responsáveis por conexões com o banco de dados
  - __modules__: Ficam os módulos da aplicação. Dentro dos módulos da aplicação ficam cada controlador com uma funcionalidade específica.
  - __Shared__: Nesta pasta ficam arquivos de são compartilhadas em todos os módulos, que são:

    - __migrations__: Responsáveis pela criação de tabelas dentro do banco.
    - __Routes__: Responsável por acesso as rotas da aplicação.
    - __Server__: Responsável por conectar a API ao servidor.

  Fora da pasta src tem a pasta tmp, que armazenam os arquivos de upload, que são temporários.

  <h3>Frontend</h3>
  As pastas do frontend foram organizadas da seguinte maneira:

  - __public__: Se referem a todos arquivos públicos de uso geral.
  - __src__: Ficam todos os arquivos com as funcionalidades do frontend da aplicação.
    - __tests__: Ficam os testes do frontend.
    - __assets__: Ficam os arquivos de imagens que foram usados no projeto.
    - __components__: Ficam os componentes que foram usados nas páginas.
    - __pages__: Ficam os arquivos em react das páginas e também suas estilizações em CSS.
    - __services__: Fica o arquivo responsável em fazer a conexão do frontend com o backend.
    
    Fora destas pastas possuem alguns arquivos globais e outros de configuração.

    <h2>🧪 Testes</h2>

    <h3>Backend</h3>

    ***Visualizar os pets cadastrados***
  
    Testa se consegue visualizar os pets cadastrados no banco de dados.

    ***Criar usuários***

    Testa se consegue cadastrar novos usuários no banco de dados.

    ***Visualizar usuários***

    Testa se consegue visualizar os usuários cadastrados no banco de dados.

    <h3>Frontend</h3>

    ***Teste para saber se a página dashboard está renderizando***

    Testa se todos os elementos da página dashboard foram carregados e estão sendo exibidos na tela.

    ***Teste para saber se a página Cadastrar Usuário está renderizando***


    Testa se todos os elementos da página cadastrar usuário foram carregados e estão sendo exibidos na tela.

    ***Teste para saber se a página Cadastrar Pet está renderizando***


    Testa se todos os elementos da página cadastrar pet foram carregados e estão sendo exibidos na tela.

    <h2>🚀 Como executar o projeto</h2>

    - Faça um clone do projeto.
    - Para ver o projeto funcionando tenha o node, npm e yarn instalados em sua máquina.
    - Acesse a pasta server e instale as dependências rodando um: `yarn` ou `npm install`.
    - Repita o mesmo processo na pasta web.
    - Agora para executar o programa primeiro você deve deixar o servidor rodando, então na pasta do servidor, execute o comando `yarn start` ou `npm start`.
    - Assim que o servidor estiver rodando rode na pasta web o comando `yarn start` ou `npm start`.

    <h2>💻 Desenvolvedores</h2>
    Este projeto foi realizado pelos seguintes autores:

    - Anderson Fernandes
    - Juliana Lemos
    - Rosabel Braga

    <h2>📝 Licença</h2>
    Este projeto está sobre a licença [MIT](./LICENSE).



