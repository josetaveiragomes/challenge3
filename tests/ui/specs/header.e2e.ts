//PAGE OBJECTS
import LandingPage from '../page-objects/landing.page';

//BEHAVIOUR PATTERNS
import HeaderBehaviour from '../behaviour-patterns/header.behaviour';

//CONSTANTS
import CONSTANTS from "../constants";

//TEST DATA
const options = [
  {
    URL: CONSTANTS.DEMO_URL.SOLUTIONS.HOSPITAL,
    OPTION: CONSTANTS.HEADER_NL.SOLUTIONS.HOSPITAL,
  },
  {
    URL: CONSTANTS.DEMO_URL.SOLUTIONS.CARE,
    OPTION: CONSTANTS.HEADER_NL.SOLUTIONS.CARE,
  },
  {
    URL: CONSTANTS.DEMO_URL.SOLUTIONS.CLINIC,
    OPTION: CONSTANTS.HEADER_NL.SOLUTIONS.CLINIC,
  },
  {
    URL: CONSTANTS.DEMO_URL.SOLUTIONS.FOR_YOU,
    OPTION: CONSTANTS.HEADER_NL.SOLUTIONS.FOR_YOU,
  },
  {
    URL: CONSTANTS.DEMO_URL.SOLUTIONS.PHARMACY,
    OPTION: CONSTANTS.HEADER_NL.SOLUTIONS.PHARMACY,
  }
]

beforeEach(`should adjust window size to default`, () => {
  browser.setWindowSize(1920, 1080);
});

describe(`#001 Header Hamburger Icon`, () => {
  
  before(`should open the page successfully`, () => {
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
});

describe(`#003 Header Page Solutions Redirects`, () => {
  options.forEach(({URL, OPTION}) =>{
    it(`should open the page successfully`, () => {
      //ACTIONS
      LandingPage.open();
      //ASSERTIONS
      LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL);
      expect(browser.getUrl()).toContain(CONSTANTS.DEMO_URL.BASE.NL);
    });

    it(`should be redirected to "${CONSTANTS.DEMO_URL.BASE.NL}${URL}"`, () => {
      //ACTIONS
      HeaderBehaviour.selectSolution(OPTION);
      //ASSERTIONS
      LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL + URL);
      expect(browser.getUrl()).toContain(URL);
    });
  });
});