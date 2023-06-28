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

options.forEach(({URL, OPTION}) =>{
  describe(`#003 Header Page Solutions Redirects`, () => {
  
    before(`should open the page successfully`, () => {
      //ACTIONS
      LandingPage.open();
      //ASSERTIONS
      LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL);
      expect(browser.getUrl()).toContain(CONSTANTS.DEMO_URL.BASE.NL);
    });

    it(`should be redirected to "${CONSTANTS.DEMO_URL.BASE.NL}${URL}"`, () => {
      //ACTIONS
      HeaderBehaviour.selectSolution("");
      //ASSERTIONS
      LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL + URL);
      expect(browser.getUrl()).toContain(URL);
    });
  });
});