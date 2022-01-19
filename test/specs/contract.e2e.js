import LoginPage from  '../pageobjects/login.page';
import DashboardPage from '../pageobjects/dashboard.page';
import ContractTypePage from '../pageobjects/contractType.page';
import BenefitsAndExtrasPage from '../pageobjects/benefitsAndExtras.page';
import CompliancePage from '../pageobjects/compliance.page';
import GeneralInformationPage from '../pageobjects/generalInformation.page';
import PaymentDetailsPage from '../pageobjects/paymentDetails.page';
import DefineDatesPage from '../pageobjects/paymentDetails.page';

// import fixedContractPage from '../pageobjects/fixedContract.page';

import data from '../fixtures/data';
describe('My Contratct test ', () => {
    beforeEach(() => {
      DashboardPage.open();
        LoginPage.login(process.env.EMAIL, process.env.PASSWORD);

    });

    it('Should successfully create a contract and logout ', async () => {
        await DashboardPage.clickCreateAContract();
        await ContractTypePage.selectFixedRate();
        await GeneralInformationPage.generalInfomation();
        await PaymentDetailsPage.paymentDetails();
        await DefineDatesPage.nextPage();
        await BenefitsAndExtrasPage.benefits();
        await CompliancePage.createContract();

        const rate = $('div[data-qa="rate"]');
        const contractType = $('div[data-qa="contract-type"]');
        const jobTitle = $('div[data-qa="job-title"]');
        const contractorsCountry = $('div[data-qa="contractors-country"]');

        //assert the submitted data is correct
        await expect(rate).toHaveTextContaining(data.rate);
        await expect(contractType).toHaveTextContaining(data.contractType);
        await expect(jobTitle).toHaveTextContaining(data.jobTile);
        await expect(contractorsCountry).toHaveTextContaining(data.country);
        await expect(contractorsCountry).toHaveTextContaining(data.state);

        DashboardPage.logout()
        expect(browser).toHaveUrl('https://dev.deel.wtf/login')
    });

    
});


