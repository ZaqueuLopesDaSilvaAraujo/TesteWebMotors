Dado('que quero buscar um carro para comprar') do
    
end
  
Quando('eu acessar o site da webmotors') do
    visit('/')
end

Então('devo entrar na tela inicial do site webmotors') do
    expect(current_url).to eq 'https://www.webmotors.com.br/'
end

Dado('que eu queira pesquisar um veículo dentro do site') do

end

Quando('eu digitar o nome deste veículo no campo de busca') do
    visit('/')
    find('#searchBar').set("lancer")
end

Quando('selecionar o modelo específico dentre as opções da lista') do
    find('.SearchBar__results__result__name').click
end

Então('devo ser direcionado para os modelos a venda no site do carro que pesquisei') do
    expect(current_url).to eq 'https://www.webmotors.com.br/carros/sp-sao-paulo/mitsubishi/lancer?estadocidade=S%C3%A3o%20Paulo%20-%20S%C3%A3o%20Paulo&marca1=MITSUBISHI&modelo1=LANCER&idcmpint=t1:c17:m07:webmotors:modelo::mitsubishi%20lancer&autocomplete=lancer&autocompleteTerm=MITSUBISHI%20LANCER'
end

Dado('que estou na tela onde estão os modelos do carro que pesquisei') do

end

Quando('eu encontrar um modelo que me interesse') do
    
end

Quando('clicar no modelo') do
    visit('https://www.webmotors.com.br/carros/sp-sao-paulo/mitsubishi/lancer?estadocidade=S%C3%A3o%20Paulo%20-%20S%C3%A3o%20Paulo&marca1=MITSUBISHI&modelo1=LANCER&idcmpint=t1:c17:m07:webmotors:modelo::mitsubishi%20lancer&autocomplete=lancer&autocompleteTerm=MITSUBISHI%20LANCER')
    find(:xpath, '//*[@id="root"]/main/div[1]/div[3]/div[2]/div/div[1]/div/div[3]/div/div[2]/a[1]', visible: true).click
end

Então('deve-se abrir uma nova guia') do
    switch_to_window windows.last    
    expect(current_url).to eq 'https://www.webmotors.com.br/comprar/mitsubishi/lancer/20-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico/4-portas/2014-2015/36063720?pos=c36063720c:&np=1'
end

Então('deve conter os dados do carro') do
    expect(find('#VehiclePrincipalInformationState')).to have_content 'São Paulo, SP'
    expect(find('#VehiclePrincipalInformationYear')).to have_content '2014/2015'
    expect(find('#VehiclePrincipalInformationTransmission')).to have_content 'Automática'
    expect(find('#VehiclePrincipalInformationBodyType')).to have_content 'Sedã'
    expect(find('#VehiclePrincipalInformationFinalPlate')).to have_content '4'
    expect(find('#VehiclePrincipalInformationColor')).to have_content 'Preto'
    expect(find('#VehicleCharacteristicPos2')).to have_content 'Sim'
    expect(find('#VehiclePrincipalInformatiOnodometer')).to have_content '30.100'
    expect(find('#VehiclePrincipalInformationFuel')).to have_content 'Gasolina'    
end

Dado('que eu queira mandar uma mensagem para o vender do modelo em questão') do
    
end

Quando('eu preencher os campos obrigatórios') do
    visit('https://www.webmotors.com.br/comprar/mitsubishi/lancer/20-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico/4-portas/2014-2015/36063720?pos=c36063720c:&np=1')
    sleep(10)
    find(:xpath, '//*[@id="root"]/div[4]/div[2]/div/div[1]', visible: true).click
    find(:xpath, '//*[@id="SendProposal"]/div/div/div/div/form/div/div[1]/input', visible: true).set("Teste")
    find(:xpath, '//*[@id="SendProposal"]/div/div/div/div/form/div/div[2]/input', visible: true).set("teste@teste.com.br")
    find(:xpath, '//*[@id="SendProposal"]/div/div/div/div/form/div/div[3]/input', visible: true).set("11999999999")
    find(:xpath, '//*[@id="SendProposal"]/div/div/div/div/form/div/div[4]/textarea', visible: true).set("Mensagem Teste")
end

Quando('marcar as opções as quais me interessam') do

end

Quando('clicar no botão “enviar mensagem”') do
    find(:xpath, '//*[@id="SendProposal"]/div/div/div/div/button[2]', visible: true).click
end

Então('deve ser enviada a mensagem para o vendedor do modelo') do
    expect(find(:xpath,'//*[@id="root"]/main/div[1]/div/div/span', visible: true)).to have_content 'Mensagem enviada!'
    sleep(10)
end