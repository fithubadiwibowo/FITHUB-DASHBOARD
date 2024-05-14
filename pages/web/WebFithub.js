const { WebLandingPage } = require('./WebLandingPage');
const { WebFreeTrialPage } = require('./WebFreeTrialPage');

class WebFithub {
  constructor(page) {
    this.page = page;
    this.webLandingPage = new WebLandingPage(this.page);
    this.webFreeTrialPage = new WebFreeTrialPage(this.page);
  }

  getWebLandingPage() {
    return this.webLandingPage;
  }

  getWebFreeTrialPage() {
    return this.webFreeTrialPage;
  }

}
module.exports = { WebFithub };
