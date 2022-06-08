/* eslint-disable no-plusplus */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const {
  By, until, Builder, Key,
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

const waitElementCSS = (CSS, timeout = 30000) => driver.wait(until.elementLocated(By.css(CSS)), timeout);
const waitElement = (tag, property, value, timeout = 30000) => driver.wait(until.elementLocated(By.css(`${tag}[${property}="${value}"]`)), timeout);
const selectElementCSS = (CSS) => driver.findElement(By.css(CSS));
const selectElement = (tag, property, value) => driver.findElement(By.css(`${tag}[${property}="${value}"]`));
const waitUntilElementGoneCSS = (CSS) => new Promise(async (resolve) => {
  let checkDisabled;
  // eslint-disable-next-line prefer-const
  checkDisabled = setInterval(async () => {
    driver.findElement(By.css(CSS)).then(() => {}).catch((err) => {
      clearInterval(checkDisabled);
      resolve(true);
    });
  }, 50);
});

const showrooms = [
  'pgShowroomAuBondijunction',
  'pgShowroomAuDavidjonesbourkestreet',
  'pgShowroomAuDavidjoneschadstone',
  'pgShowroomAuDavidjoneselizabethstreet',
  'pgShowroomAuMartinplace',
  'pgShowroomCaBcParkroyal',
  'pgShowroomCaCaGranvillewest4th',
  'pgShowroomCaCaVancouver',
  'pgShowroomCaOnEtobicoke2',
  'pgShowroomCaOnMississauga',
  'pgShowroomCaOnToronto2',
  'pgShowroomCaOnYorkdale2',
  'pgShowroomCanAbCalgary',
  'pgShowroomCanAbEdmonton',
  'pgShowroomCharlotteNcUs52',
  'pgShowroomDeBerlin',
  'pgShowroomDeCologne',
  'pgShowroomDeDusseldorf2',
  'pgShowroomDeEngelhornsportsmannheim',
  'pgShowroomDeFrankfurt',
  'pgShowroomDeHamburg',
  'pgShowroomDeIntersportingolstadt',
  'pgShowroomDeLeipzig',
  'pgShowroomDeLtsportosnabruck',
  'pgShowroomDeMunich',
  'pgShowroomDeNuremberg',
  'pgShowroomDeSportfoergfriedberg',
  'pgShowroomDeSportheinzelbiberach',
  'pgShowroomDeSportreischmannkempten',
  'pgShowroomDeSportscheckbraunschweig',
  'pgShowroomDeSportscheckbremen',
  'pgShowroomDeSportscheckkarlsruhe',
  'pgShowroomDeSportscheckkassel',
  'pgShowroomDeSportscheckmuenster',
  'pgShowroomDeStuttgart',
  'pgShowroomDeVaund',
  'pgShowroomDenver',
  'pgShowroomDetroit',
  'pgShowroomGbBluewater',
  'pgShowroomGbCanarywharf',
  'pgShowroomGbKingsroad',
  'pgShowroomGbLeeds',
  'pgShowroomGbMarylebonehighstreet',
  'pgShowroomGbOxford',
  'pgShowroomNatick',
  'pgShowroomRoosevelt',
  'pgShowroomSanta-monica',
  'pgShowroomSeattle',
  'pgShowroomSouthlakeTxUs57',
  'pgShowroomUkBath',
  'pgShowroomUkBirminghambullring',
  'pgShowroomUkEdinburgh',
  'pgShowroomUkGlasgow',
  'pgShowroomUkHarrods',
  'pgShowroomUkJohnlewisbrentcross',
  'pgShowroomUkJohnlewisbristol',
  'pgShowroomUkJohnlewischeadle',
  'pgShowroomUkJohnlewischeltenham',
  'pgShowroomUkJohnlewishighwycombe',
  'pgShowroomUkJohnlewishorsham',
  'pgShowroomUkJohnlewiskingston',
  'pgShowroomUkJohnlewisliverpool',
  'pgShowroomUkJohnlewismiltonkeynes',
  'pgShowroomUkJohnlewisnewcastle',
  'pgShowroomUkJohnlewisnottingham',
  'pgShowroomUkJohnlewisoxfordst',
  'pgShowroomUkJohnlewissouthampton',
  'pgShowroomUkJohnlewistrafford',
  'pgShowroomUkJohnlewiswelwyn',
  'pgShowroomUkSpitalfieldshorner',
  'pgShowroomUsAlBirmingham',
  'pgShowroomUsAzScottsdale',
  'pgShowroomUsAzScottsdale2',
  'pgShowroomUsCaCanogapark2',
  'pgShowroomUsCaCenturycity',
  'pgShowroomUsCaCortemadera',
  'pgShowroomUsCaLongbeach',
  'pgShowroomUsCaNewportbeach',
  'pgShowroomUsCaPaloalto',
  'pgShowroomUsCaPasadena',
  'pgShowroomUsCaRoseville2',
  'pgShowroomUsCaSandiego',
  'pgShowroomUsCaSantaclara',
  'pgShowroomUsCaThousandoaks',
  'pgShowroomUsCaWalnutcreek',
  'pgShowroomUsCoLonetree2',
  'pgShowroomUsCtWesthartford',
  'pgShowroomUsCtWestport',
  'pgShowroomUsDeNewark',
  'pgShowroomUsFlAventura',
  'pgShowroomUsFlBocaraton',
  'pgShowroomUsFlCoralgables',
  'pgShowroomUsFlJacksonville',
  'pgShowroomUsFlNaples',
  'pgShowroomUsFlPalmbeachgardens',
  'pgShowroomUsFlTampa',
  'pgShowroomUsGaAlpharetta',
  'pgShowroomUsGaAtlanta',
  'pgShowroomUsIaDesmoines',
  'pgShowroomUsIlChicago',
  'pgShowroomUsIlOakbrook',
  'pgShowroomUsIlSkokie',
  'pgShowroomUsInIndianapolis',
  'pgShowroomUsKsLeawood',
  'pgShowroomUsKyLouisville',
  'pgShowroomUsMaBoston',
  'pgShowroomUsMaChestnuthill',
  'pgShowroomUsMaDedham',
  'pgShowroomUsMallofamerica2',
  'pgShowroomUsMdAnnapolis',
  'pgShowroomUsMdBethesda',
  'pgShowroomUsMdColumbia',
  'pgShowroomUsMnEdina',
  'pgShowroomUsMoStlouis',
  'pgShowroomUsNcDurham2',
  'pgShowroomUsNcRaleigh',
  'pgShowroomUsNjCherryhill',
  'pgShowroomUsNjParamus',
  'pgShowroomUsNjShorthills',
  'pgShowroomUsNjShrewsbury',
  'pgShowroomUsNyBrookfieldplace',
  'pgShowroomUsNyHudsonyards2',
  'pgShowroomUsNyMadisonavenue',
  'pgShowroomUsNyManhasset',
  'pgShowroomUsNyPsnyretail',
  'pgShowroomUsNyWhiteplains',
  'pgShowroomUsOhCincinnati',
  'pgShowroomUsOhColumbus',
  'pgShowroomUsOhOrangevillage',
  'pgShowroomUsOrPortland2',
  'pgShowroomUsPaKingofprussia',
  'pgShowroomUsPaPittsburgh',
  'pgShowroomUsScMountpleasant',
  'pgShowroomUsTnNashville',
  'pgShowroomUsTxAustin',
  'pgShowroomUsTxDallas',
  'pgShowroomUsTxHighlandvillage',
  'pgShowroomUsTxHouston',
  'pgShowroomUsTxMarketstreet',
  'pgShowroomUsTxPlano',
  'pgShowroomUsUtMurray',
  'pgShowroomUsVaRichmond',
  'pgShowroomUsVaTysonscorner',
  'pgShowroomUsWaSeattle',
  'pgShowroomUsWiMadison',
  'pgShowroomUsWiWauwatosa',
];
let index = 0;
const showroomKeywords = 'indoor cycling, technology, large screen, peloton, Peloton, ride peloton, john foley, indoor cycle, virtual fitness, virtual bike';

const formatMetadataId = (metadata) => {
  const title = 'Visit the Peloton showroom in ';
  const splited = metadata.split(/(?=[A-Z])/);
  splited.shift();
  splited.shift();

  return {
    title: `Showroom ${splited.join(' ')}`,
    metadata: title + splited.join(' '),
  };
};

(async () => {
  const options = new chrome.Options();
  driver = await new Builder().setChromeOptions(options).forBrowser('chrome').build();
  await driver.get('https://app.contentful.com/spaces/6jnflt57iyzx/entries');
  await waitElement('input', 'name', 'user[email]');

  let input = await selectElement('input', 'name', 'user[email]');
  await input.sendKeys('frederico.kluser@onepeloton.com');

  input = await selectElement('input', 'name', 'user[password]');
  await input.sendKeys('YDU*qaz2gdj-xzd@ckf');

  let button = await selectElement('input', 'name', 'commit');
  await button.click();

  const createMetadata = async () => {
    const id = showrooms[index];

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
    await input.sendKeys(showroomKeywords);

    await waitUntilElementGoneCSS('button[data-test-id="change-state-published"][disabled]');
    button = await selectElement('button', 'data-test-id', 'change-state-published');
    await button.click();

    await waitElement('div', 'data-state', 'published');

    button = await selectElement('button', 'data-test-id', 'workbench-back-btn');
    await button.click();

    console.log('index :', index);
    index++;

    if (index < showrooms.length) {
      createMetadata();
    } else {
      console.log('FINISHED');
      driver.quit();
    }
  };
  createMetadata();
})();
