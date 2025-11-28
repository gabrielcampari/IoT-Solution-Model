# Projeto de uma solução IoT

Solução desenvolvida para a disciplina Internet das Coisas / Interface Homem-Máquina – 6AN

Professor: Claudio Alexandre Ganança

Grupo: Gabriel Campari Correia, Gabriel Imolene Vieira, Gustavo Almeida de Moura, Glenda Borges Ferreira de Carvalho, Kauê Sanches Barbi, Lívia Mezashi.

## Sistema:

Frontend: HTML (index.html), CSS(style.css) e JavaScript(app.js).

Backend: Script Node.js (script.js), Express.js e CORS.

Lógica por trás:

O backend recebe os valores dos sensores e toma a decisão conforme as regras:

1. presence = 0 → Porta aberta;
2. obstruction = 1 → Porta aberta;
3. presence = 1 e obstruction = 0 → Porta fechada.

A cada ciclo, o backend exibe no console:

- Valor do sensor de presença;
- Valor do sensor de obstrução;
- Estado final da porta (Aberta/Fechada).

O frontend simula os sensores, mostra o estado da porta e envia as leituras ao servidor automaticamente a cada 2 segundos.

## Iniciando o projeto:

Pré-requisitos:

- Certifique-se de ter o Node.js + NPM instalados na máquina.

### Passo a passo:

No diretório do projeto:

1. Instale o npm dentro do projeto:

`npm install`

2. Inicie o Backend:

`npm start`

O servidor iniciará na porta 3000.

3. Execute o frontend:

- Use a extensão Name: Live Server.

- VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Ou

- Abra o arquivo diretamente no navegador:

`index.html`

## Fluxo do projeto:

Frontend → envia sensores → Backend → aplica regras → retorna ação da porta → Front atualiza interface

## Demonstração do Projeto

![Demonstração do Projeto](img/demo.gif)
