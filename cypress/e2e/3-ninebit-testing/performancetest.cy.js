describe("Performance Testing", () => {
  beforeEach(() => {
    cy.visit("https://ninebit.in/");
  });

  xit("should pass the audits", function () {
    cy.lighthouse();
    // cy.pa11y();
  });
  xit("should run lighthouse performance audits using custom thresholds", () => {
    const thresholds = {
      performance: 50,
      accessibility: 80,
      "first-contentful-paint": 2000,
      "largest-contentful-paint": 3000,
      interactive: 2000,
      seo: 60,
      pwa: 50,
    };
    const lighthouseConfig = {
      formFactor: "desktop",
      screenEmulation: { disabled: true },
    };

    cy.lighthouse(thresholds, lighthouseConfig);
  });
  it("Lighthouse threshhold", () => {
    const lighthousemetrics = {
      performance: 95,
      accessibility: 100,
      "best-practices": 95,
      seo: 85,
      pwa: 100,
    };
    cy.lighthouse(lighthousemetrics);
  });
});
