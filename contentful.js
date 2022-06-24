const { Builder, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {
  driverSetter,
  selectElement,
  selectElementCSS,
  waitElement,
  waitElementCSS,
  waitUntilElementGoneCSS,
} = require('./src/helpers');

const accessories = [
  'oleh_test',
];
let index = 0;
const accessoriesKeywords = 'accessories, indoor cycling, technology, large screen, peloton, Peloton, ride peloton, john foley, indoor cycle, virtual fitness, virtual bike';

const formatMetadataId = (metadata) => {
  // eslint-disable-next-line no-unused-vars
  const title = 'Visit the Peloton showroom in ';
  const splited = metadata.split(/(?=[A-Z])/);
  splited.shift();
  splited.shift();

  return {
    // title: `Showroom ${splited.join(' ')}`,
    title: 'Shop Peloton accessories',
    // metadata: title + splited.join(' '),
    metadata: splited.join(' '),
  };
};

(async () => {
  const options = new chrome.Options();
  const driver = driverSetter(await new Builder().setChromeOptions(options).forBrowser('chrome').build());
  await driver.get('https://app.contentful.com/spaces/6jnflt57iyzx/entries');
  await waitElement('input', 'name', 'user[email]');

  let input = await selectElement('input', 'name', 'user[email]');
  await input.sendKeys('frederico.kluser@onepeloton.com');

  input = await selectElement('input', 'name', 'user[password]');
  await input.sendKeys('YDU*qaz2gdj-xzd@ckf');

  let button = await selectElement('input', 'name', 'commit');
  await button.click();

  const createMetadata = async () => {
    const id = accessories[index];

    await waitElement('button', 'data-test-id', 'create-entry-button');
    button = await selectElement('button', 'data-test-id', 'create-entry-button');
    await button.click();

    button = await selectElementCSS(
      'div[data-test-id="add-entry-menu"] > button:nth-child(50) + button[data-test-id="contentType"]',
    );
    await button.click();

    await waitElement('button', 'data-test-id', 'link-actions-menu-trigger');

    button = await selectElement('button', 'data-test-id', 'link-actions-menu-trigger');
    await button.click();

    button = await selectElement('button', 'data-test-id', 'linkEditor.linkExisting');
    await button.click();

    await waitElement('input', 'placeholder', 'Type to search for assets');
    await waitElement('div', 'role', 'listitem');
    input = await selectElement('input', 'placeholder', 'Type to search for assets');
    await input.sendKeys('Default ');
    await input.sendKeys('Metadata ');
    await input.sendKeys('Image');
    await input.sendKeys('', Key.ENTER);

    await waitElementCSS('img[src="//images.ctfassets.net/6jnflt57iyzx/63y0PSJLXlelcXyO0juIAN/0434c58157437a104669e73ec4017e63/Peloton_Meta_Image.png?w=150&h=150&fit=thumb"]');
    button = await selectElement('div', 'role', 'listitem');
    await button.click();

    await waitUntilElementGoneCSS('img[src="//images.ctfassets.net/6jnflt57iyzx/63y0PSJLXlelcXyO0juIAN/0434c58157437a104669e73ec4017e63/Peloton_Meta_Image.png?w=150&h=150&fit=thumb"]');

    const { title, metadata } = formatMetadataId(id);

    input = await selectElementCSS('div[data-field-api-name="key"] * > input');
    await input.sendKeys(id);
    input = await selectElementCSS('div[data-field-api-name="title"] * > input');
    await input.sendKeys(title);
    input = await selectElementCSS('div[data-field-api-name="description"] * > textarea');
    await input.sendKeys(metadata);
    input = await selectElementCSS('div[data-field-api-name="keywords"] * > input');
    await input.sendKeys(accessoriesKeywords);

    await waitUntilElementGoneCSS('button[data-test-id="change-state-published"][disabled]');
    button = await selectElement('button', 'data-test-id', 'change-state-published');
    await button.click();

    await waitElement('div', 'data-state', 'published');

    button = await selectElement('button', 'data-test-id', 'workbench-back-btn');
    await button.click();

    console.log('index :', index);
    // eslint-disable-next-line no-plusplus
    index++;

    if (index < accessories.length) {
      createMetadata();
    } else {
      console.log('FINISHED');
      driver.quit();
    }
  };
  createMetadata();
})();
