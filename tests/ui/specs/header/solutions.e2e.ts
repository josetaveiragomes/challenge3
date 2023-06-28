//PAGE OBJECTS
import LandingPage from '../../page-objects/landing.page';

//BEHAVIOUR PATTERNS
import HeaderBehaviour from '../../behaviour-patterns/components/header.behaviour';

//CONSTANTS
import CONSTANTS from "../../constants";

//TEST DATA
const solutions = [
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

describe(`#003 Header Page Solutions Redirects`, () => {
  beforeEach(`should open the landing page successfully`, () => {
    //ACTIONS
    LandingPage.open();
    //ASSERTIONS
    LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL);
    expect(browser.getUrl()).toContain(CONSTANTS.DEMO_URL.BASE.NL);
  });
  
  solutions.forEach(({URL, OPTION}) =>{
    it(`should be redirected to "${CONSTANTS.DEMO_URL.BASE.NL}${URL}"`, () => {
      //ACTIONS
      HeaderBehaviour.selectSolution(OPTION);
      //ASSERTIONS
      LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL + URL);
      expect(browser.getUrl()).toContain(URL);
    });
  });
});