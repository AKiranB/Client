import React from 'react'
import TickSVG from './TickSVG'

describe('<TickSVG />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TickSVG />)
  })
})