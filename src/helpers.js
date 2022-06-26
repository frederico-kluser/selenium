/* eslint-disable no-async-promise-executor */
const { By, until } = require('selenium-webdriver');

let driver;

const driverGetter = () => driver;

const driverSetter = (value) => {
  driver = value;
  return driver;
};

// eslint-disable-next-line max-len
const waitElementCSS = (CSS, timeout = 30000) => driver.wait(until.elementLocated(By.css(CSS)), timeout);

const waitElement = (tag, property, value, timeout = 30000) => driver.wait(until.elementLocated(By.css(`${tag}[${property}="${value}"]`)), timeout);

const selectElementCSS = (CSS) => driver.findElement(By.css(CSS));

const selectElement = (tag, property, value) => driver.findElement(By.css(`${tag}[${property}="${value}"]`));

const waitUntilElementGone = (tag, property, value) => new Promise(async (resolve) => {
  let checkDisabled;
  // eslint-disable-next-line prefer-const
  checkDisabled = setInterval(async () => {
    driver.findElement(By.css(`${tag}[${property}="${value}"]`)).then(() => {}).catch(() => {
      clearInterval(checkDisabled);
      resolve(true);
    });
  }, 50);
});

const waitUntilElementGoneCSS = (CSS) => new Promise(async (resolve) => {
  let checkDisabled;
  // eslint-disable-next-line prefer-const
  checkDisabled = setInterval(async () => {
    driver.findElement(By.css(CSS)).then(() => {}).catch(() => {
      clearInterval(checkDisabled);
      resolve(true);
    });
  }, 50);
});

module.exports = {
  driverGetter,
  driverSetter,
  selectElement,
  selectElementCSS,
  waitElement,
  waitElementCSS,
  waitUntilElementGone,
  waitUntilElementGoneCSS,
};
