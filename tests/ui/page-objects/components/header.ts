class Header {

  waitForComponentElements(): void{
    this.header.waitForDisplayed();
    this.solutions.waitForDisplayed();
    this.languageMenu.waitForDisplayed();
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
    const elem = this.header.$('div[id="w-dropdown-toggle-0"]').$('div[class*="dropdown-icon"]');
    elem.waitForDisplayed();
    return elem;
  }

  get languageMenu(): WebdriverIO.Element {
    const elem = this.header.$('div[class="language"]');
    elem.waitForDisplayed();
    return elem;
  }

  getLanguage(language: string): WebdriverIO.Element {
    const elem = this.header.$(`li[id="wg-${language}"]`);
    elem.waitForDisplayed();
    return elem;
  }

  clickLanguage(language: string): void {
    this.getLanguage(language).click();
  }

  clickSolutions(): void {
    this.solutions.click();
  }

  solutionsOption(option: string): WebdriverIO.Element {
    const elem = this.header.$(`//nav[@id='w-dropdown-list-0']/a[text()='${option}']`);
    elem.waitForDisplayed();
    return elem;
  }

  clickSolutionsOption(option: string): void {
    this.solutionsOption(option).click();
  }

}

export default new Header;
