import React from 'react'
import Boilerplate from './Boilerplate'

describe('<Boilerplate />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Boilerplate />)
  })
})