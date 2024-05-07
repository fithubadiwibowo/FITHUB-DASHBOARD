const { expect } = require("@playwright/test");

class DashboardLoginPage {

constructor(page) {
    this.page = page;
    this.env = process.env.ENV;
    this.dashboard_url = process.env[this.env+'_DASHBOARD_URL'];
    this.email_field = '//input[@name ="Email" or @id = "Email" or @placeholder="Email"]';
    this.password_field = '//input[@name ="Password" or @id = "Password" or @placeholder="Password"]';
    this.sign_in_button = '//button[@type ="submit"]';
    this.successfully_login_popup = '//*[contains(text(),"Logged in successfully,")]';
    this.avatar_profile = '//span[@class="avatar avatar-sm rounded-circle"]';
}

async goToDashboardLoginPage() {
    // log browser version
    const browserVersion = this.page.context().browser().version();
    console.log(`Browser Version: ${browserVersion}`);
    // Hit direct dashboard login url
    const pageUrl = this.dashboard_url + '#/auth/login';
    await this.page.goto(pageUrl, {waitUntil:"domcontentloaded", timeout:15000});
}

async loginUsingValidAccount() {
    // Waiting until email field is visible
    await this.page.waitForSelector(this.email_field);
    // Input email
    await this.page.fill(this.email_field, process.env[this.env+'_DASHBOARD_USERNAME']);
    // Input password
    await this.page.fill(this.password_field, process.env[this.env+'_DASHBOARD_PASSWORD']);
    // Click sign in button
    await this.page.click(this.sign_in_button);
    // Waiting until successfully login dashboard is visible
    await this.page.waitForSelector(this.successfully_login_popup, { timeout: 15000 });
}


}
module.exports = {DashboardLoginPage};
