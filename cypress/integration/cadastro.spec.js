/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();



// Mocha -> Test Runner

// describe, context, it

describe('Cadastro', () => {
  it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
    cy.visit('https://form-agilizei.netlify.app/');

    // Inputs de texto
    cy.get('input[name=firstName]').type(chance.first());
    cy.get('input[name=lastName]').type(chance.last());
    cy.get('textarea[name=adress]').type(chance.address());
    cy.get('input[name=emailAdress]').type(chance.email());

    //Inputs radio
    cy.get('input[value=f]').check();
    cy.get('input[type=checkbox]').check('Netflix');
    cy.get('input[type=checkbox]').check('Dormir');

    //Inputs do tipo combobox / select
    cy.get('select#countries').select('Dinamarca', { force: true });
    cy.get('select#years').select('2006', { force: true });
    cy.get('select#months').select('Janeiro', { force: true });
    cy.get('select#days').select('8', { force: true });

    //Inputs de senha -> type
    cy.get('input#firstpassword').type('Alunos@2021');
    cy.get('input#secondpassword').type('Alunos@2021');

    //Inputs do tipo bnt
    cy.contains('Finalizar cadastro').click();

    //espero que minha aplicação seja direcionada para a listagem
    //url
    //deve conter a palavra listagem
    cy.url().should('contain', 'listagem');

  });
});