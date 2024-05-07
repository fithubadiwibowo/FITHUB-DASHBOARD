const { expect } = require("@playwright/test");

class DashboardHomePage {

constructor(page) {
    this.page = page;
    this.env = process.env.ENV;
    this.avatar_profile = '//span[@class="avatar avatar-sm rounded-circle"]';
}

async verifyAvatar() {
    // Waiting until avatar profile image is visible
    await this.page.waitForSelector(this.avatar_profile, { timeout: 15000 });
}

}
module.exports = {DashboardHomePage};
