const ChecklistPage = require('../pageobjects/checklist.page');
const millis = Date.now();
let scrShPath = './allure-results/scrsh_'+ millis + '.png';
// it('should login with valid credentials', async () => { });


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await ChecklistPage.open();
        await ChecklistPage.clickAgeeCookieBtn();
        await ChecklistPage.clickTodayBtn();
        await ChecklistPage.locationName.waitForDisplayed(5000);
        await ChecklistPage.clickHrlyMnBtn();
        await ChecklistPage.hourlyHeader.waitForDisplayed(5000);
    });

});

