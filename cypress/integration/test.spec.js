describe('negative tests', function () {
    it('verify that user can not create a table once message appears', function () {
        cy.visit('/');
        cy.get('#result').within(function ($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')
            cy.wrap(iFrameContent)
                .find('#number')
            cy.wrap(iFrameContent)
                .find('#number')
                .clear()
                .type('3');
            cy.wrap(iFrameContent)
                .find('#start')
                .click();
            cy.wrap(iFrameContent)
                .find('#table')
            cy.wrap(iFrameContent)
                .find('td[id="0"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="1"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="3"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="4"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="6"]').click();
            cy.wrap(iFrameContent)
                .find('div#endgame')
                .should('be.visible');

            cy.wrap(iFrameContent)
                .find('#start')
                .click();
            cy.wrap(iFrameContent)
                .find('#table')
                .should('be.visible');
            // проверка что таблица не изменилась

        })
    })
})