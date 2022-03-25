

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckListPage extends Page {
    /**
     * define selectors using getter methods
     */
  
    

// browser.saveScreenshot(`./allure-results/scrsh_${millis}.png`);

// Main page selectors 

get agreeCookieBtn(){
    return $('//button[@id="truste-consent-button"]')
}

get todayMenuButton (){
       return $('//a/span[text()="Today"]');
}
get locationName(){
        return $('//h1');
    }


//
get hourlyMenuButton (){
        return $('//a/span[text()="Hourly"]')
        }
 
get hourlyHeader(){
        return $('//strong');
    }
//
get tenDayMenuButton (){
        return $('//a/span[text()="10 Day"]')
        }

get weekeendMenuButton (){
         return $('//a/span[text()="Weekend"]')
         }

get monthlyMenuButton (){
        return $('//a/span[text()="Monthly"]')
        }

get radarMenuButton (){
        return $('//a/span[text()="Radar"]')
        }
 
// Actions section
//=====================================================================================================//

// Broswer open
async open() {
    await super.open('/');
}
// wait and click function
async clickNwait(elem){
   // await browser.pause(500);
    await elem.waitForDisplayed(5000);
    await elem.click();
    await browser.pause(1000);
}

// Button clicking

async clickTodayBtn(){
    await this.clickNwait(this.todayMenuButton);
}
async clickAgeeCookieBtn(){
    await this.clickNwait(this.agreeCookieBtn);
}
async clickHrlyMnBtn(){
    await this.clickNwait(this.hourlyMenuButton);
}   
//      

   
}

module.exports = new CheckListPage();
