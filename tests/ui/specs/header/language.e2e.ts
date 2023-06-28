//PAGE OBJECTS
import LandingPage from '../../page-objects/landing.page';

//BEHAVIOUR PATTERNS
import HeaderBehaviour from '../../behaviour-patterns/header.behaviour';

//CONSTANTS
import CONSTANTS from "../../constants";

//TEST DATA

const languages = [
  {
    LANGUAGE: CONSTANTS.HEADER_NL.LANGUAGE.DE,
    URL: CONSTANTS.DEMO_URL.BASE.DE,
  },
  {
    LANGUAGE: CONSTANTS.HEADER_NL.LANGUAGE.EN,
    URL: CONSTANTS.DEMO_URL.BASE.EN,
  },
  {
    LANGUAGE: CONSTANTS.HEADER_NL.LANGUAGE.NL,
    URL: CONSTANTS.DEMO_URL.BASE.NL,
  },
]

describe(`#002 Header Language Change`, () => {
  before(`should open the landing page successfully`, () => {
    //ACTIONS
    LandingPage.open();
    //ASSERTIONS
    LandingPage.waitForUrlToBe(CONSTANTS.DEMO_URL.BASE.NL);
    expect(browser.getUrl()).toContain(CONSTANTS.DEMO_URL.BASE.NL);
  });
  
  languages.forEach(({LANGUAGE, URL}) =>{
    it(`should change to the ${LANGUAGE} language and redirect to "${URL}"`, () => {
      //ACTIONS
      HeaderBehaviour.selectLanguage(LANGUAGE);
      //ASSERTIONS
      LandingPage.waitForUrlToBe(URL);
      expect(browser.getUrl()).toContain(URL);
    });
  });
});