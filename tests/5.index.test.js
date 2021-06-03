/**
 * @jest-environment jsdom
*/
/* eslint-env browser */

const fs = require(`fs`);
const path = require(`path`);
const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);
const indexPage = require(`../resources/scripts/index`);
jest.dontMock(`fs`);

describe(`index.js test`, function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

});