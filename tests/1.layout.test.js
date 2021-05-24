/**
 * @jest-environment jsdom
*/
/* eslint-env browser */

const fs = require(`fs`);
const path = require(`path`);

const bootstrapClasses = require(`./bootstrapclasses`);

const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);

jest.dontMock(`fs`);

describe(`html content`, function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  test(`page title is the same as the first h1 tag`, function () {
    const documentTitle = document.title;
    const h1Title = document.querySelector(`h1`);

    expect(documentTitle).toContain(`Rock Paper Scissors`);
    expect(h1Title).toHaveTextContent(/rock paper scissors/i);
  });

  test(`container div contains a h1, and 2 divs with ids welcome-screen and game-screen`, function() {
    const h1tag = document.querySelector(`.container > h1`);
    const welcomeScreen = document.querySelector(`.container > #welcome-screen`);
    const gameScreen = document.querySelector(`.container > #game-screen`);

    expect(h1tag).toBeTruthy();
    expect(welcomeScreen).toBeTruthy();
    expect(gameScreen).toBeTruthy();
  });

  test(`#welcome-screen contains a form with specific fields`, function() {
    const form = document.querySelector(`#welcome-screen > form`);
    const formInnerDiv = form.querySelector(`div`);
    const formLabel = formInnerDiv.querySelector(`label`);
    const formInput = formInnerDiv.querySelector(`input`);
    const formButton = form.querySelector(`button`);

    expect(form).toBeTruthy();
    expect(formInnerDiv).toBeTruthy();
    expect(formLabel).toBeTruthy();
    expect(formInput).toBeTruthy();
    expect(formButton).toBeTruthy();
  });

  test(`#welcome-screen form id is (name-form)`, function() {
    const form = document.querySelector(`#welcome-screen > form`);

    expect(form).toHaveAttribute(`id`, `name-form`);
  });

  test(`#welcome-screen form label's text is (Your Name) and has for attribute of (username)`, function() {
    const formLabel = document.querySelector(`#welcome-screen > form > div > label`);

    expect(formLabel).toHaveAttribute(`for`, `username`);
    expect(formLabel).toHaveTextContent(/your name/i);
  });

  test(`#welcome-screen form input's placeholder is (Enter your name ...), id and name attributes are (username)`, function() {
    const formInput = document.querySelector(`#welcome-screen > form > div > input`);

    expect(formInput).toHaveAttribute(`id`, `username`);
    expect(formInput).toHaveAttribute(`name`, `username`);
    expect(formInput).toHaveAttribute(`placeholder`, `Enter Name Here...`);
  });

  test(`#welcome-screen form button's text is (Start Game!) and id is(start-game-button)`, function() {
    const formButton = document.querySelector(`#welcome-screen > form > button`);

    expect(formButton).toHaveTextContent(/start game(.)+/i);
    expect(formButton).toHaveAttribute(`id`, `start-game-button`);
  });


  test(`#game-screen structure`, function() {
    const gameScreenScoreTallyDiv = document.querySelector(`#game-screen > div`);
    const gameScreenScoreTallyP = gameScreenScoreTallyDiv.querySelector(`p`);
    const form = document.querySelector(`#game-screen > form`);
    const formInnerDiv = form.querySelector(`div`);
    const formLabel = formInnerDiv.querySelector(`label`);
    const formSelect = formInnerDiv.querySelector(`select`);
    const formButton = form.querySelector(`button`);
    const gameHistoryParagraph = document.querySelector(`#game-screen > p`);

    expect(gameScreenScoreTallyDiv).toBeTruthy();
    expect(gameScreenScoreTallyP).toBeTruthy();
    expect(form).toBeTruthy();
    expect(formInnerDiv).toBeTruthy();
    expect(formLabel).toBeTruthy();
    expect(formSelect).toBeTruthy();
    expect(formButton).toBeTruthy();
    expect(gameHistoryParagraph).toBeTruthy();
  });

  test(`#game-screen: Score Tally div`, function () {
    const gameScreenScoreTallyDiv = document.querySelector(`#game-screen > div`);
    const gameScreenScoreTallyP = gameScreenScoreTallyDiv.querySelector(`p`);

    expect(gameScreenScoreTallyDiv).toHaveAttribute(`id`, `score-tally`);
    expect(gameScreenScoreTallyP).toHaveAttribute(`id`, `score`);
    expect(gameScreenScoreTallyP).toHaveTextContent(/user: 0 v cpu: 0/i);
  });

  test(`#game-screen form id is (game-form)`, function() {
    const form = document.querySelector(`#game-screen > form`);

    expect(form).toHaveAttribute(`id`, `game-form`);
  });

  test(`#game-screen form label's text is (Your Name) and has for attribute of (username)`, function() {
    const formLabel = document.querySelector(`#game-screen > form > div > label`);

    expect(formLabel).toHaveTextContent(/Select your choice/i);
    expect(formLabel).toHaveAttribute(`for`, `user-selection`);
  });

  test(`#game-screen form select's id and name attributes are (user-selection) and has 3 options`, function() {
    const formSelect = document.querySelector(`#game-screen > form > div > select`);
    const formSelectOptions = formSelect.querySelectorAll(`option`);
    const formOptions = Array.from(formSelectOptions).map(option => option.textContent);
    const expectedOptions = [ `Rock`, `Paper`, `Scissors` ];

    expect(formSelect).toHaveAttribute(`id`, `user-selection`);
    expect(formSelect).toHaveAttribute(`name`, `user-selection`);
    expect(formSelectOptions).toHaveLength(3);
    expect(formOptions).toEqual(expect.arrayContaining(expectedOptions));

  });

  test(`#game-screen form button's text is (Go!) and id is(go-button)`, function() {
    const formButton = document.querySelector(`#game-screen > form > button`);

    expect(formButton).toHaveTextContent(/go(.)+/i);
    expect(formButton).toHaveAttribute(`id`, `go-button`);
  });

  test(`#game-screen game history patagraph's ID is (game-history)`, function() {
    const gameHistoryParagraph = document.querySelector(`#game-screen > p`);

    expect(gameHistoryParagraph).toHaveAttribute(`id`, `game-history`);
  });


  // it(`body's first element is <div> element with the class of container`, function () {
  //   const bodyFirstElement = document.body.firstElementChild;
  //   expect(bodyFirstElement.classList).toContain(`container`);
  //   expect(bodyFirstElement.tagName).toContain(`DIV`);
  // });

  // it(`contains a script tag that references the script.js file in resources/scripts`, function () {
  //   const scriptElements = document.getElementsByTagName(`script`);
  //   const scriptSources = Array.from(scriptElements).map((ele) => ele.src);

  //   expect(scriptElements.length).toBeGreaterThanOrEqual(4);
  //   expect(scriptSources.map((src) => src.slice(-26))).toContain(
  //     `resources/scripts/index.js`
  //   );
  // });

  // it(`contains a link tag that references the stylesheets in resources/styles`, function () {
  //   const styleElements = document.getElementsByTagName(`link`);
  //   const styleSources = Array.from(styleElements)
  //     .filter((ele) => ele.rel === `stylesheet`)
  //     .map((ele) => ele.href);

  //   expect(styleElements.length).toBeGreaterThanOrEqual(2);
  //   expect(styleSources.map((src) => src.slice(-27))).toContain(
  //     `resources/styles/styles.css`
  //   );
  // });

  // it(`The container <div> contains 5 <div>s with the class name of (section)`, function () {
  //   const elements = document.querySelectorAll(`div.container div.section`);
  //   const sectionElements = Array.from(elements).filter(
  //     (ele) => ele.tagName === `DIV`
  //   );

  //   expect(sectionElements.length).toBeGreaterThanOrEqual(4);
  // });

  // it(`contains 1 image of sections`, function () {
  //   const elements = document.getElementsByTagName(`img`);

  //   expect(elements.length).toBeGreaterThanOrEqual(1);
  // });

  // it(`programming languages section includes a numbered list`, function () {
  //   const programmingLanguagesSection = document.querySelector(
  //     `#programmingLanguages ol`
  //   );
  //   const tagName = programmingLanguagesSection.tagName;

  //   expect(tagName).toBe(`OL`);
  // });

  // it(`achievements section includes an unnumbered list`, function () {
  //   const achievementsSection = document.querySelector(`#achievements ul`);

  //   const tagName = achievementsSection.tagName;

  //   expect(tagName).toBe(`UL`);
  // });

  // it(`uses Bootstrap`, function () {
  //   const allclasses = [].concat(
  //     ...[ ...document.querySelectorAll(`*`) ].map((elt) => [ ...elt.classList ])
  //   );

  //   const found = allclasses.some((r) => bootstrapClasses.includes(r));

  //   expect(found).toBeTruthy();
  // });


});
