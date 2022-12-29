## 📝 Índice

- [Sobre o Projeto](#about)
- [Antes de qualquer coisa...](#getting_started)
- [Feito com](#built_using)
- [Autores](#authors)
- [Agradecimentos](#acknowledgement)

## 🧐 Sobre o Projeto <a name = "about"></a>

Repositório público criado para Teste Técnico da <a href="https://softdesign.com.br/" target="_blank">SoftDesign</a>

## 🏁 Antes de qualquer coisa... <a name = "getting_started"></a>

É necessário clonar o projeto para o seu computador. Você pode fazer isso usando comandos git em um terminal ou aqui mesmo na página do git usar o botão clonar que fará o download desta pasta como um .zip.

### Pre-requisitos

```
Node (A versão 16.16.0 foi a usada na criação deste projeto)
Mongo (Foi usada a versão do Mongo 6.0.3, local)
```

### Instalando

Para instalar as bibliotecas necessárias é importante rodar no terminal

```
npm install [ou] yarn install
```

## 🔗 Endpoints <a name = "endpoints"></a>

### Autenticação
- [Cadastro](http://localhost:3001/api/auth/signup) (POST)
- [Login](http://localhost:3001/api/auth/signin) (POST)

### Listagem de Livros
- [Listar todos](http://localhost:3001/api/books) (GET)
- [Busca por ID](http://localhost:3001/api/books/search/:id) (GET)
- [Busca por Nome](http://localhost:3001/api/books/search/:name) (GET)
- [Criar novo Livro](http://localhost:3001/api/books) (POST)
- [Atualizar Livro](http://localhost:3001/api/books) (PUT)
- [Deletar Livro](http://localhost:3001/api/books) (DELETE)


## ⛏️ Feito com <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Autores <a name = "authors"></a>
- [@victorgodoka](https://github.com/victorgodoka) - Candidato e nerd do JS

## 🎉 Agradecimentos <a name = "acknowledgement"></a>

- SoftDesign, pela oportunidade
- <a href=" https://marketplace.visualstudio.com/items?itemName=thomascsd.vscode-readme-pattern">Readme Pattern</a>, plugin de VSCode que me trouxe esse template bonitão

