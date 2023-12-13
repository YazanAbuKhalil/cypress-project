class BasePage {
  minNumber = 0;
  maxNumber = 1000_000_000;

  navigateTo(url: string) {
    cy.visit(url);
  }

  /**
   * Gets css locator from the user and returns the DOM element that have that locator
   * @param {string} locator  The string contains the value of the locator
   * @param {number} timeoutValue The number of command timout. it equals the defaultCommand timout if no one passed value as a parameter
   * If one is passed as a parameter then the number is equal to that value.
   * @param {boolean} log The boolean represents if Displaying the command in the Command log or not
   * @param {boolean} includeShadowDom The boolean represents Whether to traverse shadow DOM
   * @returns {Chainable<JQuery<E>>} the DOM element
   */
  getElement(
    locator: string,
    { timeoutValue, log, includeShadowDom }: { timeoutValue?: number; log?: boolean; includeShadowDom?: boolean } = {}
  ) {
    return cy.get(locator, {
      timeout: timeoutValue,
      log,
      includeShadowDom,
    });
  }


  /**
   * Gets locator from the user and make click action on the DOM element with that locator
   * @param {string} locator The string contains the value of the locator
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>} the DOM element
   */
  clickElement(locator: string) {
    return this.getElement(locator).click();
  }

  /**
   *
   * @param {string} locater The string contains the value of the locator
   * @param {string} value The string contains the value to type in the input field
   * @returns {}
   */
  typeInput(locater: string, value: string) {
    return this.getElement(locater).type(value);
  }

  generateRandomNumber(min = this.minNumber, max = this.maxNumber): number {
    return Math.floor(Math.random() * max) + min;
  }

  getRandomUserName(): string {
    return `test_username_${this.generateRandomNumber()}`;
  }

  getRandomPassword(): string {
    return `test_Automation_${this.generateRandomNumber()}`;
  }
}
export = BasePage;
