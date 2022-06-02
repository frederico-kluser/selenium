const fs = require('fs');

const { By } = require('selenium-webdriver');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const result = [];
let index = 0;
const urls = require('./descriptions');

const getMetaDescription = async () => {
  let receivedMetaDescription = '';
  const {
    url,
    expectedMetaDescription,
  } = urls[index];

  // eslint-disable-next-line no-async-promise-executor
  const seleniumPromise = () => new Promise(async (resolve) => {
    try {
      const options = new chrome.Options().headless();
      const driver = await new Builder()
        .setChromeOptions(options)
        .forBrowser('chrome')
        .build();
      await driver.get(url);

      setTimeout(async () => {
        try {
          const meta = await driver.findElement(By.css('meta[name="description"]'));
          receivedMetaDescription = await meta.getAttribute('content');
        } catch (error) {
          console.log(error);
        }

        await driver.quit();
        resolve(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  });

  await seleniumPromise();
  console.clear();
  result.push({
    url,
    expectedMetaDescription,
    receivedMetaDescription,
  });
  console.log(`${index + 1}/${urls.length}`);
  if (index + 1 < urls.length) {
    // eslint-disable-next-line no-plusplus
    index++;
    getMetaDescription();
  } else {
    console.clear();
  }

  fs.writeFile('RealDescriptions.json', JSON.stringify(result), err => {
    if (err) {
      console.error(err);
    }
    console.log('FINISHED');
  });
};

getMetaDescription();
