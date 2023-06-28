import Header from './components/header';

class Page {

  url: string;
  path: string;

  constructor(url: string, path: string) {
    this.url = url;
    this.path = path;
  }

  open(extraOption = ''): void {
    browser.url(this.url + this.path + extraOption);
    this.waitForPageLoad();
  }

  waitForPageLoad(): void {
    browser.waitUntil(
      () => browser.execute(
        () => document.readyState === 'complete'
      ),
      {
        timeoutMsg: 'Page is still not in a ready state!'
      }
    );
  }

  waitForUrlToBe(url: string): void {
    browser.waitUntil(
      () => browser.getUrl().includes(url),
      {
        timeoutMsg: `Page url is still not ${url}!`
      }
    )
  }

  get header(): typeof Header {
    return Header;
  }

}

export default Page;