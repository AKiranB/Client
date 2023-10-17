import React from 'react'
import Nav from './Nav'

describe('<Nav />', () => {
    it('renders correctly', () => {
        const items = ['Home', 'About', 'Contact']
        cy.mount(<Nav items={items} />)
        cy.get('nav').should('exist')
        cy.get('img[alt="logo"]').should('exist')
        cy.get('nav li').should('have.length', items.length)
        cy.contains('Log in as guest').should('not.exist')
    })

    it('calls onClick when the button is clicked', () => {
        const items = ['Home', 'About', 'Contact']
        cy.mount(<Nav items={items} />)
        cy.contains('Log in as guest').should('exist')
        cy.window().then((win) => {
            cy.stub(win.console, 'log').as('consoleLog')
        })
        cy.contains('Log in as guest').click()
        cy.get('@consoleLog').should('have.been.calledWith', 'log in as guest')
    })
})
