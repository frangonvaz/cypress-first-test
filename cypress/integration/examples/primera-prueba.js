/// <reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Primer conjunto casos de prueba', () => {

    beforeEach(() => {
        //Ingresamos en la página
        cy.visit('http://automationpractice.com/index.php');
    })

    /*
    //Caso 1
    it('Contabilizar cantidad elementos', () => {

        //Verificar cantidad de elementos visibles
        cy.get('#homefeatured .product-container').should('have.length', 7);

        //Obtenemos el elemento homefeatured .product-container como un parámetro
        cy.get('#homefeatured .product-container').as('productosPopulares');

        //Verifacamos nuevamente la cantidad usando el parámetro
        cy.get('@productosPopulares').should('have.length', 7);

    });
      //Caso de prueba 2  
      it('Agregar el elemento de tipo "Printed Dress" al carrito de compra desde la pagina principal', function () {
        //Obtenemos el elemento homefeatured .product-container como un parametro   
        cy.get('#homefeatured .product-container').as('ProductosPopulares') //as nos permite utilizar un alias para llamar al elemento con @
        //Iteramos para encontrar un producto con nombre X  
        cy.get('@ProductosPopulares')
            .find('.product-name')
            .each(($el, index, $list) => {

                cy.get('@ProductosPopulares').eq(index).find('.price').then(($el1) => {
                    let precio = $el1.text()
                    cy.log(precio)

                    if ($el.attr('title') === 'Printed Dress' && precio.includes('50.99')) {
                        cy.log('Se ha encontrado el elemento buscado')
                        cy.log('Se ha encontrado el precio buscado')
                        cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                    }
                })

            })
        cy.get('h2 > .ajax_cart_product_txt')
            .should('contain.text', 'There is 1 item in your cart.')
            .should('be.visible')
    })
    */

    //Caso 3
    /*
    it('Verificar dropdown tenga elementos necesarios', () => {

        //Flotando sobre un elemento (emulando hover y dropdown)
        //invoke invoca una función sobre el elemento encontrado.
        cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr','style', 'display: block');
        cy.get('a[title="Tops"]').should('be.visible');
        cy.get('a[title="T-shirts"]').should('be.visible');
        cy.get('a[title="Blouses"]').should('be.visible');
        cy.get('a[title="Dresses"]').should('be.visible');
        cy.get('a[title^="Casual"]').should('be.visible');
        cy.get('a[title^="Evening"]').should('be.visible');
        cy.get('a[title^="Summer"]').should('be.visible');
    });
    */

    //Caso 4

    it('Verificar que checkboxes funcionan correctamente', () => {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input[type="checkbox"]').check().should('be.checked');
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input[type="checkbox"]').should('not.be.checked');
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input[type="checkbox"]').should('not.be.checked');
    });

});