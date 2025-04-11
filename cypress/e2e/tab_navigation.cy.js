describe('Tab Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display the Profile tab by default', () => {
      cy.contains('Welcome to my portfolio').should('be.visible');
    });

    it("Switches to the Resume tab and navigates through dropdown options", () => {
      // Click on the Resume tab
      cy.get("button[aria-label='Resume']").click({ force: true });

      // Verify the dropdown menu is visible
      cy.get('select').should('be.visible');

      // Iterate through dropdown options and verify each section is displayed
      const options = ['Work Experience', 'Skills', 'Education'];
      options.forEach(option => {
        cy.get('select').select(option);
        cy.contains(option).should('be.visible');
      });
    });
  });
