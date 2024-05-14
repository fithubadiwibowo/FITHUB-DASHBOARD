const { expect } = require("@playwright/test");

class WebFreeTrialPage {

constructor(page) {
    this.page = page;
    this.env = process.env.ENV;
    this.city_dropdown_field = '//div[@class="Form_form-item__VaXug Form_mandatory__MifeP"]//select[@name="city"]';
    this.club_dropdown_field = '//div[@class="Form_form-item__VaXug Form_mandatory__MifeP"]//select[@name="club"]';
    this.title_name_dropdown_field = '//div[@class="Form_form-input-group__7y9Oi"]//select[@name="gender"]';
    this.fullname_field = '//div[@class="Form_form-input-group__7y9Oi"]//input[@placeholder="Nama lengkap"]';
    this.phone_number_country_code_dropdown_field = '(//div[@class="Form_form-input-group__7y9Oi"]//following::select[@name="dialCode"])[1]';
    this.phone_number_field = '//div[@class="Form_form-input-group__7y9Oi"]//input[@name="phone"]';
    this.confirm_phone_number_country_code_dropdown_field = '(//div[@class="Form_form-input-group__7y9Oi"]//following::select[@name="dialCode"])[2]';
    this.confirm_phone_number_field = '//div[@class="Form_form-input-group__7y9Oi"]//input[@name="confPhone"]';
    this.email_field = '//input[@name="email"]';
    this.contact_time_dropdown_field = '//select[@name="contactTime"]';
    this.tnc_checkbox = '//div[@class="Form_form-item__VaXug Form_mandatory__MifeP "]';
    this.register_button = '//button[@type="submit"]';
    // Success free trial register notification
    this.thanks_for_register = '//h3[@class="mb-6"]';
    this.first_description = '(//h6[@class="mb-6"])[1]';
    this.second_description = '(//h6[@class="mb-6"])[2]';
    this.third_description = '//h6[@class="mb-10"]';
    this.back_to_main_page_button = '//a[@role="button"]';
}

async inputCity(city) {
    await this.page.waitForSelector(this.city_dropdown_field);
    await this.page.locator(this.city_dropdown_field).selectOption({label:city}, {timeout:5000});
}

async inputClub(club) {
    await this.page.waitForSelector(this.club_dropdown_field);
    await this.page.locator(this.club_dropdown_field).selectOption({label:club}, {timeout:5000});
}

async inputName(title, fullname) {
    await this.page.waitForSelector(this.title_name_dropdown_field);
    await this.page.locator(this.title_name_dropdown_field).selectOption({label:title}, {timeout:5000});
    await this.page.fill(this.fullname_field, fullname);
}

async inputPhoneNumber(phoneNumber) {
    await this.page.waitForSelector(this.phone_number_country_code_dropdown_field);
    await this.page.fill(this.phone_number_field, phoneNumber);
}

async inputConfirmationPhoneNumber(confirmPhoneNumber) {
    await this.page.waitForSelector(this.confirm_phone_number_country_code_dropdown_field);
    await this.page.fill(this.confirm_phone_number_field, confirmPhoneNumber);
}

async inputEmail(email) {
    await this.page.fill(this.email_field, email);
}

async inputContactTime(contactTime) {
    await this.page.locator(this.contact_time_dropdown_field).selectOption({label:contactTime}, {timeout:5000});
}

async clickTnc() {
    await this.page.click(this.tnc_checkbox);
    await this.page.waitForTimeout(5000);
}

async clickRegisterButton() {
    await this.page.click(this.register_button);
}

async validateFreeTrialSuccessRegistration(fullname, club) {
    const thanks_for_registration = 'TERIMA KASIH, ' + fullname + '!'
    const first_description = 'Sitback and relax, tim kami akan segera menghubungi anda di waktu yang anda sarankan.'
    const second_description = 'Sampai berjumpa di ' + club.toUpperCase();
    const third_description = 'Mari terus fit bersama FIT HUB!';

    await expect(this.page.locator(this.thanks_for_register)).toHaveText(thanks_for_registration);
    await expect(this.page.locator(this.first_description)).toHaveText(first_description);
    await expect(this.page.locator(this.second_description)).toHaveText(second_description);
    await expect(this.page.locator(this.third_description)).toHaveText(third_description);
    await expect(this.page.locator(this.back_to_main_page_button)).toBeEnabled();
}

}
module.exports = {WebFreeTrialPage};
