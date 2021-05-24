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

  it(`contains a 2 link tag that references the stylesheets in resources/styles and Bootstrap 4`, function () {
    const styleElements = document.querySelectorAll(`head > link`);
    const styleSources = Array.from(styleElements)
      .filter((ele) => ele.rel === `stylesheet`)
      .map((ele) => ele.href);

    expect(styleElements.length).toBeGreaterThanOrEqual(2);
    expect(styleSources.map((src) => src.slice(-17))).toContain(
      `bootstrap.min.css`
    );
    expect(styleSources.map((src) => src.slice(-27))).toContain(
      `resources/styles/styles.css`
    );
  });

  // test(`welcome-screen has a 1px solid black border`, function() {
  //   const welcomeScreen = document.querySelector(`.container > #welcome-screen`);

  //   expect(welcomeScreen).toHaveStyle(`border: 1px solid black`);
  // });

  // test(`game-screen has a 1px solid red border`, function() {
  //   const gameScreen = document.querySelector(`.container > #game-screen`);

  //   expect(gameScreen).toHaveStyle(`border`,`1px solid red`);
  // });


  it(`Button Bootstrap Classes`, function () {
    const welcomeFormButton = document.querySelector(`#welcome-screen > form > button`);
    const gameFormButton = document.querySelector(`#game-screen > form > button`);

    expect(welcomeFormButton).toHaveClass(`btn`);
    expect(welcomeFormButton).toHaveClass(`btn-primary`);
    expect(gameFormButton).toHaveClass(`btn`);
    expect(gameFormButton).toHaveClass(`btn-success`);
  });

  it(`select dropdown bootstrap class`, function () {
    const gameFormSelect = document.querySelector(`#game-screen > form > div > select`);

    expect(gameFormSelect).toHaveClass(`custom-select`);
  });

  it(`divs immediately under the forms should have a class name of form-group `, function () {
    const welcomeFormDiv = document.querySelector(`#welcome-screen > form > div`);
    const gameFormDiv = document.querySelector(`#game-screen > form > div`);

    expect(welcomeFormDiv).toHaveClass(`form-group`);
    expect(gameFormDiv).toHaveClass(`form-group`);
  });

  it(`username input should have a class of form-control `, function () {
    const welcomeFormInput = document.querySelector(`#welcome-screen > form > div > input`);

    expect(welcomeFormInput).toHaveClass(`form-control`);
  });

  // it(`contains a script tag that references the script.js file in resources/scripts`, function () {
  //   const scriptElements = document.getElementsByTagName(`script`);
  //   const scriptSources = Array.from(scriptElements).map((ele) => ele.src);

  //   expect(scriptElements.length).toBeGreaterThanOrEqual(4);
  //   expect(scriptSources.map((src) => src.slice(-26))).toContain(
  //     `resources/scripts/index.js`
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
