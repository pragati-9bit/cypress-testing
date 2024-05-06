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
    cy.get("#El4_h-").click();
    cy.url().should("include", "/#services");
  });
  it("Contact button should navigate to the contact us form", () => {
    cy.get("#zpmpcl").click();
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
      .should("contain.text", "Thank You!").should("be.visible");
      cy.get('[name="Contact form"]').screenshot()
  });

  it("In the 'Subscribe to our newsletter' form, the input field should have one field 'your email'", () => {
    cy.get("[placeholder='Your email']").should("exist");
  });
  it("In the 'Subscribe to our newsletter' form, the subscribe button should submit the 'useremail'", () => {
    cy.get("[placeholder='Your email']").type("pragati@ninebit.in");
    cy.get("[name='Subscribe form']").submit().get(".success-message__heading").should("contain.text", "Thank you!").should("be.visible");
    // .submit()
    // .should("contain.text", "Thank you!");
  });

  it("In the footer, the 'Terms & conditions' link should navigate to the 'Terms & conditions' page", () => {
    cy.get("[data-page-id=zNClbj]").click();
    cy.url().should("include", "/terms-and-conditions");
  });

  it("In the footer, the 'Privacy Policy' link should navigate to the 'Privacy Policy' page", () => {
    cy.get("[data-page-id=zvo6mB]").click();
    cy.url().should("include", "/privacy-policy");
  });

  it("In the footer, the 'Workplace Policy' link should navigate to the 'Workplace Policy' page", () => {
    cy.get("[data-page-id=z0Gp1u]").click();
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
// it("Should visit the website and verify title negative", () => {
//   cy.visit("https://ninebit.in/");

//   cy.title().should(
//     "eq",
//     "Contact Us | NineBit Computing | Consulting | Digital Intelligence"
//   );
// });

// it("CSS selectors and locators", () => {
//   cy.visit("https://ninebit.in/");

//   cy.get(".item-content").contains("Blog");
//   cy.contains("Blog").click();
// });

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })
// describe("Newsletter Subscribe Form", () => {
//   beforeEach(() => {
//     cy.visit("https://ninebit.in/")
//     cy.contains('Blog').click()
//   })

//   it("allows users to subscribe to the email list", () => {
//     cy.get("Your email")
//   })
// })
// describe("Newsletter Subscribe Form", () => {
//   beforeEach(() => {
//     cy.visit("https://ninebit.in/")
//   })

//   it("allows users to subscribe to the email list", () => {
//     cy.get("input[type=text]")
//   })
// })

// cy.contains('Blog').click()
//  // Should be on a new URL which
// // includes '/blog-list'
// cy.url().should('include', '/blog-list')
// /
//   // Get an input, type into it
// cy.get('input')
// cy.location().should((loc) => {

//   expect(loc.pathname).to.eq('ninebit.in/blog-list')
// })
