//PAGE OBJECTS
import LandingPage from '../../page-objects/landing.page';

//CONSTANTS
import CONSTANTS from "../../constants";

describe(`#001 Header Hamburger Icon`, () => {
  
  before(`should open the landing page successfully`, () => {
    //ACTIONS
    LandingPage.open();
    //ASSERTIONS
    LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL);
    expect(browser.getUrl()).toContain(CONSTANTS.DEMO_URL.BASE.NL);
  });

  it(`should be resized and hamburger button should appear`, () => {
    //ACTIONS
    browser.setWindowSize(765, 1080);
    //ASSERTIONS
    LandingPage.header.hamburgerMenu.waitForDisplayed();
    expect(LandingPage.header.hamburgerMenu).toBeDisplayed();
  });

  after(`should adjust window size to default`, () => {
    browser.setWindowSize(1920, 1080);
  });
});