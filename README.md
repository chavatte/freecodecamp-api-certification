<pre style="font-size: 0.7rem;">

                              \\\\\\
                           \\\\\\\\\\\\
                          \\\\\\\\\\\\\\\
-------------,-|           |C>   // )\\\\|    .o88b. db   db  .d8b.  db    db  .d8b.  d888888b d888888b d88888b
           ,','|          /    || ,'/////|   d8P  Y8 88   88 d8' '8b 88    88 d8' '8b '~~88~~' '~~88~~' 88'    
---------,','  |         (,    ||   /////    8P      88ooo88 88ooo88 Y8    8P 88ooo88    88       88    88ooooo 
         ||    |          \\  ||||//''''|    8b      88~~~88 88~~~88 '8b  d8' 88~~~88    88       88    88~~~~~ 
         ||    |           |||||||     _|    Y8b  d8 88   88 88   88  '8bd8'  88   88    88       88    88.     
         ||    |______      ''''\____/ \      'Y88P' YP   YP YP   YP    YP    YP   YP    YP       YP    Y88888P
         ||    |     ,|         _/_____/ \
         ||  ,'    ,' |        /          |                 ___________________________________________
         ||,'    ,'   |       |         \  |              / \                                           \ 
_________|/    ,'     |      /           | |             |  |                                            | 
_____________,'      ,',_____|      |    | |              \ |      chavatte@duck.com                     | 
             |     ,','      |      |    | |                |                        chavatte.42web.io   | 
             |   ,','    ____|_____/    /  |                |    ________________________________________|___
             | ,','  __/ |             /   |                |  /                                            /
_____________|','   ///_/-------------/   |                 \_/____________________________________________/ 
              |===========,'                                                                                    
			  

</pre>

<p align="center">
  <img src="public/assets/freecodecamp.png" alt="FreeCodeCamp Logo" width="200">
</p>

# Módulo: APIs e desenvolvimento de back-end

Este repositório contém os projetos concluídos para certificação do módulo de APIs e desenvolvimento de back-end da FreeCodeCamp.

## Tecnologias

* Node.js
* Express.js
* SQLite3
* Multer

## Ver API Online

Você pode acessar a API online através do seguinte endereço:

* **https://api-freecodecamp.fly.dev/**

### Página Inicial

* Acesse a página inicial do projeto em: [https://api-freecodecamp.fly.dev/](https://api-freecodecamp.fly.dev/)
* Esta página contém links para todos os microsserviços do projeto, permitindo que você navegue e teste cada um deles.

## Projetos

<details>
<summary>Timestamp Microservice:</summary>
Um microsserviço simples que pode receber uma string de data e retorná-la em formatos unix e UTC.

* **Página HTML:**
    * Acesse a página HTML do projeto em: [https://api-freecodecamp.fly.dev/api/timestamp/](https://api-freecodecamp.fly.dev/api/timestamp/)
    * Essa página permite que você insira uma data e veja o resultado formatado.
	
* **Rotas:**
    * `/api/timestamp/:date_string?`: Retorna a data em formatos Unix e UTC. 
        * **Exemplo com curl:**
            ```bash
            curl [https://api-freecodecamp.fly.dev/api/timestamp/2015-12-25](https://api-freecodecamp.fly.dev/api/timestamp/2015-12-25)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição GET.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/timestamp/2015-12-25` no campo de endereço.
            3. Clique em "Send".

<br> 			
</details>

<details>
<summary>Request Header Parser Microservice:</summary>
Um microsserviço que pode analisar as informações do cabeçalho da solicitação, como endereço IP, idioma e software.

* **Página HTML:**
    * Acesse a página HTML do projeto em: [https://api-freecodecamp.fly.dev/api/whoami/](https://api-freecodecamp.fly.dev/api/whoami/)
    * Esta página exibe as informações do cabeçalho da requisição.
	
* **Rotas:**
    * `/api/whoami`: Retorna informações sobre o endereço IP, idioma e software do cliente.
        * **Exemplo com curl:**
            ```bash
            curl [https://api-freecodecamp.fly.dev/api/whoami](https://api-freecodecamp.fly.dev/api/whoami)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição GET.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/whoami` no campo de endereço.
            3. Clique em "Send".

<br> 			
</details>

<details>
<summary>URL Shortener Microservice:</summary>
Um microsserviço que pode encurtar URLs longas e armazená-las em um banco de dados.

* **Página HTML:**
    * Acesse a página HTML do projeto em: [https://api-freecodecamp.fly.dev/api/shorturl/](https://api-freecodecamp.fly.dev/api/shorturl/)
    * Esta página permite que você insira uma URL e gere uma URL encurtada.
	
* **Rotas:**
    * `POST /api/shorturl`: Cria uma URL encurtada para a URL original fornecida.
        * **Exemplo com curl:**
            ```bash
            curl -X POST -H "Content-Type: application/json" -d '{"url": "[https://www.example.com](https://www.example.com)"}' [https://api-freecodecamp.fly.dev/api/shorturl](https://api-freecodecamp.fly.dev/api/shorturl)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição POST.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/shorturl` no campo de endereço.
            3. Na aba "Body", selecione "raw" e "JSON".
            4. Adicione o JSON `{"url": "https://www.example.com"}`.
            5. Clique em "Send".
    * `GET /api/shorturl/:short_url`: Redireciona para a URL original correspondente à URL encurtada.
        * **Exemplo com curl:**
            ```bash
            curl [https://api-freecodecamp.fly.dev/api/shorturl/1](https://api-freecodecamp.fly.dev/api/shorturl/1)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição GET.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/shorturl/1` no campo de endereço (substitua `1` pelo ID da URL encurtada).
            3. Clique em "Send".
			
<br> 			
</details>

<details>
<summary>Exercise Tracker Microservice:</summary>
Um microsserviço que permite aos usuários criar usuários, adicionar exercícios e controlar seus logs de exercícios.

* **Página HTML:**
    * Acesse a página HTML do projeto em: [https://api-freecodecamp.fly.dev/api/exercise/](https://api-freecodecamp.fly.dev/api/exercise/)
    * Esta página permite que você crie usuários, adicione exercícios e consulte logs.
	
* **Rotas:**
    * `POST /api/users`: Cria um novo usuário.
        * **Exemplo com curl:**
            ```bash
            curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'username=joao' [https://api-freecodecamp.fly.dev/api/users](https://api-freecodecamp.fly.dev/api/users)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição POST.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/users` no campo de endereço.
            3. Na aba "Body", selecione "x-www-form-urlencoded".
            4. Adicione a chave `username` com o valor `joao`.
            5. Clique em "Send".
    * `POST /api/users/:_id/exercises`: Adiciona um exercício para o usuário com o ID especificado.
        * **Exemplo com curl:**
            ```bash
            curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'description=corrida&duration=30&date=2024-10-04' [https://api-freecodecamp.fly.dev/api/users/1/exercises](https://api-freecodecamp.fly.dev/api/users/1/exercises)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição POST.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/users/1/exercises` no campo de endereço (substitua `1` pelo ID do usuário).
            3. Na aba "Body", selecione "x-www-form-urlencoded".
            4. Adicione as chaves `description`, `duration` e `date` com seus respectivos valores.
            5. Clique em "Send".
    * `GET /api/users/:_id/logs`: Retorna os logs de exercícios para o usuário com o ID especificado.
        * **Exemplo com curl:**
            ```bash
            curl [https://api-freecodecamp.fly.dev/api/users/1/logs](https://api-freecodecamp.fly.dev/api/users/1/logs)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição GET.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/users/1/logs` no campo de endereço (substitua `1` pelo ID do usuário).
            3. Clique em "Send".
			
<br> 			
</details>

<details>
<summary>File Metadata Microservice:</summary>
Um microsserviço que pode analisar arquivos enviados e retornar seus metadados, como nome, tipo e tamanho.

* **Página HTML:**
    * Acesse a página HTML do projeto em: [https://api-freecodecamp.fly.dev/api/fileanalyse/](https://api-freecodecamp.fly.dev/api/fileanalyse/)
    * Esta página permite que você envie um arquivo e veja seus metadados.
	
* **Rotas:**
    * `POST /api/fileanalyse`: Analisa o arquivo enviado e retorna seus metadados (nome, tipo e tamanho).
        * **Exemplo com curl:**
            ```bash
            curl -X POST -F "upfile=@caminho/para/arquivo.txt" [https://api-freecodecamp.fly.dev/api/fileanalyse](https://api-freecodecamp.fly.dev/api/fileanalyse)
            ```
        * **Exemplo com Postman:**
            1. Abra o Postman e crie uma nova requisição POST.
            2. Cole a URL `https://api-freecodecamp.fly.dev/api/fileanalyse` no campo de endereço.
            3. Na aba "Body", selecione "form-data".
            4. Na chave `upfile`, selecione "File" como tipo e escolha o arquivo que deseja enviar.
            5. Clique em "Send".
			
<br> 			
</details>

## Autor

* João Carlos Chavatte

## Licença

* ISC

## Links

* [FreeCodeCamp](https://www.freecodecamp.org/)
* [Certificação de APIs e Microsserviços](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
* [Certificado](https://www.freecodecamp.org/certification/chavatte/back-end-development-and-apis) 