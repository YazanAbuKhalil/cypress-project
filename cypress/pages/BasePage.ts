class BasePage {
    minNumber = 0;
	maxNumber = 1000_000_000;

    navigateTo(url: string) {
        cy.visit(url);
    }

    currentPath() {
        return cy.url();
    }
    
    getElement(locator: string, timeoutValue?: any) {
		  return cy.get(locator, { timeout: timeoutValue });
	}

    clickElement(locator: string) {
        this.getElement(locator).click();
    }

    typeInput(locater: string, value: string) {
        this.getElement(locater).type(value);
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