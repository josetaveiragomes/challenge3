import Behaviour from './behaviour'
import LandingPage from '../page-objects/landing.page';
import CONSTANTS from "../constants";

class LandingBehaviour extends Behaviour {

  select(option: string): void {
    // LandingPage.filter.click();
    // LandingPage.selectFilterOption(option);
  }

}

export default new LandingBehaviour(LandingPage);