import Behaviour from './behaviour'
import LandingPage from '../page-objects/landing.page';

class HeaderBehaviour extends Behaviour {

  selectSolution(option: string): void {
    LandingPage.header.clickSolutions();
    LandingPage.header.clickSolutionsOption(option);
  }

}

export default new HeaderBehaviour(LandingPage);