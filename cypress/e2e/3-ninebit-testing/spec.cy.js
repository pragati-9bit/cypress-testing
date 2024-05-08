describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("https://ninebit.in/");
  });

  it("Should visit the website and verify title positive", () => {
    cy.title().should(
      "eq",
      "Gen AI Product and Services | NineBit Computing | Consulting | Digital Intelligence"
    );
  });
  xit("should have 5 headings", () => {
    cy.get(".block-header__content").should("have.length", 5);
  });

  it("should render the brand logo", () => {
    cy.get(".block-header-logo__image").should("be.visible");
  });
  it("Our service button should navigate to services", () => {
    cy.get("a[href='/#services']").click();
    cy.url().should("include", "/#services");
  });
  it("Contact button should navigate to the contact us form", () => {
    cy.get("[data-qa='gridbutton:zpmpcl']").click();
    cy.url().should("include", "/contact-us");
  });
  it("Contact us form should have three fields name,email,message", () => {
    cy.get("[placeholder='Your name']").should("exist");
    cy.get("[placeholder='Your email address']").should("exist");
    cy.get("[placeholder='Enter your message']").should("exist");
  });

  it("In the contact us form, the submit button should submit the form", () => {
    cy.get("[placeholder='Your name']").type("Pragati");

    cy.get("[placeholder='Your email address']").type("pragati@ninebit.in");

    cy.get("[placeholder='Enter your message']").type("hello ninebit");
    // cy.contains("Submit")
    cy.get("[name='Contact form']")
      .submit()
      .get(".success-message__heading")
      .should("contain.text", "Thank You!")
      .should("be.visible");
    cy.get('[name="Contact form"]').screenshot();
  });

  it("In the 'Subscribe to our newsletter' form, the input field should have one field 'your email'", () => {
    cy.get("[placeholder='Your email']").should("exist");
  });
  it("In the 'Subscribe to our newsletter' form, the subscribe button should submit the 'useremail'", () => {
    cy.get("[placeholder='Your email']").type("pragati@ninebit.in");
    cy.get("[name='Subscribe form']")
      .submit()
      .get(".success-message__heading")
      .should("contain.text", "Thank you!")
      .should("be.visible");
  });

  it("In the footer, the 'Terms & conditions' link should navigate to the 'Terms & conditions' page", () => {
    cy.get("[href='/terms-and-conditions']").click();
    cy.url().should("include", "/terms-and-conditions");
  });

  it("In the footer, the 'Privacy Policy' link should navigate to the 'Privacy Policy' page", () => {
    cy.get("[href='/privacy-policy']").click();
    cy.url().should("include", "/privacy-policy");
  });

  it("In the footer, the 'Workplace Policy' link should navigate to the 'Workplace Policy' page", () => {
    cy.get("[href='/workplace-policy']").click();
    cy.url().should("include", "/workplace-policy");
  });

  it("In the footer, the icon 'X' should navigate to the Ninebits Twitter page", () => {
    cy.get('a[title="Go to Twitter page"]').find("svg").click();
  });

  it("In the footer, the icon 'in' should navigate to the Ninebits LinkedIn page", () => {
    cy.get('a[title="Go to Linkedin-in page"]').find("svg").click();
  });
  it("In the footer, the icon 'github' should navigate to the Ninebits GitHub page", () => {
    cy.get('a[title="Go to Github page"]').find("svg").click();
  });
  it("In the footer, the icon 'youtube' should navigate to the Ninebits YouTube page", () => {
    cy.get('a[title="Go to Youtube page"]').find("svg").click();
  });

  it("In the footer, the icon 'youtube' should navigate to the Ninebits YouTube page", () => {
    cy.get('a[title="Go to Youtube page"]').find("svg").click();
  });
});

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })
