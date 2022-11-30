describe("Test Case 1 Login using correct username & password ", () => {
    const username = "usman77";
    const password = "123456";
    it("Visit PPDB Web ", () => {
      cy.visit("http://127.0.0.1:8000/");
    });
  
    it("Login", () => {
      cy.wait(2000);
      cy.get(".nav-item > .nav-link").click();
      cy.wait(1000);
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get("#remember").click();
      cy.get(".btn").click();
    });
  });
  
  describe("Test Case 2 Login using correct username, wrong password ", () => {
    const username = "usman77";
    const wrong_password = "123";
    it("Visit PPDB Web ", () => {
      cy.wait(3000);
      cy.visit("http://127.0.0.1:8000/");
    });
  
    it("Login", () => {
      cy.wait(2000);
      cy.get(".nav-item > .nav-link").click();
      cy.wait(1000);
      cy.get("#username").type(username);
      cy.get("#password").type(wrong_password);
      cy.get("#remember").click();
      cy.get(".btn").click();
    });
  });
  
  describe("Test Case 3 Login using wrong username, correct password ", () => {
    const username = "usman";
    const wrong_password = "123456";
    it("Visit PPDB Web ", () => {
      cy.wait(3000);
      cy.visit("http://127.0.0.1:8000/");
    });
  
    it("Login", () => {
      cy.wait(2000);
      cy.get(".nav-item > .nav-link").click();
      cy.wait(1000);
      cy.get("#username").type(username);
      cy.get("#password").type(wrong_password);
      cy.get("#remember").click();
      cy.get(".btn").click();
    });
  });
  
  describe("Test Case 4 Login using wrong username, wrong password ", () => {
    const wrong_username = "user132";
    const wrong_password = "123";
    it("Visit PPDB Web ", () => {
      cy.wait(3000);
      cy.visit("http://127.0.0.1:8000/");
    });
  
    it("Login", () => {
      cy.wait(2000);
      cy.get(".nav-item > .nav-link").click();
      cy.wait(1000);
      cy.get("#username").type(wrong_username);
      cy.get("#password").type(wrong_password);
      cy.get("#remember").click();
      cy.get(".btn").click();
    });
  });
  
  describe("Test Case 5 Login without fill username & password ", () => {
    it("Visit PPDB Web ", () => {
      cy.wait(3000);
      cy.visit("http://127.0.0.1:8000/");
    });
  
    it("Click Login", () => {
      cy.wait(2000);
      cy.get(".nav-item > .nav-link").click();
      cy.wait(1000);
      cy.get(".btn").click();
    });
  });