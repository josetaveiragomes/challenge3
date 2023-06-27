//PAGE OBJECTS
import LandingPage from '../page-objects/landing.page';

//BEHAVIOUR PATTERNS
import LandingBehaviour from '../behaviour-patterns/landing.behaviour';

//CONSTANTS
import CONSTANTS from "../constants";

//TEST DATA
const options = [
  {URL: CONSTANTS.DEMO_URL.SOLUTIONS.HOSPITAL},
  {URL: CONSTANTS.DEMO_URL.SOLUTIONS.CARE},
  {URL: CONSTANTS.DEMO_URL.SOLUTIONS.CLINIC},
  {URL: CONSTANTS.DEMO_URL.SOLUTIONS.FOR_YOU},
  {URL: CONSTANTS.DEMO_URL.SOLUTIONS.PHARMACY}
]

options.forEach(({URL}) =>{
  describe(``, () => {
  
    it(`should open the page successfully`, () => {
      //ACTIONS
      LandingPage.open();
      //ASSERTIONS
      LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL);
      expect(browser.getUrl()).toContain(CONSTANTS.DEMO_URL.BASE.NL);
    });

    it(`should be redirected to "${CONSTANTS.DEMO_URL.BASE.NL}${URL}"`, () => {
      //ACTIONS
      // TODO
      //ASSERTIONS
      LandingPage.waitForUrlToBe(URL);
      expect(browser.getUrl()).toContain(URL);
    });
  });
});