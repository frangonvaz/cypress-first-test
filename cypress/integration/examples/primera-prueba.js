/// <reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Primer conjunto casos de prueba', () => {

    //Caso 1
    it('Contabilizar cantidad elementos', () => {
        //Ingresamos en la página
        cy.visit('http://automationpractice.com/index.php');
        //Verificar cantidad de elementos visibles
        cy.get('#homefeatured .product-container').should('have.length', 7);
        
    });
    //Caso 2

    //Caso 3


});