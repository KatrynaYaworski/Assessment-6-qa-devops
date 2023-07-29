const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.SAFARI).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  
//Check that clicking the Draw button displays the div with id = “choices”
  test('clicking Draw button displays the div => #choices', async () => {
    await loadPage();
    await clickDrawBtn();
    const div = await driver.findElement(By.css("#choices"))
    const displayDiv = await div.isDisplayed();
    expect(displayDiv).toBe(true); 
  });

//Check that clicking an “Add to Duo” button displays the div with id = “player-duo”
  test('clicking Add to Duo button displays the div => #player-duo', async () => {
    await driver.get("http://localhost:8000");
    await loadPage();
    await clickDrawBtn();
    const AddToDuoBtn = await driver.findElement(By.css('.bot-btn'));
    await AddToDuoBtn.click();
    await driver.findElement(By.xpath("//button[contains(text(), 'Add to Duo')]")).click();
    let addDuo = await driver.findElement(By.id("player-duo"));
    let displayDuo = await addDuo.isDisplayed();
    expect(displayDuo).toBe(true);
  }) 

});

async function loadPage() {
  await driver.get("http://localhost:8000");
  await driver.wait(until.titleIs("Duel Duo"), 1000);
}

async function clickDrawBtn() {
  await driver.findElement(By.css('#draw')).click();
}

