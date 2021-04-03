# Social Network

Pequeno projeto da faculdade demonstrando as funcionalidades básicas de um ORM (Prisma)

***

## Instalação

Tenha uma versão recente do NodeJS (>= v14.16.0) com o package manager Yarn ou NPM.
Tenha um banco de dados PostgreSQL usando a porta :5432, com as credenciais descritas no [docker-compose.yml](./docker-compose.yml) (É recomendado usar o Docker e o docker-compose para rodar o banco de dados em container).

```bash
$ docker-compose up -d # (Opcional) Para rodar o container do banco de dados em background
$ yarn                 # npm install
$ yarn dev             # npm run dev
```

## Como usar

O arquivo [import_to_insomnia.yaml](./.github/import_to_insomnia.yaml) pode ser importado para o HTTP client Insomnia para realizar os testes com a API.

## Licença

Este projeto esta sob a licença MIT.

***

Feito com 💜 por Gabriel Bartoczevicz [Entre em contato!](https://www.linkedin.com/in/gabriel-bartoczevicz-7360901a6/)
