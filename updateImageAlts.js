/* eslint-disable no-unused-vars */
const { Builder, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {
  driverSetter,
  selectElement,
  selectElementCSS,
  waitElement,
  waitElementCSS,
  waitUntilElementGone,
  waitUntilElementGoneCSS,
} = require('./src/helpers');

(async () => {
  let input;
  let button;

  const options = new chrome.Options();
  const driver = driverSetter(await new Builder().setChromeOptions(options).forBrowser('chrome').build());
  await driver.get('https://app.contentful.com/spaces/6jnflt57iyzx/entries');
  await waitElement('input', 'name', 'user[email]');

  input = await selectElement('input', 'name', 'user[email]');
  await input.sendKeys('frederico.kluser@onepeloton.com');

  input = await selectElement('input', 'name', 'user[password]');
  await input.sendKeys('YDU*qaz2gdj-xzd@ckf');

  // eslint-disable-next-line prefer-const
  button = await selectElement('input', 'name', 'commit');
  await button.click();
})();
