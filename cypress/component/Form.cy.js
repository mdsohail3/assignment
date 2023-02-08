import Form from "../../src/Components/Form"
import { mount } from 'cypress-react-unit-test'

describe('Form.cy.js', () => {
  it('resets input on button click', () => {

    mount(<Form />)
    cy.get('input').type('some text');
    cy.get('input').should('have.value', 'some text');
    cy.get('button').click();
    cy.get('input').should('have.value', '');
    cy.get('input').should('be.focused');
  });
})