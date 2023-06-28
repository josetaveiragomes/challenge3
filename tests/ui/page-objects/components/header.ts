class Header {

  waitForComponentElements(): void{
    this.header.waitForDisplayed();
    this.solutions.waitForDisplayed();
  }

  get header(): WebdriverIO.Element {
    const elem = $('[id="Nav"]');
    elem.waitForDisplayed();
    return elem;
  }

  get hamburgerMenu(): WebdriverIO.Element {
    const elem = this.header.$('div[class="mobile-menu"]');
    elem.waitForDisplayed();
    return elem;
  }

  get solutions(): WebdriverIO.Element {
    const elem = this.header.$('div[id="w-dropdown-toggle-0"]');
    elem.waitForDisplayed();
    return elem;
  }

  clickSolutions(): void {
    this.solutions.click();
  }

  solutionsOption(option: string): WebdriverIO.Element {
    const elem = this.header.$('nav[id="w-dropdown-list-0"]').$(`a=${option}`);
    elem.waitForDisplayed();
    return elem;
  }

  clickSolutionsOption(option: string): void {
    this.solutionsOption(option).click();
  }

}

export default new Header;
