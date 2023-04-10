# onfly-test

## Instalação

Após clonar o projeto vá até a pasta raiz e rode os seguintes comandos para preparar o container

```
cp .env.example .env
cp docker-compose.yml.example docker-compose.yml
docker-compose up -d
docker-compose exec onfly-nginx bash -c "su -c \"composer install\" application"
docker-compose exec onfly-nginx bash -c "su -c 'php artisan key:generate' application"
docker-compose exec onfly-nginx php artisan migrate
```

Instale os pacotes
```
npm install
```

Obs.: Projeto já foi buildado. Acesse o front pela url
```
http://localhost
```

## Testes

Para rodar os testes utitlize o seguinte comando

```
docker-compose exec onfly-nginx php artisan test
```

## Rotas

| Verbo Http     |Rota                        |
|----------------|----------------------------|
|POST|`api/register`|
|POST|`api/login`|
||
|POST|`api/expenses` |
|GET|`api/expenses` |
|GET|`api/expenses/{id}`|
|PUT|`api/expenses/{id}`|
|DELETE|`api/expenses/{id}`|

### Cadastrar usuário

```
curl --request POST \
  --url http://localhost/api/register \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "João Teste",
	"email": "joao.teste@gmail.com",
	"password": "12345678"
}'
```

### Login usuário

Obs.: Após chamar a rota de login copiar o access_token retornado e alterar no header das demais rotas

```
curl --request POST \
  --url http://localhost/api/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "gmarcos38@gmail.com",
	"password": "12345678"
}'
```

### Cadastrar despesa

```
curl --request POST \
  --url http://localhost/api/expenses \
  --header 'Authorization: Bearer Bearer 4|LrZqnv3Wi1o0luyKv4j8ymMpt2EYUbS0kRLGHYOk' \
  --header 'Content-Type: application/json' \
  --data '{
	"description": "teste",
	"expense_date": "2023-04-02",
	"amount": 22
}'
```

### Ver despesa

```
curl --request GET \
  --url http://localhost/api/expenses/1 \
  --header 'Authorization: Bearer Bearer 4|LrZqnv3Wi1o0luyKv4j8ymMpt2EYUbS0kRLGHYOk'
```

### Ver lista de despesas do usuário

```
curl --request GET \
  --url http://localhost/api/expenses \
  --header 'Authorization: Bearer Bearer 4|LrZqnv3Wi1o0luyKv4j8ymMpt2EYUbS0kRLGHYOk'
```

### Atualizar despesa

```
curl --request PUT \
  --url http://localhost/api/expenses/15 \
  --header 'Authorization: Bearer Bearer 4|LrZqnv3Wi1o0luyKv4j8ymMpt2EYUbS0kRLGHYOk' \
  --header 'Content-Type: application/json' \
  --data '{
	"description": "Aniversário teste",
	"expense_date": "2023-04-01",
	"amount": 50
}'
```

### Deletar despesa

```
curl --request DELETE \
  --url http://localhost/api/expenses/13 \
  --header 'Authorization: Bearer Bearer 4|LrZqnv3Wi1o0luyKv4j8ymMpt2EYUbS0kRLGHYOk'
```