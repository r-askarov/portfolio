describe("Project Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("button[aria-label='Projects']").click({ force: true });
  });

  it("should ensure project links work correctly", () => {
    // Verify each project card contains a valid link
    cy.get("#project-card a").each(($link) => {
      const href = $link.attr("href");

      // Ensure the link is not empty
      expect(href).to.not.be.empty;

      // Visit the link and verify the page loads
      cy.request(href).its("status").should("eq", 200);
    });
  });

  it("should scroll through projects correctly", () => {
    // Click on the Projects tab
    cy.get("button[aria-label='Projects']").click({ force: true });

    // Verify initial project title
    cy.get("#project-card h2").should("contain", "iOS Interactive Map App");

    // Click the next button and verify the next project title
    cy.get("button[aria-label='Next project']").click({ force: true });
    cy.get("#project-card h2").should("contain", "3D Drone Delivery Simulator");

    // Click the next button again and verify the next project title
    cy.get("button[aria-label='Next project']").click({ force: true });
    cy.get("#project-card h2").should("contain", "Wordle Clone");

    // Click the previous button and verify the previous project title
    cy.get("button[aria-label='Previous project']").click({ force: true });
    cy.get("#project-card h2").should("contain", "3D Drone Delivery Simulator");

    // Click the previous button again and verify the first project title
    cy.get("button[aria-label='Previous project']").click({ force: true });
    cy.get("#project-card h2").should("contain", "iOS Interactive Map App");
  });
});
