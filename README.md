# ♻️ Projeto Ecoleta - Next Level Week #01 - Rocketseat 🚀💺

**Projeto, voltado para fins ecológicos.**  

Um Marketplace, uma conexão entre empresas/entidades que coletam resíduos (orgânicos e inorgânicos) às pessoas que necessitam descartá-los.  

É possível cadastrar pontos de coleta na aplicação (entidades/empresas), de uma forma fácil, os dados armazenados são:  

- Imagem/foto  
- Nome  
- E-mail  
- Whastapp  
- Marcar no mapa a localização da empresa  
- Cidade  
- Estado  

Cadastrando estes pontos de coleta, usuários da aplicação fácilmente conseguem localizar estes pontos, filtrando-os pela cidade/uf desejada e quais items estas empresas coletam.   


fotos do projeto web e mobile

-------------------------------------------------------------------------------------------------------

## :wrench: Tecnologias e padrões utilizados:

 - Padrão REST

 - Back-end:
(Node.js)

- Banco da dados:
SQLite

- Front-end:
React (com Typescript)
 
- Versão MOBILE:
React-Native (com Typescript)

--------------------------------------------------------------------------------------


## 👷 Instalação

Você precisa instalar o Node.js primeiro, em seguida, para clonar o projeto via HTTPS, execute este comando:

    git clone https://github.com/maiconboer/ecoleta-nlw.git

Após a finalização do clone, o projeto se apresenta em 3 pastas:

    server  
    web  
    mobile  

Cada pasta contém seu próprio **package.json com suas dependências.**  
Abra as pastas/projetos individualmente em seu terminal e instale as dependências com o comando:

    npm install  

Com as instalações das dependencias finalizadas, podemos dar início a execução do projeto.

--------------------------------------

## 🏦🎲 Criando o banco de dados.

Na pasta **server**, rode o seguinte comando:

    npx knex migrate:latest —knexfile knexfile.ts

Será criado um banco de dados SQLite, com nome: **database.sqlite** (dentro da pasta server > src) 

Após visualizar que o banco foi criado, rode o seguinte comando:

    npm run dev

🎉 **Pronto! nosso servidor está 100%.**

--------------------------------------

Abra a pasta **web** no seu terminal e execute o seguinte comando:

    npm start

🎉 **Pronto! A versão web do nosso projeto já estará funcionando no seguinte endereço:**   

    http://localhost:3000  💻

--------------------------------------

Abra a pasta **mobile** no seu terminal e execute o seguinte comando:

    npm start

Para rodar no mobile, é necessário que o computador onde o servidor (pasta server) e seu celular estejam na mesma rede.  
 
Seu navegador será aberto automaticamente executando o Metro Bundler, contendo entre algumas informações, um QR Code, para executar, instale no seu celular um aplicativo chama EXPO 
 
Abra o aplicativo EXPO, clique em Scan QR Code.

🎉 **Pronto.**

📱 Aplicação rodando no celular também! 
    



