import React from 'react'
import Button from './Button'
import { mount } from 'cypress/react18'

describe('<Button />', () => {
  it('renders and calls onClick when clicked', () => {
    const onClickSpy = cy.spy()
    mount(<Button text="Click me" onClick={onClickSpy} />)
    cy.get('button').should('have.text', 'Click me')
    cy.get('button').click().then(() => {
      expect(onClickSpy).to.be.calledOnce
    })
  })
})