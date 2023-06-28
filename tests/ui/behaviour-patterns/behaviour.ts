import Page from '../page-objects/page';

class Behaviour {

  page: Page | null;

  constructor(page?: Page) {
    this.page = page ?? null;
  }

}

export default Behaviour;