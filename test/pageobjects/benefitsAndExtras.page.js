import Page from './page';
import data from '../fixtures/data';
class BenefitsAndExtrasPage extends Page {

    get specialClause () { return $('button[data-qa="add-a-special-clause"]') }
    get inputSpecialClause () { return $('.textarea') }
    get btnNext () { return $('button[data-qa="next"]')}
    get btnCreateContract () { return $('button[data-qa="create-contract"]')}

    async benefits () {
        await (await this.specialClause).click();
        await (await this.inputSpecialClause).setValue(data.specialClause);
        await (await this.btnNext).click();
    }
    
    open() {
        super.open('/');
      }
    
}


export default new BenefitsAndExtrasPage();
