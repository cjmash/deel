import Page from './page';
class CompliancePage extends Page {

  get btnCreateContract () { return $('button[data-qa="create-contract"]')}

  async createContract () {
        await (await this.btnCreateContract).click();
    }

    open() {
        super.open('/');
      }
}

export default new CompliancePage();
