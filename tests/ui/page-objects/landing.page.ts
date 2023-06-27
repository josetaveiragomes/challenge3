import Page from './page';
import CONSTANTS from "../constants";

class InventoryPage extends Page {

  waitForPageElements(): void{
  }

}

export default new InventoryPage(CONSTANTS.DEMO_URL.BASE.NL, CONSTANTS.EMPTY_STRING);
