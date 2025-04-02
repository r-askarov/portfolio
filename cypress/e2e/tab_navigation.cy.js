describe('Tab Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display the Education tab by default', () => {
      cy.contains('Bachelor Of Arts in Computer Science').should('be.visible');
    });
  
    it('should switch to Work Experience tab', () => {
      cy.get('select').select('Work Experience'); 
      cy.contains('Work Experience').should('be.visible');
    });
  
    it('should switch to Skills tab', () => {
      cy.get('select').select('Skills');
      cy.contains('Skills').should('be.visible');
    });
  });
  