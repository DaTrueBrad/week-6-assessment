import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

describe("Placing X's in various spots", () => {
    test('I can place a square top left', async () => {
        await (await driver).findElement(By.id('cell-0')).click()
        expect(await (await driver).findElement(By.id('cell-0')).getText()).toBe('X')
    });
    test('I can place a square top right', async () => {
        await (await driver).findElement(By.id('cell-2')).click()
        expect(await (await driver).findElement(By.id('cell-2')).getText()).toBe('X')
    });
    test('I can place a square top left', async () => {
        await (await driver).findElement(By.id('cell-6')).click()
        expect(await (await driver).findElement(By.id('cell-6')).getText()).toBe('X')
    });
})

test('Check to see if an O was placed', async () => {
    let square = await (await driver).findElement(By.id('cell-1')).getText()
    expect(square).toBe('O')
})