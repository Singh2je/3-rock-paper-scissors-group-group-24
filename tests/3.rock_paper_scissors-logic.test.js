const rewire = require(`rewire`);
const RockPaperScissors = rewire(`../resources/scripts/rock_paper_scissors`).__get__(`RockPaperScissors`);
const mathRandomSpy = jest.spyOn(Math, `random`);

describe(`RockPaperScissors class`, function () {
  describe(`determineWinner()`, function() {
    test(`win cases`, function() {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);
      expect(game.determineWinner(`scissors`, `paper`)).toBe(`win`);
      expect(game.determineWinner(`paper`, `rock`)).toBe(`win`);
    });
  
    test(`tie cases`, function() {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `rock`)).toBe(`tie`);
      expect(game.determineWinner(`paper`, `paper`)).toBe(`tie`);
      expect(game.determineWinner(`scissors`, `scissors`)).toBe(`tie`);
    });
  
    test(`lost cases`, function() {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`scissors`, `rock`)).toBe(`lose`);
      expect(game.determineWinner(`paper`, `scissors`)).toBe(`lose`);
      expect(game.determineWinner(`rock`, `paper`)).toBe(`lose`);
    });
  });
  describe(`generateCPUResponse()`, function () {
    it(`works`, function() {
      mathRandomSpy.mockImplementation(() => 0.5);
      const game = new RockPaperScissors();
      const retvals = Array(50).fill(0).map(i => game.generateCPUResponse());
      const expected = [ `rock`, `paper`,`scissors` ];
      expect(retvals).toEqual(expect.arrayContaining(expected)); // TODO: use Mocks and Spies instead
    });
  });
});