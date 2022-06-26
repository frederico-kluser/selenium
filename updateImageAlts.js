/* eslint-disable no-unused-vars */
const { Builder, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const {
  driverSetter,
  selectElement,
  selectElementCSS,
  waitElement,
  waitElementCSS,
  waitUntilElementGone,
  waitUntilElementGoneCSS,
} = require('./src/helpers');

const results = [];

(async () => {
  let element;
  let text;

  const imageAlt = [
    {
      description: 'An Image of the Peleton Indoor Exercise Bike with an HD touchscreen',
      link: 'Bike_Bellyband.png',
    },
    {
      description: 'The Peleton Tread with the instructor on the HD touchscreen',
      link: 'Prism_BellyBand.png',
    },
  ];

  let index = 0;

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

  const changeImageAlt = async () => {
    const { description, link } = imageAlt[index];

    await waitUntilElementGone('div', 'data-test-id', 'cf-ui-spinner');

    element = await selectElement('a', 'href', '/spaces/6jnflt57iyzx/assets');
    await element.click();

    element = await waitElement('input', 'placeholder', 'Type to search for assets');
    await element.click();
    await element.clear();
    await element.sendKeys(link);

    await waitUntilElementGone('tr', 'data-test-id', 'asset-row');

    element = await waitElement('tr', 'data-test-id', 'asset-row');
    element.click();

    element = await waitElement('button', 'aria-label', 'Show file information');
    element.click();

    element = await waitElementCSS('tr[data-test-id="cf-ui-table-row"] > td:last-child');
    // eslint-disable-next-line prefer-const
    text = await element.getText();

    results[index] = {
      description,
      link,
      url: await driver.getCurrentUrl(),
    };

    if (link === text) {
      element = await selectElement('textarea', 'data-test-id', 'cf-ui-textarea');
      await element.clear();
      await element.sendKeys(description);
      try {
        element = await waitElement('button', 'data-test-id', 'change-state-published', 5000);
        element.click();
      } catch (err) {
        results[index].error = true;
      }
    } else {
      results[index].error = true;
    }

    // eslint-disable-next-line no-plusplus
    index++;
    fs.writeFile('blackBox.json', JSON.stringify(results), async (err) => {
      if (err) throw err;
      console.clear();
      console.log('index :', index);
      console.log(`${index}/${imageAlt.length}`);

      if (index < imageAlt.length) {
        element = await selectElement('button', 'data-test-id', 'workbench-back-btn');
        element.click();
        changeImageAlt();
      }
    });
  };
  changeImageAlt();
})();
