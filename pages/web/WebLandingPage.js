const { expect } = require("@playwright/test");

class WebLandingPage {

constructor(page) {
    this.page = page;
    this.env = process.env.ENV;
    this.landingpage_url = process.env[this.env+'_WEB_LANDINGPAGE_URL'];
    this.free_trial_button = '//div[@class="Header_header-top-menu__Ih3Mv"]//a[@class="inline-flex Button_button__CUfC6 Button_tosca__IqK4g"]';
    this.partner_with_us = '//div[@class="Header_header-top-menu__Ih3Mv"]//following-sibling::a[@class="inline-flex Button_button__CUfC6 Button_yellow__jb1v0"]';
}

async goToLandingPage() {
    // log browser version
    const browserVersion = this.page.context().browser().version();
    console.log(`Browser Version: ${browserVersion}`);
    // Hit direct to Fithub landingpage
    const pageUrl = this.landingpage_url;
    await this.page.goto(pageUrl, {waitUntil:"domcontentloaded", timeout:15000});
}

async goToFreeTrialPage() {
    await this.page.click(this.free_trial_button);
}

}
module.exports = {WebLandingPage};
