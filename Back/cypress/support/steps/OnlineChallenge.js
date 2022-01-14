Given(/^que eu queira validar a API Make do OnlineChallenge$/, () => {
	return true;
});

When(/^eu enviar o request para a API para recuperar marcas cadastradas na webmotors$/, () => {
	cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Make'
    }).then((response) => {
        expect(response.status).to.equal(200);
    })
});

Then(/^devo receber os IDs e os Nomes das marcas de carro$/, () => {
	cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Make'
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].ID).to.equal(1);
        expect(response.body[0].Name).to.equal('Chevrolet');
        expect(response.body[1].ID).to.equal(2);
        expect(response.body[1].Name).to.equal('Honda');
        expect(response.body[2].ID).to.equal(3);
        expect(response.body[2].Name).to.equal('Ford');
    })
});

Given(/^que eu queira validar a API Model do OnlineChallenge$/, () => {
	return true;
});

When(/^eu enviar o request para a API para recuperar modelos cadastradas na webmotors com o Make ID 1$/, () => {
    cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1'
    }).then((response) => {
        expect(response.status).to.equal(200);
    })
});

Then(/^devo receber os IDs e nome dos Modelos dos carros da marca com MakeId 1$/, () => {
    cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1'
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].MakeID).to.equal(1);
        expect(response.body[0].ID).to.equal(1);
        expect(response.body[0].Name).to.equal('Agile');
        expect(response.body[1].MakeID).to.equal(1);
        expect(response.body[1].ID).to.equal(2);
        expect(response.body[1].Name).to.equal('Astra');
        expect(response.body[2].MakeID).to.equal(1);
        expect(response.body[2].ID).to.equal(3);
        expect(response.body[2].Name).to.equal('Onix');
    })
});

Given(/^que eu queira validar a API Version do OnlineChallenge$/, () => {
	return true;
});

When(/^eu enviar o request para a API para recuperar versões cadastradas na webmotors com o Model ID 2$/, () => {
    cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=2'
    }).then((response) => {
        expect(response.status).to.equal(200);
    })
});

Then(/^devo receber os IDs e nome das Versões do carro com Model ID 2$/, () => {
	cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=2'
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].ModelID).to.equal(2);
        expect(response.body[0].ID).to.equal(11);
        expect(response.body[0].Name).to.equal('1.5 DX 16V FLEX 4P AUTOMÁTICO');
        expect(response.body[1].ModelID).to.equal(2);
        expect(response.body[1].ID).to.equal(12);
        expect(response.body[1].Name).to.equal('1.5 LX 16V FLEX 4P MANUAL');
        expect(response.body[2].ModelID).to.equal(2);
        expect(response.body[2].ID).to.equal(13);
        expect(response.body[2].Name).to.equal('2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO');
        expect(response.body[3].ModelID).to.equal(2);
        expect(response.body[3].ID).to.equal(14);
        expect(response.body[3].Name).to.equal('1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO');
    })
});

Given(/^que eu queira validar a API Vehicles do OnlineChallenge$/, () => {
	return true;
});

When(/^eu enviar o request para a API para recuperar veículos cadastrados na webmotors com o número da página que desejo consultar$/, () => {
    cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1'
    }).then((response) => {
        expect(response.status).to.equal(200);
    })
});

Then(/^devo receber os dados dos veículos disponíveis naquela página$/, () => {
    cy.request({
        method: "GET",
        url: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1'
    }).then((response) => {
        expect(response.status).to.equal(200);

        expect(response.body[0].ID).to.equal(1);
        expect(response.body[0].Make).to.equal('Honda');
        expect(response.body[0].Model).to.equal('City');
        expect(response.body[0].Version).to.equal('2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO');
        expect(response.body[0].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/01.jpg');
        expect(response.body[0].KM).to.equal(0);
        expect(response.body[0].Price).to.equal('59000,00');
        expect(response.body[0].YearModel).to.equal(2018);
        expect(response.body[0].YearFab).to.equal(2017);
        expect(response.body[0].Color).to.equal('Azul');

        expect(response.body[1].ID).to.equal(2);
        expect(response.body[1].Make).to.equal('Mitsubishi');
        expect(response.body[1].Model).to.equal('Lancer');
        expect(response.body[1].Version).to.equal('2.0 EVO 4P AUTOMÁTICO');
        expect(response.body[1].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/02.jpg');
        expect(response.body[1].KM).to.equal(47500);
        expect(response.body[1].Price).to.equal('49000,00');
        expect(response.body[1].YearModel).to.equal(2012);
        expect(response.body[1].YearFab).to.equal(2012);
        expect(response.body[1].Color).to.equal('Branco');

        expect(response.body[2].ID).to.equal(3);
        expect(response.body[2].Make).to.equal('Honda');
        expect(response.body[2].Model).to.equal('Fit');
        expect(response.body[2].Version).to.equal('1.4 LXL 16V FLEX 4P AUTOMÁTICO');
        expect(response.body[2].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/03.jpg');
        expect(response.body[2].KM).to.equal(0);
        expect(response.body[2].Price).to.equal('78000,00');
        expect(response.body[2].YearModel).to.equal(2018);
        expect(response.body[2].YearFab).to.equal(2018);
        expect(response.body[2].Color).to.equal('Preto');

        expect(response.body[3].ID).to.equal(4);
        expect(response.body[3].Make).to.equal('Mitsubishi');
        expect(response.body[3].Model).to.equal('Lancer');
        expect(response.body[3].Version).to.equal('2.0 EVO 4P AUTOMÁTICO');
        expect(response.body[3].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/04.jpg');
        expect(response.body[3].KM).to.equal(12900);
        expect(response.body[3].Price).to.equal('59000,00');
        expect(response.body[3].YearModel).to.equal(2016);
        expect(response.body[3].YearFab).to.equal(2015);
        expect(response.body[3].Color).to.equal('Vermelho');

        expect(response.body[4].ID).to.equal(5);
        expect(response.body[4].Make).to.equal('Honda');
        expect(response.body[4].Model).to.equal('Fit');
        expect(response.body[4].Version).to.equal('1.4 LXL 16V FLEX 4P AUTOMÁTICO');
        expect(response.body[4].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/05.jpg');
        expect(response.body[4].KM).to.equal(12000);
        expect(response.body[4].Price).to.equal('55000,00');
        expect(response.body[4].YearModel).to.equal(2016);
        expect(response.body[4].YearFab).to.equal(2016);
        expect(response.body[4].Color).to.equal('Azul');

        expect(response.body[5].ID).to.equal(6);
        expect(response.body[5].Make).to.equal('Chevrolet');
        expect(response.body[5].Model).to.equal('Agile');
        expect(response.body[5].Version).to.equal('1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO');
        expect(response.body[5].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/06.jpg');
        expect(response.body[5].KM).to.equal(12000);
        expect(response.body[5].Price).to.equal('37000,00');
        expect(response.body[5].YearModel).to.equal(2014);
        expect(response.body[5].YearFab).to.equal(2013);
        expect(response.body[5].Color).to.equal('Vermelho');

        expect(response.body[6].ID).to.equal(7);
        expect(response.body[6].Make).to.equal('Chevrolet');
        expect(response.body[6].Model).to.equal('Agile');
        expect(response.body[6].Version).to.equal('1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO');
        expect(response.body[6].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/07.jpg');
        expect(response.body[6].KM).to.equal(0);
        expect(response.body[6].Price).to.equal('45000,00');
        expect(response.body[6].YearModel).to.equal(2018);
        expect(response.body[6].YearFab).to.equal(2017);
        expect(response.body[6].Color).to.equal('Cinza');

        expect(response.body[7].ID).to.equal(8);
        expect(response.body[7].Make).to.equal('Ford');
        expect(response.body[7].Model).to.equal('Ecosport');
        expect(response.body[7].Version).to.equal('1.6 FREESTYLE 16V FLEX 4P MANUAL');
        expect(response.body[7].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/08.jpg');
        expect(response.body[7].KM).to.equal(93000);
        expect(response.body[7].Price).to.equal('45000,00');
        expect(response.body[7].YearModel).to.equal(2013);
        expect(response.body[7].YearFab).to.equal(2012);
        expect(response.body[7].Color).to.equal('Branca');

        expect(response.body[8].ID).to.equal(9);
        expect(response.body[8].Make).to.equal('Chevrolet');
        expect(response.body[8].Model).to.equal('Agile');
        expect(response.body[8].Version).to.equal('1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO');
        expect(response.body[8].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/06.jpg');
        expect(response.body[8].KM).to.equal(12000);
        expect(response.body[8].Price).to.equal('37000,00');
        expect(response.body[8].YearModel).to.equal(2014);
        expect(response.body[8].YearFab).to.equal(2013);
        expect(response.body[8].Color).to.equal('Vermelho');

        expect(response.body[9].ID).to.equal(10);
        expect(response.body[9].Make).to.equal('Honda');
        expect(response.body[9].Model).to.equal('Fit');
        expect(response.body[9].Version).to.equal('1.4 LXL 16V FLEX 4P AUTOMÁTICO');
        expect(response.body[9].Image).to.equal('http://desafioonline.webmotors.com.br/content/img/05.jpg');
        expect(response.body[9].KM).to.equal(12000);
        expect(response.body[9].Price).to.equal('55000,00');
        expect(response.body[9].YearModel).to.equal(2016);
        expect(response.body[9].YearFab).to.equal(2016);
        expect(response.body[9].Color).to.equal('Azul');
    })
});
