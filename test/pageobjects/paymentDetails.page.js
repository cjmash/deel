import Page from './page';
import data from '../fixtures/data';
class PaymentDetailsPage extends Page {
    
    get selectCurrency () { return $('div[data-qa="currency-select"]') }
    get currency() { return $(`div=${data.currency}`)  }
    get rate () { return $('input[name="rate"]') }
    get selectFrequency () { return $('div[data-qa="cycle-select"]') }
    get frequency () { return $(`div=${data.frequency}`) }
    get btnNext () { return $('button[data-qa="next"]')}

    
    async paymentDetails () {
        await (await this.rate).setValue(data.rate);
        await (await this.selectCurrency).click();
        await (await this.currency).click();
        await (await this.selectFrequency).click();
        await (await this.frequency).click();
        await (await this.btnNext).click();
    }

    open() {
        super.open('/');
      }
    
}


export default new PaymentDetailsPage();
