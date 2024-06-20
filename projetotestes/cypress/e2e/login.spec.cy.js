describe('Login Test', () => {
  it('should log in successfully with valid credentials', () => {

    const username = 'admin';
    const password = 'admin';
    const url = 'https://the-internet.herokuapp.com/basic_auth';

    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials);
    const authHeader = `Basic ${encodedCredentials}`;

    cy.visit(url, {
      headers: {
        Authorization: authHeader,
      },
    });
    cy.get('body').should('contain', 'Congratulations!');
  });
});
  