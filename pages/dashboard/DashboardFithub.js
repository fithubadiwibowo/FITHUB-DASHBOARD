const { DashboardLoginPage } = require('./DashboardLoginPage');
const { DashboardHomePage } = require('./DashboardHomePage');

class DashboardFithub {
  constructor(page) {
    this.page = page;
    this.dashboardLoginPage = new DashboardLoginPage(this.page);
    this.dashboardHomePage = new DashboardHomePage(this.page);
  }

  getDashboardLoginPage() {
    return this.dashboardLoginPage;
  }
  
  getDashboardHomePage() {
    return this.dashboardHomePage;
  }

  
}
module.exports = { DashboardFithub };

