import Page from './page';

class ContractTypePage extends Page {
    get fixedRate () { return $('.heap-start-fixed-contract') }

    async selectFixedRate () {
        await (await this.fixedRate).click();
    }

    open() {
      super.open('/');
    }
}

export default new ContractTypePage();
