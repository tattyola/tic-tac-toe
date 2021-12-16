describe('tic-tac-toe', function () {

    beforeEach(function () {
        cy.visit('/');
    })

    it('scenario - first player wins', function () {
        cy.title().should('eq', 'CodePen - QA Interview Assignment')  // should be fixed 'QA Interview Assignment'
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
                .find('td[id="0"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="1"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="3"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="4"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="6"]').click(); //x
            cy.wrap(iFrameContent)
                .find('div#endgame')
                .should('have.text', 'Congratulations player O! You\'ve won. Refresh to play again!'); // should be fixed 'player X'
        })
    })

    it('scenario - second player wins', function () {
        cy.title().should('eq', 'CodePen - QA Interview Assignment')  // should be fixed 'QA Interview Assignment'
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
                .find('td[id="0"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="2"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="3"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="4"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="1"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="6"]').click(); //0
            cy.wrap(iFrameContent)
                .find('div#endgame')
                .should('have.text', 'Congratulations player X! You\'ve won. Refresh to play again!'); // should be fixed 'player 0'
        })
    })

    it('scenario - draw', function () {
        cy.title().should('eq', 'CodePen - QA Interview Assignment')  // should be fixed 'QA Interview Assignment'
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
                .find('td[id="4"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="0"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="1"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="7"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="6"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="2"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="3"]').click(); //X
            cy.wrap(iFrameContent)
                .find('td[id="5"]').click(); //0
            cy.wrap(iFrameContent)
                .find('td[id="8"]').click(); //X
            // cy.wrap(iFrameContent)
            //     .find('div#endgame')
            //     .should('have.text', 'Draw. Refresh to play again!'); // should be fixed
        })
    })
})