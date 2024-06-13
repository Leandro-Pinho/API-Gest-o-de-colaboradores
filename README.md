# CRUD Backend em Node.js e Express

Este projeto é um exemplo de uma API CRUD (Create, Read, Update, Delete) simples desenvolvida utilizando Node.js e Express. A aplicação permite criar, ler, atualizar e deletar registros de um banco de dados.

## Funcionalidades

- **Criar**: Adicionar um novo registro ao banco de dados.
- **Ler**: Recuperar um ou mais registros do banco de dados.
- **Atualizar**: Modificar um registro existente.
- **Deletar**: Remover um registro do banco de dados.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) 
- [Mongoose](https://mongoosejs.com/) 

## Requisitos

- Node.js instalado
- MongoDB

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/Leandro-Pinho/API-Gest-o-de-colaboradores
   cd API-Gest-o-de-colaboradores
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```
   PORT=8080
   BD_USERNAME=usuario
   BD_PASSWORD=password
   ```

4. Inicie o servidor:

   ```sh
   npm start
   ```

## Rotas da API

### Criar um novo registro

- **URL**: `/user`
- **Método**: `POST`
- **Corpo da Requisição**: 

  ```json
  {
    "name": "user 1",
    "email": "user@teste.com",
    "password": "teste",
  }
  ```
- **Resposta**:

  ```json
  {
    "_id": "60d9f9f9f9f9f9f9f9f9f9f9",
    "name": "user 1",
    "email": "user@teste.com",
    "password": "teste",
    "createdAt": "2023-06-13T12:00:00.000Z",
    "updatedAt": "2023-06-13T12:00:00.000Z",
    "__v": 0
  }
  ```

### Ler todos os registros

- **URL**: `/user`
- **Método**: `GET`
- **Resposta**:

  ```json
  [
    {
      "_id": "60d9f9f9f9f9f9f9f9f9f9f9",
      "name": "user 1",
      "email": "user@teste.com",
      "password": "teste",
      "createdAt": "2023-06-13T12:00:00.000Z",
      "updatedAt": "2023-06-13T12:00:00.000Z",
      "__v": 0
    }
  ]
  ```

### Ler um registro específico

- **URL**: `/user/:id`
- **Método**: `GET`
- **Resposta**:

  ```json
  {
    "_id": "60d9f9f9f9f9f9f9f9f9f9f9",
    "name": "user 1",
    "email": "user@teste.com",
    "password": "teste",
    "createdAt": "2023-06-13T12:00:00.000Z",
    "updatedAt": "2023-06-13T12:00:00.000Z",
    "__v": 0
  }
  ```

### Atualizar um registro

- **URL**: `/user/:id`
- **Método**: `PUT`
- **Corpo da Requisição**: 

  ```json
  {
    "name": "user 2 atualizado",
    "email": "user@teste.com atualizado",
    "password": "teste1 atualizado",
  }
  ```
- **Resposta**:

  ```json
  {
    "_id": "60d9f9f9f9f9f9f9f9f9f9f9",
    "name": "user 2 atualizado",
    "email": "user@teste.com atualizado",
    "password": "teste1 atualizado",
    "createdAt": "2023-06-13T12:00:00.000Z",
    "updatedAt": "2023-06-13T12:30:00.000Z",
    "__v": 0
  }
  ```

### Deletar um registro

- **URL**: `/user/:id`
- **Método**: `DELETE`
- **Resposta**: 

  ```json
  {
    "message": "Item deletado com sucesso"
  }
  ```

## Estrutura do Projeto

```
API-Gest-o-de-colaboradores/
├── .env
├── package.json
├── index.js
├── controllers/
│   └── user.controllers.js
├── database/
│   └── db.js
├── models/
│   └── user.models.js
└── routes/
    └── user.route.js
```

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-nova-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

