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
  let element;
  let text;

  const imageAlt = [
    {
      name: 'An Image of the Peleton Indoor Exercise Bike with an HD touchscreen',
      link: 'Bike_Bellyband.png',
    },
  ];

  const IMAGE_NAME = imageAlt[0].link;
  const IMAGE_DECRIPTION = imageAlt[0].name;

  const options = new chrome.Options();
  const driver = driverSetter(await new Builder().setChromeOptions(options).forBrowser('chrome').build());
  await driver.get('https://app.contentful.com/spaces/6jnflt57iyzx/entries');

  element = await waitElement('input', 'name', 'user[email]');
  await element.sendKeys('frederico.kluser@onepeloton.com');

  element = await selectElement('input', 'name', 'user[password]');
  await element.sendKeys('YDU*qaz2gdj-xzd@ckf');

  // eslint-disable-next-line prefer-const
  element = await selectElement('input', 'name', 'commit');
  await element.click();

  await waitUntilElementGone('div', 'data-test-id', 'cf-ui-spinner');

  element = await selectElement('a', 'href', '/spaces/6jnflt57iyzx/assets');
  await element.click();

  element = await waitElement('input', 'placeholder', 'Type to search for assets');
  await element.click();
  await element.sendKeys(IMAGE_NAME);

  await waitUntilElementGone('tr', 'data-test-id', 'asset-row');

  element = await waitElement('tr', 'data-test-id', 'asset-row');
  element.click();

  element = await waitElement('button', 'aria-label', 'Show file information');
  element.click();

  element = await waitElementCSS('tr[data-test-id="cf-ui-table-row"] > td:last-child');
  // eslint-disable-next-line prefer-const
  text = await element.getText();

  if (IMAGE_NAME === text) {
    element = await selectElement('textarea', 'data-test-id', 'cf-ui-textarea');
    await element.sendKeys(IMAGE_DECRIPTION);
  }
})();
