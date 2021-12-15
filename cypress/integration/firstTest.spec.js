describe('tic-tac-toe', function () {
    it('first player wins', function () {

        cy.visit('/')
        cy.title().should('eq', 'CodePen - QA Interview Assignment')  // fix it 'QA Interview Assignment'
        cy.get('#result').within(function ($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')

            cy.wrap(iFrameContent)
                .find('#number')
                .should('be.visible');
            cy.wrap(iFrameContent)
                .find('#number')
                .clear()
                .type('3');
            cy.wrap(iFrameContent)
                .find('#start')
                .click();
            cy.wrap(iFrameContent)
                .find('#table')
                .should('be.visible');
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
                .should('have.text', 'Congratulations player O! You\'ve won. Refresh to play again!'); // fix it X
        })

        // cy.get('#number').should('be.visible');
        // cy.get('#number').type('3');
        // cy.get('#start').click();
        // cy.get('#table').should('be.visible');
        // cy.get('//table//td[@id="0"]').click();
        // cy.get('//table//td[@id="1"]').click();
        // cy.get('//table//td[@id="3"]').click();
        // cy.get('//table//td[@id="4"]').click();
        // cy.get('//table//td[@id="6"]').click();
        // cy.get('//div[@id="endgame"]').should('be.visible');
        // cy.get('//div[@id="endgame"]').should('have.text', 'Congratulations player X! You\'ve won. Refresh to play again!');
    })

    it('second player wins', function () {

        cy.visit('/')
        cy.title().should('eq', 'CodePen - QA Interview Assignment')  // fix it 'QA Interview Assignment'
        cy.get('#result').within(function ($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')

            cy.wrap(iFrameContent)
                .find('#number')
                .should('be.visible');
            cy.wrap(iFrameContent)
                .find('#number')
                .clear()
                .type('3');
            cy.wrap(iFrameContent)
                .find('#start')
                .click();
            cy.wrap(iFrameContent)
                .find('#table')
                .should('be.visible');
            cy.wrap(iFrameContent)
                .find('td[id="0"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="2"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="3"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="4"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="1"]').click();
            cy.wrap(iFrameContent)
                .find('td[id="6"]').click();
            cy.wrap(iFrameContent)
                .find('div#endgame')
                .should('have.text', 'Congratulations player X! You\'ve won. Refresh to play again!'); // fix it 0
        })
    })
})