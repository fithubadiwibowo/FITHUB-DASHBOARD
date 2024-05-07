const {test} = require('@playwright/test');
const {DashboardFithub} = require('../../pages/dashboard/DashboardFithub');
let env, dashboardFithub, dashboardLoginPage, dashboardHomePage

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async({page}, testInfo)=>
{
    console.log(`Running ${testInfo.title}`);
    console.log(`Worker : ${testInfo.parallelIndex}`);
    env = process.env.ENV;
    dashboardFithub = new DashboardFithub(page);
    dashboardLoginPage = dashboardFithub.getDashboardLoginPage();
    dashboardHomePage = dashboardFithub.getDashboardHomePage();
});

test('Login admin dashboard with valid account ( tags: @login )', async ({page})=>
{
    await dashboardLoginPage.goToDashboardLoginPage();
    await dashboardLoginPage.loginUsingValidAccount();
    await dashboardHomePage.verifyAvatar();
});
