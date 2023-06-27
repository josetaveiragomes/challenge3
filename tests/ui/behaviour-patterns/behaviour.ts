import Page from '../page-objects/page';
import CONSTANTS from "../constants";

class Behaviour {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  expectHeaderToBeInBaseState(): void {

  }

}

export default Behaviour;