module.exports = {
  setupFilesAfterEnv: [ `regenerator-runtime/runtime`, `@testing-library/jest-dom/extend-expect` ],
  clearMocks: true, 
  testEnvironment: `node`,
  watchPathIgnorePatterns: [
    `node_modules`
  ],
  testPathIgnorePatterns:[
    `node_modules`
  ],
  transform: {
    "^.+\\.[t|j]sx?$": `babel-jest`
  }
};