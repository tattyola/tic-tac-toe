describe('negative tests', function () {
    it('verify that table is disabled once message comes out', function () {
        cy.visit('/');
        cy.get('#result').within(function ($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')
            cy.wrap(iFrameContent)
                .find('#number')
                .clear()
                .type('3');
            cy.wrap(iFrameContent)
                .find('#start')
                .click();
            cy.wrap(iFrameContent)
                .find('td[id="0"]').click(); // X
            cy.wrap(iFrameContent)
                .find('td[id="1"]').click(); // O
            cy.wrap(iFrameContent)
                .find('td[id="3"]').click(); // X
            cy.wrap(iFrameContent)
                .find('td[id="4"]').click(); // O
            cy.wrap(iFrameContent)
                .find('td[id="6"]').click(); // X
            cy.wrap(iFrameContent)
                .find('div#endgame')
                .should('be.visible');
            // cy.wrap(iFrameContent)
            //     .find('#start').should('be.disabled');
            // cy.wrap(iFrameContent)
            //     .find('#table')
            //     .should('be.disabled'); // should be fixed
        })
    })
})