import { getGreeting } from '../support/app.po';

describe('universal-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to universal-test!');
  });
});
