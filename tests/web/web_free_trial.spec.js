const {test, expect} = require('@playwright/test');
const {WebFithub} = require('../../pages/web/WebFithub');
const randomizer = require('../../helper/randomizer')
let env, webFithub, webLandingPage, webFreeTrialPage

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async({page}, testInfo)=>
{
    console.log(`Running ${testInfo.title}`);
    console.log(`Worker : ${testInfo.parallelIndex}`);
    env = process.env.ENV;
    webFithub = new WebFithub(page);
    webLandingPage = webFithub.getWebLandingPage();
    webFreeTrialPage = webFithub.getWebFreeTrialPage();
});

test('Free trial breakdown city to kotamadya for jakarta barat and fithub grogol club ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
{
    const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Grogol', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}

    await webLandingPage.goToLandingPage();
    await webLandingPage.goToFreeTrialPage();
    await webFreeTrialPage.inputCity(free_trial_data.city);
    await webFreeTrialPage.inputClub(free_trial_data.club);
    await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
    await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
    await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
    await webFreeTrialPage.inputEmail(free_trial_data.email);
    await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
    await webFreeTrialPage.clickTnc();
    await webFreeTrialPage.clickRegisterButton();
    await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta barat and fithub greenville ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Greenville', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});
    
test('Free trial breakdown city to kotamadya for jakarta barat and fithub grogol ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Grogol', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta barat and fithub kemanggisan ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Kemanggisan', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta barat and fithub meruya ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Meruya', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta barat and fithub puri indah ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Puri Indah', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta barat and fithub taman palem lestari ( tags: @free_trial @free_trial_west_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Barat', club:'FIT HUB Puri Indah', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta pusat and fithub benhil ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Pusat', club:'FIT HUB Benhil', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta pusat and fithub cempaka putih ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Pusat', club:'FIT HUB Cempaka Putih', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta pusat and fithub kemayoran ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Pusat', club:'FIT HUB Kemayoran', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta pusat and fithub salemba ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Pusat', club:'FIT HUB Salemba', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta pusat and fithub wisma bni 46 ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Pusat', club:'FIT HUB Wisma Bni 46', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub bintaro sektor 1 ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Bintaro Sektor 1', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub blok m ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Blok M', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub fatmawati ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Fatmawati', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub itc kuningan ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Itc Kuningan', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub itc permata hijau ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Itc Permata Hijau', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub mall metro kebayoran ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Mall Metro Kebayoran', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub mampang ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Mampang', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub pasar minggu ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Pasar Minggu', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub plaza oleos ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Plaza Oleos', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub arteri pondok indah ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Arteri Pondok Indah', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub menara duta ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Menara Duta', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta selatan and fithub tebet ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Selatan', club:'FIT HUB Tebet', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta timur and fithub tebet ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Timur', club:'FIT HUB Duren Sawit', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta timur and fithub jgc ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Timur', club:'FIT HUB Jgc', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta timur and fithub kalimalang ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Timur', club:'FIT HUB Kalimalang', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta timur and fithub rawamangun ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Timur', club:'FIT HUB Rawamangun', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta timur and fithub sedayu city ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Timur', club:'FIT HUB Sedayu City', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta timur and fithub tamini square ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Timur', club:'FIT HUB Tamini Square', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta utara and fithub tamini square ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Utara', club:'FIT HUB Elang Laut Pik', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta utara and fithub maspion plaza ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Utara', club:'FIT HUB Maspion Plaza', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta utara and fithub pluit ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Utara', club:'FIT HUB Pluit', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});

test('Free trial breakdown city to kotamadya for jakarta utara and fithub sunter altira ( tags: @free_trial @free_trial_central_jakarta )', async ({page})=>
    {
        const free_trial_data = {city:'Jakarta Utara', club:'FIT HUB Sunter Altira', title_name:'Tuan', fullname:randomizer.RandomName(), phone_number:randomizer.RandomNewPhoneNumber(), email:'testing@fithub.id', contact_time:'Pagi'}
    
        await webLandingPage.goToLandingPage();
        await webLandingPage.goToFreeTrialPage();
        await webFreeTrialPage.inputCity(free_trial_data.city);
        await webFreeTrialPage.inputClub(free_trial_data.club);
        await webFreeTrialPage.inputName(await free_trial_data.title_name, await free_trial_data.fullname);
        await webFreeTrialPage.inputPhoneNumber(await free_trial_data.phone_number);
        await webFreeTrialPage.inputConfirmationPhoneNumber(await free_trial_data.phone_number)
        await webFreeTrialPage.inputEmail(free_trial_data.email);
        await webFreeTrialPage.inputContactTime(free_trial_data.contact_time)
        await webFreeTrialPage.clickTnc();
        await webFreeTrialPage.clickRegisterButton();
        await webFreeTrialPage.validateFreeTrialSuccessRegistration( await free_trial_data.fullname, free_trial_data.club);
});
