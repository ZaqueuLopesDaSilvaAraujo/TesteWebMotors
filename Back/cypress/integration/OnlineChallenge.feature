#language: pt

Funcionalidade: Testar as APIs

Cenário: Validar API para recuperar marcas cadastradas na webmotors
    Dado que eu queira validar a API Make do OnlineChallenge
    Quando eu enviar o request para a API para recuperar marcas cadastradas na webmotors
    Então devo receber os IDs e os Nomes das marcas de carro

Cenário: Validar API para recuperar modelos cadastradas na webmotors
    Dado que eu queira validar a API Model do OnlineChallenge
    Quando eu enviar o request para a API para recuperar modelos cadastradas na webmotors com o Make ID 1
    Então devo receber os IDs e nome dos Modelos dos carros da marca com MakeId 1

Cenário: Validar API para recuperar versões cadastradas na webmotors
    Dado que eu queira validar a API Version do OnlineChallenge
    Quando eu enviar o request para a API para recuperar versões cadastradas na webmotors com o Model ID 2
    Então devo receber os IDs e nome das Versões do carro com Model ID 2

Cenário: Validar API para recuperar veículos cadastrados na webmotors
    Dado que eu queira validar a API Vehicles do OnlineChallenge
    Quando eu enviar o request para a API para recuperar veículos cadastrados na webmotors com o número da página que desejo consultar
    Então devo receber os dados dos veículos disponíveis naquela página