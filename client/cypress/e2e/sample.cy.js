describe("UI Tests", function () {
  it("e2e test top nav", function () {
    cy.visit("http://localhost:3000");
    // check if contains title
    cy.contains("Taxscouts");
  });

  it("e2e test translate", function () {
    cy.visit("http://localhost:3000");

    // click language button
    cy.get("[id=language]").click();
    // click Spanish button
    cy.contains("Espanol").click();
    // check language
    cy.contains("gestoria");
  });

  it("e2e test search", function () {
    cy.visit("http://localhost:3000");

    // Get search input, type into it
    cy.get("[id=search]").type("lk");

    cy.wait(10000);

    // check if title is there
    cy.contains("Goldberg Powtech");
  });
});
