context("Waiting", () => {
  beforeEach(() => {
    cy.visit("https://ninebit.in/");
  });

  it("cy.wait() - wait for a specific amount of time", () => {
    cy.get('a[href="/terms-and-conditions"]').click();
    cy.wait(5000);
    cy.get('a[href="/privacy-policy"]').click();
  });

  it("cy.wait() - wait for a specific route", () => {
    cy.intercept("POST", "**/post/*").as("subscribe");

    cy.get("[placeholder='Your email']").type("joe@testing.in");
    cy.get("[name='Subscribe form']")
      .submit()
      .get(".success-message__heading")
      .should("contain.text", "Thank you!")
      .should("be.visible")
      .wait("@subscribe")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304]);
  });
});
