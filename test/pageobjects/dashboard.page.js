import Page from './page';

class DashboardPage extends Page {
    get CreateAContract () { return $('[data-qa="create-a-contract"]') }
    get logoutButton () { return $('[data-original-title="Logout"]')}

    async clickCreateAContract () {
        const elem = await $('[data-qa="create-a-contract"]')
        await elem.waitForDisplayed({ timeout: 20000 }); 
        await (await this.CreateAContract).click();
    }

    async logout () {
        await (await this.logoutButton).click();
    }
    
    open() {
      super.open('/');
    }
}

export default new DashboardPage();
