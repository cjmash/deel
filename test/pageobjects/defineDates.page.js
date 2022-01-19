import Page from './page';
import data from '../fixtures/data';
class DefineDatesPage extends Page {
    
    get btnNext () { return $('button[data-qa="next"]')}

    async nextPage () {
        await (await this.btnNext).click();

    }

    open() {
        super.open('/');
      }
    
}


export default new DefineDatesPage();
