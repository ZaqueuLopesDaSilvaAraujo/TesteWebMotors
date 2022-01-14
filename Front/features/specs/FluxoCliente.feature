#language: pt

Funcionalidade: Fluxo para entrar em contato com vendedor

    Cenário: Validar site para busca do veículo 
        Dado que quero buscar um carro para comprar
        Quando eu acessar o site da webmotors
        Então devo entrar na tela inicial do site webmotors

    Cenário: Validar pesquisa do carro para compra
        Dado que eu queira pesquisar um veículo dentro do site
        Quando eu digitar o nome deste veículo no campo de busca
        E selecionar o modelo específico dentre as opções da lista
        Então devo ser direcionado para os modelos a venda no site do carro que pesquisei

    Cenário: Validar opção dentre a seleção de carros 
        Dado que estou na tela onde estão os modelos do carro que pesquisei
        Quando eu encontrar um modelo que me interesse
        E clicar no modelo
        Então deve-se abrir uma nova guia
        E deve conter os dados do carro

    Cenário: Validar enviar mensagem ao vendedor 
        Dado que eu queira mandar uma mensagem para o vender do modelo em questão
        Quando eu preencher os campos obrigatórios
        E marcar as opções as quais me interessam
        E clicar no botão “enviar mensagem”
        Então deve ser enviada a mensagem para o vendedor do modelo 