describe('Tab Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display the Profile tab by default', () => {
      cy.contains('Welcome to my portfolio').should('be.visible');
    });

    it("Switches to the Resume tab when clicked", () => {
      // Click on the Resume tab
      cy.get("button[aria-label='Resume']").click();
      
      // Check if resume sections are visible
      cy.get('select').select('Work Experience'); 
      cy.contains('Work Experience').should('be.visible');

      cy.get('select').select('Skills');
      cy.contains('Skills').should('be.visible');
    });
  });
  