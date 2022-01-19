import Page from './page';


class LoginPage extends Page {
  
    get inputEmailAddress () { return $('[name="email"]') }
    get inputPassword () { return $('[name="password"]') }
    get loginButton () { return $('button[type="submit"]') }

    async login (username, password) {
        await (await this.inputEmailAddress).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.loginButton).click();
    }

    open() {
        super.open('/');
      }

}

export default new LoginPage();
