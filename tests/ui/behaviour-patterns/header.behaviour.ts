import Behaviour from './behaviour'
import Header from '../page-objects/components/header';

class HeaderBehaviour extends Behaviour {

  selectSolution(option: string): void {
    Header.clickSolutions();
    Header.clickSolutionsOption(option);
  }

  selectLanguage(language: string): void {
    Header.languageMenu.click();
    Header.clickLanguage(language);
  }
}

export default new HeaderBehaviour();