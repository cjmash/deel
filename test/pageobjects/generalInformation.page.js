import Page from './page';
import data from '../fixtures/data';
class GeneralInformationPage extends Page {

    get contractName () { return $('input[name="name"]') }
    get jobTitle () { return $('input[name="jobTitle"]') }
    get scopeOfWork () { return $('textarea[name="scope"]') }
    get seniorityLevel () { return $('div[data-qa="selector-seniority-level"]') }
    get seniority() { return $('div='+data.seniority)  }
    get taxResidenceState () { return $('div[data-qa="contractor-tax-residence-province"]') }
    get state() { return $('div='+data.state)  }
    get taxResidence () { return $('div[data-qa="contractor-tax-residence"]') }
    get country() { return $('div='+data.country)  }
    get startDate () { return $('.deel-ui__calendar-input-container__input_content')}
    get btnNext () { return $('button[data-qa="next"]')}
    get selectStartDate () { 
      const date = new Date();
      const today = date.getDate();
      let yesterday =  today - 1 
      return $(`abbr=${yesterday}`)
  }
  
async generalInfomation () {
  await (await this.contractName).setValue(data.contractName);
  await (await this.taxResidence).click();
  await (await this.country).click();
  await (await this.taxResidenceState).click();
  await (await this.state).click();
  await (await this.jobTitle).setValue(data.jobTile);
  await (await this.seniorityLevel).click();
  await (await this.seniority).click();
  await (await this.scopeOfWork).setValue(data.scope);
  await (await this.startDate).click();
  await (await this.selectStartDate).click();
  await (await this.btnNext).click();
}

open() {
  super.open('/');
}

}
export default new GeneralInformationPage();
