describe("Button Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should open the GitHub repository when clicking the GitHub link", () => {
      cy.get("a[href*='github.com']").should("have.attr", "target", "_blank");
      cy.get("a[href*='github.com']").then(($link) => {
        const url = $link.prop("href");
        cy.request(url).its("status").should("eq", 200);
      });
    });
  
    it("should toggle dark mode when clicking the dark mode button", () => {
      cy.get("button[aria-label='Toggle dark mode']").as("darkModeButton");

      cy.get("@darkModeButton").should("contain", "🌙");
  
      cy.get("@darkModeButton").click({ force: true });
      cy.get("@darkModeButton").should("contain", "☀️");

      cy.get("@darkModeButton").click({ force: true });
      cy.get("@darkModeButton").should("contain", "🌙");
    });
  });
