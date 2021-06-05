/**
 * @jest-environment jsdom
*/
/* eslint-env browser */
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
const fs = require(`fs`);
const path = require(`path`);

let dom;
let _document;
let container;
////Decide what you want to test?
//1) Try testing the updatescore tally function, give the username a value, and it should equal that username: 0 CPU:0

import { fireEvent, getByText, getByTestId, getByPlaceholderText, waitFor } from "@testing-library/dom";

const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);

describe(`Testing updateScoreTally `, function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    dom = new JSDOM(html, { runScripts: `dangerously`, resources:`usable` });
    _document = dom.window.document;
    container = _document.body;
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  // test(`divs immediately under the forms should have a class name of form-group `, function () {
  //   const welcomeFormDiv = document.querySelector(`#welcome-screen > form > div`);
  //   const gameFormDiv = document.querySelector(`#game-screen > form > div`);

  //   expect(welcomeFormDiv).toHaveClass(`form-group`);
  //   expect(gameFormDiv).toHaveClass(`form-group`);
  // });

  it(`Check to make sure UpdateScoreTally function starts the score at zero for both users`, async () => {
    const scoreParagraph = document.querySelector(`#score`);
    const startGameButton = getByText(container, /start game!/i);
    _document.addEventListener(`DOMContentLoaded`, () => {
      fireEvent.click(startGameButton);

      // We can try adding a user name and making sure it gives exactly what we enter as the user name.
      //The start button is basically clicked now, everything in the start button is happening, now we can test anything that should happen 
      //that is supposed to happen after the start game button is clicked.
      
      expect(scoreParagraph.innerHTML).toBe(`User: 0 v CPU: 0`);
    });

  });
});