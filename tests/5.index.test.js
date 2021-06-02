const updateScoreTallyUI = require(`../resources/scripts/index`).__get__(`updateScoreTallyUI`);
// const userName = require(`../resources/scripts/index`).__get__(`userName`);
const scoreParagraph = require(`../resources/scripts/index`).__get__(`scoreParagraph`);

describe(`reset button test`, function () {
  test(`reset game attributes`, function() {
    // userName = `test`;
    updateScoreTallyUI();
    expect(scoreParagraph).toBe(`test : 0 CPU: 0`);
  });
});