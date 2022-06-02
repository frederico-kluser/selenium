const xl = require('excel4node');
const data = require('../descriptions');

const wb = new xl.Workbook();

const style = wb.createStyle({
  font: {
    color: '#000000',
    bold: true,
  },
  fill: {
    type: 'pattern',
    bgColor: '#1fb6ff',
  },
});
const descriptions = {};
const sheets = {};

const newSheet = (ws, name, line, column, title) => {
  if (title) {
    ws.cell(line, column).string(name).style(style);
  } else {
    ws.cell(line, column).string(name);
  }
};

data.forEach(({
  // eslint-disable-next-line no-unused-vars
  url, expectedMetaDescription, receivedMetaDescription, metada, exist,
}) => {
  let country = '';

  if (url.indexOf('.ca/') !== -1) {
    country = 'Canadá';
  }
  if (url.indexOf('.uk/') !== -1) {
    country = 'United Kingdom';
  }
  if (url.indexOf('.de/') !== -1) {
    country = 'Deutschland';
  }

  if (descriptions[country] === undefined) {
    const ws = wb.addWorksheet(country);
    newSheet(ws, 'URL', 1, 1, true);
    newSheet(ws, 'Actual Description', 1, 2, true);
    newSheet(ws, 'Metadata', 1, 3, true);
    newSheet(ws, 'Need to create in contentful', 1, 4, true);
    descriptions[country] = ws;
    sheets[country] = [url];
  } else {
    sheets[country].push(url);
  }

  const line = sheets[country].length;
  // eslint-disable-next-line no-shadow
  const ws = descriptions[country];
  newSheet(ws, url, line + 1, 1);
  newSheet(ws, receivedMetaDescription, line + 1, 2);
  newSheet(ws, metada, line + 1, 3);
  newSheet(ws, exist ? 'No' : 'Yes', line + 1, 4);
});

wb.write('Metadata Description List.xlsx');
