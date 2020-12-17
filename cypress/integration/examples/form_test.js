// write tests here
describe("User-Onboarding form app", () => {
    // here go our tests
    beforeEach(() => {
      // arbitrary code you want running before tests start
      cy.visit("http://localhost:3000/");
    });
    // here go our tests
    it("sanity test to make sure tests work", () => {
      // false positive
      // 'expect' is an assertion
      // there can be many assertions per test
      // inside the 'it' statement (test) many assertions may be
      // logically grouped together
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });
    it("Name test", () => {
      cy.get('input[name="username"]').type("Mike").should("have.value", "Mike");
    });

    it("Email test", () => {
        cy.get('input[name="email"]').type("mmurph917@gmail.com").should("have.value", "mmurph917@gmail.com");
      });

      it("Password test", () => {
        cy.get('input[name="password"]').type("password").should("have.value", "password");
      });

      it("ToS test", () => {
        cy.get('input[name="termsOfService"]').click()
    });

    it("Submit test", () => {
        cy.get('input[name="username"]').type("Mike");
        cy.get('input[name="email"]').type("mmurph917@gmail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('.submitButton').should("be.disabled");
        cy.get('input[name="termsOfService"]').click()
        cy.get('.submitButton').click()
      });

      it("Validation test", () => {
        cy.get('input[name="username"]').type("M{backspace}");
        cy.get('div.errors').contains('required');  
      })
});