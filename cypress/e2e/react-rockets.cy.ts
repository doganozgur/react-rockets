describe("RocketList Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display a list of missions as <ul> with <li> elements", () => {
    // <ul> control
    cy.get("ul").should("exist");

    // <li> control
    cy.get("ul").find("li").should("have.length.greaterThan", 0);
  });
});
