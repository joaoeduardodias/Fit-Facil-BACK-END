# Adonis.JS API aplicação

Este é o padrão para a criação de um servidor API no AdonisJs, vem pré-configurado com.

1. Authentication
2. CORS
3. Lucid ORM
4. Migrations

## Setup

Configurar as variáveis de ambiente com o banco de dados MYSQL

Criar o banco de dados, chamado de fitfacil

### Migrations

Executar o comando adonis migration:run,para ser criado as tabelas no banco de dados.

Para executar uma alteração na tabela, alterar a migration desejada;

Executar o comando adonis migration:rollback, para ser deletado a tabela no banco;

Executar novamente o comando adonis migration:run.

## fazer

Cadastro de Programas(treinos)
Realizar todos os outros cadastros (Exercício, Imagens,Videos, Medidas )
