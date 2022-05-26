const fs = require('fs');

const urls = [
  'https://www.onepeloton.ca/shop/bike',
  'https://www.onepeloton.ca/shop/bike/bike-basics-package-ca',
  'https://www.onepeloton.ca/shop/bike/bike-select-package-ca',
  'https://www.onepeloton.ca/shop/bike/bike-starter-package-ca',
  'https://www.onepeloton.ca/shop/bike/bike-ultimate-package-ca',
];

// eslint-disable-next-line quotes
const expectedMetaDescription = "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand.";
const country = 'CA';
const data = fs.readFileSync('results.json', { encoding: 'utf8', flag: 'r' });
const output = data ? JSON.parse(data) : [];

urls.forEach((url) => {
  output.push({
    url,
    expectedMetaDescription,
    receivedMetaDescription: '',
    country,
  });
});

fs.writeFileSync('results.json', JSON.stringify(output), (err) => {
  if (err) throw err;
  console.log('Saved!');
});
