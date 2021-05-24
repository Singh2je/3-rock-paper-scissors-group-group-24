
import { fireEvent, getByText, getByTestId, getByPlaceholderText, waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);

let dom;
let _document;
let container;

describe(`index.html`, () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: `dangerously`, resources:`usable` });
    _document = dom.window.document;
    container = _document.body;
  });

  it(`renders a heading element`, () => {
    expect(container.querySelector(`h1`)).not.toBeNull();
    expect(getByText(container, `Rock Paper Scissors`)).toBeInTheDocument();
  });

  test(`welcome-screen is visible, while game screen is not upon game start`, async function () {
    _document.addEventListener(`DOMContentLoaded`, () => {
      expect(container.querySelector(`#welcome-screen`)).toBeVisible();
      expect(container.querySelector(`#game-screen`)).not.toBeVisible();
    });
  });

  it(`renders an input field and a button element`, () => {
    expect(container.querySelector(`button`)).not.toBeNull();
    expect(getByText(container, /start game!/i)).toBeInTheDocument();
    expect(getByPlaceholderText(container, /enter name here/i)).not.toBeNull();
  });

  it(`renders the game screen via JavaScript when the button is clicked`, async () => {
    const startGameButton = getByText(container, /start game!/i);
    _document.addEventListener(`DOMContentLoaded`, () => {
      fireEvent.click(startGameButton);
      expect(container.querySelector(`#welcome-screen`)).not.toBeVisible();
      expect(container.querySelector(`#game-screen`)).toBeVisible();
    });

  });
  
});
