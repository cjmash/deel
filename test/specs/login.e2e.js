import LoginPage from  '../pageobjects/login.page';

describe('My application', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('should fail to login with the incorrect login details', async () => {
        await LoginPage.login('mash@gmail.com', 'testuser');
        const errorMessage = await $('.input-container-error');
        await expect(errorMessage).toHaveText('Incorrect email or password');
    });

    it('should fail to login with an invalid email format', async () => {
        await LoginPage.login('mashmasha494gmail.com', 'testuser');
        const errorMessage = await $('.input-container-error');
        await expect(errorMessage).toHaveText('Invalid email address');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(process.env.EMAIL, process.env.PASSWORD);
        const welcomeMessage = await $('p[class="sidebar-option-p"]');
        await expect(welcomeMessage).toHaveText('Home');
    });
});


